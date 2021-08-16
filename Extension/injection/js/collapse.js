function closeAll(){
    document.querySelectorAll(".toggle_open").forEach((el) => {
        el.parentElement.click();
    });
}

function openAll(){
    document.querySelectorAll(".toggle_closed").forEach((el) => {
        el.parentElement.click();
    });
}

document.addEventListener('keyup', collapseHandler);

function collapseHandler(event) {
    if (event.shiftKey && event.key == '_') {
        closeAll();
    }

    if (event.shiftKey && event.key == '+') {
        openAll();
    }
}