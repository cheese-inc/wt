function countdown_timer() {
    window.jQuery(function (e) {
        "use strict";
        e(".countdowns").countDown({with_separators: !1})
    })
}

function sticky_header() {
    $(window).scroll(function () {
        window.matchMedia("(max-width:544px)").matches ? $(this).scrollTop() > 90 ? $(".site-header").addClass("sticky") : $(".site-header").removeClass("sticky") : $(this).scrollTop() > 300 ? $(".site-header").addClass("sticky") : $(".site-header").removeClass("sticky")
    })
}

function attendance_select() {
    var e = $(".attendance input:radio");
    e.on("change", function () {
        e.addClass("no-checked"), $(this).prop("checked") && $(this).removeClass("no-checked")
    })
}

function touch_smooth() {
    $(document).on("touchstart mousedown", "a", function () {
        thisAnchor = $(this), touchPos = thisAnchor.offset().top, moveCheck = function () {
            nowPos = thisAnchor.offset().top, touchPos == nowPos && thisAnchor.addClass("hover")
        }, setTimeout(moveCheck, 100)
    }), $(document).on("touchend mouseup", "a", function () {
        thisAnchor = $(this), hoverRemove = function () {
            thisAnchor.removeClass("hover")
        }, setTimeout(hoverRemove, 500)
    })
}

function page_smooth_scrolling() {
    $('a[href^="#"]').click(function () {
        var e = $(this).attr("href"), o = $("#" == e || "" == e ? "html" : e).offset().top;
        return $("html, body").animate({scrollTop: o}, 500, "swing"), !1
    })
}

function modal_windows() {
    var e = window.innerWidth - $(window).outerWidth(!0);
    if (e > 0) var o = e; else {
        $("html").append('<div class="scrollbar" style="overflow:scroll;height:50px"}></div>');
        o = window.innerWidth - $(".scrollbar").prop("clientWidth");
        $(".scrollbar").hide()
    }
    $(".modal-open").click(function () {
        $("html, body").addClass("lock"), $("body").append('<div class="modal-overlay"></div>'), $(".modal-overlay").fadeIn("slow");
        var e = "#" + $(this).attr("data-target");

        function t() {
            var t = $(window).width(), a = $(window).height(), i = $(e).outerWidth(!0), s = $(e).outerHeight(!0);
            if (s > a && i > t) $(e).css({left: "0px", top: "0px"}); else if (s > a && i < t) {
                var n = (t - o - i) / 2;
                $(e).css({left: n + "px", top: "0px"})
            } else if (s < a && i > t) {
                var c = (a - o - s) / 2;
                $(e).css({left: "0px", top: c + "px"})
            } else {
                n = (t - i) / 2, c = (a - s) / 2;
                $(e).css({left: n + "px", top: c + "px"})
            }
        }

        $(e).wrap("<div class='modal-wrap'></div>"), $(".modal-wrap").show(), t(), $(e).fadeIn("fast"), $(e).click(function (e) {
            e.stopPropagation()
        }), $(".modal-wrap, .modal-close").off().click(function () {
            $(e).fadeOut("fast"), $(".modal-overlay").fadeOut("fast", function () {
                $("html, body").removeClass("lock"), $(".modal-overlay").remove(), $(e).unwrap("<div class='modal-wrap'></div>"), $(window).off(".noScroll"), $(".site-header , .mo-info-btns").css({"z-index": ""})
            })
        }), $(window).on("resize", function () {
            t()
        })
    }), $(".modal-open-nav").click(function () {
        $("slideout-menu-toggle").removeClass("is-clicked")
    })
}

function mobile_gnav() {
    $(".slideout-menu"), $(".slideout-menu").width();
    var e = $(".slideout-menu"), o = $(".slideout-menu-toggle"), t = $(".slideout-menu a"), a = $(document.body),
        i = $("#js__overlay");
    $(".wrap");
    $(".slideout-menu-toggle").on("click", function (i) {
        i.preventDefault(), a.toggleClass("is-nav-open"), a.hasClass("is-nav-open") ? (a.addClass("no-scroll"), o.addClass("is-clicked"), e.addClass("is-open").fadeIn(400)) : (a.removeClass("no-scroll"), o.removeClass("is-clicked"), e.removeClass("is-open").fadeOut(400)), t.on("click", function (t) {
            a.removeClass("is-nav-open no-scroll"), o.removeClass("is-clicked"), e.removeClass("is-open").fadeOut(400)
        })
    }), i.on("click", function () {
        o.removeClass("is-clicked"), $("body").removeClass("fixed").css({top: 0}), window.scrollTo(0, void 0)
    })
}

function rb_checks() {
    $('input[name="attendance"]').change(function () {
        str1 = $('input:radio[name="attendance"]:checked').val(), "attend" == str1 ? jap = "出席させていただきます。" : "absence" == str1 && (jap = "欠席させていただきます。"), $(".check-modal__attendance").text(jap)
    })
}

function form_output(e, o) {
    $(e).each(function () {
        var e, t, a;
        $(this).bind("click blur keydown keyup keypress change", (a = (e = this).value, function () {
            a != (t = e.value) && (a = t, str = $(this).val(), $(o).text(str))
        }))
    })
}

function form_modal_outputs() {
    form_output("#name", ".check-modal__name dd"), form_output("#kana", ".check-modal__kana dd"), form_output("#tell", ".check-modal__tell dd"), form_output("#postcode", ".check-modal__postcode dd"), form_output("#address", ".check-modal__address dd"), form_output("#message", ".check-modal__msg dd")
}

function cb_outputs() {
    $('input[name="other_check"]').change(function () {
        var e = $('input[name="other_check"]:checked').map(function () {
            return $(this).val()
        }).get();
        $(".check-modal__other-check").empty(), $.each(e, function (e, o) {
            "afterparty" == o ? jap = "2次会に参加する" : "allergies" == o ? jap = "食材アレルギー" : "partner" == o && (jap = "同行者あり"), $(".check-modal__other-check").append("<li>" + jap + "</li>")
        })
    })
}

$(function () {
    (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/\d+\.\d+/)) && $("body").on("mousewheel", function () {
        event.preventDefault();
        var e = event.wheelDelta, o = window.pageYOffset;
        window.scrollTo(0, o - e)
    }), window.sr = ScrollReveal({reset: !1}), $(window).on("load", function () {
        $("#img"), $("#page-loading").delay(3e3).fadeOut(1e3), window.matchMedia("(max-width:544px)").matches ? (sr.reveal(".greeting-unit__msg", {}), sr.reveal(".story-list__item", {}), sr.reveal(".where-cont__box", {})) : window.matchMedia("(max-width:768px)").matches ? (sr.reveal(".greeting-unit__msg", {}), sr.reveal(".story-list__img", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 400,
            scale: 1,
            delay: 400,
            opacity: 0,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".story-list__item", {
            delay: 0,
            distance: 0,
            duration: 0,
            scale: 1,
            opacity: null,
            beforeReveal: function (e) {
                $(e).addClass("fade-on")
            },
            beforeReset: function (e) {
                $(e).removeClass("fade-on")
            },
            viewFactor: .7
        }), sr.reveal(".story-list__txt", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 400,
            scale: 1,
            delay: 900,
            opacity: 0,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".countdown-unit__ttl", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 500,
            scale: 1,
            delay: 600,
            opacity: 0,
            right: 0,
            viewFactor: 1
        }), sr.reveal(".where-cont", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 800,
            scale: 1,
            delay: 200,
            opacity: 0,
            right: 0,
            viewFactor: .6
        })) : (sr.reveal(".bridegroom", {
            easing: "ease",
            origin: "right",
            distance: "135%",
            duration: 1e3,
            scale: 1,
            delay: 200,
            opacity: 1,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".bride", {
            easing: "ease",
            origin: "left",
            distance: "135%",
            duration: 1e3,
            scale: 1,
            delay: 200,
            opacity: 1,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".greeting-unit__msg", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 1800,
            scale: 1,
            delay: 400,
            opacity: 0,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".story-list__img", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 400,
            scale: 1,
            delay: 400,
            opacity: 0,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".story-list__item", {
            delay: 0,
            distance: 0,
            duration: 0,
            scale: 1,
            opacity: null,
            beforeReveal: function (e) {
                $(e).addClass("fade-on")
            },
            beforeReset: function (e) {
                $(e).removeClass("fade-on")
            },
            viewFactor: .7
        }), sr.reveal(".story-list__txt", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 400,
            scale: 1,
            delay: 900,
            opacity: 0,
            right: 0,
            viewFactor: .8
        }), sr.reveal(".countdown-unit__ttl", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 500,
            scale: 1,
            delay: 600,
            opacity: 0,
            right: 0,
            viewFactor: 1
        }), sr.reveal(".where-cont", {
            easing: "ease",
            origin: "top",
            distance: "10%",
            duration: 800,
            scale: 1,
            delay: 200,
            opacity: 0,
            right: 0,
            viewFactor: .6
        }))
    }), sticky_header(), attendance_select(), touch_smooth(), page_smooth_scrolling(), modal_windows(), mobile_gnav(), countdown_timer(), rb_checks(), form_modal_outputs(), cb_outputs()
});

$('input[name="allergies"]').click(function () {
    $(this).is(":checked") ? $("#allergies-message").removeClass("hidden") : $("#allergies-message").addClass("hidden")
});
$('input[name="companion"]').click(function () {
    $(this).is(":checked") ? $("#companion-message").removeClass("hidden") : $("#companion-message").addClass("hidden")
});