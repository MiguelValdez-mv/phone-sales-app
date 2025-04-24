import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ProductListView } from './pages/ProductList'
import { ProductDetailsView } from './pages/ProductDetails'
import { Header } from './components/Header'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductListView />} />
        <Route path="/:id" element={<ProductDetailsView />} />
      </Routes>
    </Router>
  )
}

export default App
