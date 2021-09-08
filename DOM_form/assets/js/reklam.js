function sayReklam() {
    alert("Реклама")
    
}
setTimeout(sayReklam, 3000);

const checkboxElem = document.querySelector("input[name='terms']")

function check () {
    checkboxElem.checked = true
}

setTimeout(check, 1000)