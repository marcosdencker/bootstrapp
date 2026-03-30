import React from 'react'

function Carrinho(props) {
  return (
    <div className="mt-4">

      <h3>Carrinho</h3>

      {props.carrinho.length === 0 ? (
        <p>Vazio</p>
      ) : (
        <ul className="list-group">

          {props.carrinho.map(function(item, index) {
            return (
              <li className="list-group-item" key={index}>
                {item.nome} - R$ {item.preco}
              </li>
            )
          })}

        </ul>
      )}

    </div>
  )
}

export default Carrinho