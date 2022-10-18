

const Button= ({title,bg,color,fs="16px", fw="700", p="6px 20px"})=>{
    return(
        <>
        
        <button className="btn" style={{
            
            background:bg,
            color:color,
            border: "1px solid #0070ba",
            borderRadius:"30px",
            padding:p,
            fontSize:fs,
            fontWeight:fw,
            
            
        }}> {title}</button>{' '}
        </>
    )
}

export default Button