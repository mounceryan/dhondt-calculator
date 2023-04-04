
function brexitparty() {
    var bp = document.getElementById("bp").value;

    var bps1 = parseInt(bp);
    document.getElementById("bps1").innerHTML = bps1.toFixed(0);
    
    var bps2 = parseInt(bps1) / 2;
    document.getElementById("bps2").innerHTML = bps2.toFixed(0);
    
    var bps3 = parseInt(bps1) / 3;
    document.getElementById("bps3").innerHTML = bps3.toFixed(0);
    
    var bps4 = parseInt(bps1) / 4;
    document.getElementById("bps4").innerHTML = bps4.toFixed(0); 
    
    var bps5 = parseInt(bps1) / 5;
    document.getElementById("bps5").innerHTML = bps5.toFixed(0);
    
    var bps6 = parseInt(bps1) / 6;
    document.getElementById("bps6").innerHTML = bps6.toFixed(0);
    
    var bps7 = parseInt(bps1) / 7;
    document.getElementById("bps7").innerHTML = bps7.toFixed(0);
    
    var bps8 = parseInt(bps1) / 8;
    document.getElementById("bps8").innerHTML = bps8.toFixed(0);
    
    var bps9 = parseInt(bps1) / 9;
    document.getElementById("bps9").innerHTML = bps9.toFixed(0);
    
    var bps10 = parseInt(bps1) / 10;
    document.getElementById("bps10").innerHTML = bps10.toFixed(0);
}

function tigparty() {
    var tig = document.getElementById("tig").value;

    var tigs1 = parseInt(tig);
    document.getElementById("tigs1").innerHTML = tigs1.toFixed(0);
    
    var tigs2 = parseInt(tigs1) / 2;
    document.getElementById("tigs2").innerHTML = tigs2.toFixed(0);
    
    var tigs3 = parseInt(tigs1) / 3;
    document.getElementById("tigs3").innerHTML = tigs3.toFixed(0);
    
    var tigs4 = parseInt(tigs1) / 4;
    document.getElementById("tigs4").innerHTML = tigs4.toFixed(0); 
    
    var tigs5 = parseInt(tigs1) / 5;
    document.getElementById("tigs5").innerHTML = tigs5.toFixed(0);
    
    var tigs6 = parseInt(tigs1) / 6;
    document.getElementById("tigs6").innerHTML = tigs6.toFixed(0);
    
    var tigs7 = parseInt(tigs1) / 7;
    document.getElementById("tigs7").innerHTML = tigs7.toFixed(0);
    
    var tigs8 = parseInt(tigs1) / 8;
    document.getElementById("tigs8").innerHTML = tigs8.toFixed(0);
    
    var tigs9 = parseInt(tigs1) / 9;
    document.getElementById("tigs9").innerHTML = tigs9.toFixed(0);
    
    var tigs10 = parseInt(tigs1) / 10;
    document.getElementById("tigs10").innerHTML = tigs10.toFixed(0);
}

function conservativeparty() {
    var cp = document.getElementById("cp").value;

    var cps1 = parseInt(cp);
    document.getElementById("cps1").innerHTML = cps1.toFixed(0);
    
    var cps2 = parseInt(cps1) / 2;
    document.getElementById("cps2").innerHTML = cps2.toFixed(0);
    
    var cps3 = parseInt(cps1) / 3;
    document.getElementById("cps3").innerHTML = cps3.toFixed(0);
    
    var cps4 = parseInt(cps1) / 4;
    document.getElementById("cps4").innerHTML = cps4.toFixed(0); 
    
    var cps5 = parseInt(cps1) / 5;
    document.getElementById("cps5").innerHTML = cps5.toFixed(0);
    
    var cps6 = parseInt(cps1) / 6;
    document.getElementById("cps6").innerHTML = cps6.toFixed(0);
    
    var cps7 = parseInt(cps1) / 7;
    document.getElementById("cps7").innerHTML = cps7.toFixed(0);
    
    var cps8 = parseInt(cps1) / 8;
    document.getElementById("cps8").innerHTML = cps8.toFixed(0);
    
    var cps9 = parseInt(cps1) / 9;
    document.getElementById("cps9").innerHTML = cps9.toFixed(0);
    
    var cps10 = parseInt(cps1) / 10;
    document.getElementById("cps10").innerHTML = cps10.toFixed(0);
}

function mosttest() {
var array1 = [document.getElementById("cps1").innerHTML, document.getElementById("cps2").innerHTML];
    
    var y = Math.max(...array1);
    
    document.getElementById("south-west").innerHTML = y;
    
     
   if (document.getElementsByClassName('table-row-number-ten').innerHTML = 'y')
        document.getElementsByClassName('table-row-number-ten').style.fontWeight = '900';
    else
        document.getElementsByClassName('table-row-number-ten').style.fontWeight = '100';
    
}

