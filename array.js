

var tabla = [
	{equipo:'America',puntos:15,JJ:8,JG:5,JE:2,JP:1},
	{equipo:'Pumas',puntos:10,JJ:8,JG:5,JE:2,JP:1},
	{equipo:'Chivas',puntos:19,JJ:8,JG:5,JE:2,JP:1},
	{equipo:'Santos',puntos:5,JJ:8,JG:5,JE:2,JP:1},
	{equipo:'Tigeres',puntos:1,JJ:8,JG:5,JE:2,JP:1},
	{equipo:'Toluca',puntos:11,JJ:8,JG:5,JE:2,JP:1}
];
/*
 Probando la carga de mis eventos

*/
window.onload = cargaEventos;

// Funcion cargarEventos

function cargaEventos()
{
	document.getElementById("mostrar-tabla").addEventListener("click",mostrarTabla,false);
	document.getElementById("nuevo-equipo").addEventListener("submit",nuevoEquipo,false);

}

// Funcion mostrarTabla
function mostrarTabla()
{
	var cuerpoTabla = document.getElementById("equipos-tabla");	
	var tablaLlena ="";
	//cuerpoTabla.innerHTML ="<tr><td>"+ tabla[i].equipo + " </td><td>"+ tabla[i].puntos + "</td></tr>";
	for (i =0 ; i < tabla.length ;i++) {
	  tablaLlena += "<tr><td>"+ tabla[i].equipo +  " </td><td>"+ tabla[i].puntos +   " </td><td>"+ tabla[i].JJ +   " </td><td>"+ tabla[i].JG +  " </td><td>"+ tabla[i].JE +  " </td><td>"+ tabla[i].JP +"</td></tr>";	  
	}
	cuerpoTabla.innerHTML = tablaLlena;
}

//Función para registrar un nuevo equipo
function nuevoEquipo(event)
{
	event.preventDefault();
	var teamInsert = document.getElementById("equipo").value;
	var scoreInsert = document.getElementById("puntos").value;
	var JJInsert = document.getElementById("JJ").value;	
	var JGInsert = document.getElementById("JG").value;
	var JEInsert = document.getElementById("JE").value;
	var JPInsert = document.getElementById("JP").value;

	var nuevoEquipo = {equipo:teamInsert,puntos:scoreInsert,JJ:JJInsert,JG:JGInsert,JE:JEInsert,JP:JPInsert};

	tabla.push(nuevoEquipo);
}