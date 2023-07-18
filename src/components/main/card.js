const Card = ({data}) => {

  return (
   
    <div className="card-container">
      {data.map(({id,title,date,image,desc})=>(
        <div className="cards" key={id}>
          <div className="title"><h1>{title}</h1></div>
          <div className="date"><h1>{date}</h1></div>
          <img src={image} alt="" />
          <div className="card-over"><p>{desc}</p></div>
        </div>
      ))}
     
    </div>
  )
}

export default Card