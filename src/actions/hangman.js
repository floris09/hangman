export const HANGMAN = 'HANGMAN'

export default (guess) => ({
  type: HANGMAN,
  payload: guess
})
