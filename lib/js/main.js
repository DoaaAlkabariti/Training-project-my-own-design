
$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 500){
            $('.navbar').addClass ('solid');

            // $('.backToTop').addClass ('visible');
        }else if (scrollTop == 0){
            $('.navbar').removeClass('solid');


            // $('.backToTop').removeClass('visible');
        }
    });


    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 500){
            $(".one").show();
            $(".two").hide();


            // $('.backToTop').addClass ('visible');
        }else if (scrollTop == 0){
          $(".one").hide();
            $(".two").show();

            // $('.backToTop').removeClass('visible');
        }
        });


        $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        })
  });


  $('.dropdown-toggle').dropdown();




$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



        $(".form").click(function(){
            $("#div11").fadeIn(1000);

});
$(".oo").click(function(){
    $("#div33").fadeIn(1000);

});
$(".dd").click(function(){
    $("#div2").fadeIn(1000);

});
$(".in").click(function(){
    $("#div22").fadeIn(1000);

});
$(".radio").click(function(){
    $("#div44").fadeIn(1000);

});
$(".radio").click(function(){
    $("#div55").fadeIn(1000);

});
$(".radios").click(function(){
    $("#div66").fadeIn(1000);

});
$(".radios").click(function(){
    $("#div77").fadeIn(1000);

});
$(".radioss").click(function(){
    $("#div88").fadeIn(1000);

});
$(".radioss").click(function(){
    $("#div99").fadeIn(1000);

});
$(".radiosss").click(function(){
    $("#div1010").fadeIn(1000);

});
$(".radiosss").click(function(){
    $("#div1111").fadeIn(1000);

});
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
// تابع صفحة التقييم
$(".rad1").click(function(){
    $(".d1").fadeIn(1000);

});
$(".rad2").click(function(){
    $(".d2").fadeIn(1000);

});
$(".rad3").click(function(){
    $(".d3").fadeIn(1000);

});
$(".no1").click(function(){
    $(".d3").fadeOut(1000);
});
$(".rad4").click(function(){
    $(".d4").fadeIn(1000);

});
$(".no2").click(function(){
    $(".d4").fadeOut(1000);
});
$(".rad5").click(function(){
    $(".d5").fadeIn(1000);

});
$(".no3").click(function(){
    $(".d5").fadeOut(1000);
});
$(".rad6").click(function(){
    $(".d6").fadeIn(1000);

});
$(".rad7").click(function(){
    $(".d7").fadeIn(1000);

});
$(".no4").click(function(){
    $(".d7").fadeOut(1000);
});

$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    });

});
