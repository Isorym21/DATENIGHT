import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function WelcomeScreen() {
  return (
    <div>
      <h1>A special day with a special someone!</h1>

      <div class="inner-wrapper">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/at-home-date-night-ideas-1640715843.jpg?crop=0.668xw:1.00xh;0.0864xw,0&amp;resize=1200:*"
              alt="Pizza Night"
            ></img>
          </div>

          <h1>Card Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore!
          </p>
        </div>
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://mtvl-seo-img.s3.amazonaws.com/blog-images/2017/08/imgonline-com-ua-Resize-8vXQW5HBjCh.jpg"
              alt="Romantic date"
            ></img>
          </div>

          <h1>Card Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore!
          </p>
        </div>
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://metropolitangirls.com/wp-content/uploads/2019/03/cheap-date-ideas-summer.jpg.webp"
              alt="Beach sunset"
            ></img>
          </div>

          <h1>Card Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore!
          </p>
        </div>
      </div>

      <button>
        <Link to="/form"> Let's plan a date!</Link>
      </button>
    </div>
  );
}

export default WelcomeScreen;
/*
const WelcomeScreen = () => {
  return (
    <>
      <Link />
    </>
  );
};

}
export default WelcomeScreen;
*/
/////////////////////////////////////
/*
export function WelcomeScreen() {
  return (
    <div>
      <h1>Welcome Screen!!</h1>


      <button>
        <Link to="/form"> Let's plan a date!</Link>
      </button>
    </div>
  );
}
*/
