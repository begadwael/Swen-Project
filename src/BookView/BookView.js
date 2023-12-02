import React from 'react';
import './BookView.css'
// import diary_cover from './dairy_cover.jpg'
import img_1 from './img_1.jpg'
import img_2 from './img_2.jpg'
import img_3 from './img_3.jpg'
import img_3_hover from './img_3_hover.jpg'
import img_4 from './img_4.jpg'
import img_5 from './img_5.jpg'
import img_6 from './img_6.jpg'
import img_7 from './img_7.jpg'
import img_7_hover from './img_7_hover.jpg'
import greg from './greg.png'


const BookView = () => {
    window.onload = function() {
        document.getElementById("img_7").onmouseenter = function () {
            document.getElementById("img_7").src = img_7;
        }

        document.getElementById("img_7").onmouseleave = function () {
            document.getElementById("img_7").src = img_7_hover;
        }

        document.getElementById("img_3").onmouseenter = function () {
            document.getElementById("img_3").src = img_3;
        }

        document.getElementById("img_3").onmouseleave = function () {
            document.getElementById("img_3").src = img_3_hover;
        }
    }

    return (
        <div className={"bookView"}>
            <div className={"Book_view_title"}>
                <h1>Dairy Of The Wimpy Kid</h1>
                <h3>
                    Hover over image to see more details and events
                </h3>
                <img id="greg" src={greg} alt={"greg"}/>
            </div>
            <div className={"Book_view_area"}>
                <img id="img_1" src={img_1} alt={"img_1"}/>
                <div className="section_book">
                    <img id="img_2" src={img_2} alt={"img_2"}/>
                    <img id="img_3" className={"hover_img"} src={img_3_hover} alt={"img_3"}/>
                </div>

                <div className="section_book vert">
                    <img id="img_4" src={img_4} alt={"img_4"}/>
                    <img id="img_5" src={img_5} alt={"img_5"}/>
                </div>

                <div className="section_book">
                    <img id="img_6" src={img_6} alt={"img_6"}/>
                    <img id="img_7" className={"hover_img"} src={img_7_hover} alt={"img_7"}/>
                </div>



            </div>
        </div>
    );
};

export default BookView;
