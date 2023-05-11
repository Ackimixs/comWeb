// ----------------- utils -------------------
function showhide(id) {
  let e = document.getElementById(id);
  let eClasses = e.classList;
  eClasses.toggle('d-none');
}
// ----------------- Gihub API -------------------
const github = document.getElementById("github");
github.addEventListener('click', showGithub);
function showGithub() {
  showhide("githuarea");
  showhide("catarea");
}
// To do
// ----------------- Cat API -------------------
const cat = document.getElementById("cat");
cat.addEventListener('click', showCat);
function showCat() {
  showhide("catarea");
  showhide("githuarea");
}
// To do

async function fetchGithubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

document.querySelector("#respgithub").addEventListener("click", () => {
    let username = document.querySelector("#githubname").value;
    fetchGithubProfile(username).then((data) => {
      console.log(data);
        document.querySelector("#githubinfo").innerHTML = `Nom : ${data.name} <br> Affiliation : ${data.company} <br> Site web : ${data.blog} <br> Photo de prodile : <img src="${data.avatar_url}" alt="avatar" />`;
    })
})

document.querySelector("#respcat").addEventListener("click", () => {
    let input = document.querySelector("#texteinimage").value;
    const date = new Date().getTime()
    document.querySelector("#catimg").innerHTML = `<img src="https://cataas.com//cat/says/${input}?size=40/?ts=${date.toString()}" alt="cat" />`;
})