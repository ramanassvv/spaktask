import React from "react";

class CardMonth extends React.Component {
    constructor() {
        super();
    }
    render(props) {
        const {value, onChange} = this.props;
        const monthOptions = [];
        for (let i=1; i <= 12; i += 1) monthOptions.push(i < 10 ? '0' + i : i);
        return(
            <>
                <label htmlFor="cardMonth" className="card-input__label">
                    Expiration Date
                </label>
                <select
                    id="cardMonth"
                    className="card-input__input -select"
                    name="month"
                    onChange={onChange}
                    value={value}
                >
                    <option value="" disabled selected>Month</option>
                    {monthOptions.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
             </>
        )
    }
}

export default CardMonth;
