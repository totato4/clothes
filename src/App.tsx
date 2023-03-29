import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="font-montserat overflow-hidden flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="Category" element={<CategoryPage />} />
          <Route path="Item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
