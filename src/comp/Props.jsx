import React from 'react'
const Props = (prop) => {
  return (
    <div>
      <img src={prop.img} alt="Photo" />
      <h3><span>Nom:</span>{prop.name}</h3>
      <h3><span>Age:</span>{prop.age}</h3>
      <h3><span>Pays:</span>{prop.pay}</h3>
      <h3><span>Equipe Actuelle:</span>{prop.equipe}</h3>
    </div>
  )
}

export default Props;