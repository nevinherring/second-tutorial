import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        //this.handleClick = this.handleClick.bind(this); not needed when using arrow function below
    }


    addCount = () => {
        console.log('you clicked me');
    }

    lowerCount = () => {
        console.log('you clicked me');
    }

    resetCount = () => {
        console.log('you clicked me');
    }

    render() {
        //console.log(this.props);
        const { img, book, author } = this.props.info;
        return (
            <article className="book">
                <img src={img} width="150" alt="book" />
                <div>
                    <h4>book : {book}</h4>
                    <h6>author : {author}</h6>
                    <button type="button" onClick={this.addCount}>
                        Add Count
                    </button>
                    <button type="button" onClick={this.resetCount}>
                        Reset Count
                    </button>
                    <button type="button" onClick={this.lowerCount}>
                        Lower Count
                    </button>
                </div>
            </article>
        )
    }
}