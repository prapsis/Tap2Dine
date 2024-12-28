import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/auth-pages/layout"
import Dashboard from "./pages/auth-pages/dashboard/page"
import Orders from "./pages/auth-pages/orders/page"
import SingleOrder from "./pages/auth-pages/orders/[orderid]/page"
import MenuPage from "./pages/auth-pages/menu/page"
import InventoryPage from "./pages/auth-pages/inventory/page"
import TablePage from "./pages/auth-pages/table/page"
import DigitalMenu from "./pages/no-auth-pages/digital-menu/page"
import { Toaster } from "./components/ui/sonner"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path="orders/:id" element={<SingleOrder />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="table" element={<TablePage />} />
            <Route path="inventory" element={<InventoryPage />} />
          </Route>
          <Route path="/digi-menu" element={<DigitalMenu />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
