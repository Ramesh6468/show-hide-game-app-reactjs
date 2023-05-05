import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isclicked1: false, isclicked2: false}

  onClick1 = () => {
    this.setState(prevState => ({isclicked1: !prevState.isclicked1}))
  }

  getHide1 = () => {
    const {isclicked1} = this.state
    return isclicked1 ? <p className="name1">Joe</p> : null
  }

  onClick2 = () => {
    this.setState(prevState => ({isclicked2: !prevState.isclicked2}))
  }

  getHide2 = () => {
    const {isclicked2} = this.state
    return isclicked2 ? <p className="name2">Jonas</p> : null
  }

  render() {
    return (
      <div className="bgContainer">
        <h1 className="tittle">Show/Hide</h1>
        <div className="buttonsContainer">
          <button className="button1" type="button" onClick={this.onClick1}>
            Show/Hide Firstname
          </button>
          <button className="button1" type="button" onClick={this.onClick2}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="nameContainer">
          {this.getHide1()}
          {this.getHide2()}
        </div>
      </div>
    )
  }
}

export default ShowHide
