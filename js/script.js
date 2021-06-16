/* Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

/* const bici=[
    {
        nome:'bmx',
        peso:12
    },
    {
        nome:'cross',
        peso:10
    },
    {
        nome:'mauro',
        peso:15
    }
];
let pesomin=bici[0];

for(let i=1;i<bici.length;i++){
    if(pesomin.peso>bici[i].peso){
        pesomin=bici[i];
    }
}

const {nome,peso}=pesomin;

console.log(peso);

document.getElementById("bici").innerHTML=
`
    <ul>
        <li>nome = ${nome}</li>
        <li>peso = ${peso}</li>
    
    </ul>

    `; */

  /*   Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console. */


  let squadre=[
    {
        nome:'franco',
        punti:0,
        falli:0
    },
    {
        nome:'maurizio',
        punti:0,
        falli:0
    },
    {
        nome:'linobanfi',
        punti:0,
        falli:0
    }

  ];



const random=(min,max)=>Math.floor((Math.random()*max-min+1)+min);

for(let j=0;j<squadre.length;j++){
    squadre[j].punti=random(1,50);
    squadre[j].falli=random(0,10);
}


console.log(squadre);
