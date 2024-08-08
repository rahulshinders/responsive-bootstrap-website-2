$(document).ready(function(){
    $(".sidebar-btn").click(function(){
        $(".sidebar").slideDown(1000);
    })
    $(".close").click(function(){
        $(".sidebar").slideUp(1000);
    })
})