$(document).ready(function(){
  $("#formOne").submit(function(event){
    var inputMsg = $("input#toShout").val().toUpperCase();

    $(".shouting").text(inputMsg);

    event.preventDefault();

  });
});
