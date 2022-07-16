import './Comment.css'

const Comment = (props) => {


  return (
    <div className="Comment d-flex justify-content-center">
        <div className="card-lg mb-5">
            <img className="avatar card-img-top" 
                src={props.author.avatarUrl}
                alt={props.author.name}
            />

            <div className='card-body bg-warning'>
                <h5 class="card-title fs-1 fw-bold">{props.author.name}</h5>
                <p class="card-text">{props.text}</p>
                <p class="card-text fw-bold">Fecha: {props.fecha}</p>
                
            </div>
           
        </div>

    </div>
  );
}

export default Comment