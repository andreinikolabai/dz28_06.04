function generateList(array) {
    let s = "<ul>";
    for (let i = 0, count = array.length; i < count; i++) {
        let row = array[i];
        if (Array.isArray(row)) {
            s += `<li>${generateList(row)}</li>`
        } else
            s += `<li>${row}</li>`;
    }
    s += "</ul>";
    return s;
}

let array = [1, 2, [1.1, 1.2, 1.3], 3];
let s = generateList(array);
document.body.innerHTML = s;