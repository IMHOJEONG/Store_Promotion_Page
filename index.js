(function(){
    let prevButton = document.getElementsByClassName("carousel-control-prev");
    let nextButton = document.getElementsByClassName("carousel-control-next");

    document.addEventListener('keypress', testKey);
    console.log('test')
    function testKey(e){
        if(e.key === "ArrowLeft"){
            console.log(e.key)
        }
        else if(e.key === "ArrowRight"){
            console.log(e.key)
        }
    }

})();