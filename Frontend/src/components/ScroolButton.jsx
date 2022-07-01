import React, { useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const Styles = {
        "width": "2rem",
        "height": "2rem",
        "right": "1%",
        "position": "absolute",
        "zIndex":"99999"
    }
    const StylesDiv = {
        "display": `${isShow? 'inline' : 'none'}`,
        "width": "6rem",
        "height": "1.5rem",
        "fontSize": "13px",
        "right": "1%",
        "position": "absolute",
        "backgroundColor": "rgb(246, 241, 241)",
        "border":"1px solid gray",
        "color": "black",
        "marginTop": "-2rem",
        "textAlign": "center",
        "padding": ".2rem",
        "borderRadius": "5px"
    }



    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div style={Styles} placeholder={"Scroll to Top"} onMouseOver={()=>{setIsShow(true)}} onMouseLeave={()=>{setIsShow(false)}}>
                <BsFillArrowUpCircleFill onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none', width: "100%", height: "80%", color: "orange" }} size={30}/>
            </div>
            <div style={StylesDiv}>Scroll to Top</div>
        </>
    );
}

export default ScrollButton;
