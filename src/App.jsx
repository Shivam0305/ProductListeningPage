import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import PrivateRoute from './component/PrivateRoute'
import AuthPage from './page/AuthPage'
import HomePage from './page/HomePage'
import ProductList from './page/ProductList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      </Routes>
    </Router>
  )
}

export default App