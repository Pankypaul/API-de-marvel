let fecha = newDate();

let dia = fecha.getDate();

let mes = fecha.getMonth()+1;

let anio = fecha.getFullYear();

if (mes<10){
    mes`0${mes}`;
}
return `${dia}/${mes}/${anio} `;

