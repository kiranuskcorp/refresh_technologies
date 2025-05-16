//const header = React.createElement("h1", {id: "heading"}, "Hi Kiran");
/*<div class='parent'>
    <div class='child1'>
        <h1>child 1</h1>
    </div>
    <div class='child2'>
        <h1>child 2</h1>
    </div>
</div>*/

const parent = React.createElement('div',{class: 'parent'}, [React.createElement('div', {class: 'child1'}, React.createElement('h1', {}, 'child 1')),React.createElement('div', {class: 'child2'}, React.createElement('h1', {}, 'child 2'))] )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);