

const Error = ({children}) => {
  return (
    <div className='bg-danger text-white text-center p-2 mb-2 rounded text-uppercase'>
        <p>{children}</p>
    </div>
  )
}

export default Error