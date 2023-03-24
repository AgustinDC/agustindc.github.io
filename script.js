let contacto = 
    '<p> <i class=\'bx bxl-whatsapp-square\'>: 221-5556762 </i><br><br>\
    <i class=\'bx bxs-envelope\' >: mail.mail@gmail.com </i><br><br>\
    <i class=\'bx bxl-linkedin-square\' >: linkedin.com/in/juan.perez </i></p>';

let sobre_mi = 
    '<p> <br><br> - Nombre: Juan Alberto Perez <br><br>\
     - Edad: 34 años <br><br>\
     - Fecha de nacimiento: 27/05/1988 <br><br>\
     - Nacionalidad: Argentino <br><br>\
     - Estado civil: Soltero </p>';

let experiencia = 
    '<p> <br><a id="btn_exp" onclick="click_experiencia()" >Experiencia</a> | <a id="btn_cur" onclick="click_cursos()" >Cursos</a> <br><br><br><br><br>\
    - Armado y reparación de PC / Instalación de redes\
    informáticas independientemente.<br><br><br>\
    - Empleado como reparador de PC en local de computación “Computacion”.<br><br><br>\
    - Empleado como técnico administrador de redes en el\
    Servicio de telefonia e Internet<br><br> con servicio a domicilio y\
    soporte telefónico en el área de internet.<br><br> Desarrollo tareas\
    de coordinación con otras áreas y personal desde el 2013\
    hasta la actualidad. </p>';

let cursos = 
    '<p><br><a id="btn_exp" onclick="click_experiencia()" >Experiencia</a> | <a id="btn_cur" onclick="click_cursos()" >Cursos</a> <br><br><br><br><br>\
    - Curso Coderhouse Backend en C# / .net <br><br>\
    - Argentina Programa 4.0: Primeros pasos del desarrollo frontend.<br><br>\
    - Curso Introductorio a JavaScript de SoyHenry.';

function click_contacto() {
    document.getElementById("article").innerHTML = contacto;
}

function click_experiencia() {
    document.getElementById("article").innerHTML = experiencia;
}

function click_cursos(){
    document.getElementById("article").innerHTML = cursos;
}

function click_sobremi() {
    document.getElementById("article").innerHTML = sobre_mi;
}
