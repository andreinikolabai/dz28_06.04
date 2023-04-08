let array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
    let list = "<ul>";
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        if (Array.isArray(row)) {
            list += `<li>${generateList(row)}</li>`
        } else
            list += `<li>${row}</li>`;
    }
    list += "</ul>";
    return list;
}

document.body.innerHTML = generateList(array);