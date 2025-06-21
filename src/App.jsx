import { Route, Routes, BrowserRouter } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout";

// import pages
import HomePage from "./pages/HomePage/HomePage";
import ConsoleDetails from "./pages/ConsoleDetails/ConsoleDetails";
import ConsoleComparator from "./pages/ConsoleComparator/ConsoleComparator";
import FavoritesPage from "./pages/Favorites/FavoritesPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/consoles/:id" element={<ConsoleDetails />} />
            <Route path="/compare" element={<ConsoleComparator />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App