import React from 'react';
import "./Showcase.css";

import Button from '../../globalComponents/Button/Button';
import Animation from './Animation/Animation';


const Showcase = () => {
  return(
    <div className="showcase">
      <div className="showcase__inner">

      <div className="container">

      <div className="showcase__content">
        <h1>We make your business look cool</h1>
        <p className="showcase__detail">Are You Looking For Finest Dedicated Web Designer, Graphic Designer, Animator &amp; Internet Marketing Team?
     </p>
    <p className="showcase__detail2">if Yes! You Are At Right Place 🙂 </p>
      <Button text="ABOUT US"/>
      </div>
      <div className="showcase__pictures">
        <div className="showcase__pictures-inner">

          <Animation />
        </div>
      </div>

      </div>
      </div>
    </div>
  );
}



export default Showcase;