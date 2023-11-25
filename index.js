function submitData(name, email){

    /*const userName  = document.getElementById('username')
    //const userEmail = document.getElementById('userEmail')
    //const userData = {
        userName: userName,
        userEmail: userEmail,
    }*/
    
    const configurationObject = {
        method: "POST",
        headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(
        {
            name: name,
            email: email,
        }
        ),
    }
    //fetch("http://localhost:3000/users", configurationObject)
    
    
   return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const idd = document.createElement('p')
        idd.textContent = `New ID: ${object.id}`
        document.body.appendChild(idd)
    })
    .catch(function (error) {
        const errorElement = document.createElement('p')
        errorElement.textContent = `Error: ${error}`
        document.body.appendChild(errorElement)
    })

    
}