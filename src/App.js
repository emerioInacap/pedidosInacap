import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../src/componentes/Header/Header'
import Hero from './componentes/Hero/Hero';
import Formulario from './componentes/Formulario/Formulario';
import ListadoPedidos from './componentes/ListadoPedidos/ListadoPedidos';
import Reloj from './componentes/Reloj/Reloj';
import Comment from './componentes/Comment/Comment';




function App(){

  
  const [pedidos, setPedidos] = useState(JSON.parse(localStorage.getItem('pedidos')) ?? [])
  const [pedido, setPedido] = useState({})

  const date = new Date()

  

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
  }, [pedidos])

  const eliminarPedido = id => {
    
    const pedidosActualizados = pedidos.filter( pedido => pedido.id !== id )

    setPedidos(pedidosActualizados)
  }


  return (
    <> 
      <Header />
      <Hero />
      
      <Reloj tipo='cafe' />

      <div className='bg-warning mt-3 mb-3 mx-3 row rounded'> 
        <div className="col-md-8">
          <Formulario 
            pedidos = {pedidos}
            setPedidos = {setPedidos} 
            pedido = {pedido}
            setPedido = {setPedido}
            
          />
        </div>
        <div className="col-md-4 ">
          <ListadoPedidos 
            pedidos={pedidos}
            setPedido = {setPedido}
            eliminarPedido = {eliminarPedido}
          />
        </div>
        
      </div>

      <Comment 
        fecha = {date.toLocaleDateString()}
        text= 'Espero que disfrutes el aprendizaje de React'
        author={{
          name: 'Gatito',
          avatarUrl: 'https://placekitten.com/g/400/400'
        }}
      />
      

    </> 

  ) ;
}



export default App;