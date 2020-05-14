function insert(num)
{
  $(".display").val($(".display").val()+num); 
}

function c()
{
  $(".display").val("");
}

function equal()
{
  $(".display").val(eval($(".display").val()));
}

function cut()
{
  var x=$(".display").val();

  $(".display").val(x.slice(0,x.length-1));
}