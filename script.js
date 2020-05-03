/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var now = new Date();

function diasMesActual() {
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}
function diaActual() {
  var dia = now.getDate();
  return dia;
}
function diasRestantes() {
  var diasMes = diasMesActual();
  var diaHoy = diaActual();
  return diasMes - diaHoy + 4;
}
function saldoPromedioDia() {
  
    var saldo = document.getElementById("saldo").value;
    var reserva = document.getElementById("reserva").value;
    var dias = diasRestantes();
    var promedio = (saldo - reserva) / dias;
    var promedio2 = promedio.toFixed(2)
    var elemento = document.getElementById("result-promedio");
    return elemento.innerHTML = promedio2;
}