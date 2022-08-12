window.addEventListener("load", function() {
    let json = []; let count = 0;
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
            
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                <div>
                    <div class ="astronaut">
                    <div class = "bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li id="change">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                    </div>
                    <img class = "avatar" src="${json[i].picture}"></img>
                    </div>
                </div>
                `;
                if (json[i].active === "true") {
                    container.getElementById("change").style.color = "green";
                }
                count++;
            }
            



        });
        console.log(`Total number of astronauts: ${count-1}`);
    });
    
});