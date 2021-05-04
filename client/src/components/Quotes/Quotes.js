import QuotesRotator from "react-quotes-rotator";
import React, { Component } from "react";

export const quotes = [
    {
        title: "Car Quotes - Car Buying",
        content:
            "Always check the Carfax before buying a car.",
        footnote: "Joshua Malone",
        pic: "https://i.imgur.com/3BeKnHa.png"
    },
    {
        title: "Tire Pops Sometimes",
        content:
            "It's okay to cry if your tire pops.",
        footnote: "Roseanne Nguyen",
        pic: "https://i.imgur.com/JGKEPk8.png"
    },
    {
        title: "Number One Mechanic Rule",
        content:
            "Put the tools back where you found them when you're done using them.",
        footnote: "Jammie Hardy",
        pic: "https://i.imgur.com/69TaJPw.png"
    },
    {
        title: "What does Yoda drive?",
        content:
            "A toyota.",
        footnote: "Alicia Qiu",
        pic: "https://i.imgur.com/ZCH8UUS.png"
    }
];


class Quotes extends Component {

    render() {
        return (


            <QuotesRotator
                data={quotes}
                progressBarColor="#B5D43C"
                backgroundColor="#000"
                textColor="#fff"
                timer="5000"
            />


        )
    }
}

export default Quotes
