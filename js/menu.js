$(document).ready(function()
{
    console.log("jquery ready");

    $('#btn_burger img').on('click',function(){
        console.log("clic");
        $('#mainNav').stop(true, true).slideToggle()
    });
})
