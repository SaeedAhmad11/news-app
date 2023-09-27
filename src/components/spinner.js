import React, { Component } from 'react'
import Loading from '../loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img width={60} height={60} src={Loading} alt='loading'></img>
      </div>
    )
  }
}
export default Spinner
