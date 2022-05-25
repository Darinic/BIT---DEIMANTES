import Book from "./Book";
import { useState, useEffect } from "react";
import Loader from "./Loader/Loader";
const Books = () => {
    const [books, setBooks] = useState([])
    const [errorMsg, setErrorMsg] = useState()
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch("https://in3.dev1/knygos/")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((err) =>setErrorMsg(err.message))
    }, [])

    useEffect(() => {
        fetch("https://in3.dev1/knygos/types/")
        .then((response) => response.json())
        .then((data) => setTypes(data))
        .catch((err) =>console.log(err))
    }, [])
    return (  
        <>
        <div>
            {books.length > 0 ?  (
            books.map((book) => (
                <Book 
                key={book.id}
                title={book.title}
                url={book.img}
                author={book.author}
                price={book.price}
                type={types.length > 0 && types.find((type) => type.id === book.type).title}
                />
            ) )
            ) : (
                <Loader />
            )}

            {errorMsg && <h1>{errorMsg}</h1>}
        </div>
        </>
    );
}
 
export default Books;