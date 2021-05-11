document.addEventListener('keydown', tabFixHandler);

function tabFixHandler(event) {
    if (event.key == "Tab") {
        if (document.activeElement.attributes.contenteditable !== undefined
            && document.activeElement.attributes.role !== undefined
            && document.activeElement.attributes.role.value == "textbox") {
            event.preventDefault();
            appendAtCursor(document.activeElement, "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    }
}

function appendAtCursor(element, content) {
    var sel, range
    sel = window.getSelection();
    range = sel.getRangeAt(0);
    range.deleteContents();
    var el = document.createElement("div");
    el.innerHTML = content;
    var frag = document.createDocumentFragment(), node, lastNode;
    while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);

    if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}