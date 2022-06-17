// Add your code here
function submitData (userName, userEmail) {

    let UserDetail = {
        "name": userName,
        "email": userEmail
    }

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(UserDetail)
    })
    .then (response1 => response1.json())
    .then (response2 => {
        document.body.textContent = `${response2.id}`
    })
    .catch ((error) => {
        //console.log(error)
        console.log(error.message)
        document.body.textContent = error.message
})}

