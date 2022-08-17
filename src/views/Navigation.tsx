import { mapRange } from "gsap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { routes } from "./routes";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, name, Component, nested }) => {
          return (
            <Route path={path} element={<Component />} key={name}>
              {nested?.map(({ path, name, Component }) => {
                return <Route path={path} element={<Component />} key={name} />;
              })}
            </Route>
          );
        })}

        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
