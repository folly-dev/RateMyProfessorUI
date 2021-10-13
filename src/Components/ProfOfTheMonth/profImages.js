import styled from "styled-components";

export const image = [
    {
        image: "https://www.studyinternational.com/wp-content/uploads/2019/01/Prof.jpg",
        name: "Prof John Doe",
        profession: "Sofware Engineering Instructor at SCSU",
        comment : "I always give my best to my students and will continue to do so... Go HUSKIES!!!"

    },
    {
        image : "https://www.elon.edu/u/news/wp-content/uploads/sites/74/2021/09/Rankings-Twitter-Enet-1200x675_-950x534.jpg"
    },
    {
        image: "https://news.fsu.edu/wp-content/uploads/2021/08/FallExpectations-900x600-3b.jpg"
    }
]

export const Label = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  font-size: 20px;
  position: absolute;
  color: rgb(12, 11, 11);
`
export const Title = styled.h2`
margin-left: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  white-space: normal;
  line-height: 5px;
  flex-basis: 100%;
  align-items: center;
  z-index: 1;
  margin-top: 27px;
`