import { HANGMAN } from '../actions/hangman'

export default (currentState = -1, { type, payload } = {}) => {
  switch(type) {
    case HANGMAN :


    var input = {...payload}
    var letter = input.key


    function wrongGuessCount(word, guess) {
      var count = 0;

      if (word.indexOf(guess) === -1) count += 1;

      return count;
    }

      return currentState + wrongGuessCount('squid',letter)

    default :
      return currentState

  }
}
