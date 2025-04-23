import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ProductListView } from './views/ProductList'
import { ProductDetailsView } from './views/ProductDetails'
import { Header } from './components/Header'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductListView />} />
        <Route path="/product/:id" element={<ProductDetailsView />} />
      </Routes>
    </Router>
  )
}

export default App
