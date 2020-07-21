let increBtn = document.querySelector(".qty-incre");
let descBtn = document.querySelector(".qty-desc");
let input = document.querySelector("#qty");

    increBtn.addEventListener('click', (e) => {
        input.innerText = Number(input.innerText) + 1;
        return false;
    })

    descBtn.addEventListener('click', (e) => {
        input.innerText = Number(input.innerText);
            if(input.innerText > 0) {
                input.innerText = Number(input.innerText) - 1;
            } if(input.innerText < 1) {
                input.innerText = 1;
            }
            return false;
    }) 
