import React, { Component } from 'react';

export default class Book extends Component {
    render() {
        //console.log(this.props);
        const { book, author } = this.props.book;
        return (
            <article>
                <h3>book : {book}</h3>
                <h5>author : {author}</h5>
            </article>
        )
    }
}