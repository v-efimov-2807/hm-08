
export function createSimpleNode(tag, className, parentNode) {
    const node = document.createElement(tag);
    node.className = className;
    return parentNode.appendChild(node);
}

export function createSimpleNodeWithData(tag, className, parentNode, data) {
    const node = document.createElement(tag);
    node.className = className;
    node.innerText = data;
    return parentNode.appendChild(node);
}