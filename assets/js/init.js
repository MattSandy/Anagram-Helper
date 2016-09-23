$(document).ready(function () {
    reset_boxes();
    $("#anagram").keyup(function () {
        var anagram = $("#anagram").val();
        var boxes = '';
        for (var i = 0; i < anagram.length; i++) {
            boxes = boxes + '<span>' + anagram[i] + '</span>';
        }
        $("p.anagram.live").html(boxes);
        $("p.anagram.stage").html("");
        reset_boxes();
    });
    $("#space").click(function () {
        $("p.anagram.stage").append("<span> &nbsp;</span>");
        reset_boxes();
    });
    $("#save").click(function () {
        $("div.anagrams").append('<p class="anagram">' + $("p.anagram.stage").html() + '</p>')
    });
});
function reset_boxes() {
    $("p.anagram span").off();
    $("p.anagram.live span").click(function () {
        $("p.anagram.stage").append("<span>" + $(this).text() + "</span>");
        $(this).remove();
        reset_boxes();
    });
    $("p.anagram.stage span").click(function () {
        if ($(this).text() != "  ") {
            $("p.anagram.live").append("<span>" + $(this).text() + "</span>");
        }
        $(this).remove();
        reset_boxes();
    });
}