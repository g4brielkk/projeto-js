//efeito navbar
window.onscroll = function() {navbRolagem()};

        function navbRolagem() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0px";
                document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.72)";
                document.getElementById("logo").style.fontSize= "16px";
                document.getElementById("logo").innerText= "BAT-HOME";
                document.getElementById("logo").style.color= "yellow";
            } else {
                document.getElementById("navbar").style.top = "-4px";
                document.getElementById("navbar").style.background = "transparent";
                document.getElementById("logo").style.fontSize= "22px";
                document.getElementById("logo").innerHTML= "HOME";
                document.getElementById("logo").style.color= "white";
            }
        }

//efeito escrever na tela
function efeitoEscrever(elemento){
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
               setTimeout(() => {
                   elemento.innerHTML += letra
                }, 75 * i);
            });
        }

const titulo  = document.getElementById('textH');
onload = efeitoEscrever(titulo);

//contador de resultados 
const cont = document.querySelectorAll('[data-counter]');
var executou = false;

function contadorAnimado(){
    const topPagina = window.pageYOffset + ((window.innerHeight * 3) / 4);  
    cont.forEach((elemCont) => {
        
        if (topPagina > (elemCont.offsetTop - 100) && executou === false){
            const valorCont = document.querySelectorAll('.counter');
            const intervalo = 7000;
            executou = true;        
            valorCont.forEach ((valor) => {
                let valorInicial = 0;
                let valorFinal = parseInt(valor.getAttribute("data-counter"));
                let duracao = Math.floor(intervalo / valorFinal);
                let contador = setInterval(() => {
                    valorInicial += 1;
                    valor.textContent = valorInicial;
                    if (valorInicial ==  valorFinal){
                        clearInterval(contador);
                    }
                }, duracao);
                            
             });
        }
    });
}

window.addEventListener('scroll', function (){
    contadorAnimado();
})

//efeito Parallax imagem 
$('.parallax-window').parallax({imageSrc: 'imagens/img_servicos.png'});

//filtro galeria
$(function (){
    $('.list').click(function(){
        const filtro = $(this).attr('data-filter');
        if(filtro == 'all'){
            $('.itemBox').show();
        }else {
            $('.itemBox').not('.'+filtro).hide('1000');
            $('.itemBox').filter('.'+filtro,).show('1000');
        }
    });

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

//galeria de Projetos
var modal = document.getElementById("worksModal");
var img = document.querySelectorAll(".worksImg");
var modalImg = document.getElementById("modal");
var legenda = document.getElementById("caption");
let srcImg="";

for(let i =0; i<img.length;i++){
    img[i].addEventListener('click',function(){
        modal.style.display = "block";
        srcImg = img[i].getAttribute('src');
        modalImg.setAttribute('src', srcImg);
        legenda.innerHTML = this.alt;
    });  
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

//blog
function redirecionarUrl(){
    window.location.href = "https://store.steampowered.com/app/313102/Batman_Arkham_Knight__A_Matter_of_Family/?curator_clanid=4459418";
}

function redirecionarLoad(){

   document.getElementById("loading").style.display = "block";
    setTimeout(function() {
        window.location.href = "https://store.steampowered.com/app/313100/Batman_Arkham_Knight__Harley_Quinn_Story_Pack/?curator_clanid=4459418http://www.google.com";
    }, 3000);
}

//depoimentos
var slideIndex = 1;
mostrarSlides(slideIndex);

function correrSlide(n) {
    mostrarSlides(slideIndex = n); //controle da posição
}

function mostrarSlides(n) {
  let slides = document.getElementsByClassName("carrouselArea");
  let carrousel = document.getElementsByClassName("dot");
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";    //controla a apresentação de um slide após o outro
  }
  
  for (i = 0; i < carrousel.length; i++) {
    carrousel[i].className = carrousel[i].className.replace(" active", ""); //controla a cor das bolinhas
  }

  slides[n-1].style.display = "block";
  carrousel[n-1].className += " active";
}


