const findButton = document.getElementById("findButton");
const addButton = document.getElementById("addButton");
const input = document.getElementById("pokeInput");
const image = document.getElementById("pokeImg");
const sound = document.getElementById("pokeSound");
const moveSelects = document.querySelectorAll(".moveSelect");
const teamDiv = document.getElementById("team");

let cache = {};
let curPoke = null;
let team = [];

findButton.addEventListener("click", fetchPoke);
addButton.addEventListener("click", addToTeam);

function fetchPoke(){
    const name = input.value.toLowerCase().trim();

    if(!name) return;

    if(cache[name]){
        loadPoke(cache[name]);
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            cache[name] = data;
            loadPoke(data);
        })
        .catch(error => {
            alert("Pokemon not found");
        });
}

function loadPoke(data){
    curPoke = data;
    image.src = data.sprites.front_default;
    sound.src = data.cries?.latest || "";

    const moves = data.moves;

    moveSelects.forEach(select =>{
        select.innerHTML = "";
        moves.forEach(moveObj =>{
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });
}

function addToTeam(){
    if(!curPoke) return;

    const selectedMoves = Array.from(moveSelects).map(select => select.value);

    const pokemon = {
        name: curPoke.name,
        image: curPoke.sprites.front_default,
        moves: selectedMoves
    };

    team.push(pokemon);
    displayTeam();
}

function displayTeam(){
    teamDiv.innerHTML = "";

    team.forEach(member =>{
        const div = document.createElement("div");
        div.classList.add("team-member");

        div.innerHTML = `
            <img src="${member.image}" width="80">
            <div>
                <strong>${member.name}</strong>
                <ul>
                    ${member.moves.map(m => `<li>${m}</li>`).join("")}
                </ul>
            </div>
        `;

        teamDiv.appendChild(div);
    });
}
