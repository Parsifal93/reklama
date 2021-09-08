const form = document.getElementById("form_login")

function callback(event){
    console.dir(event.target)
    event.preventDefault()
    console.log(event.target.children)
    console.log(event.target.children[0].value)
    console.log(event.target.children[1].value)
}

form_login.addEventListener("submit",callback)