let loader = document.getElementById("loader")
let container = document.createElement("container")
container.className = ("container")
const url = 'https://veil-tricky-timpani.glitch.me/profile';
const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

async function getProfiles() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("http error :")
        }
        const result = await response.json();
        loader.remove()
        displayData(result);
    } catch (err) {
        console.error(err);
    }
}

function displayData(movies) {
    movies.forEach(obj => {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
            <img src='${obj.organization_logo}' class='image'>
            <p>organization :${obj.organization}</p>
             <p>title :${obj.title}</p>
            <p>Location : ${obj.locations_derived}</p>
            <p>date_validthrough :${obj.date_validthrough}</p>

    `;
        container.appendChild(item)
    });
    document.body.appendChild(container)
}
window.addEventListener("DOMContentLoaded", function () {
    getProfiles()
})


