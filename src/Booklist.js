// snippts type rcc for class based component

import React, { Component } from 'react';
import Book from "./Book";
import booksData from './bookData';

export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: booksData
        }
    }
    state = {
        books: booksData
    };

    // very important this.setState({})
    render() {
        //const books = this.state.books.map((item) => item.book);
        return (
            <section>
                <h3>This is our Booklist</h3>
                {this.state.books.map(item => (
                    <Book key={item.id} info={item} />
                ))}
            </section>
        );
    }
}