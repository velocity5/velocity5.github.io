let increBtn = document.querySelector(".qty-incre");
let descBtn = document.querySelector(".qty-desc");
let input = document.querySelector("#qty");

increBtn.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = parseInt(input.value) + 1;
})
descBtn.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = parseInt(input.value) - 1;
}) 