
// create a function inside init that add an event listener
// to the form element we want to the DOM to target

const init = () => {
  
const inputForm = 
document.querySelector("form");
inputForm.addEventListener('submit', (event) => {event.preventDefault();
    console.log(event);
    const input = 
   document.querySelector("input#searchByID");
   console.log(input.value);

   fetch(`http://localhost:3000/movies/${input.value}`)
   .then((response) => response.json())
   .then((data) => {
    const title =
document.querySelector("section#movieDetails h4");
    const summary = 
document.querySelector("section#movieDetails p");

    title.innerText = data.title;
    summary.innerText = data.summary;
    console.log(data);
   });
});
};

document.addEventListener('DOMContentLoaded', init);