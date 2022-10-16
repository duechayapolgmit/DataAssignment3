import React from "react";
import bookData from "./books.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//there is no book class for this, instead it directly goes to BookItems
export class Read extends React.Component{
    constructor(props) {
        super(props)

        this.state = { books: bookData};
    }

    render(){
        return(
            <div>
                <h3>Hello from Read component</h3>
                <h1>Read Component</h1>
                {this.state.books.map((book)=>(
                <BookItems
                    title={book.title}
                    isbn={book.isbn}
                    pageCount={book.pageCount}
                    thumbnailUrl={book.thumbnailUrl}
                    statusB={book.status}
                    authors={book.authors[0]}
                    categories={book.categories}
                />
                ))}
            </div>
        );
    }
}

//Book component via constant
const BookItems = ({title, isbn, pageCount, thumbnailUrl,statusB, authors, categories}) => (
    <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Img src={thumbnailUrl} style={{width:'200px'}}/>
            <Card.Text>{authors}</Card.Text>
        </Card.Body>
        
    </Card>
)