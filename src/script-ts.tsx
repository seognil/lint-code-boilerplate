import * as React from 'react';
import ReactDOM from 'react-dom';
import { rndList } from './lib-ts';

import { findMaxAndAppend } from './script-js';

const shuffled = rndList(5);

export const App: React.FC = () => {
  return (
    <div>
      <div>Hi, {new Date().toUTCString()}</div>
      <div>{`genRnd [${shuffled}]`}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

findMaxAndAppend(shuffled);
