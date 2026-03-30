import React from 'react'

function CardProduto(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">

        <h5 className="card-title">{props.produto.nome}</h5>
        <p className="card-text">R$ {props.produto.preco}</p>

        <button
          className="btn btn-primary"
          onClick={function() {
            props.adicionar(props.produto)
          }}
        >
          Adicionar ao carrinho
        </button>

      </div>
    </div>
  )
}

export default CardProduto