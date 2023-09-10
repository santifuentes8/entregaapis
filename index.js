const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#container");


fetch(`${API_URL}/users`)
.then (response => response.json())
.then((users)=> {
   const mapear= users.map((user) =>  `<li>${user.name}</li>`);
   HTMLResponse.innerHTML= `<ul>${mapear}</ul>`;
});
