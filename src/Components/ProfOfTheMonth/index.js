import React, { useState} from 'react'
import { image, Title, Label } from "../ProfOfTheMonth/profImages"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./profsection.css"

const Profs = () => {
    const [current, setCurrent] = useState(0);
    const length = image.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setCurrent(current === 0  ? length -1 : current - 1)
    }
     
 
    return (
        <>
            <Label className = "section-name">
            <Title className = "label">Features</Title>
            </Label>
        <section className="slider">
            
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowAltCircleRight className="Right-arrow" onClick={nextSlide} />
            {
                image.map((slide, index) => {
                    return (
                        
                        <div className={index === current ? "slide active" : "slide"} keys={index}>
                            {index === current && (<img src={slide.image} alt="prof images" className="image" />)}
                            {slide.name && <div className="text">
                                <h2><i></i>{slide.name}</h2>
                                <h3>{slide.profession}</h3>
                                <p> <ImQuotesLeft className="QuoteLeft" /><i>{slide.comment}</i><ImQuotesRight className="QuoteRight" /></p>
                            </div>}
                            
                        </div>
                    )
                })
                }
                
            </section>
            </>
    )
}

export default Profs
