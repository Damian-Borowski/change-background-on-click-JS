const x = window.clientX;
const y = window.clientY;

const data = function (e) {
    console.log(e.clientX, e.clientY);

    // if ((e.clientX % 2 == 0) && (e.clientY % 2 == 0)) {
    //     document.body.style.backgroundColor = "red";
    // } else if ((e.clientX % 2 !== 0) && (e.clientY % 2 !== 0)) {
    //     document.body.style.backgroundColor = "blue";
    // } else {
    //     document.body.style.backgroundColor = "green";
    // }
    let color = changeColor(e);
    document.body.style.backgroundColor = color;

}

let changeColor = function (e) {
    if (e.clientX % 2 === 0) {
        if (e.clientY % 2 === 0) {
            return "red";
        } else {
            return "green";
        }

    } else {
        if (e.clientY % 2 === 0) {
            return "green";
        } else {
            return "blue";
        }
    }
}

document.addEventListener("click", data)