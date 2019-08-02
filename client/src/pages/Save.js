import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
class Save extends Component {


    state = {
        books: []
    }

    loadBook = () => {
        API.getBook().then(res => {
            this.setState({
                books: res.data
            });
        }
        )
    }
    deletBook = () => {
        API.deleteBook()
    }


    render() {
        return (
            <div>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map((book, i) => (
                            <ListItem key={i}>
                                <a href={book.volumeInfo.previewLink}>
                                    {/* <img src={book.volumeInfo.imageLinks.previewLink} alt="hi"></img> */}
                                    <h3>title:{book.title} </h3>
                                    <p> by {book.author}</p>
                                    <p>description:{book.description}</p>
                                </a>
                                <button id={book.id} onClick={this.deleteBook}>delet</button>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        )
    }
}
export default Save