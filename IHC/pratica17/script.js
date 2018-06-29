$(document).ready(function () {
    $("button").click(function () {
        var flickerAPI =
            "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var assunto = $("#assunto").val();
        var objFlicker = new Object();
        objFlicker.tags = assunto;
        objFlicker.tagmode = "any";
        objFlicker.format = "json";
        $("#imagens").html(""); //Limpar as imagens apresentadas na tela.
        $.getJSON(flickerAPI, objFlicker)
            .done(function (resposta) {
                $.each(resposta.items, function (i, item) {
                    var quantidade = $("#quantidade").val();
                    if (i < quantidade)
                        $("<img>").attr("src", item.media.m).appendTo("#imagens");
                    else
                        return false; /*A função .each () é executada enquanto o retorno da
função de 'callback' for diferente de 'false'.*/
                });
            });
    });
});