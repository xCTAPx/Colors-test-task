export const dataFetch = () => async dispatch => {
    let response = await fetch('data.json');
    if (response.ok) {
        let data = await response.json();
        dispatch(loadData(data));
    } else {
        throw new Error("Fetching error...");
    }
}

export const loadData = payload => ({
    type: 'DATA_FETCH',
    payload
})

export const downloadFile = () => async dispatch => {
    let el = document.createElement('a');

    let response = await fetch('data.json');
    let data = await response.json();
    let text = '[';
    for (let prop in data) {
        text += `{
            "id": "${prop}",
            "name": "${data[prop].name}",
            "sortOrder": ${data[prop].sortOrder},
            "color": "${data[prop].style.color}"
        },
        `
    }
    text += ']';
    let index = text.lastIndexOf(',');
    let arr = text.split('');
    arr.splice(index, 1);
    let resStr = arr.join('');

    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resStr));
    el.setAttribute('download', 'modified-data.json');

    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}
