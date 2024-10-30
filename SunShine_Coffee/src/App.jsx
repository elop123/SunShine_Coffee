import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'
import { Login } from './pages/Login/Login'


function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />  
          <Route path="/products" element={<Products />} />  
          <Route path="/login" element={<Login />} />  
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export  default App