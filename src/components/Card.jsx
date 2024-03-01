function Card({image, name, description,button}){
    return(
        
        < div class="Card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button onClick={() => window.location.href = button}>Learn More</button>

        </div>
        
    )
}
export default Card;