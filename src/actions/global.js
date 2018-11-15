export const UPDATE_DIMENSION = Symbol("UPDATE_DIMENSION");
export function updateDimension({ width, height }) {
  return {
    type: UPDATE_DIMENSION,
    width,
    height
  };
}
