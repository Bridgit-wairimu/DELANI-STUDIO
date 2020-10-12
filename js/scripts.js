$(document).ready(function() {

  $("#design").click(function(){
    $("#designshow").toggle();
    $(".hidedes").toggle();
  })

  $("#development").click(function(){
    $("#developmentshow").toggle();
    $(".hidedev").toggle();
  })

  $("#productmanagement").click(function(){
    $("#productmanagementshow").toggle();
    $(".hideprod").toggle();
  })

});

$("button").click(function (execute) {
  var customer = document.getElementById('nameDetail').value;
  alert("Thank you " + customer + " we have received your message successfully");
  execute.preventDefault();
});

