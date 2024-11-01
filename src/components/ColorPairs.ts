export const colorPairs = [
  ['bg-pink-600', 'text-yellow-300'],
  ['bg-purple-600', 'text-green-300'],
  ['bg-blue-600', 'text-orange-300'],
  ['bg-emerald-800', 'text-pink-400'],
  ['bg-orange-700', 'text-purple-300'],
  ['bg-yellow-500', 'text-blue-500'],
] as const;

export type ColorPair = typeof colorPairs[number];