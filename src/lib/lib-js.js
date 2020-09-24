// ! ---- ESLint ---- A `require()` style import is forbidden.
// const { reduce } = require("ramda");

import { reduce } from "ramda";

export const maxOf = reduce((a, e) => Math.max(a, e), -Infinity);
