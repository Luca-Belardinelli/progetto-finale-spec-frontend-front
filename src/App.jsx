import { Routes, Route } from 'react-router-dom'
import DefaultLayout from "./layout/DefaultLayout"

import HomePage from "./pages/HomePage/HomePage"
import ConsoleDetails from "./pages/ConsoleDetails/ConsoleDetails"
import ConsoleComparator from "./pages/ConsoleComparator/ConsoleComparator"
import FavoritesPage from "./pages/Favorites/FavoritesPage"

import { FavoritesProvider } from './context/FavoritesContext'
import { CompareProvider } from './context/CompareContext'

function App() {
  return (
    <FavoritesProvider>
      <CompareProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/consoles/:id" element={<ConsoleDetails />} />
            <Route path="/compare" element={<ConsoleComparator />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </CompareProvider>
    </FavoritesProvider>
  )
}

export default App
