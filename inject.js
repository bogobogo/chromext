// this is the code which will be injected into a given page...

// (function() {
import presentor from './presentor'
// 	// just place a div at top right
// 	var div = document.createElement('div');
// 	div.style.position = 'fixed';
// 	div.style.top = 0;
// 	div.style.right = 0;
// 	div.textContent = 'Injected!';
// 	document.body.appendChild(div);

// 	alert('inserted self... giggity');
let updated = false
// })();
chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.cmd && (msg.cmd == "showApp")) {
        if (!updated) {
        console.log("yes");

        // presentor(page)
        updated = true;
        const arrow = document.createElement("div")
        arrow.setAttribute("class", "arrow" )  
        console.log(msg.element.type)
        arrow.setAttribute("style", `position: ${msg.element.type === 'position' && 'absolute'};
                                     z-index: 999;
                                     left:${msg.element.left}px;
                                     top: ${msg.element.top}px;
                                     width: ${msg.element.width}px;
                                     height: ${msg.element.height}px;
                                     background-color: red;` ) 
        // arrow.setAttribute("id", elementId )
        // arrow.addEventListener("drag", ondrag, false);
        document.body.appendChild(arrow)
        }
        // document.appendChild()
    }
});