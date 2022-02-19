'use strict';


let i=0;
const Mark = {
  Nome: 'Mark Miller',
  idade: 27,
  sentença: "",
};
let question="";
let options="";
let answer="";
let answers=new Array(10).fill(0);
let sum=0;

function registerNewAnswer(i) {
  // Get answer
  const answer = Number(
    prompt(
      `${question}\n${options.join('\n')}\n(Write option number)`
    )
  );
  return answers[i]=answer;
};

for (let i = 0; i < 10; i++) {
  if (i === 0) { 
    question= 'Se você encontra um cachorro perdido com coleira, o que você faz?';
    options= ['0: Procura o dono', '1: Ignora', '2: Sequestra e adota', '3: Chuta'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 1) {
    question= 'Saindo para o trabalho de manhã, você presencia um assalto, o que vc faz?';
    options= ['-1: Liga para a polícia', '0: Interfere', '1: Ignora', '2: Ajuda o assaltante'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 2) {
    question= 'Chegando no seu trabalho, nota um colega aceitando suborno.';
    options= ['0: Inforama ao lider sobre o evento', '1: Ignora', '2: Diz que quer fazer parte', '3: Denuncia o colega e se inclui no esquema'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 3) {
    question= 'Seu colega te procura depois para conversar sobre o ocorrido.';
    options= ['0: Diz que fez o que acho ser certo', '1: Da um tapa nele', '2: Esfaqueia ele', '8: Mata ele'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 4) {
    question= 'Ainda no trabalho agora está tendo uma grande investigação de corrupção.';
    options= ['0: Entrega todo mundo e ajuda na investigação', '1: Protege os amigos'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 5) {
    question= 'Pessoas foram para cadeia, você se safou, e agora?';
    options= ['0: Sua consciencia te pesa', '1: Ufa to seguro'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 6) {
    question= 'A esposa do seu colega se aproxima de você sobre ele';
    options= ['0: Consola ela amigavelmente', '1: Ignora', '2: Seduz ela'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 7) {
    question= 'Ela se apaixona por você';
    options= ['0: Não avance essa situação', '1: Sai com ela uma vez', '2: Convece ela a deixar o marido'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 8) {
    question= 'E agora?';
    options= ['0: Não avançe essa situação', '1: Coloca um filho nela'];
    registerNewAnswer(i);
    console.log(answers);
  } else if (i === 9) {
    question= 'Você se considera uma boa pessoa?';
    options= ['0: Razoável', '1: Não', '2: Sim'];
    registerNewAnswer(i);
    console.log(answers);
  } 
};
for (let i = 0; i < answers.length; i++) {
  sum += answers[i];
}
Mark.sentença=`Sua sentença é de ${sum} anos`;
console.log(Mark);
