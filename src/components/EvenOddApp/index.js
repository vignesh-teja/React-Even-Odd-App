// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    isClicked: false,
    num: 0,
  }

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      isClicked: true,
      num: randomNumber,
    })
    // console.log(randomNumber)
  }

  render() {
    const {isClicked, num} = this.state
    const intialNum = 0
    const updatedNum = isClicked ? intialNum + num : intialNum
    const statusText = num % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Count {updatedNum}</h1>
          <p className="desc">Count is {statusText}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="limit">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
