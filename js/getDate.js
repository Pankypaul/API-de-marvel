let fecha = newDate();

let dia = fecha.getDate();

let mes = fecha.getMonth()+1;

let anio = fecha.getFullYear();


export const getDate = ()=>{
    
    mes< 10 ? mes = `0${mes}`: mes;

    return `${dia}/${mes}/${anio} `;
}
