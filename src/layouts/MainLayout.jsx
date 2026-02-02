import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;
