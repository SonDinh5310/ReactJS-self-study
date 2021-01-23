import React from "react";
import ReactDom from "react-dom";
/*stateless fucntional component always return JSX */

//JSX rules
/*
- return single element
- div/section/article of Fragment
- use camelCase for HTML attribute
- className instead class
- close every element
- formatting
*/
// function Greeting() {
// return (
//     <div className="">
//         <h3>hello people</h3>
//         <ul>
//             <li>
//                 <a href="#">hello world</a>
//             </li>
//             <img src="" alt=""/>
//             <input type="text"/>
//         </ul>
//     </div>
// );
//     return (
//         <div>
//             {/* <h2>John doe</h2> */}
//             <Person />
//             <Message />
//         </div>
//     );
// }

// const Person = () => <h2>John Doe</h2>;

// const Message = () => {
//     return <p>this is my message</p>;
// };
// const Greeting = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "hello world")
//     );
// };

//* CSS
import "./index.css";
//* Setup
import { books } from "./books";
import Book from "./Book";

function BookList() {
    return (
        <section className="booklist">
            {books.map((book, index) => {
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));
//1h39m
