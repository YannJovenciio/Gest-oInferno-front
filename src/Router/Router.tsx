import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ListCavern } from "../Pages/Caverns/ListCavern";
import { DemonList } from "../Pages/Demons/DemonList";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/caverns" element={<ListCavern />} />
      <Route path="/demons" element={<DemonList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/demons"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DemonList />
          </Suspense>
        }
      />
    </Routes>
  );
};
