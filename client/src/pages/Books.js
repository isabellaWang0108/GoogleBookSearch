import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input} from "../components/Form";
import API from "../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    search:"hi"
  };

  // Add code here to get all books from the database and save them to this.state.books
  loadBook = () => {
    API.getBooks(this.state.search).then(res => {
      this.setState({
        books: res.data.items
      });
    }
    )
  }
  searchBook=(event)=>{
    this.setState({search:event.target.value});
    this.loadBook();
  }

  componentDidMount() {
    this.loadBook();
  }

  saveBook = event => {
    event.preventDefault();
      API.saveBook({
        title: event.target.title,
        author: event.target.author,
        description: event.target.description,
        href:event.target.href,
        id:event.target.id
      })
        .then(res => {console.log(res)})
        .catch(err => console.log(err));
    // }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6"> */}
          {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
          <form>
              <Input name="title" placeholder="search by title" value={this.state.search} onChange={this.searchBook}/>
              
            </form>
          {/* </Col> */}

  
        </Row>
        <Row>
          {this.state.books.length ? (
            <List>
              {this.state.books.map((book, i) => (
                <ListItem key={i}>
                  <a href={book.volumeInfo.previewLink}>
                    {/* <img src={book.volumeInfo.imageLinks.previewLink} alt="hi"></img> */}
                    <h3>title:{book.volumeInfo.title} </h3>
                    <p> by {book.volumeInfo.authors}</p>
                    <p>description:{book.volumeInfo.description}</p>
                  </a>
                  <button id={book.id} title={book.volumeInfo.title} href={book.volumeInfo.previewLin} description={book.volumeInfo.description} author={book.volumeInfo.authors} onClick={this.saveBook}>save</button>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>
    );
  }
}

export default Books;
