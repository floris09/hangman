import { HANGMAN } from '../actions/hangman'


export default (currentState = '', { type, payload } = {}) => {
  switch(type) {
    case HANGMAN :

    var input = {...payload}
    var letter = input.key

    function showGuess(word, guesses) {

      var show = [];

      for (var i=0; i<word.length; i++){
        if (guesses.includes(word[i]) === false){
          show.push("_");
        } else {
          show.push(word[i]);
        }
      }
        return(show.join(" "));
    }

    return showGuess('squid',[letter,...currentState])


    default :
      return currentState
  }
}
