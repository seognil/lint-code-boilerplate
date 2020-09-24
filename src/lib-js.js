import { reduce } from 'ramda';

export const maxOf = reduce((a, e) => Math.max(a, e), -Infinity);
