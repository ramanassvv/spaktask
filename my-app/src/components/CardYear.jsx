import React from "react";


const minOffset = 0;
const maxOffset = 25;
class CardYear extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {value, onChange} = this.props;
        const yearOption = [];
        const thisYear = (new Date()).getFullYear();
        for (let i = minOffset; i <= maxOffset; i++) {
            const year = thisYear - i;
            yearOption.push(year);
        }
        return (
            <>
                <select
                    id="cardYear"
                    className="card-input__input -select"
                    name="year"
                    onChange={onChange}
                    value={value}
                >
                    <option value="" disabled selected>Year</option>
                    {yearOption.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
             </>
        )
    }

}

export default CardYear;
