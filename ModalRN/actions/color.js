import { COLOR_CHANGE } from '../constants';
export function changeCor(cor) {
  return {
    type: COLOR_CHANGE,
    payload: cor
  }
}