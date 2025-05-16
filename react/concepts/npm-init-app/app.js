import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',{className: 'parent'}, [React.createElement('div', {className: 'child1'}, React.createElement('h1', {}, 'child 1')),React.createElement('div', {className: 'child2'}, React.createElement('h1', {}, 'child 2'))] )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);