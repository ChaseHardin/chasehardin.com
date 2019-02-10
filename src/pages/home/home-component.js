import React from 'react';
import './home-component.css'
import WorkingOnComputer from '../../resources/images/working_on_computer.jpg';

const image = {
    width: "100%",
    height: "800px",
    backgroundSize: "cover",
    backgroundImage: "url(" + WorkingOnComputer + ")",
    backgroundRepeat: "no-repeat"
}

export default function Home() {
    return (
        <div className='home'>
            {/* <h1>Home</h1> */}
            <section style={image}></section>
        </div>
    );
}