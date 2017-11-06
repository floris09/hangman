import React, { Component } from 'react';
import { go_hangman } from '../actions'
import { connect } from 'react-redux'
import '../App.css';
import start from './Start.png'
import first from './First.png'
import second from './second.png'
import third from './third.png'
import fourth from './fourth.png'
import fifth from './fifth.png'
import six from './six.png'

class Hangman extends Component {

  componentWillMount() {
  this.props.go_hangman()
  }

  getLetter(event){
    event.preventDefault()
    return this.props.go_hangman(event)
  }

  hanging(){
    if (this.props.lose === 0) return start
    if (this.props.lose === 1) return first
    if (this.props.lose === 2) return second
    if (this.props.lose === 3) return third
    if (this.props.lose === 4) return fourth
    if (this.props.lose === 5) return fifth
    if (this.props.lose === 6) return six

  }
  render() {
    return (
      <div>
      <input
        type="text"
        ref="input"
        className="input"
        placeholder="Next letter?"
        onKeyDown={this.getLetter.bind(this)}
      />

      <h2>You Guessed:</h2>
      <h3>{this.props.guesses}</h3>

      <h2>Wrong Guesses:</h2>
      <h3>{this.props.lose}</h3>


      <h1>{this.props.showWord}</h1>


      <img src={this.hanging()} alt="hangman"/>
      </div>
    );
  }
}

const mapStateToProps = ({ showWord,guesses,lose }) => ({ showWord,guesses,lose })
const mapDispatchToProps = { go_hangman }

export default connect(mapStateToProps,mapDispatchToProps)(Hangman);
