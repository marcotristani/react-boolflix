import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { SearchProvider } from "./context/SearchContext";

import MainLayout from "./layouts/MainLayout";

import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
import SeriesTv from "./pages/SeriesTv";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/series_tv" element={<SeriesTv />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
