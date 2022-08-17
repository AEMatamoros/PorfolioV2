import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface iRouter {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  nested?: iRouter[];
}
//Components
import App from "./App";

const lazyApp = lazy(() => import(/* webpackChunkName: "LazyHome" */ "./App"));
// Lazy Components
const lazyHome = lazy(
  () => import(/* webpackChunkName: "LazyHome" */ "../components/Home")
);
const lazyBlog = lazy(
  () => import(/* webpackChunkName: "LazyBlog" */ "../components/Blog")
);
const lazyProyects = lazy(
  () => import(/* webpackChunkName: "LazyProyects" */ "../components/Proyects")
);
const lazyContact = lazy(
  () => import(/* webpackChunkName: "LazyContact" */ "../components/Contact")
);

export const routes: iRouter[] = [
  {
    to: "/",
    path: "/",
    name: "main",
    Component: lazyApp,
    nested: [
      { to: "", path: "", name: "Home", Component: lazyHome },
      { to: "Blog", path: "Blog", name: "Blog", Component: lazyBlog },
      {
        to: "Proyects",
        path: "Proyects",
        name: "Proyects",
        Component: lazyProyects,
      },
      {
        to: "Contact",
        path: "Contact",
        name: "Contact",
        Component: lazyContact,
      },
    ],
  },
];
