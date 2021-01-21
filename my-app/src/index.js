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
const firstBook = {
    img:
        "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg",
    author: "Barack Obama",
    title: "A Promised Land",
};
const secondBook = {
    img:
        "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL320_SR210,320_.jpg",
    author: "Michelle Obama",
    title: "Becoming",
};

function BookList() {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            />
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};
ReactDom.render(<BookList />, document.getElementById("root"));
//1h39m
