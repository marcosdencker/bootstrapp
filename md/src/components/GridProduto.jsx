import React from 'react'
import CardProduto from './CardProduto'

function GridProduto(props) {
  return (
    <div className="row">
      {props.produtos.map(function(produto) {
        return (
          <div className="col-md-4" key={produto.id}>
            <CardProduto
              produto={produto}
              adicionar={props.adicionar}
            />
          </div>
        )
      })}
    </div>
  )
}

export default GridProduto