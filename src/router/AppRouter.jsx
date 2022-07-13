import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRouter } from "../heroes/";
import { PrivateRouter,PublicRouter } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
