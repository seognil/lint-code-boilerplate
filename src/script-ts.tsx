import * as React from "react";
import ReactDOM from "react-dom";
import { rndList } from "./lib/lib-ts";

import { findMaxAndAppend } from "./script-js";

const shuffled = rndList(5);

export const App: React.FC = () => {
  const [state, setState] = React.useState<number>(0);

  React.useEffect(() => {
    console.log("effect log", state);

    // ! ---- ESLint ---- ESLint React Hook React.useEffect has a missing dependency: 'state'.
    // }, []);
  }, [state]);

  // * ----------------

  return (
    <div>
      <div>Hi, {new Date().toUTCString()}</div>
      <div>{`genRnd [${shuffled}]`}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

findMaxAndAppend(shuffled);
