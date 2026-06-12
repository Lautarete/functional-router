import { navigate } from "../../router";
import hiIMG from "./welcome.png";
export function mountWelcomePage() {
  const welcomeRootEl = document.createElement("div");
  welcomeRootEl.classList.add("welcome-root");
  welcomeRootEl.innerHTML = `
  <h1>Welcome page</h1>
  <img src=${hiIMG} alt="" />
  <button>Next</button>
  `;
  welcomeRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/content");
  });
  return welcomeRootEl;
}
