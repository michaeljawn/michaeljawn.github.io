//show filter
function showFilter(){
    const filter = document.getElementById("filterContent");
    const add = document.getElementById("newContent");

    filter.style.display = "block";
    add.style.display = "none";
}

//show add new
function showAddNew(){
    const filter = document.getElementById("filterContent");
    const add = document.getElementById("newContent");

    add.style.display = "flex";
    filter.style.display = "none";
}

// filter articles
function filterArticles(){
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    document.querySelectorAll('article.opinion').forEach(article => article.style.display = showOpinion ? '' : 'none');
    document.querySelectorAll('article.recipe').forEach(article => article.style.display = showRecipe ? '' : 'none');
    document.querySelectorAll('article.update').forEach(article => article.style.display = showUpdate ? '' : 'none');
}

// add new article
function addNewArticle(){
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;
    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    let genre = "";
    let genreName = "";

    if(opinionRadio.checked){
        genre = "opinion";
        genreName = "Opinion";
    } else if(recipeRadio.checked){
        genre = "recipe";
        genreName = "Recipe";
    } else if(lifeRadio.checked){
        genre = "update";
        genreName = "Update";
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(genre);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = genreName;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);

    document.getElementById("articleList").appendChild(newArticle);
}