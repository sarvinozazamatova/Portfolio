import React from 'react';

const About = () => {
    return ( 
        <React.Fragment>
   <div>
    <h1 className='About-me'>About me</h1>
   </div>
<img className='j' src="./deft.jpg" alt="" width={300}/>
<div className='jort'>
Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit quisquam consequatur, eius, expedita, possimus officiis<br/> laudantium sint sapiente facere minus quia qui eligendi quidem maxime quaerat natus provident adipisci aliquid. <br/>Saepe, earum explicabo tempore provident itaque aut, iusto ab laudantium voluptatum repellendus quod temporibus <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit quisquam consequatur, eius, expedita, possimus officiis<br/> laudantium sint sapiente facere minus quia qui eligendi quidem maxime quaerat natus provident adipisci aliquid. <br/>Saepe, earum explicabo tempore provident itaque aut, iusto ab laudantium voluptatum repellendus quod temporibus <br/>
</div>

<div>
    <button className='button'>contact me<a href='http://localhost:5174/contact'>Contact me</a></button>
</div>
        </React.Fragment>
     );
}
 
export default About;