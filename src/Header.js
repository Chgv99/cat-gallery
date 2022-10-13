import React from "react";

const Header = () => {
    //console.log("Header")
    return ( 
        <>
            <header className= "" >
                <div className="header-image d-block p-9 text-primary">
                    {/*<h1 className="text-center">Cat Gallery</h1>
                    <p className = "text-center" >
                            paragraph test
                    </p> */}
                </div>
                <div id="header-content">
                    <h1 className="text-center">Cat Gallery</h1>
                    <p className = "text-center" >
                            paragraph test
                    </p> 
                </div>
                
            </header>
        </>
    );
};

export default Header;