/**
 * return the store salt.
 * @param {*} state
 */
export function getSalty(state) {
  return state.salt;
}

/**
 * return the hashed pin hash.
 * @param {*} state
 */
export function getPinHash(state) {
  return state.pinHash;
}

/**
 * return the seed.
 * @param {*} state
 */
export function getSeed(state) {
  return state.seed;
}

export function getShuffledSeed(state) {
  const seed = Object.keys(state.seed);
  for (let i = seed.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [seed[i], seed[j]] = [seed[j], seed[i]];
  }
  return seed;
}

/**
 * get SPV Mode.
 */
export function getSPVmode(state) {
  return state.spvMode;
}
