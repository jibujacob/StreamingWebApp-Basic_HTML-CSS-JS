//Slider
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,index) => {
    
    const itemNumber = movieLists[index].querySelectorAll("img").length;
    let clickCounter = 0;
    
    arrow.addEventListener("click",() => {
        const ratio = (Math.floor(window.innerWidth/300));
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + ( 4- ratio)>= 0){
            movieLists[index].style.transform=`translateX(${movieLists[index].computedStyleMap().get('transform')[0].x.value - 330}px)`;
        }else{
            movieLists[index].style.transform="translateX(0)";
            clickCounter = 0;
        }
    });
});

//Toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".navbar-container,.toggle,.toggle-ball,.sidebar,.left-menu-icon,.container,.movie-list-title")

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
});

