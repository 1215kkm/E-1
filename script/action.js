//팝업
$('.notice li:nth-child(1)').click(function(){
    $('.modal').show()
});

$('.popup a').click(function(){
    $('.modal').hide()
});



//슬라이드
setInterval(function(){
    $('.slide ul').animate({marginLeft:'-100%'}, 1000, function(){
        $('.slide li:nth-child(1)').appendTo('.slide ul');
        $('.slide ul').css({marginLeft:'0%'})
    })
}, 2000)

