const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "main-header",
    "data-set": "main-header-data-set",
  },
  "Hello World from React!"
);
console.log(heading); // returns asa n object with all values as props

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading);

// create below html structure
/*
<div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/

const parentEle = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement(
      "h1",
      { key: "child1" },
      "Hello from Parent Child Tree!"
    ),
    [
      React.createElement(
        "h2",
        { key: "child2" },
        "Hello from Parent Child Tree!"
      ),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement(
      "h1",
      { key: "child1" },
      "Hello from Parent Child Tree!"
    ),
    [
      React.createElement(
        "h2",
        { key: "child2" },
        "Hello from Parent Child Tree!"
      ),
    ]
  ),
]);

console.log(parentEle);

// As there are 2 root.render then it will overwrite forst one!
root.render(parentEle);
