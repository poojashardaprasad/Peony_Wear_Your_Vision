import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DesignProvider } from './context/DesignContext';
import { ThemeProvider } from './context/ThemeContext';
import { ROUTES } from './constants';
import { MainLayout, DesignerLayout } from './components';
import { 
  Home, 
  Profile,
  Category, 
  SketchSelection, 
  ReferenceSelection, 
  FabricCategory, 
  FabricSelection, 
  Preview, 
  Quote 
} from './pages';

export default function App() {
  return (
    <ThemeProvider>
      <DesignProvider>
        <Router>
          <Routes>
            {/* Main layout encapsulates general page structure */}
            <Route path="/" element={<MainLayout />}>
              {/* Index is our luxury Home page */}
              <Route index element={<Home />} />
              
              {/* Profile setup screen */}
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              
              {/* Embedded custom Stepper designer routes */}
              <Route element={<DesignerLayout />}>
                <Route path={ROUTES.CATEGORY} element={<Category />} />
                <Route path={ROUTES.SKETCH} element={<SketchSelection />} />
                <Route path={ROUTES.REFERENCE} element={<ReferenceSelection />} />
                <Route path="/reference/:sketchId" element={<ReferenceSelection />} />
                <Route path={ROUTES.FABRIC_CATEGORY} element={<FabricCategory />} />
                <Route path={ROUTES.FABRIC} element={<FabricSelection />} />
                <Route path={ROUTES.PREVIEW} element={<Preview />} />
              </Route>

              {/* Final completed Quote route (outside designer layout, inside main footer/header) */}
              <Route path={ROUTES.QUOTE} element={<Quote />} />

              {/* Wildcard Fallback redirects home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </DesignProvider>
    </ThemeProvider>
  );
}
