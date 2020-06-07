

$("#design_btn").click(function () {
	$("#design__btn").focus();
	$(":focus").css({"background":"linear-gradient(-180deg, rgba(22,106,101,1) 0%, rgba(33,157,150,1) 75%)","color":"#e3e118","padding":"10px"})
	$(".body__content").css("display","block")
	$(".gallery__content").css("display","none")
	$("#info__tab").focus();
	$(":focus").css("background-color","#0f4a47")
})