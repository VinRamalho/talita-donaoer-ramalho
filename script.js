document.getElementById('images').style.display = "none"
const botaoNao = document.getElementById('nao');
const botaoSim = document.getElementById('sim');
let x;
let y;
let cont = false;




function myFunction(resolucao) {
    if (resolucao.matches) { // If media query matches
        botaoNao.addEventListener('click', (e) => {
            cont = true;
            x = e.offsetX
            y = e.offsetY
            botaoNao.style.position = "absolute";
            botaoNao.style.left = x + Math.floor(Math.random() * (200 - 5) + 5) + "px";
            botaoNao.style.top = y + Math.floor(Math.random() * (330 - 100) + 100) + "px";
            botaoSim.style.marginBottom = 20 + "%"
        });
        botaoNao.addEventListener('mouseenter', (e) => {
            if (cont == true) {
                setTimeout(() => {
                    botaoNao.style.position = "absolute";
                    botaoNao.style.left = x + Math.floor(Math.random() * (700 - 420) + 420) + "px";
                    botaoNao.style.top = y + Math.floor(Math.random() * (330 - 50) + 50) + "px";
                    botaoSim.style.marginBottom = 20 + "%"
                    console.log('1 seg');
                }, 500)
            } else {
                e.preventDefault()
            }
        })

        botaoSim.addEventListener('click', () => {
            document.getElementById('buttons').style.display = "none"
            document.getElementById('images').style.display = "inline"
            document.getElementById('titulo').innerText = "Acertou meu amor!!  ❤😍"
            document.getElementById('body').style.backgroundImage = "url(images/fogos-iphone.jpg)";
            document.getElementById('body').style.backgroundSize = "100%"
        })
    } else {
        botaoNao.addEventListener('click', (e) => {
            cont = true;
            console.log(e.offsetX);
            x = e.offsetX
            y = e.offsetY
            botaoNao.style.position = "absolute";
            botaoNao.style.left = x + Math.floor(Math.random() * (700 - 420) + 420) + "px";
            botaoNao.style.top = y + Math.floor(Math.random() * (330 - 50) + 50) + "px";
            botaoSim.style.marginBottom = 20 + "%"
        });
        botaoNao.addEventListener('mouseenter', (e) => {
            if (cont == true) {
                setTimeout(() => {
                    botaoNao.style.position = "absolute";
                    botaoNao.style.left = x + Math.floor(Math.random() * (700 - 420) + 420) + "px";
                    botaoNao.style.top = y + Math.floor(Math.random() * (330 - 50) + 50) + "px";
                    botaoSim.style.marginBottom = 20 + "%"
                    console.log('1 seg');
                }, 500)
            } else {
                e.preventDefault()
            }
        })

        botaoSim.addEventListener('click', () => {
            document.getElementById('buttons').style.display = "none"
            document.getElementById('images').style.display = "inline"
            document.getElementById('titulo').innerText = "Acertou meu amor!!  ❤😍"
            document.getElementById('body').style.backgroundImage = "url(images/fogos.jpg)";
            document.getElementById('body').style.backgroundSize = "100%"
        })
    }
}

var resolucao = window.matchMedia("(max-width: 700px)")
myFunction(resolucao) // Call listener function at run time
resolucao.addListener(myFunction) // Attach listener function on state changes