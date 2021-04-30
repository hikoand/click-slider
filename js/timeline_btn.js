$(function () {
  $(".timeline_btn > button").each(function (i) {
    let indexNum = i;
    $(this).click(function () {
      $(".timeline_box").each(function (j) {
        if (indexNum == j) {
          $(".timeline_box").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });
});
