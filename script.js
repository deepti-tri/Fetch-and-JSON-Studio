window.addEventListener("load", function() {
    let json = []; 
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            
            const container = document.getElementById("container");
            json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
            container.innerHTML = `<h3>Number of Astronauts = ${json.length}</h3>`
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                <div>
                    <div class ="astronaut">
                    <div class = "bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li class="${json[i].active}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                    </div>
                    <img class = "avatar" src="${json[i].picture}"></img>
                    </div>
                </div>
                `;
                
                
                
            }
        



        });

        
    });
    
    
});