$(document).ready(function(){
    let ind=0
    let currentVal
    document.querySelectorAll('.box').forEach(function (val, ind) {
        $('form').append(`<input type="radio" value="${ind}" name="rad">`)
    })
$('input').eq(0).prop('checked',true)

$('input').click(function () {
//     currentVal=$(this).val()
//     if (currentVal-ind==1) {
//         ind=currentVal
//         shiftSlide(-1)
//     }
//    else if (currentVal-ind==-1) {
//         ind=currentVal
//         shiftSlide(1)
//     }else{
//         $('.box').each(function (index,elem) {
//             if (!(index==currentVal||index==ind)) {
//                 $(elem).hide()
//             }
//         })
//         if (currentVal>ind) {
//         ind=currentVal
//         shiftSlide(-1)
//         }
//         if (currentVal<ind) {
//             ind=currentVal
//             shiftSlide(1)
//             }
//     }

})


let carousel = $('.carousel'),
    slideWidth = $(window).width()
    

$('.right').click(function(){ 
    ind++
    if(ind>2)ind=0
    $('input').eq(ind).prop('checked',true)
    shiftSlide(-1) 
})

$('.left').click(function(){ 
    ind--
    if(ind<0)ind=2
    $('input').eq(ind).prop('checked',true)
    shiftSlide(1) 
})

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  carousel
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.box:first').before($('.box:last'));
    } else if (direction === -1) {
      $('.box:last').after($('.box:first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)'); 
  },700)


}

})

