import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import CartPage from "./pages/CartPage";
import { AdminChat } from "./components/AdminChat";

function App() {
  return (
    <div className="font-montserat overflow-hidden flex flex-col min-h-screen w-full items-center">
      <AdminChat marker="adminChat"></AdminChat>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Public routes */}
          <Route path="" element={<HomePage />} />

          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="Item/:id" element={<ItemPage />} />
            <Route path="Category" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="Cart" element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
