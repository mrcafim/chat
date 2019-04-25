    console.log("Tô no documento");
    $(document).ready(function() {


        var divPai = $('#bodyChat');
        var btnCriar = $('#btnEnviar');

        btnCriar.click(function() {
            var mensagemNova = $('#mensagemBox').val();
            console.log(mensagemNova);
            console.log("clickei");
            divPai.append("<div class='d-flex justify-content-end mb-4'><div class='msg_cotainer_send'>" + mensagemNova + "</div></div>");
            $('#mensagemBox').val('');
        });
    });