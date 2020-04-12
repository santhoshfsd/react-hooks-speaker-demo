import React, { useRef } from "react";

const ImageTogglelOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return (
            <img onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}  onMouseOut = {() => {
                imageRef.current.src = primaryImg; }}
            src = {primaryImg}
            ref = {imageRef}
/>
    )
}

export default ImageTogglelOnMouseOver;