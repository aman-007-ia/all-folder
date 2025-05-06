import React from "react";

const Test = () => {
  return <div>Test</div>;
};

export default Test;

// function Greeting() {
//   return <h1>Hi this my first app</h1>;
// }
// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h3>Hello world</h3>
//         <ul>
//           <li>
//             <a href="#">Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h1>Hello world</h1>
//       </div>
//       <input type="button" value="text" />
//     </>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }
// const Person = () => <h1>John deo</h1>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// const names = ["Aman", "John", "deo"];

// const newName = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });
// console.log(newName);

// function BookList() {
//   return (
//     <section className="bookList">
//       {names.map((name) => {
//         return <h1>{name}</h1>;
//       })}
//     </section>
//   );
// }

// const EventExamples = () => {
//   function handleFormInput(e) {
//     // console.log(e.target.value);
//     // console.log(e.target.name);
//     // console.log("handle form input");
//   }
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form Submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={handleFormInput}
//         />
//       </form>
//       <button type="submit" onClick={handleFormSubmission}>
//         submit
//       </button>
//       <div>
//         <button onClick={handleButtonClick}>click me</button>
//       </div>
//     </section>
//   );
// };

// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={(e) => console.log(e.target.value)}
//         />
//       </form>
//       <button type="submit">submit</button>
//       <div>
//         <button onClick={() => console.log("click me")}>click me</button>
//       </div>
//     </section>
//   );
// };

// function BookList() {
//   const someValue = "shakeAndBake";
//   const displayValue = () => {
//     console.log(someValue);
//   };
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} displayValue={displayValue} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author, displayValue } = props;
//   const displayTitle = () => {
//     console.log(title);
//   };
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayValue}>display title</button>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// function BookList() {
//   const getBook = (id) => {
//     const book = books.find((book) => book.id === id);
//     console.log(book);
//   };
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} getBook={getBook} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author, getBook, id } = props;
//   // one and second way invoke function
//   // const getSingleBook = () => {
//   //   getBook(id);
//   // };
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={() => getBook(id)}>display title</button>
//       <h4>{author}</h4>
//     </article>
//   );
// };
