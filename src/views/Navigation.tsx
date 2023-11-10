import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export default function Navigation() {
    return (
        <HashRouter>
            {/* <Suspense fallback={
        <div className="loader-view bg-dark">
          <Loader />
        </div>
      }> */}
            <Routes>
                {routes.map(({ path, name, Component, nested }) => {
                    return (
                        <Route path={path} element={<Component />} key={name}>
                            {nested?.map(({ path, name, Component }) => {
                                return (
                                    <Route
                                        path={path}
                                        element={<Component />}
                                        key={name}
                                    />
                                );
                            })}
                        </Route>
                    );
                })}

                <Route
                    path="/*"
                    element={<Navigate to={routes[0].to} replace />}
                />
            </Routes>
            {/* </Suspense> */}
        </HashRouter>
    );
}
