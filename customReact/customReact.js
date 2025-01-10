//reactElement - object representing an HTML element.
//container - DOM element where the generated HTML element should be appended.
function customRender(reactElement, container){
    //create DOM element based on the specified type in reactElement
    const domElement = document.createElement(reactElement.type);
    //children property of the reactElement specifies the content of the DOM element
    domElement.innerHTML = reactElement.children;
    //Assign Attribute.

    for (const prop in reactElement.props) {
        //Checks if the current prop is === 'children'
        //if true, it skips the rest of the loop for that iteration and moves to the next property using continue..
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    //fully constructed DOM element (<a>) is appended to the specified container (mainContainer).
    container.appendChild(domElement)

    /*
    const domElement =  document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.href)

    container.appendChild(domElement)
    */
}

//React-like Object Representation
const reactElement = {
    type: 'a', //tag type ('div', 'a', 'p')
    props: {   //attributes or properties of an element
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google', //the inner content of the element
}
const mainContainer = document.getElementById("root");

//what to render, where to render
customRender(reactElement, mainContainer)