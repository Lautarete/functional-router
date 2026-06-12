import { mountWelcomePage } from "./pages/welcome/welcome";
import { mountContentPage } from "./pages/content/content";
import { mountLastPage } from "./pages/last/last";
import { router } from "./router";

function main() {
  console.log("hi");
  router();
  window.addEventListener("popstate", router);
}

main();
