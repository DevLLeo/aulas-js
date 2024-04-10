document.getElementById("texto").innerHTML = "meu primeiro texto em <b>JS</b>"; /*capta um item pelo ID utilizando o getElementById (importância das maiúsculas)*/
alert(5+5+5*2) /*apresenta algo em uma caixa*/

let nome, sobrenome, nomeCompleto ;

nome = "Lucas";
sobrenome = " Teixeira";
nomeCompleto = nome + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto

/* DEFINIÇÕES PARA VAR, LET E CONST;
var = Pode ser alterado diversas vezes dentro do mesmo código
let = uma vez que é atribuido, não pode ser novamente declarado, apenas por dinâmicas de atribuições em bloco
const = Não pode ser alterado em nenhuma circunstância. Uma vez declarado, permanecerá assim por todo o código.
*/

/* OPERADORES:
|| = ou
&& = e
== = comparação 
=== = comparação também de string/numero
!= = diferente
+= -= *= /= = atalho para atribuir o valor de uma variavel dentro de outra