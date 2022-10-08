
document.getElementById('p-button').addEventListener('click', () => {
    let newP = document.createElement('p');
    let newText = document.getElementById('p-input');
    let newDiv = document.getElementById('p-div');
    newP.appendChild(newText);
    document.body.insertBefore(newP, newDiv);
    newP.insertAdjacentText("beforebegin", newText.value);
    document.getElementById(`p-input`).value = '';
});
