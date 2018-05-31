function appendElement(element, elmInstance)  { 
    if (element.display === 'absolute') { 
        document.appendChild(elmInstance)
    } else if (element.display === 'attachToElement') {
        console.log('to be created')
    } else if (element.display === 'attachToText') { 
        console.log('to be created')
    }
}

function createElement(element) { 
    if (element.type)
    document.createElement(element.tag)
}
function display(element) { 
    elmInstance = createElement(element);
    addStyles(elmInstance, element.styles)
    appendElement(element, elmInstance)
}

function presentor(page) { 
    page.elements.forEach(elementId => {
       display(page.elementId) 
    });
}

module.exports = presentor