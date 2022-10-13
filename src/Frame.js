import React, { useState, useEffect } from "react";
//import ;
//import Carousel from "bootstrap/js/dist/carousel";
import montse from "./assets/images/monster.png";
//import FetchImg from "./Backend/FetchImg";
//import fetchImg from "./Backend/FetchImg";

const Frame = () => {
    
    console.log("Frame");
    
    let url = 'https://api.thecatapi.com/v1/images/search?size=full';
    let images = [];
    let count = 0;
    const [image, setImage] = useState("i");
    const fetchImg = () => {
        
        console.log("ajax_get for " + url);
        return fetch(url, {
            
        })
        .then(response => response.json())
        .then(url => setImage(url[0].url));
        return;
    }
    console.log("fetching image: ")
    //const img = fetchImg();
    //console.log(img)
    console.log("fetched image: ")
    console.log(image)
    /*if (!image) {
        
        return (
            <>
                <p>e</p>
            </>
        );
    }*/
    //console.log(fetchImg().then(response => response.json()).then(url => url[0].url))
    console.log("count: " + count)
    if (count < 1) {
        count++
        //fetchImg();
    }
    useEffect(()=>{
        // do stuff here...
        fetchImg();
    }, [])
    return (
        <>
            {/*<button onClick={fetchImg}>Get cat</button>*/}
            <div className="cat-image rounded-4 border border-2 border-secondary">
                <img alt="cat" className=" " src={image}/>
            </div>
        </>
    );
};

export default Frame;