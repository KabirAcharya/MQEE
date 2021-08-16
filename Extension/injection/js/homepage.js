// Grab this semesters units assuming they are the first on the page
const units = document
    .querySelector('.card-text,.content,.mt-3')
    .querySelector('ul')
    .querySelectorAll('li');

// To store the a elements of the units and their position in the list
const unitsShortcutMap = {};

units.forEach((li, i) => {
    unitsShortcutMap[i + 1] = li.querySelector('a');
});

function openUnit(aElem) {
    // Some visual feedback for which unit was chosen
    aElem.focus();

    window.open(aElem.href, '_blank').focus();

    // Remove the focus
    aElem.blur();
}

function keyHandler(event) {
    // Don't trigger if modifier keys are pressed
    if (event.metaKey || event.shiftKey || event.ctrlKey || event.altKey) {
        return;
    }

    const unitNumber = Number(event.key);
    if (unitsShortcutMap[unitNumber] !== undefined) {
        openUnit(unitsShortcutMap[unitNumber]);
    }
}

document.addEventListener('keyup', keyHandler);
