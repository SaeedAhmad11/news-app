import Loading from '../loading.gif'
const Spinner=()=> {
    return (
      <div className='text-center' >
        <img width={60} height={60} src={Loading} alt='loading'></img>
      </div>
    )
  }

export default Spinner
