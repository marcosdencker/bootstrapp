import React, { useState } from 'react'
import GridProduto from '../components/GridProduto'
import Carrinho from '../components/Carrinho'

function Home() {

  const [carrinho, setCarrinho] = useState([])

  const produtos = [
    { id: 1, nome: 'Mouse', preco: 50 },
    { id: 2, nome: 'Teclado', preco: 100 },
    { id: 3, nome: 'Fone', preco: 80 }
  ]

  function adicionar(produto) {
    setCarrinho([...carrinho, produto])
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-3">Produtos</h2>

      <GridProduto produtos={produtos} adicionar={adicionar} />

      <Carrinho carrinho={carrinho} />

    </div>
  )
}

export default Home