jQuery(function(){
    //SELECT DE CIDADES E ESTADOS
    $.ajax({
        method : "GET",
        url : "https://raw.githubusercontent.com/rennanmserenza/dados-brasil/main/estados-com-cidades.json"
    }).done(function(response){
        var cidadesEstados = jQuery.parseJSON(response)
        cidCount = -1;
        $("select[name=estado]").append("<option value='' data-position=''>ESTADO</option>")
        $("select[name=cidade]").append("<option value='' data-position=''>CIDADE</option>")
        cidadesEstados.estados.forEach((i)=>{
            cidCount++;
            //PREENCHE OS CAMPOS DA SELEÇÃO DE ESTADO
            $("select[name=estado]").append("<option value='"+i.sigla+"' data-position='"+cidCount+"'>"+i.sigla+"</option>")
        })
        //PREENCHE DINAMICAMENTE AS CIDADES
        $("select[name=estado]").on("change",function(){
            $("select[name=cidade]").html("")
            cidadesEstados.estados[$("select[name=estado] option:selected").attr("data-position")].cidades.forEach((c)=>{
                $("select[name=cidade]").append("<option value='"+c.nomeCidade+"'>"+c.nomeCidade+"</option>")
            })
        })
    })
    //ENVIO DO FORMULARIO PARA A API
    $(".form form").on("submit",function(e){
        e.preventDefault()
        $.ajax({
            method : "POST",
            url : "api.php",
            data : {
                nome     : $("input[name=nome]").val(),
                telefone : $("input[name=telefone]").val(),
                email    : $("input[name=email]").val(),
                estado   : $("select[name=estado]").val(),
                cidade   : $("select[name=cidade]").val(),
                mensagem : $("textarea[name=mensagem]").val()
            }
        }).done(function(resposta){
            console.log(resposta)
        })
    })
    //
    $(".whatsapp").on("click",function(){
        window.location.href="https://wa.me/5531983086235"
    })
})