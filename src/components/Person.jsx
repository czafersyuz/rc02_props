import React from 'react'
import Msg from './Msg'

const Person = ({ name, img, tel }) => {
  return (
    <div>
        <Msg isim={name}/>
        <img src={img} alt="img" />
        <p>{tel}</p>
    </div>
  )
}

export default Person