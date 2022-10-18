
import  Button  from "../Button/index"
import  "./hero.css"

const Hero =()=>{
    return(
        <>
        <div className="hero">
            <div className="container">
                <div className="hero_content">
                    <h1>Take care of you and yours at home, and we<br/> can take care of you online.</h1>
                    <Button title="Sign Up for Free" bg="#fff" color="#0097E0" />
                </div>
            </div>
            <div className="bg_video_container">
            <video className="bg_video" autoPlay muted playsinline>
                <source src="https://www.paypalobjects.com/marketing/web/in/home/everyday-essentials/IN_everyday_essentials_desktop_v5.mp4" type="video/mp4"></source>
            </video>

            </div>

            <div className="looking_solution">
            <h4>Looking for PayPal Business Solutions? Whether you are freelancer or a business, we are here to support you.</h4>
                    <Button title="Paypal for business" bg="#fff" color="#0097E0" fs="14px" fw="500"/>
            </div>
            

        </div>
        
        
        </>
    )
}


export default Hero