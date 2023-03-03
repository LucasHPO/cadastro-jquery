$(document).ready(function() {
    $('#telefone').mask("(00) 00000-0000");
    $('#cpf').mask("000.000.000-00");
    $('#cep').mask("00000-000");
})

$('form').validate({
    rules:{
        nomeCompleto:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        cpf:{
            required: true
        },
        endereço:{
            required: true
        },
        cep:{
            required: true
        },
    },
    messages:{
        nomeCompleto: '<h3 class="validate">Por favor, inserir o seu nome completo</h3>',
        email: '<h3 class="validate">Por favor, inserir o email de contato</h3>',
        telefone: '<h3 class="validate">Por favor, inserir o seu telefone de contato</h3>',
        cpf: '<h3 class="validate">Por favor, inserir o seu CPF</h3>',
        endereço: '<h3 class="validate">Por favor, inserir o seu endereço</h3>',
        cep: '<h3 class="validate">Por favor, inserir o seu CEP</h3>',
    },
})