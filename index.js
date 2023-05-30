var deadline = new Date ("dec, 23, 2023 00:00:00").getTime ();

/* tempo para finalizacao do cronometro */

var x = setInterval(function() {
  
    var now = new Date().getTime();
    var t = deadline - now; 

    /* matematica para a conta das unidades */

    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    /* o que cada unidade ira ser representada no codigo */

    document.getElementById("dias").innerHTML =days ;
    document.getElementById("horas").innerHTML =hours;
    document.getElementById("minutos").innerHTML = minutes; 
    document.getElementById("segundos").innerHTML =seconds; 

    /* o que vai acontecer quando chegar o dia e a hora certa */

    if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "next";
            document.getElementById("dias").innerHTML ='00';
            document.getElementById("horas").innerHTML ='00';
            document.getElementById("minutos").innerHTML ='00' ; 
            document.getElementById("segundos").innerHTML = '00'; }
    }, 1000);