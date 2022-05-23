import React from 'react'

const NotFound = () => {

    const Styles = {
        "height": "69.2vh",
        "display":"flex",
        "justifyContent": "center",
        "alignItems":"center",
        "fontWeight":"bold",
        "fontSize": "1rem",
        "color":"red"
    }

    return (
        <div style={Styles}>
            404<span style={{"color":"black"}}>&#160;|&#160;</span> Page Not Found
        </div>
    )
}

export default NotFound