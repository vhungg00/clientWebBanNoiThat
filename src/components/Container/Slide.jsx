import React from 'react';
import './Slide.css'
function Slide() {
    return (
        <div className="slider">
            <div className="grid wide">
                <div className="row">
                    <ContentBoxLeft />
                    <ContentBoxRight />
                </div>
            </div>
        </div>
    );
}

const ContentBoxLeft = () => {
    return (
        <div className="content-box-left col l-6 sm-12 xsm-12">
            <h1 className="content-box-left__heading">
                Design Your Comfort Zone
            </h1>
            <p className="content-box-left__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim veritatis iste eius nemo! Voluptatum, non, adipisci laudantium illo quidem ab, ratione reprehenderit voluptatibus expedita necessitatibus eum exercitationem consequuntur quia?</p>
            <button className="btn ">Shop now</button>
        </div>
    )
}

const ContentBoxRight = () => {
    return (
        <div className="content-box-right col l-6 sm-12 xsm-12">
            <a href="#" className="content-box-right__top img-effect-hover-1">
                <img src="./assets/images/slide_col_reft/img1.82270b12.png" alt="" className="content-box-right__top-img" />
            </a>
            <div className="row content-box-right__bot">
                <div className="content-box-right__bot-left  col l-6 sm-6 xsm-6">
                    <a href="#" className="content-box-right__bot-left-link img-effect-hover-2">
                        <img src="./assets/images/slide_col_reft/img2.jpg" alt="" className="content-box-right__bot-left-img" />
                    </a>
                </div>
                <div className="content-box-right__bot-right col l-6 sm-6 xsm-6">
                    <a href="#" className="content-box-right__bot-right-link banner">
                        <img src="./assets/images/slide_col_reft/img3.jpg" alt="" className="content-box-right__bot-right-img" />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Slide;