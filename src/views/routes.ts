import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface iRouter {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  nested?: iRouter[];
}

const lazyApp = lazy(() => import(/* webpackChunkName: "LazyHome" */ "./App"));
// Lazy Components
// const lazyHome = lazy(
//   () => import(/* webpackChunkName: "LazyHome" */ "../components/Home")
// );

export const routes: iRouter[] = [
  {
    to: "/",
    path: "/",
    name: "main",
    Component: lazyApp,
    nested: [
      // { to: "", path: "", name: "Home", Component: lazyHome },
    ],
  },
];
