import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { availableRoutes } from "./availableRoutes";

export const RoutesSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={availableRoutes.default} Component={Home} />
        <Route path={availableRoutes.about} Component={About} />
      </Routes>
    </BrowserRouter>
  );
};
