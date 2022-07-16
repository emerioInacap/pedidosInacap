import Pedido from "../Pedido/Pedido"


const ListadoPedidos = ({pedidos ,setPedido, eliminarPedido}) => {



  return (

    <>

      { pedidos && pedidos.length ? (
        <div className="mx-3 pb-5 vh-100 overflow-scroll">  
          <h2 className="text-center py-3">Listado de Pedidos</h2>

          <p className="text-center">Pedidos por Entregar</p>

          <div className=" container-xl bg-dark rounded p-3">

              { pedidos.map( pedido => (
                <Pedido 
                  key={pedido.id} 
                  pedido={pedido}
                  setPedido={setPedido}
                  eliminarPedido = {eliminarPedido}
                />
              )) }
              
              
            
          </div>
        </div>

      ) : (

        <>  
          <h2 className="text-center py-3">No hay Pedidos</h2>

          <p className="text-center">Agrega desde el Formulario</p>

        </>
        
      )}

      
    </>
    
  )
}

export default ListadoPedidos