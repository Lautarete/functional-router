import { navigate } from "../../router";
import gameIMG from "./game.png";
export function mountContentPage() {
  const contentRootEl = document.createElement("div");
  contentRootEl.classList.add("content-root");
  contentRootEl.innerHTML = `
  <h1>Content page</h1>
  <img src=${gameIMG} alt="" />
  <button>Next</button>
  `;
  contentRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/last-page");
  });
  return contentRootEl;
}
