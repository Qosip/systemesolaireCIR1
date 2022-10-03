/*
var tab = {"earth" : [

        { "id" : 1,
            "posx" : 4.700000e+10,
            "posy" : 0.000000e+00,
            "posz" : 0,
            "t" : 1,
        },
        { "id" : 2,
            "posx" : 4.700000e+10,
            "posy" : 5.095499e+08,
            "posz" : 0,
            "t" : 2,
        },
        { "id" : 3,
            "posx" : 4.699552e+10,
            "posy" : 1.019100e+09,
            "posz" :0,
            "t" : 3,
        }
    ]
}
const tabdeux = [[[147098207124.104950],[0.000000],[0.000000]]
    ,[[147098207124.104950],[2617128980.738974],[0.000000]]
    ,[[147052409211.428619],[5234257961.477947],[0.000000]]
    ,[[146960835123.127014],[7850572505.670082],[0.000000]]
    ,[[146823521544.454254],[10465258975.266819],[0.000000]]
    ,[[146640520098.320709],[13077504822.395470],[0.000000]]
    ,[[146411897328.372009],[15686498881.503387],[0.000000]]
    ,[[146137734675.647644],[18291431661.803707],[0.000000]]
    ,[[145818128448.777985],[20891495639.854969],[0.000000]]
    ,[[145453189787.683990],[23485885552.104416],[0.000000]]];
    ,[[145043044620.748871],[26073798687.222515],[0.000000]]
    ,[[144587833615.436981],[28654435178.054081],[0.000000]]
    ,[[144087712122.340393],[31226998293.009510],[0.000000]]
    ,[[143542850112.639801],[33790694726.717937],[0.000000]]
    ,[[142953432108.971497],[36344734889.762619],[0.000000]]
    ,[[142319657109.699249],[38888333197.317665],[0.000000]]
    ,[[141641738506.594604],[41420708356.504059],[0.000000]]
    ,[[140919903995.936279],[43941083652.282303],[0.000000]]
    ,[[140154395483.044739],[46448687231.698288],[0.000000]]
    ,[[139345468980.274719],[48942752386.298729],[0.000000]]
    ,[[138493394498.494507],[51422517832.532425],[0.000000]]
    ,[[137598455932.086761],[53887227989.953773],[0.000000]]
    ,[[136660950937.512634],[56336133257.045296],[0.000000]]
    ,[[135681190805.486435],[58768490284.476700],[0.000000]]
    ,[[134659500326.815125],[61183562245.618813],[0.000000]]
    ,[[133596217651.962601],[63580619104.131920],[0.000000]]
    ,[[132491694144.405289],[65958937878.449478],[0.000000]]
    ,[[131346294227.851852],[68317802902.979759],[0.000000]]];


const personne = JSON.stringify(tab);
console.log(personne);
const personnedeux = JSON.stringify(tabdeux);
console.log("perso deux " +personnedeux);

const newperso = personnedeux.replace(/[\[\]']+/g,'');
console.log("uiuiui"+newperso);
parseInt(newperso);
const newpersodeux = newperso.replace(/,/g,'][');
const crochet = '[';
const crochetferm = ']';
const contun = crochet+newperso;
const contdeux = contun + crochetferm;
console.log("bonvoila 4.700000 0.00000" + contdeux[0]+ contdeux[1]+ contdeux[2]+ contdeux[3]+ contdeux[4]+ contdeux[5]+ contdeux[6]+ contdeux[7]+ contdeux[8]+ contdeux[9]+ contdeux[10])
console.log(contdeux);
var temp = new Array();*/
/*console.log("tempsavant" + temp);
temp = newperso.split(",");

for (a in temp ) {
    temp[a] = parseInt(temp[a], 10);
}
console.log("ieruigbererg" + temp);
*/
//console.log(tabdeux);

var divi = 2000000000;
const h = 500; // longueur et largeur du canva
var blabla = 0;
const nbdonnee = 60233;
var inclinaison = 1;

function retrecir(){
    //rétrécit le canva (diminue les valeurs x et y des points)
    if(divi<1000000000){
        divi = divi + 200000000;
    }
    else if (divi<30000000000){
        divi = divi+1000000000;
    }
}
function agrandir(){
    //agrandit le canva (augmente les valeurs x et y des points)
    if (divi>1000000000) {
        divi = divi - 1000000000;
    }
    else if (divi>0){
        divi = divi - 200000000;
    }
}
function inclinerplus(){
    //divise la valeur en y des points
    if(inclinaison<11){
        inclinaison = inclinaison + 2;
    }
    else if(inclinaison<61){
        inclinaison = inclinaison + 10;
    }
}
function inclinermoins(){
    //multiplie la valeur en y des points
    if(inclinaison>11){
        inclinaison = inclinaison - 10;
    }
    else if (inclinaison>1) {
        inclinaison = inclinaison - 2;
    }
}
var vit = 1;
function Vitesseplus(){
    //augmente la vitesse
    if (vit<10){
        vit = vit + 1;
    }
}
function Vitessemoins(){
    //diminue la vitesse
    if(vit>1){
        vit = vit - 1;
    }
}
/*
function preload() {
    //planet = loadJSON('planet.json');
    file = document.querySelector('input[type=file]').files[0];
    planet = loadJSON(file.name);
    //alert (planet);//new FileReader(file)
    //alert(file.name);
    //console.log(file.name);
}
function loadData() {
    let bubbleData = planet['eartheuler'];
    console.log(bubbleData);
}*/

function chargefic() {
    //fonction qui va recevoir le fichier passé par l'input
    /////////// FONCTION PRISE DE : https://qawithexperts.com/article/javascript/read-json-file-with-javascript/380 /////////////////////////
    var file_to_read = document.getElementById('dep').files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
        var content = e.target.result;
        var planet = JSON.parse(content); // parse json
        console.log("nonon"+planet["neptune-rk2"][0][0][0]); // You can index every object
        draw(planet);
    };
    fileread.readAsText(file_to_read);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //fileread.readAsText(file_to_read);
    blabla = 1;
    document.getElementById('bod').style.transitionDuration = "0.5s";
    var n = 3;
    var t = setInterval(compte, 1000);
    function compte() {
        n = n-1;
        document.getElementById('txt1').innerText = "Veuillez patienter (chargement) :";
        document.getElementById('numpat').innerText = n;
        if (n===2){
            document.getElementById('bod').style.backgroundColor = "antiquewhite";
        }
        if (n===0){
            document.getElementById('aenlever').style.display = 'none';
            clearInterval(t);
        }
    }
}



function draw(planet){
    //programme qui dessinne sur le canva les différentes planètes avec les différentes méthodes de calcul
    //mise en commentaire de venus dans la fonction euler car ça devenait brouillon avec toutes les trajectoires qui se croisaient
    //tableaux pour comparer les valeurs à l'instant t et t-1 et changer certaines valeurs
    var divitab = [2000000000,2000000000];
    var inclintab = [1,1];
    var vittab = [1,1];
    /*const requestURL = 'planet.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var planet = request.response;*/
        //blabla = 1;

    //récupération des canva
    const canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const canvd = document.getElementById('canvdeux');
    var ctxdeux = canvd.getContext('2d');
    canvd.width = canvas.clientWidth;
    canvd.height = canvas.clientHeight;

    const canvt = document.getElementById('canvtrois');
    var ctxtrois = canvt.getContext('2d');
    canvt.width = canvas.clientWidth;
    canvt.height = canvas.clientHeight;

    const canvq = document.getElementById('canvquatre');
    var ctxquatre = canvq.getContext('2d');
    canvq.width = canvq.clientWidth;
    canvq.height = canvq.clientHeight;

    const canvc = document.getElementById('canvcinq');
    var ctxcinq = canvc.getContext('2d');
    canvc.width = canvc.clientWidth;
    canvc.height = canvc.clientHeight;

    ctx.beginPath();
    ctx.moveTo(h / 2, h / 2);
    ctx.strokeStyle = 'black';
    let o = 2;
    let p = 2;
    let q = 2;
    if (blabla === 1) {
        noLoop();
        setInterval(nonla, 10);
        function nonla() {
            divitab[0] = divitab[1];
            divitab[1] = divi;
            inclintab[0] = inclintab[1];
            inclintab[1] = inclinaison;
            vittab[0] = vittab[1];
            vittab[1] = vit;
            //différents "if" pour faire des actions en fonction des commandes
            if(divitab[0]!=divitab[1] || inclintab[0]!=inclintab[1]){
                ctxdeux.clearRect(0, 0, canvas.width, canvas.height);
                ctxtrois.clearRect(0, 0, canvas.width, canvas.height);
                ctxquatre.clearRect(0, 0, canvas.width, canvas.height);
                ctxcinq.clearRect(0, 0, canvas.width, canvas.height);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                o=2;
                p=2;
                q=2;
                document.getElementById('k').textContent = p - 2;
                document.getElementById('j').textContent = o - 2;
                document.getElementById('m').textContent = q - 2;
            }
            ctx.beginPath();
            ctx.fillStyle = "#ffad00";
            var raad = 20 + (-3 * (divi / 1000000000));
            if (raad>0.1 && divi > 1000000000){
                ctx.arc(h / 2, h / 2, raad, 0, 2 * Math.PI);
            }
            else if (raad<0.1){
                ctx.arc(h / 2, h / 2, 1, 0, 2 * Math.PI);
            }
            else if (divi < 1000000000){
                ctx.arc(h / 2, h / 2, 30, 0, 2 * Math.PI);
            }
            else {
                ctx.arc(h / 2, h / 2, 25, 0, 2 * Math.PI);
            }
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.textAlign = "center";
            ctx.fillStyle = "black";
            ctx.textBaseline = "middle";
            ctx.fillText('Soleil', h / 2, h / 2, 60);
            ctx.stroke();
            ctx.fill();
            if(blabla===82){
                ctxdeux.clearRect(0, 0, canvas.width, canvas.height);
                ctxtrois.clearRect(0, 0, canvas.width, canvas.height);
                ctxquatre.clearRect(0, 0, canvas.width, canvas.height);
                ctxcinq.clearRect(0, 0, canvas.width, canvas.height);
                o = 2;
                p = 2;
                q = 2;
                vittab[1] = 0;
                document.getElementById('k').textContent = p - 2;
                document.getElementById('j').textContent = o - 2;
                document.getElementById('m').textContent = q - 2;
            }
            if (o>nbdonnee){
                if(blabla===5 || p<nbdonnee){
                    p = p + vittab[1];
                }
                if(blabla===90 || o<nbdonnee){
                    q = q + vittab[1];
                }
                else{
                    blabla = 4;
                }
            }
            else if (p>nbdonnee){
                if(blabla===1 || o<nbdonnee){
                    o = o + vittab[1];
                }
                if(blabla===90 || o<nbdonnee){
                    q = q + vittab[1];
                }
                else {
                    blabla = 4;
                }
            }
            else if(q>nbdonnee){
                if(blabla===1 || o<nbdonnee){
                    o = o + vittab[1];
                }
                if(blabla===5 || p<nbdonnee){
                    p = p + vittab[1];
                }
                else {
                    blabla = 4;
                }
            }
            else {
                if(blabla===3 ||blabla===1 || blabla === 69) {
                    console.log(planet["saturne-rk2"][o][0][0]);
                    // Rond terre euler
                    ctxdeux.clearRect(0, 0, canvas.width, canvas.height);
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "blue";
                    ctxdeux.arc(planet["eartheuler"][o][0][0] / divi  + 250, planet["eartheuler"][o][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Terre', planet["eartheuler"][o][0][0] / divi  + 250, planet["eartheuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais terre Euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "black";
                    ctxtrois.lineTo((planet["eartheuler"][o-2][0][0] / divi ) + 250, (planet["eartheuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["eartheuler"][o-1][0][0] / divi ) + 250, (planet["eartheuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["eartheuler"][o][0][0] / divi ) + 250, (planet["eartheuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Rond mercure euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "RED";
                    ctxdeux.arc(planet["mercuryeuler"][o][0][0] / divi  + 250, planet["mercuryeuler"][o][0][1] / (divi*inclinaison)  + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Mercure', planet["mercuryeuler"][o][0][0] / divi  + 250, planet["mercuryeuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais Mercure euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "red";
                    ctxtrois.lineTo((planet["mercuryeuler"][o-2][0][0] / divi) + 250, (planet["mercuryeuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["mercuryeuler"][o-1][0][0] / divi) + 250, (planet["mercuryeuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["mercuryeuler"][o][0][0] / divi) + 250, (planet["mercuryeuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Rond mars euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "orange";
                    ctxdeux.arc(planet["marseuler"][o][0][0] / divi  + 250, planet["marseuler"][o][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Mars', planet["marseuler"][o][0][0] / divi  + 250, planet["marseuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Rond mars euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "rgba(0,139,139,0.69)";
                    ctxdeux.arc(planet["saturneeuler"][o][0][0] / divi  + 250, planet["saturneeuler"][o][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Saturne', planet["saturneeuler"][o][0][0] / divi  + 250, planet["saturneeuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais Mars euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "orange";
                    ctxtrois.lineTo((planet["marseuler"][o-2][0][0] / divi) + 250, (planet["marseuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["marseuler"][o-1][0][0] / divi) + 250, (planet["marseuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["marseuler"][o][0][0] / divi) + 250, (planet["marseuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Rond venus euler
                    /*
                           ctxdeux.beginPath();
                           ctxdeux.fillStyle = "brown";
                           ctxdeux.arc(planet["venuseuler"][o][0][0] / divi / 2 + 250, planet["venuseuler"][o][0][1] / divi / 2 + 250, 3, 0, 2 * Math.PI);
                           ctxdeux.fill();
                           ctxdeux.stroke();
                           ctxdeux.beginPath();
                           ctxdeux.textAlign = "center";
                           ctxdeux.fillStyle = "black";
                           ctxdeux.textBaseline = "bottom";
                           ctxdeux.fillText('Venus', planet["venuseuler"][o][0][0] / divi / 2 + 250, planet["venuseuler"][o][0][1] / divi / 2 + 245, 60);
                           ctxdeux.stroke();
                           */
                    // Trais Venus euler
                    /*ctxtrois.beginPath();
                           ctxtrois.strokeStyle = "brown";
                           ctxtrois.lineTo((planet["venuseuler"][o-2][0][0] / divi / 2) + 250, (planet["venuseuler"][o-2][0][1] / divi / 2) + 250);
                           ctxtrois.lineTo((planet["venuseuler"][o-1][0][0] / divi / 2) + 250, (planet["venuseuler"][o-1][0][1] / divi / 2) + 250);
                           ctxtrois.lineTo((planet["venuseuler"][o][0][0] / divi / 2) + 250, (planet["venuseuler"][o][0][1] / divi / 2) + 250);
                           ctxtrois.stroke();*/
                    // Rond Jupiter euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "antiquewhite";
                    ctxdeux.arc(planet["jupitereuler"][o][0][0] / divi  + 250, planet["jupitereuler"][o][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Jupiter', planet["jupitereuler"][o][0][0] / divi  + 250, planet["jupitereuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais Jupiter euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "antiquewhite";
                    ctxtrois.lineTo((planet["jupitereuler"][o-2][0][0] / divi) + 250, (planet["jupitereuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupitereuler"][o-1][0][0] / divi) + 250, (planet["jupitereuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupitereuler"][o][0][0] / divi) + 250, (planet["jupitereuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Saturne euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#008B8BB0";
                    ctxtrois.lineTo((planet["saturneeuler"][o-2][0][0] / divi) + 250, (planet["saturneeuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["saturneeuler"][o-1][0][0] / divi) + 250, (planet["saturneeuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["saturneeuler"][o][0][0] / divi) + 250, (planet["saturneeuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Rond Uranus euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "#c58167";
                    ctxdeux.arc(planet["uranuseuler"][o][0][0] / divi  + 250, planet["uranuseuler"][o][0][1] / (divi*inclinaison)  + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Uranus', planet["uranuseuler"][o][0][0] / divi  + 250, planet["uranuseuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais Mercure euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#424a5b";
                    ctxtrois.lineTo((planet["uranuseuler"][o-2][0][0] / divi) + 250, (planet["uranuseuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["uranuseuler"][o-1][0][0] / divi) + 250, (planet["uranuseuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["uranuseuler"][o][0][0] / divi) + 250, (planet["uranuseuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Rond Neptune euler
                    ctxdeux.beginPath();
                    ctxdeux.fillStyle = "rgb(56,53,140)";
                    ctxdeux.arc(planet["neptuneeuler"][o][0][0] / divi  + 250, planet["neptuneeuler"][o][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxdeux.fill();
                    ctxdeux.stroke();
                    ctxdeux.beginPath();
                    ctxdeux.textAlign = "center";
                    ctxdeux.fillStyle = "black";
                    ctxdeux.textBaseline = "bottom";
                    ctxdeux.fillText('Neptune', planet["neptuneeuler"][o][0][0] / divi  + 250, planet["neptuneeuler"][o][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxdeux.stroke();
                    // Trais Neptune euler
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "rgb(128,128,192)";
                    ctxtrois.lineTo((planet["neptuneeuler"][o-2][0][0] / divi) + 250, (planet["neptuneeuler"][o-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["neptuneeuler"][o-1][0][0] / divi) + 250, (planet["neptuneeuler"][o-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["neptuneeuler"][o][0][0] / divi) + 250, (planet["neptuneeuler"][o][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Mise à jour du jour euler
                    document.getElementById('j').textContent = o -2;
                }
                if(blabla === 5 || blabla === 69) {
                    console.log(planet["saturne-rk2"][p][0][0]);
                    // Rond Terre euler-as
                    ctxquatre.clearRect(0, 0, canvas.width, canvas.height);
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "blue";
                    ctxquatre.arc(planet["earth-as"][p][0][0] / divi + 250, planet["earth-as"][p][0][1] / (divi*inclinaison)  + 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Terre', planet["earth-as"][p][0][0] / divi + 250, planet["earth-as"][p][0][1] / (divi*inclinaison) + 245, 60);
                    ctxquatre.stroke();
                    // Rond Mercure euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "RED";
                    ctxquatre.arc(planet["mercury-as"][p][0][0] / divi + 250, planet["mercury-as"][p][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Mercure', planet["mercury-as"][p][0][0] / divi + 250, planet["mercury-as"][p][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxquatre.stroke();
                    // Rond Saturne euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "#008B8BB0";
                    ctxquatre.arc(planet["saturne-as"][p][0][0] / divi + 250, planet["saturne-as"][p][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Saturne', planet["saturne-as"][p][0][0] / divi + 250, planet["saturne-as"][p][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxquatre.stroke();
                    // Rond Mars euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "orange";
                    ctxquatre.arc(planet["mars-as"][p][0][0] / divi + 250, planet["mars-as"][p][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Mars', planet["mars-as"][p][0][0] / divi + 250, planet["mars-as"][p][0][1] / (divi*inclinaison) + 245, 60);
                    ctxquatre.stroke();
                    // Rond Venus euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "brown";
                    ctxquatre.arc(planet["venus-as"][p][0][0] / divi  + 250, planet["venus-as"][p][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Venus', planet["venus-as"][p][0][0] / divi  + 250, planet["venus-as"][p][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxquatre.stroke();
                    // Rond Jupiter euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "antiquewhite";
                    ctxquatre.arc(planet["jupiter-as"][p][0][0] / divi  + 250, planet["jupiter-as"][p][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Jupiter', planet["jupiter-as"][p][0][0] / divi  + 250, planet["jupiter-as"][p][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxquatre.stroke();
                    // Trais Terre euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "grey";
                    ctxtrois.lineTo((planet["earth-as"][p-2][0][0] / divi ) + 250, (planet["earth-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["earth-as"][p-1][0][0] / divi ) + 250, (planet["earth-as"][p-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["earth-as"][p][0][0] / divi ) + 250, (planet["earth-as"][p][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Trais Mercure euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#ff9a9a";
                    ctxtrois.lineTo((planet["mercury-as"][p-2][0][0] / divi ) + 250, (planet["mercury-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["mercury-as"][p-1][0][0] / divi ) + 250, (planet["mercury-as"][p-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["mercury-as"][p][0][0] / divi ) + 250, (planet["mercury-as"][p][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Mars euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "orange";
                    ctxtrois.lineTo((planet["mars-as"][p-2][0][0] / divi ) + 250, (planet["mars-as"][p-2][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["mars-as"][p-1][0][0] / divi ) + 250, (planet["mars-as"][p-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["mars-as"][p][0][0] / divi ) + 250, (planet["mars-as"][p][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Trais Venus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "brown";
                    ctxtrois.lineTo((planet["venus-as"][p-2][0][0] / divi ) + 250, (planet["venus-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["venus-as"][p-1][0][0] / divi ) + 250, (planet["venus-as"][p-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["venus-as"][p][0][0] / divi ) + 250, (planet["venus-as"][p][0][1] /(divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Venus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "antiquewhite";
                    ctxtrois.lineTo((planet["jupiter-as"][p-2][0][0] / divi ) + 250, (planet["jupiter-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupiter-as"][p-1][0][0] / divi ) + 250, (planet["jupiter-as"][p-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupiter-as"][p][0][0] / divi ) + 250, (planet["jupiter-as"][p][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Uranus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#008B8BB0";
                    ctxtrois.lineTo((planet["saturne-as"][p-2][0][0] / divi ) + 250, (planet["saturne-as"][p-2][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["saturne-as"][p-1][0][0] / divi ) + 250, (planet["saturne-as"][p-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["saturne-as"][p][0][0] / divi ) + 250, (planet["saturne-as"][p][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Rond Uranus euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "#c58167";
                    ctxquatre.arc(planet["uranus-as"][p][0][0] / divi  + 250, planet["uranus-as"][p][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Uranus', planet["uranus-as"][p][0][0] / divi  + 250, planet["uranus-as"][p][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxquatre.stroke();
                    // Trais Terre euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#8c9bbe";
                    ctxtrois.lineTo((planet["uranus-as"][p-2][0][0] / divi ) + 250, (planet["uranus-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["uranus-as"][p-1][0][0] / divi ) + 250, (planet["uranus-as"][p-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["uranus-as"][p][0][0] / divi ) + 250, (planet["uranus-as"][p][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Rond Neptune euler-as
                    ctxquatre.beginPath();
                    ctxquatre.fillStyle = "rgb(56,53,140)";
                    ctxquatre.arc(planet["neptune-as"][p][0][0] / divi  + 250, planet["neptune-as"][p][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxquatre.fill();
                    ctxquatre.stroke();
                    ctxquatre.beginPath();
                    ctxquatre.textAlign = "center";
                    ctxquatre.fillStyle = "black";
                    ctxquatre.textBaseline = "bottom";
                    ctxquatre.fillText('Neptune', planet["neptune-as"][p][0][0] / divi  + 250, planet["neptune-as"][p][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxquatre.stroke();
                    // Trais Neptune euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#36555d";
                    ctxtrois.lineTo((planet["neptune-as"][p-2][0][0] / divi ) + 250, (planet["neptune-as"][p-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["neptune-as"][p-1][0][0] / divi ) + 250, (planet["neptune-as"][p-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["neptune-as"][p][0][0] / divi ) + 250, (planet["neptune-as"][p][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Mise à jour du jour euler-as
                    document.getElementById('k').textContent = p - 2;
                }
                //////////////////////////////////////////// RK2
                if(blabla === 90 || blabla === 69) {
                    console.log(planet["saturne-rk2"][q][0][0]);
                    // Rond Terre euler-as
                    ctxcinq.clearRect(0, 0, canvas.width, canvas.height);
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "blue";
                    ctxcinq.arc(planet["earth-rk2"][q][0][0] / divi + 250, planet["earth-rk2"][q][0][1] / (divi*inclinaison)  + 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Terre', planet["earth-rk2"][q][0][0] / divi + 250, planet["earth-rk2"][q][0][1] / (divi*inclinaison) + 245, 60);
                    ctxcinq.stroke();
                    // Rond Mercure euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "RED";
                    ctxcinq.arc(planet["mercury-rk2"][q][0][0] / divi + 250, planet["mercury-rk2"][q][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Mercure', planet["mercury-rk2"][q][0][0] / divi + 250, planet["mercury-rk2"][q][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxcinq.stroke();
                    // Rond Saturne euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "#008B8BB0";
                    ctxcinq.arc(planet["saturne-rk2"][q][0][0] / divi + 250, planet["saturne-rk2"][q][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Saturne', planet["saturne-rk2"][q][0][0] / divi + 250, planet["saturne-rk2"][q][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxcinq.stroke();
                    // Rond Mars euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "orange";
                    ctxcinq.arc(planet["mars-rk2"][q][0][0] / divi + 250, planet["mars-rk2"][q][0][1] / (divi*inclinaison)+ 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Mars', planet["mars-rk2"][q][0][0] / divi + 250, planet["mars-rk2"][q][0][1] / (divi*inclinaison) + 245, 60);
                    ctxcinq.stroke();
                    // Rond Venus euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "brown";
                    ctxcinq.arc(planet["venus-rk2"][q][0][0] / divi  + 250, planet["venus-rk2"][q][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Venus', planet["venus-rk2"][q][0][0] / divi  + 250, planet["venus-rk2"][q][0][1] / (divi*inclinaison)+ 245, 60);
                    ctxcinq.stroke();
                    // Rond Jupiter euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "antiquewhite";
                    ctxcinq.arc(planet["jupiter-rk2"][q][0][0] / divi  + 250, planet["jupiter-rk2"][q][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Jupiter', planet["jupiter-rk2"][q][0][0] / divi  + 250, planet["jupiter-rk2"][q][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxcinq.stroke();
                    // Trais Terre euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#d7cbcb";
                    ctxtrois.lineTo((planet["earth-rk2"][q-2][0][0] / divi ) + 250, (planet["earth-rk2"][q-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["earth-rk2"][q-1][0][0] / divi ) + 250, (planet["earth-rk2"][q-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["earth-rk2"][q][0][0] / divi ) + 250, (planet["earth-rk2"][q][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Trais Mercure euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#e8bebe";
                    ctxtrois.lineTo((planet["mercury-rk2"][q-2][0][0] / divi ) + 250, (planet["mercury-rk2"][q-2][0][1] / (divi*inclinaison)) + 250); //mercury-as aux x et ca fait beau
                    ctxtrois.lineTo((planet["mercury-rk2"][q-1][0][0] / divi ) + 250, (planet["mercury-rk2"][q-1][0][1] / (divi*inclinaison) ) + 250); //mercury-as aux x et ca fait beau
                    ctxtrois.lineTo((planet["mercury-rk2"][q][0][0] / divi ) + 250, (planet["mercury-rk2"][q][0][1] / (divi*inclinaison)) + 250); //mercury-as aux x et ca fait beau
                    ctxtrois.stroke();
                    // Trais Mars euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#ffbb7d";
                    ctxtrois.lineTo((planet["mars-rk2"][q-2][0][0] / divi ) + 250, (planet["mars-rk2"][q-2][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["mars-rk2"][q-1][0][0] / divi ) + 250, (planet["mars-rk2"][q-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["mars-rk2"][q][0][0] / divi ) + 250, (planet["mars-rk2"][q][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Trais Venus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#b27a5d";
                    ctxtrois.lineTo((planet["venus-rk2"][q-2][0][0] / divi ) + 250, (planet["venus-rk2"][q-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["venus-rk2"][q-1][0][0] / divi ) + 250, (planet["venus-rk2"][q-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["venus-rk2"][q][0][0] / divi ) + 250, (planet["venus-rk2"][q][0][1] /(divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Venus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#cec4ab";
                    ctxtrois.lineTo((planet["jupiter-rk2"][q-2][0][0] / divi ) + 250, (planet["jupiter-rk2"][q-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupiter-rk2"][q-1][0][0] / divi ) + 250, (planet["jupiter-rk2"][q-1][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["jupiter-rk2"][q][0][0] / divi ) + 250, (planet["jupiter-rk2"][q][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.stroke();
                    // Trais Uranus euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "rgba(0,152,152,0.69)";
                    ctxtrois.lineTo((planet["saturne-rk2"][q-2][0][0] / divi ) + 250, (planet["saturne-rk2"][q-2][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["saturne-rk2"][q-1][0][0] / divi ) + 250, (planet["saturne-rk2"][q-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["saturne-rk2"][q][0][0] / divi ) + 250, (planet["saturne-rk2"][q][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Rond Uranus euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "#c58167";
                    ctxcinq.arc(planet["uranus-rk2"][q][0][0] / divi  + 250, planet["uranus-rk2"][q][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Uranus', planet["uranus-rk2"][q][0][0] / divi  + 250, planet["uranus-rk2"][q][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxcinq.stroke();
                    // Trais Terre euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#5474b7";
                    ctxtrois.lineTo((planet["uranus-rk2"][q-2][0][0] / divi ) + 250, (planet["uranus-rk2"][q-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["uranus-rk2"][q-1][0][0] / divi ) + 250, (planet["uranus-rk2"][q-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["uranus-rk2"][q][0][0] / divi ) + 250, (planet["uranus-rk2"][q][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Rond Neptune euler-as
                    ctxcinq.beginPath();
                    ctxcinq.fillStyle = "rgb(56,53,140)";
                    ctxcinq.arc(planet["neptune-rk2"][q][0][0] / divi  + 250, planet["neptune-rk2"][q][0][1] / (divi*inclinaison) + 250, 3, 0, 2 * Math.PI);
                    ctxcinq.fill();
                    ctxcinq.stroke();
                    ctxcinq.beginPath();
                    ctxcinq.textAlign = "center";
                    ctxcinq.fillStyle = "black";
                    ctxcinq.textBaseline = "bottom";
                    ctxcinq.fillText('Neptune', planet["neptune-rk2"][q][0][0] / divi  + 250, planet["neptune-rk2"][q][0][1] / (divi*inclinaison)  + 245, 60);
                    ctxcinq.stroke();
                    // Trais Neptune euler-as
                    ctxtrois.beginPath();
                    ctxtrois.strokeStyle = "#6b9dab";
                    ctxtrois.lineTo((planet["neptune-rk2"][q-2][0][0] / divi ) + 250, (planet["neptune-rk2"][q-2][0][1] / (divi*inclinaison)) + 250);
                    ctxtrois.lineTo((planet["neptune-rk2"][q-1][0][0] / divi ) + 250, (planet["neptune-rk2"][q-1][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.lineTo((planet["neptune-rk2"][q][0][0] / divi ) + 250, (planet["neptune-rk2"][q][0][1] / (divi*inclinaison) ) + 250);
                    ctxtrois.stroke();
                    // Mise à jour du jour euler-as
                    document.getElementById('m').textContent = q - 2;
                }
                if(blabla===82){
                    ctxdeux.clearRect(0, 0, canvas.width, canvas.height);
                    ctxtrois.clearRect(0, 0, canvas.width, canvas.height);
                    ctxquatre.clearRect(0, 0, canvas.width, canvas.height);
                    ctxcinq.clearRect(0, 0, canvas.width, canvas.height);
                    o = 2;
                    p = 2;
                    q = 2;
                    vittab[1] = 0;
                }
                if (blabla === 3 || blabla === 69) {
                    o = o + vittab[1];
                } if (blabla === 4) {
                    o = o;
                    blabla = 4;
                } if (blabla === 5 || blabla === 69) {
                    p = p + vittab[1];
                }
                if (blabla === 90 || blabla === 69) {
                    q = q + vittab[1];
                }
            }
        }
    }
}
function keyPressed() {
    //reception des commandes et changement de cartaines définitions css
    document.getElementById('i1').style.color = "#a17622";
    document.getElementById('i1').style.fontSize = "1.5rem";
    document.getElementById('i3').style.color = "#a17622";
    document.getElementById('i3').style.fontSize = "1.5rem";
    document.getElementById('i4').style.color = "#a17622";
    document.getElementById('i4').style.fontSize = "1.5rem";
    document.getElementById('i5').style.color = "#a17622";
    document.getElementById('i5').style.fontSize = "1.5rem";
    document.getElementById('i6').style.color = "#a17622";
    document.getElementById('i6').style.fontSize = "1.5rem";
    document.getElementById('i7').style.color = "#a17622";
    document.getElementById('i7').style.fontSize = "1.5rem";
    if (keyCode === LEFT_ARROW) {
        blabla = 3;
        document.getElementById('i1').style.transitionDuration ="0.2s"
        document.getElementById('i1').style.color = "#E0C129FF";
        document.getElementById('i1').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }else if (keyCode === 32) { // espace
        blabla = 4;
        document.getElementById('i3').style.transitionDuration ="0.2s"
        document.getElementById('i3').style.color = "#E0C129FF";
        document.getElementById('i3').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }else if (keyCode === 65) { // a
        blabla = 5;
        document.getElementById('i4').style.transitionDuration ="0.2s"
        document.getElementById('i4').style.color = "#E0C129FF";
        document.getElementById('i4').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }
    else if (keyCode === 82) { // r
        blabla = 82;
        document.getElementById('i5').style.transitionDuration ="0.2s"
        document.getElementById('i5').style.color = "#E0C129FF";
        document.getElementById('i5').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }
    else if (keyCode === 90) { // z
        blabla = 90;
        document.getElementById('i6').style.transitionDuration ="0.2s"
        document.getElementById('i6').style.color = "#E0C129FF";
        document.getElementById('i6').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }
    else if (keyCode === 69) { // z
        blabla = 69;
        document.getElementById('i7').style.transitionDuration ="0.2s"
        document.getElementById('i7').style.color = "#E0C129FF";
        document.getElementById('i7').style.fontSize = "1.8rem";
        print(key, ' ', keyCode);
    }
}
//over et out change le css pour les boutons associés sur un "hover"
function over1(){
    var t = document.getElementById('im1').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function over2(){
    var t = document.getElementById('im2').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function out1(){
    var t = document.getElementById('im1').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}
function out2(){
    var t = document.getElementById('im2').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}
function over3(){
    var t = document.getElementById('im3').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function out3(){
    var t = document.getElementById('im3').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}
function over4(){
    var t = document.getElementById('im4').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function out4(){
    var t = document.getElementById('im4').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}
function over5(){
    var t = document.getElementById('im5').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function out5(){
    var t = document.getElementById('im5').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}
function over6(){
    var t = document.getElementById('im6').style;
    t.transitionDuration = "0.1s";
    t.height = "1.75rem";
    t.width = "1.75rem";
    t.left = "0.12rem";
    t.top = "0.12rem";
}
function out6(){
    var t = document.getElementById('im6').style;
    t.transitionDuration = "0.1s";
    t.height = "1.5rem";
    t.width = "1.5rem";
    t.left = "0.25rem";
    t.top = "0.25rem";
}