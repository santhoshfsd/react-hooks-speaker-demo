import React from "react";
import ImageScroll from "../src/ImageScroll";

const ImageChangeOnScroll = () => {
    return (
     <div>
         {
              [187,823,1124,1269,1530,1725,5996,6548,8367].map(id => {
            return(
            <div key = {id}>
                <ImageScroll
                            primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                            secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
                            alt=""
                        />

            </div>);
              })
            }        
     </div>  
    )
};

export default ImageChangeOnScroll;
