$(function () {
	if (!!localStorage.getItem("disclaimer")) {
		$("#detailWindow").fadeOut();
		$('.overlay').fadeOut();
	} else {
		$("#detailWindow").fadeIn();
		$('.overlay').fadeIn();
	}
	$("nav a").click(function () {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 120
		}, 1500);
		return false;
	});

	$("nav a").click(function () {
		$("nav li").removeClass("active");
		$(this).parent().addClass("active");
	});

	$(".left-menu>div div div.active").parent().css("background-color", "#412c51");

	var pp_positionX = 0
	$('#next_btn').on('click', () => {
		if ($('#popular-solutions-slider').width() > $("#popular-solutions-slider div").width() * (8 + 0.5)) {
			return;
		}
		if (Math.abs($('#popular-solutions-slider').width() - $("#popular-solutions-slider div").width() * 7.5) < 300) {
			if (pp_positionX <= ($("#popular-solutions-slider div").width() * 3 + 120)) {
				pp_positionX += $("#popular-solutions-slider div").width() + 40;
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_active.png")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_inactive.png")
				$('#prev_btn').attr("src", "images/back_arrow_active.png")
			}
		} else {
			if (pp_positionX < $("#popular-solutions-slider div").width() * (8 - 0.5)) {
				pp_positionX += $("#popular-solutions-slider div").width() + 40;
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_active.png")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_inactive.png")
				$('#prev_btn').attr("src", "images/back_arrow_active.png")
			}
		}
		$('#popular-solutions-slider').css({ 'transform': 'translate(-' + pp_positionX + 'px, 0px)' });
	});
	$('#prev_btn').on('click', () => {
		if ($('#popular-solutions-slider').width() > $("#popular-solutions-slider div").width() * (8 + 0.5)) {
			return;
		}
		if (pp_positionX > 0) {
			pp_positionX -= $("#popular-solutions-slider div").width() + 40;
			if (pp_positionX < 0) {
				pp_positionX = 0
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.png")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_active.png")
			}
		} else {
			if (Math.abs($('#popular-solutions-slider').width() - $("#popular-solutions-slider div").width() * (8 + 1)) < 50) {
				pp_positionX = 0
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.png")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_active.png")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.png")
			}

		}
		$('#popular-solutions-slider').css({ 'transform': 'translate(-' + pp_positionX + 'px, 0px)' });
	});

	var tm_positionX = 0
	$('#tnext_btn').on('click', () => {
		if ($('#testimonials-slider').width() > $("#testimonials-slider div div").width() * (5 + 0.5)) {
			return;
		}
		if (window.innerWidth < 400) {
			if (tm_positionX < $("#testimonials-slider div div").width() * (6 - 1.5)) {
				tm_positionX += $("#testimonials-slider div div").width() + 40;
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_active.png")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_inactive.png")
				$('#tprev_btn').attr("src", "images/back_arrow_active.png")
			}
		} else {
			if (tm_positionX < $("#testimonials-slider div div").width() * (5 - 1.8)) {
				tm_positionX += $("#testimonials-slider div div").width() + 40;
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_active.png")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_inactive.png")
				$('#tprev_btn').attr("src", "images/back_arrow_active.png")
			}
		}
		$('#testimonials-slider').css({ 'transform': 'translate(-' + tm_positionX + 'px, 0px)' });
	});
	$('#tprev_btn').on('click', () => {
		if ($('#testimonials-slider').width() > $("#testimonials-slider div div").width() * (5 + 0.5)) {
			return;
		}
		if (tm_positionX > 0) {
			tm_positionX -= $("#testimonials-slider div div").width() + 20;
			if (tm_positionX < 0) {
				tm_positionX = 0
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.png")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_active.png")
			}
		} else {
			if (Math.abs($('#testimonials-slider').width() - $("#testimonials-slider div div").width() * (5 + 1)) < 50) {
				tm_positionX = 0
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.png")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_active.png")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.png")
			}

		}
		$('#testimonials-slider').css({ 'transform': 'translate(-' + tm_positionX + 'px, 0px)' });
	});

	$("#agree_btn").on('click', function () {
		$("#detailWindow").fadeOut();
		$('.overlay').fadeOut();
		localStorage.setItem("disclaimer", true);
	});

	$(".read_more_btn>img").hover(function () {
		$(this).attr("src", "images/testi_arrow_hover.png");
	}, function () {
		$(this).attr("src", "images/testi_arrow.png");
	});

	var currentImageIndex = 0;

	$(".card-main-header").hover(function () {
		$(this).children("div").css("display", "block").click(function () {
			$('.overlay').fadeIn();
			$("#galleryWindow").fadeIn().children("img").attr("src", $(this).parent().children("img").attr("src"));
			currentImageIndex = $(".gallery-items-container").children().index($(this).parent().parent());
			$("#galleryWindow").children("p").text(titles[currentImageIndex]);
		});
	}, function () {
		$(this).children("div").css("display", "none");
	});

	$(".close_btn").click(function () {
		$("#galleryWindow").fadeOut();
		$('.overlay').fadeOut();
	}).hover(function () {
		$(this).attr("src", "images/close_btn_hover.png");
	}, function () {
		$(this).attr("src", "images/close_btn.png");
	});

	var images = [
		"images/patent.png",
		"images/trademark.png",
		"images/copyright.png",
		"images/industrial-design.png",
		"images/plantvariety.png",
		"images/semiconductor.png",
		"images/geographical.png",
		"images/ip.png",
		"images/otherlaws.png",
	];

	var titles = [
		"Patents",
		"Trademarks",
		"Copyright",
		"Industrial Design",
		"Plant Variety and Farmers' Rights",
		"Semiconductor Integrated Circuits Layout Design",
		"Geographical Indication",
		"IP Strategy",
		"Other Legal Solutions",
	];

	$("#g_next_btn").hover(function () {
		$(this).attr("src", "images/gallery_nextarrow_hover.png");
	}, function () {
		$(this).attr("src", "images/gallery_nextarrow.png");
	}).click(function () {
		if (currentImageIndex < images.length - 1) {
			++currentImageIndex;
			$(".full_view_img").attr("src", images[currentImageIndex]);
			$(".gallery-title").text(titles[currentImageIndex]);
		}
	});

	$("#g_prev_btn").hover(function () {
		$(this).attr("src", "images/gallery_backarrow_hover.png");
	}, function () {
		$(this).attr("src", "images/gallery_backarrow.png");
	}).click(function () {
		if (currentImageIndex > 0) {
			--currentImageIndex;
			$(".full_view_img").attr("src", images[currentImageIndex]);
			$(".gallery-title").text(titles[currentImageIndex]);
		}
	});

	$("#contact_form").submit(function () {
		var firstName = $("#first_name").val();
		var lastName = $("#last_name").val();
		var mobile = $("#mobile").val();
		var email = $("#email").val();
		var message = $("#message").val();

		if (firstName != "" && lastName != "" && mobile != "" && email != "" && message != "") {
			$(".error_message").text("");
			$("#body").text(message + "\n" + firstName + " " + lastName + "\n" + mobile);
			return true;
		} else {
			$(".error_message").text("All fields are mandatory, please fill all values");
			return false;
		}
	});
});