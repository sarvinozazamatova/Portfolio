import { Button } from "antd";
import React from "react";

const Contact=()=>{

    return(
        <React.Fragment>
  <div className="lond">
  <input placeholder="Email adress" className="email"></input>
    <input placeholder="Youser name" className="pasword"></input>
    <input placeholder="your massage" className="name"></input>
  <Button className="buti">Send</Button>
  </div>
  <div className="boshi">
    <div className="email-me">
 Email me:<br/>sarvinoz@gmail.com
 </div>
 <div className="call">
  Call:<br/>+998-95-66-32
 </div>
  </div>
 
        </React.Fragment>
    )
}
export default Contact;