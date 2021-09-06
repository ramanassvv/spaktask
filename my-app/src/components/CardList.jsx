import React from "react";
import CardItem from "./CardItem";
import _ from 'lodash'

const Number = ({ num }) => {
    num = num.replace(/ /g, "");
    return [...num].map((v, i) => {
        return (
            <CardItem
                key={i}
                num={i > 3 && i < 12 ? "#" : v}
                active={(i + 1) % 4 === 0}
            />
        );
    });
};

const getCardType = num => {
    let reg = new RegExp("^4");
    if (num.match(reg) !== null) return "visa";

    reg = new RegExp("^5[1-5]");
    if (num.match(reg) !== null) return "mastercard";

    reg = new RegExp("^6[1-5]");
    if (num.match(reg) !== null) return "discover";

    return "visa";
};

const CardList = props => {
    const { name, num, year, month, focus, cvv } = props;
    const holderName = !name ? "FULL NAME" : name;
    const cardMonth = !month ? 'MM' : month;
    const cardYear = !year ? 'YY' : String(year).slice(2,4);
    return (
        <div className="card-list">
            <div className="card-item">
                <div className={focus ? "card-item__side -back" : "card-item__side -front" }>
                    <div className="card-item__focus -active" />
                    <div className="card-item__cover">
                        <img
                            src="img/card-bgm.jpeg"
                            className="card-item__bg"
                            alt="Card Background"
                        />
                    </div>
                    <div className="card-item__wrapper">
                        <div className="card-item__top">
                            <img
                                src="img/chip.png"
                                className="card-item__chip"
                                alt="Credit Card Chip"
                            />
                            <div className="card-item__type">
                                <img
                                    src={`img/${getCardType(num)}.png`}
                                    alt={`${getCardType(num)} Logo`}
                                    className="card-item__typeImg"
                                />
                            </div>
                        </div>
                        <label htmlFor="cardNumber" className="card-item__number">
                            <Number num={!_.isEmpty(num) ? num : '#### #### #### ####'} />
                        </label>
                        <div className="card-item__content">
                            <label htmlFor="cardName" className="card-item__info">
                                <div className="card-item__holder">Card Holder</div>
                                <div className="card-item__name">{holderName}</div>
                            </label>
                            <div className="card-item__date">
                                <label htmlFor="cardMonth" className="card-item__dateTitle">
                                    Expires
                                </label>
                                <label htmlFor="cardMonth" className="card-item__dateItem">
                                    <span>{cardMonth}</span>
                                </label>
                                /
                                <label htmlFor="cardYear" className="card-item__dateItem">
                                    <span>{cardYear}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={focus ? "card-item__side -front" : "card-item__side -back"}>
                    <div className="card-item__cover">
                        <img
                            src="img/card-bgm.jpeg"
                            className="card-item__bg"
                            alt="Card Background"
                        />
                    </div>
                    <div className="card-item__band" />
                    <div className="card-item__cvv">
                        <div className="card-item__cvvTitle">CVV</div>
                        <div className="card-item__cvvBand">{cvv}</div>
                        <div className="card-item__type">
                            <img
                                src={`img/${getCardType(num)}.png`}
                                alt={`${getCardType(num)} Logo`}
                                className="card-item__typeImg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardList;
