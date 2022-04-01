var login = document.querySelector('.login');
var searcher = document.querySelector('.input_buscador');
var logo_sup = document.querySelector('.logo_superior');
var mediaqueryList = window.matchMedia("(max-width: 767px)");
var interruptor = false;

function searchElement(){
    if(mediaqueryList.matches) {
        switch (interruptor) {
            case false:
                searcher.style.transition = 'width 1s, opacity 4s';
                searcher.style.width = '80vw'
                login.style.display = 'none';
                logo_sup.style.display = 'none';
                searcher.style.opacity = '1';                
                interruptor = true;
                document.querySelector('.icon_search').src = "./img/searchX.png";
                break;
            case true:
                searcher.style.opacity = '0';
                searcher.style.width = '0vw'
                searcher.style.transition = 'none';
                logo_sup.style.display = 'flex';
                login.style.display = 'block';
                interruptor = false;
                document.querySelector('.icon_search').src = "./img/search.png";
                break;
        }
      }
}