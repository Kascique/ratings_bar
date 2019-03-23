$("*[rating] > i").click(function(e) {
  var numChild = $("*[rating] i").length + 1,
    target = $(e.target),
    targetNum = $(target).index(target.this) + 2;
  for (var x = 0; x < numChild; x++)
    $("*[rating] > i:nth-child(" + x + ")").html("star_border");
   
  for (var x = 0; x < targetNum; x++)
    $("*[rating] > i:nth-child(" + x + ")").html("star");
   
  $("[rating]").attr("val", targetNum - 1);
});
