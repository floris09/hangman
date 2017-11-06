import { HANGMAN } from '../actions/hangman'


export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case HANGMAN :

    var input = {...payload}
    var letter = input.key

    return [letter,...currentState]

    default :
      return currentState
  }
}
