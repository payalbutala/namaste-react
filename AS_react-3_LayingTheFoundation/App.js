import React from "react";
import ReactDOM from "react-dom/client";

/* // React Elements (Object) : React.createElement => Creates an Object = Object
// When it renders to DOM -> It converts to an HTML

const header = React.createElement("h1", { id: "header" }, "Namaste React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header); */

// create h1 tag using JSX ,JSX = HTML like OR XML like syntax.
/* const heading = (
  <h1 id="heading" className="heading" tabIndex="1">
    Namaste React using JSX.
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

// React Element
const TitleElement = (
  <h1 className="head" tabIndex="5">
    Namaste React Title Element
    {/* <Title /> */}
  </h1>
);

console.log(TitleElement);

// React Functional Component = just a normal Javascript function
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Title Functional Component
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {/* component Composition - Adding React Element and Functional Component */}
    {TitleElement}
    {<Title />}
    {Title()}
    {/* // SAME AS {<Title /> */}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// console.log(<HeadingComponent />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // => /* component Composition - Adding React Element in Functional Component */
// root.render(Title); // => /* component Composition - Adding Functional Component in React Element*/
