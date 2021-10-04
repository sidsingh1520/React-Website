import React from 'react';
import dm from "../images/amico.png";
export default function Card() {
    return (
        <div className="card">
        <div className="card_image"><img src={dm}/></div>
        <div className="card_content">
          <h2 className="card_title">Basis of Digital Marketing</h2>
          <p className="card_text">Duration: 6 Hours<br/>1200+ Students Enrolled<br/>by: Shivam Singh</p>
          <div className="bottom_card">
            <h2 className="card_title">Free</h2>
            <button className="btn card_btn">Enroll Now</button>
          </div>
        </div>
        </div>
    )
}
