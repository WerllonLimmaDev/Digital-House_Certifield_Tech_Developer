window.onload = function () {
    getChildren(document.body);
}

function getChildren(mytag) {

    const nodeIter = document.createNodeIterator(
        mytag,
        NodeFilter.SHOW_ELEMENT,
        (node) => {
            return NodeFilter.FILTER_ACCEPT;
        }
    );

    let cnode;

    while (cnode = nodeIter.nextNode()) {
        console.log(cnode.tagName.toLowerCase());
    }
}

















/*Document.createNoteInterator()

const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    (node) => node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
);
const pars = [];
let currentNode;

while (currentNode = nodeIterator.nextNode()) {
  pars.push(currentNode);
}*/