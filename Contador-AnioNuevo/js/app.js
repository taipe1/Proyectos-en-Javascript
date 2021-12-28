const dia = document.querySelector('.dia');
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
// año siguiente
const anioSiguiente = new Date().getFullYear()+1;
const convertir = new Date(`Jan 01 ${anioSiguiente}`)

const tiempoContador = () => {
  // fecha actual
  const datoActual = new Date();
  const nuevoAnio = new Date(convertir)
  const totalSegundos = (nuevoAnio - datoActual) / 1000;

  // dia faltante
  const diaFa = Math.floor(totalSegundos / 3600 /24);
  // horas faltando
  const horaFa = Math.floor(totalSegundos /3600) % 24;
  //minutos faltando
  const minutoFa = Math.floor(totalSegundos / 60) % 60;
  // segundo faltando
  const segundoFa = Math.floor(totalSegundos) % 60;

  // pasarlo a html
  dia.innerHTML = formato(diaFa);
  hora.innerHTML = formato(horaFa);
  minuto.innerHTML = formato(minutoFa);
  segundo.innerHTML = formato(segundoFa);

};

const formato = (tiempo) => (tiempo > 10 ? tiempo : `0${tiempo}` ) ;

tiempoContador();
// contador cada 1 seg
setInterval(tiempoContador,1000);

















