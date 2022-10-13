import React from "react";
//import ;
//import Carousel from "bootstrap/js/dist/carousel";
import montse from "./assets/images/monster.png";
//import ajax_get from "./Backend/Fetch";

//https://api.thecatapi.com/v1/images/search?size=full
//https://thecatapi.com/v1/images?api_key=live_hveqJJk0xusnri3wFu6oSTJ2kwKzcKZHgkbHvRq5BJoY7kN3xpY99gm6KPxWELar

function ajax_get(url, callback) {
    console.log("ajax_get for " + url);
    
}

const Frame = () => {
    let image = document.getElementById("cat-img");

    console.log("before await");
    /*ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        console.log("callback funct");
        console.log(data);
        //return new Promise(data);
    }).then(val => console.log(val))*/

    fetch('https://api.thecatapi.com/v1/images/search?size=full', {
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
    });
    
    return (
        <img id="cat-img" alt="cat" src=""/>
    );
    
};

export default Frame;