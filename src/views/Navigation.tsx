import React,{Suspense} from 'react';
import { Loader } from '@Components/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Suspense fallback={
        <div className="loader-view bg-dark">
          <Loader></Loader>
        </div>
      }>
      
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
                    path="*"
                    element={<Navigate to="/notFound" replace />}
                />
            </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
