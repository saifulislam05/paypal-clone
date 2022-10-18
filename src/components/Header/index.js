import  "./header.css";
import Button from "../Button/index";

const Header= ()=>{
    return(
        <>
<header className="header">
      <div className="container">
        <nav className="row nav">
<div className="col-2 logo">
    <img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="logo"/>
</div>


<ul className="col-5 nav_item_wrapper">


    <li className="item"><a href="http://www.saifulsoftwares.com/">INDIVIDUAL</a></li>
    <li className="item"><a href="http://www.saifulsoftwares.com/">BUSINESS</a></li>
    <li className="item"><a href="http://www.saifulsoftwares.com/">PARTNERS</a></li>
    <li className="item"><a href="http://www.saifulsoftwares.com/">USEFUL INFO</a></li>


</ul>
       <div className="col-3 btn_wrapper">
      <div className="btns">
      <Button title="Login" bg="#fff" color="#0070ba"/>
       <Button title="Sign Up" bg="#0070ba" color="#fff"/>
      </div>
       </div>
        
        
        </nav>
</div>
</header>
        </>
    )
}

export default Header