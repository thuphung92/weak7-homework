addYearField()
addRoundField()
addSubmitButton()
createErgastTable()

// Year input field
function addYearField() {
    input = document.createElement("input");
    input.placeholder = "Enter Year";
    input.name = "year";
    input.classList.add("form-control");
    document.body.appendChild(input);
}

// Round Input field
function addRoundField() {
    input = document.createElement("input");
    input.placeholder = "Enter Round";
    input.name = "round";
    input.classList.add("form-control");
    document.body.appendChild(input);
}

//Submit Button
function addSubmitButton() {
    button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Submit";
    button.classList.add("btn","btn-primary");
    button.addEventListener("click",handleSubmit)
}

function handleSubmit(event){
    year=document.getElementsByName("year")[0].value
    console.log(year)

    round= document.getElementsByName("round")[0].value
    console.log(round)

    doAPICall(year,round)
}

// create a table

function createErgastTable(){
    table = document.createElement("table");
    table.classList.add("table","table-striped")
    document.body.appendChild(table)

    thead = document.createElement("thead");
    table.appendChild(thead);

    tr = document.createElement("tr");
    thead.appendChild(tr);

    th = document.createElement("th");
    th.innerText = "First Name";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerText = "Last Name";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerText = "Position";
    th.scope="col";
    tr.appendChild(th);  
    
    th = document.createElement("th");
    th.innerText = "Wins";
    th.scope="col";
    tr.appendChild(th); 

    th = document.createElement("th");
    th.innerText = "DOB";
    th.scope="col";
    tr.appendChild(th); 

    th = document.createElement("th");
    th.innerText = "Nationality";
    th.scope="col";
    tr.appendChild(th); 

    th = document.createElement("th");
    th.innerText = "Constructor";
    th.scope="col";
    tr.appendChild(th); 

    tbody = document.createElement("tbody");
    table.appendChild(tbody);

}
    

async function doAPICall(year,round){
    result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
                                .catch((e)=>{console.log(e);alert("Bad Pokemon Name!")}).finally(console.log("Api request over"))

    if(!result){return}
  
   
    racers=result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(racers)
    
    tbody=document.getElementsByTagName('tbody')[0];

    //tr = document.createElement("tr");
    //tbody.appendChild(tr);

    
    for (let racer of racers){
        tr = document.createElement("tr");
        tbody.appendChild(tr);

        th = document.createElement('th');
        th.scope="row";
        th.innerHTML = racer.Driver.givenName;
        tr.appendChild(th);

        td = document.createElement('td');
        td.innerText=racer.Driver.familyName;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText=racer.position;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText=racer.wins;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText=racer.Driver.dateOfBirth;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText=racer.Driver.nationality;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText=racer.Constructors[0].constructorId;
        tr.appendChild(td);

    }
  
}