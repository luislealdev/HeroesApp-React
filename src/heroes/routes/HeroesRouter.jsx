import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, Search, HeroPage } from "../pages";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />

        <div className="container">
        <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<Search />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="marvel" />} />
      </Routes>
        </div>

    </>
  );
};
