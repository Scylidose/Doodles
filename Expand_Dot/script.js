$(".fermer").click(function () {
    if ($(".circle").attr("class") == "circle ouvrir") {
        $(".circle").attr("class", "circle");
        $(".fixer").attr("class", "fixer plus");
        $("i").attr("style", "visibility: hidden");
    } else if ($(".circle").attr("class") == "circle") {
        $(".circle").attr("class", "circle ouvrir");
        $(".fixer").attr("class", "fixer changement");
        $("i").attr("style", "visibility: visible");
    }
});