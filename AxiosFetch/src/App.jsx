import { useState } from 'react'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Products:</h1>
      <div>
        <ProductList />
      </div>
    </>
  )
}

export default App
