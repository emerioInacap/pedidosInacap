import { useEffect } from 'react'
import { useState } from 'react'
import Error from '../Error/Error'
import '../Formulario/Formulario.css'


const Formulario = ({pedidos, setPedidos, pedido, setPedido }) => {

  const [nombre, setNombre] = useState('')
  const [numeroPedido, setNumeroPedido] = useState('')
  const [productos, setProductos] = useState('')
  const [tipoConsumo, setTipoConsumo] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(pedido).length > 0){
      setNombre(pedido.nombre)
      setNumeroPedido(pedido.numeroPedido)
      setProductos(pedido.productos)
      setTipoConsumo(pedido.tipoConsumo)
    }
  },[pedido])

  const generarId = () => {

    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha + random;

  }



  const handleSubmit = e => {
    e.preventDefault()

    //Validacion formulario
    if([nombre, numeroPedido, productos, tipoConsumo].includes('')){
      setError(true)
      return;
    }

    setError(false)

    //Objeto De Pedido
    const objetoPedido = {
      nombre,
      numeroPedido,
      productos,
      tipoConsumo
    }

    if(pedido.id){
      //editando el registro
      objetoPedido.id = pedido.id

      const pedidosActualizados = pedidos.map( pedidoState => pedidoState.id === pedido.id ? objetoPedido : pedidoState )

      setPedidos(pedidosActualizados)
      setPedido({})

    }else{
      //nuevo registro
      objetoPedido.id = generarId()
      setPedidos([...pedidos, objetoPedido])
    }

    //Reiniciar Formulario
    setNombre('')
    setNumeroPedido('')
    setProductos('')
    setTipoConsumo('')

  }

  return (
    <>
      <main className='container-xl'> 
        <h2 className="text-center py-3" id="ingresar">Ingresar Pedidos</h2>

        <p className="text-center">Administra los pedidos</p>


        <form onSubmit={handleSubmit}>
          <fieldset>
            { error && (
              <Error>
                <p>
                  Todos los campos son obligatorios 
                </p>
              </Error>
            )}
            <legend className="bg-dark text-white text-center">Datos Cliente</legend>

            <div className="mb-3">
              <label className="form-label" htmlFor="nombre">Nombre: </label>
              <input 
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre del cliente"
                value={nombre}
                onChange={e => setNombre(e.target.value) }
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className="bg-dark text-white text-center">Datos Pedido</legend>
            <div className="mb-3">
              <label className="form-label" htmlFor="numero">Numero Pedido: </label>
              <input 
                type="text"
                className="form-control"
                id="numero"
                placeholder="Numero del Pedido"
                value={numeroPedido}
                onChange={ e => setNumeroPedido(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="productos">Productos: </label>
              <textarea
                className="form-control"
                id="productos"
                placeholder="Productos del pedido"
                rows='10'
                value={productos}
                onChange={ e => setProductos(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="consumo">Tipo de Consumo: </label>
              <select    
                className="form-control"
                id="consumo"
                value={tipoConsumo}
                onChange={e => setTipoConsumo(e.target.value)}
              >
                <option value="">--Seleccione--</option>
                <option value="local">Servir en Local</option>
                <option value="llevar">Para Llevar</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            
          </fieldset>
          <button id="listado" type="submit" className="btn btn-secondary text-dark fw-bold w-100 mb-4">{pedido.id ? 'Actualizar Pedido' : 'Ingresar Pedido'} </button>
        </form>
      </main>
    </>
  )
}

export default Formulario