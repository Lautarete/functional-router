import { navigate } from "../../router";
import byeIMG from "./bye.png";

export function mountLastPage() {
  const lastRootEl = document.createElement("div");
  lastRootEl.classList.add("last-root");
  lastRootEl.innerHTML = `
  <h1>last page</h1>
  <img src=${byeIMG} alt="" />
  <button>Next</button>
  `;
  lastRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/welcome");
  });
  return lastRootEl;
}
