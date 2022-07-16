import "./Header.css";



const Header = () => {



  return (

    <>   

      <header className="py-5 bg-dark ">
          <h1 className="text-center text-white">
              Cafetal 
              <span className="text-danger"> Brown Norte</span>
          </h1>
      </header>

      <div className="border-top py-4">
        <div className="navbar navbar-expand-lg container navbar-light">
          <a className="navbar-brand nombre-sitio d-lg-none fs-2 fw-bold text-uppercase" href='#'>
            Inacap
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion">
            <span className="navbar-toggler-icon"></span> {/*Muestra el icono del toggle para mostrar y ocultar navegacion*/}
          </button>

          <div id="navegacion" className="collapse navbar-collapse">
            <nav className="navbar-nav container d-flex flex-md-row justify-content-md-between text-center">
              <a className="text-dark text-decoration-none" href='#ingresar'>Ingresar Pedido</a>
              <a className="text-dark text-decoration-none" href='#listado'>Listado de Pedidos</a>
            </nav>

          </div>


        </div>


      </div>


    </>
  )
}

export default Header

