import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Pedido = ({pedido, setPedido, eliminarPedido}) => {

 
  const { nombre, numeroPedido, productos, tipoConsumo, id } = pedido

  const handleEliminar = () => {

    Swal.fire({
      title: 'Eliminar Pedido?',
      text: "No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
  }).then((result) => {
      if (result.isConfirmed) {
          eliminarPedido(id);  //llamar el prop y enviar el id
          Swal.fire(
          'Eliminado!',
          'Pedido eliminado.',
          'success'
          )
      }
  })
  }

  return (
    <div className="container-xl p-3 border-white mb-3 bg-white rounded">
      
        <p className="pt-4 fw-bold">Nombre Cliente: <span className="fw-normal">{nombre}</span> </p>

        <p className="pt-4 fw-bold">Numero del Pedido: <span className="fw-normal">{numeroPedido}</span> </p>

        <p className="pt-4 fw-bold">Productos: <span className="fw-normal">{productos}</span> </p>

        <p className="pt-4 fw-bold">Tipo de Consumo: <span className="fw-normal">{tipoConsumo}</span> </p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-dark" onClick={() => setPedido(pedido)}>Editar</button>
          <button className="btn btn-danger" onClick={handleEliminar} >Eliminar</button>
        </div>

    </div>
  )
}

export default Pedido