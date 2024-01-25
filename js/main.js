// ************************* Slider *****************************
let width = $('.slider').outerWidth()
$('.slider').css({ left: `-${width}px` })
$('.openDiv').on('click', function () {

    let left = $('.slider').css('left')
    if (left == '0px') {

        $('.slider').animate({ left: `-${width}px` }, 2000)
        $('.openDiv').animate({ left: `2%` }, 2000)
    } else {
        $('.slider').animate({ left: 0 }, 2000)
        $('.openDiv').animate({ left: `${width}px` }, 2000)
    }
})
$('#close').on('click', function () {
    $('.slider').animate({ left: `-${width}px` }, 2000)
    $('.openDiv').animate({ left: `2%` }, 2000)
})
$('.nav-link').on('click', function (e) {
    let hrefElm = $(e.target).attr('href')
    let offsetTop = $(hrefElm).offset().top
    console.log(hrefElm);
    console.log(offsetTop);
    $('body,html').animate({ scrollTop: offsetTop }, {
        duration: 2500,
        queue: false
    })
})

// document.addEventListener('resize',function(){
   
// })

// ********************** Acording ******************************
$('.deuration h3').on('click',function(e){
    $('.toggle').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
})

// ******************************* CountDown ************************
let countDownDate = new Date("Jun 5,2024 11:55:20").getTime()
let counter = setInterval(()=>{
    let dateNow = new Date().getTime()
    let dateDefrance = countDownDate - dateNow 
    let days = Math.floor(dateDefrance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(dateDefrance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
    let minutes = Math.floor(dateDefrance % (1000 * 60 * 60 ) / (1000 * 60  ))
    let seconds = Math.floor(dateDefrance % (1000 * 60 ) / (1000 ))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${ minutes } M`);
    $('.seconds').html(`${ seconds} S`)
},1000)

// *********************** Alert Message **************************
let maxLength = $('textarea').attr('maxlength')
console.log(maxLength);
$('#countCharcter').html(maxLength)
$('textarea').keyup(function(){
    let textLength = $(this).val().length
    let remainText = maxLength - textLength
    if(remainText<=0){
        $('#countCharcter').text("0 your available character finished")
    }else{

        $('#countCharcter').html(remainText)
    }
    console.log(textLength);
})
