import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "pages/NotFound";
const Invoice = React.lazy(() => import("pages/Invoice"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter   basename="/Astu-tech" />
      <Router>
        <Routes>
          <Route path="/Astu-tech" element={<Invoice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;