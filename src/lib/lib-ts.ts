import { range, shuffle } from "lodash";

export const rndList = (len: number) => shuffle(range(1, len + 1));

// ! ---- ESLint ---- Empty block statement.
// {
// }
