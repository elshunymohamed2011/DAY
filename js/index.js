/*bav bar*/
//let fixe =document.querySelector("#header");
let fixe = document.getElementById("header")
let scrol = document.getElementById("top");
window.onscroll=function(){
if(window.scrollY>=50){
fixe.classList.add("fixed-top");
}else{
    fixe.classList.remove("fixed-top");
}
//};
/*bav bar*/
/*scrool top*/
//let scrol=document.querySelector("#top")
//window.onscroll=function(){
    if(window.scrollY>=500){
        scrol.classList.add("show");
    }else{
        scrol.classList.remove("show");
    }
};
scrol.onclick=function(){
    window.scrollTo({
top:0,behavior:"smooth",
    })
};
/*scrool top*/
/*portofolio*/
$(window).on('load', function() {
    var portfolioIsotope = $('.portofolio-container').isotope({
        itemSelector: '.item'
    });
    $('#portofolio-filter li').on('click', function() {
        $("#portofolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
});
/*portofolio*/