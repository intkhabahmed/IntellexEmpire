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

	var pp_positionX = 0
	$('#next_btn').on('click', () => {
		if ($('#popular-solutions-slider').width() > $("#popular-solutions-slider div").width() * (6 + 0.5)) {
			return;
		}
		if (Math.abs($('#popular-solutions-slider').width() - $("#popular-solutions-slider div").width() * 5) < 100) {
			if (pp_positionX < $("#popular-solutions-slider div").width()) {
				pp_positionX += $("#popular-solutions-slider div").width() + 20;
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_active.jpg")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_inactive.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		} else {
			if (pp_positionX < $("#popular-solutions-slider div").width() * (5 - 0.5)) {
				pp_positionX += $("#popular-solutions-slider div").width() + 20;
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_active.jpg")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_inactive.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		}
		$('#popular-solutions-slider').css({ 'transform': 'translate(-' + pp_positionX + 'px, 0px)' });
	});
	$('#prev_btn').on('click', () => {
		if ($('#popular-solutions-slider').width() > $("#popular-solutions-slider div").width() * (6 + 0.5)) {
			return;
		}
		if (pp_positionX > 0) {
			pp_positionX -= $("#popular-solutions-slider div").width() + 20;
			if (pp_positionX < 0) {
				pp_positionX = 0
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.jpg")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		} else {
			if (Math.abs($('#popular-solutions-slider').width() - $("#popular-solutions-slider div").width() * (5 + 1)) < 50) {
				pp_positionX = 0
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.jpg")
			} else {
				$('#next_btn').attr("src", "images/next_arrow_active.jpg")
				$('#prev_btn').attr("src", "images/back_arrow_inactive.jpg")
			}

		}
		$('#popular-solutions-slider').css({ 'transform': 'translate(-' + pp_positionX + 'px, 0px)' });
	});

	var tm_positionX = 0
	$('#tnext_btn').on('click', () => {
		if ($('#testimonials-slider').width() > $("#testimonials-slider div div").width() * (4 + 0.5)) {
			return;
		}
		if (Math.abs($('#testimonials-slider').width() - $("#testimonials-slider div div").width() * 4) < 100) {
			if (tm_positionX < $("#testimonials-slider div div").width()) {
				tm_positionX += $("#testimonials-slider div div").width() + 20;
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_active.jpg")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_inactive.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		} else {
			if (tm_positionX < $("#testimonials-slider div div").width() * (4 - 0.5)) {
				tm_positionX += $("#testimonials-slider div div").width() + 20;
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_active.jpg")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_inactive.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		}
		$('#testimonials-slider').css({ 'transform': 'translate(-' + tm_positionX + 'px, 0px)' });
	});
	$('#tprev_btn').on('click', () => {
		if ($('#testimonials-slider').width() > $("#testimonials-slider div div").width() * (4 + 0.5)) {
			return;
		}
		if (tm_positionX > 0) {
			tm_positionX -= $("#testimonials-slider div div").width() + 20;
			if (tm_positionX < 0) {
				tm_positionX = 0
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.jpg")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_active.jpg")
			}
		} else {
			if (Math.abs($('#testimonials-slider').width() - $("#testimonials-slider div div").width() * (4 + 1)) < 50) {
				tm_positionX = 0
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.jpg")
			} else {
				$('#tnext_btn').attr("src", "images/next_arrow_active.jpg")
				$('#tprev_btn').attr("src", "images/back_arrow_inactive.jpg")
			}

		}
		$('#testimonials-slider').css({ 'transform': 'translate(-' + tm_positionX + 'px, 0px)' });
	});

	$("#agree_btn").on('click', function () {
		$("#detailWindow").fadeOut();
		$('.overlay').fadeOut();
		localStorage.setItem("disclaimer", true);
	});

});