import { mountWelcomePage } from "./pages/welcome/welcome";
import { mountContentPage } from "./pages/content/content";
import { mountLastPage } from "./pages/last/last";

// encuentra la ruta actual y en funcion del path crea monta la pagina
const BASE_PATH = "/functional-router";
export function router() {
  const contentSectionEl = document.querySelector(".content-section");
  const routes = [
    {
      path: /\/$/,
      pageToMount: mountWelcomePage(),
    },
    {
      path: /\/welcome/,
      pageToMount: mountWelcomePage(),
    },
    {
      path: /\/content/,
      pageToMount: mountContentPage(),
    },
    {
      path: /\/last-page/,
      pageToMount: mountLastPage(),
    },
  ];

  const path = window.location.pathname.replace(BASE_PATH, "") || "/";
  for (const posibleRoute of routes) {
    if (posibleRoute.path.test(path) && contentSectionEl != null) {
      contentSectionEl.innerHTML = "";
      contentSectionEl?.appendChild(posibleRoute.pageToMount);
    }
  }
}
export function navigate(path: string) {
  window.history.pushState({}, "", `${BASE_PATH}${path}`);
  router();
}
