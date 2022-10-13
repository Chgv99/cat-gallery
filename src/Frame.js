import React from "react";
//import ;
//import Carousel from "bootstrap/js/dist/carousel";
import montse from "./assets/images/monster.png";

const Frame = () => {
    let url = 'https://api.thecatapi.com/v1/images/search?size=full';
    let image = document.getElementById("cat-img");
    function fetchImg() {
        
        console.log("ajax_get for " + url);
        fetch(url, {
            //method: 'GET',
            //mode: 'cors'
        })
        .then(response => /*callback(response)*/{
            return response.json();
        }).then(result => {
            //console.log(result[0].url);
            //return result[0].url;
            image.src = result[0].url;
        })
        .catch(function(error){
            console.log("Error fetching (Frame)")
            console.log(error);
        });
    }
    //
    if (!image) return <p>Loading...</p>
    return (
        <>
            <img id="cat-img" alt="cat" src=""/>
            {image = document.getElementById("cat-img")}
            {fetchImg()}
        </>
    );
    
};

export default Frame;