let note = document.querySelector('.note');
        console.log(note.parentNode);

let parent = note.parentNode;
console.log(parent);

/////////////////////////////////////////////////////////////////////

let current = document.querySelector('.current');
let nextSibiling = current.nextElementSibling;
console.log(nextSibiling);

// while (nextSibiling) {
//     console.log(nextSibiling);
//     nextSibiling = nextSibiling.nextElementSibling;
// }

// Ово изнад је бесконачна петља па је зато под коментаром

let prevSibling = current.previousElementSibling;
console.log(prevSibling);

// while(prevSibling) {
//     console.log(prevSibling);
//     prevSibling = current.previousElementSibling;
// }

// Ово изнад је бесконачна петља па је зато под коментаром

let parentCurrent = document.querySelector('#menu')
console.log(parentCurrent);

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);
console.log(siblingText);