 var font = localStorage.getItem("ta_font");
$("#main textarea, .main textarea, .widget-body input").css("font-family", font);
var size = localStorage.getItem("ta_size");
$(".widget-body textarea").css("font-size", size);
var spellcheck = JSON.parse(localStorage.getItem("ta_spellcheck"));
$(".widget-body textarea, .widget-body input").attr("spellcheck", spellcheck);
var textwrap = JSON.parse(localStorage.getItem("ta_textwrap"));

function Alert(t) {
    $(".alert-content").html(t), $(".alert").show()
}

function Toast(t) {
    $(".toast-content").html(t), $(".toast").show().delay(2e3).fadeOut(250)
}

function Clipboard(t) {
    t.select().focus(), document.execCommand("copy"), Toast("Copied to Clipboard")
}

function default_settings() {
    localStorage.setItem("ta_language", "English"), localStorage.setItem("ta_theme", "Light"), localStorage.setItem("ta_font", "Roboto"), localStorage.setItem("ta_size", "15px"), localStorage.setItem("ta_spellcheck", !1), localStorage.setItem("ta_textwrap", !0), localStorage.setItem("ta_examples", !0)
}
0 == textwrap && $(".widget-body textarea").addClass("wrap-off"), $("#app_menu").click(function () {
    $("#nav-menu").toggleClass("open"), $(".mask").addClass("active")
}), $("body").mouseup(function (t) {
    0 === $(t.target).closest("#nav-menu").length && ($("#nav-menu").removeClass("open"), $(".mask").removeClass("active"))
}), $(".accordion>li>a:not(:only-child)").click(function (t) {
    var e = $(this).closest("li").find("ul");
    $(this).closest(".accordion").find("ul").not(e).slideUp(100), $(this).hasClass("active") ? $(this).removeClass("active") : ($(this).closest(".accordion").find("a.active").removeClass("active"), $(this).addClass("active")), e.stop(!1, !0).slideToggle(100), t.preventDefault()
}), $("body").ready(function () {
    $(document).on("click", ".dropdown-trigger", function (t) {
        $(this).siblings().show(), $(this).parent().siblings().each(function (t, e) {
            $(e).find(".dropdown-menu").hide()
        })
    })
}), $("body").mouseup(function (t) {
    var e = $(".dropdown-menu");
    e.is(t.target) || e.hide()
}), $(".alert-x").click(function () {
    $(".alert").hide()
}), $("#share_this").click(function () {
    var t = window.location.href;
    return window.open("https://www.addtoany.com/share#url=" + escape(t), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=670"), !1
}), $('a[href="#"]').click(function (t) {
    t.preventDefault ? t.preventDefault() : t.returnValue = !1
}), localStorage.getItem("ta_language") || default_settings();
