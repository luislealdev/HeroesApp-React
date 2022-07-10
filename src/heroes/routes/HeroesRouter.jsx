import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, Search } from "../pages";
import { IdHeroe } from "../pages/HeroePage";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />

        <div className="container">
        <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<Search />} />
        <Route path="id" element={<IdHeroe />} />

        <Route path="/*" element={<Navigate to="marvel" />} />
      </Routes>
        </div>

    </>
  );
};
