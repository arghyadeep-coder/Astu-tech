import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "pages/NotFound";
const Invoice = React.lazy(() => import("pages/Invoice"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <BrowserRouter   basename="/Astu-tech/" />
          <Route path="/" element={<Invoice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;