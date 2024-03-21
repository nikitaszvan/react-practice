import React from 'react';
import MainLanding from '../../components/main-landing/main-landing.component.jsx';
import MenuSection from '../../components/menu-section-hom/menu-section-home.component.jsx';
import Visuals from '../../components/visuals/visuals.component.jsx';

const Home = () => {
    return (
        <>
            <MainLanding />
            <Visuals />
            <MenuSection />
        </>
    )
}

export default Home;