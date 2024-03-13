window.addEventListener("load", function () {

    var idades = [25, 10, 18, 42, 63, 55, 28, 39];
    var valorInformado = prompt('Informe um número:');

    // a) Soma das idades
    var somaIdades = idades.reduce((total, idade) => total + idade, 0);
    document.write(`<p>Soma das idades: ${somaIdades}</p>`);

    // b) A média aritmética simples das idades
    var mediaIdades = somaIdades / idades.length;
    document.write(`<p>Média das idades: ${mediaIdades.toFixed(2)}</p>`);

    // c) A maior idade
    //var maiorIdade = (idades) => {idades.reduce((maior, idade) => (idade > maior ? idade : maior), idades[0]);}
    var maiorIdade = (idades) => idades.reduce((maior, idade) => (idade > maior ? idade : maior), idades[0]);
    var resultadoMaiorIdade = maiorIdade(idades);
    document.write(`<p>Maior idade: ${resultadoMaiorIdade}</p>`);

    // d) As idades ímpares
    var idadesImpares = idades.filter(idade => idade % 2 !== 0);
    document.write(`<p>Idades ímpares: ${idadesImpares}</p>`);

    // e) Verificar se todos são maiores de idade (idade >= 18)
    var todosMaioresIdade = idades.every(idade => idade >= 18);
    document.write(`<p>Todos são maiores de idade? ${todosMaioresIdade}</p>`);

    // f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    var todasMaioresOuIguais = idades.every(idade => idade >= valorInformado);
    document.write(`<p>Todas as idades são maiores ou iguais a ${valorInformado}? ${todasMaioresOuIguais}</p>`);

    // g) Exibir todas as idades maiores ou iguais a determinada idade
    var idadesMaioresOuIguais = idades.filter(idade => idade >= valorInformado);
    document.write(`<p>As idades maiores ou iguais a ${valorInformado} : ${idadesMaioresOuIguais.join(', ')}</p>`);

    // h) Média das idades das pessoas com idades maiores ou iguais a determinada idade
    var mediaIdadesMaioresOuIguais = idadesMaioresOuIguais.reduce((total, idade) => total + idade, 0) / idadesMaioresOuIguais.length;
    document.write(`<p>Média das idades maiores ou iguais a ${valorInformado}: ${mediaIdadesMaioresOuIguais.toFixed(2)}</p>`);
});



