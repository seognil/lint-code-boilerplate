import { maxOf } from "./lib/lib-js";

export const findMaxAndAppend = (list) => {
  const max = maxOf(list);
  const newNode = document.createElement("div");
  newNode.textContent = `max of [${list}] is: ${max}`;
  document.body.appendChild(newNode);
};
