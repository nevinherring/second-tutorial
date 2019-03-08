// snippts type rcc for class based component

import React, { Component } from 'react';
import Book from "./Book";

export default class Booklist extends Component {
    state = {
        books: [
            {
                id: 1,
                book: "book number one",
                author: "john doe"
            },
            {
                id: 2,
                book: "book number two",
                author: "bobby doe"
            },
            {
                id: 3,
                book: "book number three",
                author: "peter doe"
            }
        ]
    }

    // very important this.setState({})
    render() {
        //const books = this.state.books.map((item) => item.book);
        return (
            <section>
                <h3>This is our Booklist</h3>
                {this.state.books.map((item) => <Book key: {item.id} info={item} />)}
            </section>
        )
    }
}