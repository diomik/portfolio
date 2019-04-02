$(function(){
//добавление адаптивного меню
	$(".menuToggle").on("click", function(){
		$(".top_mnu_2").slideToggle(300, function(){
			if($(this).css("display") === "none"){
				$(this).removeAttr("style");
			}
		});
	});
//добавление плавного скрола на страницу
	$("#menu_scroll").on("click", "a", function(event){
		
		var id = $(this).attr("href"),
		top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 1500);
	});

		$("#menu_scroll_2").on("click", "a", function(event){
		event.preventDefault();
		var id = $(this).attr("href"),
		top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 1500);
	});

});
//анимация кнопки
(function() {
  "use strict";
  var toggles = document.querySelectorAll(".menuToggle");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
})();

//скрипт для обратной формы
$("#back_form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });