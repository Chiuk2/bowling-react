import React, { useState } from 'react';
import '../App.css';

export default function ScrollToTop() {

    const [visible, setVisible] = useState(false)

    const btnVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', btnVisible);

    return <button id="toTopBtn" 
    onClick={scrollToTop}
    style={{display: visible ? 'inline' : 'none'}}>Top</button>;
}
