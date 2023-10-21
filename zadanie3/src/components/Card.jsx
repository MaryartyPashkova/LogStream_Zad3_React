 function Card ({title, userId, body}){

 return (
      <div className="wrapper">
        <h3>Источник: {userId}</h3>
        <h3>Пост:</h3>
        <p className="title">{title}</p>
        <p className="body">{body}</p>
  </div>
  
 );
}

export default Card;