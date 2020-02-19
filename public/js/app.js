console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`Weather form submitted for ${search.value}`)

  p1.textContent = "";
  p2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${search.value}`).then(response => {
    response.json().then((data) => {
      if (data.error) {
        console.log(`ERROR: ${data.error}`);
        p1.textContent = data.error;
      } else {
        console.log(data.location);
        console.log(data.forecast);
        p2.textContent = `${data.location}:${data.forecast}`
      }
      console.log(data);
    });
  });

})
