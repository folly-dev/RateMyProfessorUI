import React, {useState, useEffect} from 'react'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection.js/index.js'
import { homeObjOne } from '../Components/InfoSection.js/Data'
import Navbar from '../Components/Navbar'
import Profs from '../Components/ProfOfTheMonth'
import ReviewCard from '../Components/ReviewCard'
import Sidebar from '../Components/SideBar'
import Search from '../Components/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { ProfessorsListAction } from '../Actions/Professors';
const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [openDrawer, setOpenDrawer] = useState(false);
    const Drawer = () => {
        setOpenDrawer(!openDrawer)
    }
    const listProfessors = useSelector((state) => state.Profs);
    const { loading, error, professors } = listProfessors;
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(ProfessorsListAction())
    }, [Dispatch])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {/* <Dropdown openDrawer = {openDrawer} Drawer = {Drawer} /> */}
            <Navbar props={props} toggle={toggle} Drawer={Drawer} />
            <HeroSection />
            <Search {...props} />
            <Profs />
            <ReviewCard {...props} loading={loading} error={error} professors={professors}/>
            <InfoSection  {...homeObjOne} {...props} opening={ props.open}/>
        </>
    )
}

export default Home;
