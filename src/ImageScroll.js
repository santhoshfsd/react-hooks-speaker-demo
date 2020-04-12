import React, { useRef,useEffect, useState} from "react";

const ImageScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);
    useEffect(()=>{
        console.log("handler start")
    setInView(   isInView());
       window.addEventListener("scroll",scrollHanlder)
       return(()=>{
        console.log("handler stop")
        window.removeEventListener("scroll",scrollHanlder)
       }) 
    })

    const [inView, setInView] = useState(false)

    const isInView = () =>{
        if(imageRef.current){
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >=0 && rect.botton <= window.innerHeight
        }
        return false;
    }

    const scrollHanlder = () =>{
    setInView(()=>{
        return isInView()
    })
    }

    return (
            <img  src = {isInView ? secondaryImg: primaryImg}  height="300" width="300"
            ref={imageRef}/>
    )
}

export default ImageScroll;