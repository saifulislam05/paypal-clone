import  Button  from "../Button/index"
import "../Service/service.css"
const Service=({bg="#fff",title,description,btn_title,image, fd="row"})=>{
    return(
        <>
        <div className="service" style={{background:bg}}>
        <div className="container">
        <div className="row service_wrapper" style={{flexDirection:fd}}>
        <div className="col-12 col-md-6 content_side ">
            <h1 className="service_title">{title}</h1>
            <p className="service_description">{description}</p>
            <Button title={btn_title} p="6px 50px" color="#029ce0" />
        </div>

        <div className="col-12 col-md-6 service_image_side_wrapper">
            <div className="image" >
            <img src={image} alt="category"/>
            </div>
        </div>
        </div>
        </div>
        </div>
        
        
        </>
    )
}

export default Service