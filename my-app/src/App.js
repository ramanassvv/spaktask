import React from "react";
import CardList from "./components/CardList";
import CardInput from "./components/CardInput";
import CardMonth from "./components/CardMonth";
import CardYear from "./components/CardYear";

class App extends React.Component {
  state = {
    cardNumber: '',
    cardHolder: '',
    month: '',
    year: '',
    cvv: '',
    focus: false
  };

  isNumber = (num) => (/^[\d]*$/g).test(num) && num !== "";

  isName = (name) => (/^[A-Za-z]+$/).test(name) && name !== "";

  handleChange = evt => {
    const { name, value } = evt.target;
    if ((name === "cardNumber" && this.isNumber(value)) || (name === "cardNumber" && value === "") || (name !== "cardNumber")) {
      this.setState({ [name]: value });
    }
  };

  handleName = (e) => {
    const { name, value } = e.target;
    if ((name === "cardHolder" && this.isName(value)) || (name === "cardHolder" && value === "") || (name !== "cardHolder")) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = () => {
    console.log("Card: ", this.state);
  };

  handleValue = (e) => {
    this.setState({ cvv: e.target.value})
  }

  render() {
    const { year, month, cardHolder, cardNumber, cvv, focus } = this.state;
    console.log('$$$$$', cvv);
    return (
        <div className="card-form">
          <CardList name={cardHolder} num={cardNumber} month={month} cvv={cvv} year={year} focus={focus}/>
          <div className="card-form__inner">
            <CardInput htmlFor="cardNumber" labelName="Card Number" name="cardNumber" maxLength={16}  value={cardNumber} onChange={this.handleChange} />
            <CardInput htmlFor="cardName" labelName="Card Name" name="cardHolder" maxLenght={25} value={cardHolder} onChange={this.handleName} />
            <div className="card-form__row">
              <div className="card-form__col">
                <div className="card-form__group">
                  <CardMonth value={month} onChange={this.handleChange} />
                  <CardYear value={year} onChange={this.handleChange} />
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="cardCvv" className="card-input__label">
                    CVV
                  </label>
                  <input
                      name="cvv"
                      type="text"
                      maxLength={4}
                      autoComplete="off"
                      className="card-input__input"
                      onChange={this.handleValue}
                      onFocus={() => {this.setState({focus: true})}}
                      onBlur={() => {this.setState({focus: false})}}
                  />
                </div>
              </div>
            </div>
            <button className="card-form__button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
    );
  }
}

export default App;
