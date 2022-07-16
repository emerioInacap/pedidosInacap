import React, { useState } from 'react'

const Reloj = (props) => {


    let tipo = props.tipo

    let hora = new Date().toLocaleTimeString();
	let [contadorHora, setContadorHora] = useState();

	const actualizarHora = () => {
		hora = new Date().toLocaleTimeString();
		setContadorHora(hora);
	}
	setInterval(actualizarHora, 1000);

    


  return (
    <>

        <p className="container-xl d-flex gap-1 justify-content-center mt-4">Siempre es buena hora para un {tipo} </p>
        
        <div className="container-xl d-flex gap-1 justify-content-center ">
            <p className="border border-dark fs-2 mt-3 text-danger fw-bold text-uppercase p-3">{tipo}</p>
            <p className="border border-dark fs-2 mt-3 text-dark text-uppercase p-3"> {contadorHora} <span className="fs-5 text-danger fw-bold"> hrs</span></p>

        </div>

    </>
  )
}

export default Reloj



