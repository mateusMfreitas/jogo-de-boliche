//mostra a "telainicial" no início do jogo
setScreen("telainicial");
setText("nometxt", "insira seu nome aqui");
playSound("wii_sports_bowling_background_music_10_minutes_-8146161037605593333-(mp3cut.net).mp3", true);
hideElement("semsom");
//declaração das variáveis
var bolaXA;
var bolaYA;
var bolaW = 55;
var bolaH = 40;
var v;
var velocidadeBarra6 = 1;
var velocidadeBarra7 = 1;
var velocidadeBarra8 = 1;
var velocidadeBarra88 = -1;
var velocidadeBarra9 = 1;
var velocidadeBarra92 = -1;
var velocidadeBarra10 = 1;
var velocidadeBarra102 = 1;

var pinosY = 60;
var pinosW = 25;
var pinosH = 65;
var pino1X = 100;
var pino2X = 125;
var pino3X = 150;
var pino4X = 175;
var pino5X = 200;

var pinoC1 = 0;
var pinoC2 = 0;
var pinoC3 = 0;
var pinoC4 = 0;
var pinoC5 = 0;

var velocidadeX;
var velocidadeY;

var vidas = 3;
var click = 0;

var rotacao = 50;
var angulo = 50;
var posbola = 0;
var contagem = 0;
var fase = 1;
var pinos = 0;
var e =  0;
var estrelas = 0;

//dados
var top1pontos = 0;
var top2pontos = 0;
var top3pontos = 0;
var top1nome = "null";
var top2nome = "null";
var top3nome = "null";
var top1pinos = 0;
var top2pinos = 0;
var top3pinos = 0;
var top1estrelas = 0;
var top2estrelas = 0;
var top3estrelas = 0;
var top1vidas = 0;
var top2vidas = 0;
var top3vidas = 0;

var nomeAtual = "";
var pontuacaoAtual = 0;

//esconde os elementos no início do jogo 
hideElement("semsom1");

hideElement("seta15ah");
hideElement("seta15h");
hideElement("seta30ah");
hideElement("seta30h");
hideElement("seta45ah");
hideElement("seta45h");

hideElement("avancarfase3");
hideElement("avancarfase4");
hideElement("avancarfase5");
hideElement("avancarfase6");
hideElement("avancarfase7");
hideElement("avancarfase8");
hideElement("avancarfase9");
hideElement("avancarfase10");

hideElement("cone");
hideElement("cone2");
hideElement("cone22");

hideElement("tfase2");
hideElement("tfase3");
hideElement("tfase4");
hideElement("tfase5");
hideElement("tfase6");
hideElement("tfase7");
hideElement("tfase8");
hideElement("tfase9");
hideElement("tfase10");

hideElement("vida2");
hideElement("vida1");
hideElement("vida0");
hideElement("vida4");
hideElement("vida5");
showElement("vida3");

esconderO2();
esconderO3();
esconderO4();
esconderO5();
esconderO6();
esconderO7();
esconderO8();
esconderO9();
esconderO10();

//tutorial
hideElement("tutorial2");
hideElement("tutorial22");
hideElement("tutorial222");
hideElement("tutorial3");
hideElement("tutorial33");
hideElement("tutorial333");
hideElement("tutorial3333");
hideElement("tutorial4");
hideElement("tutorial44");
hideElement("tutorial444");
hideElement("tutorial5");
hideElement("tutorial55");
hideElement("tutorial555");
hideElement("tutorial6");
hideElement("tutorial66");
hideElement("tutorial7");
hideElement("tutorial77");

findHighScores();
displayHighScores();
findHighScores();
displayHighScores();

//eventos para ligar e desligar o som de fundo do jogo
onEvent("comsom", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  stopSound("wii_sports_bowling_background_music_10_minutes_-8146161037605593333-(mp3cut.net).mp3");
  hideElement("comsom");
  hideElement("comsom1");
  showElement("semsom");
  showElement("semsom1");
});

onEvent("semsom", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  playSound("wii_sports_bowling_background_music_10_minutes_-8146161037605593333-(mp3cut.net).mp3", true);
  hideElement("semsom");
  hideElement("semsom1");
  showElement("comsom");
  showElement("comsom1");
});

onEvent("comsom1", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  stopSound("wii_sports_bowling_background_music_10_minutes_-8146161037605593333-(mp3cut.net).mp3");
  hideElement("comsom1");
  hideElement("comsom");
  showElement("semsom1");
  showElement("semsom");
});

onEvent("semsom1", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  playSound("wii_sports_bowling_background_music_10_minutes_-8146161037605593333-(mp3cut.net).mp3", true);
  hideElement("semsom1");
  hideElement("semsom");
  showElement("comsom1");
  showElement("comsom");
});

onEvent("nometxt", "click", function( ) {
  setText("nometxt", "");
});

//ações realizadas ao clicar no botão "jogar"
onEvent("jogar", "click", function( ) {  
  playSound("clic-(online-audio-converter.com).mp3", false);
  nomeAtual = getText("nometxt");
  setScreen("fase1");   //mostra a tela "fase1"
  mostrarPinos();       //mostra os pinos levantados
  esconderPinosC();     //esconde os pinos caídos
  
  //esconde os elementos que não serão utilizados ainda
  hideElement("sliderAngulo");  
  hideElement("go");
  hideElement("ok");
  hideElement("pronto");
  
  if (fase == 1){               //esconde os obstáculos na fase 1
    hideElement("cone");
    hideElement("cone2");
    hideElement("cone22");
  }
});

//recebe os valores ddo botão deslizante para decidir o Angulo
onEvent("sliderAngulo", "input", function( ) {  
  showElement("go");            //mostra o botão "go"
  angulo = getNumber("sliderAngulo");   //salva o valor de "sliderAngulo" na variável "angulo"
  
  //realiza a animação da seta 
  if (angulo > 0 && angulo < 15) {
    hideElement("seta15ah");
    hideElement("seta15h");
    hideElement("seta30ah");
    hideElement("seta30h");
    showElement("seta45ah");
    hideElement("seta45h"); 
    hideElement("seta"); 
  }else if(angulo >= 15 && angulo < 30){
    hideElement("seta15ah");
    hideElement("seta15h");
    showElement("seta30ah");
    hideElement("seta30h");
    hideElement("seta45ah");
    hideElement("seta45h"); 
    hideElement("seta"); 
  }else if(angulo >= 30 && angulo < 45){
    showElement("seta15ah");
    hideElement("seta15h");
    hideElement("seta30ah");
    hideElement("seta30h");
    hideElement("seta45ah");
    hideElement("seta45h"); 
    hideElement("seta"); 
  }else if(angulo >= 45 && angulo < 60){
    hideElement("seta15ah");
    hideElement("seta15h");
    hideElement("seta30ah");
    hideElement("seta30h");
    hideElement("seta45ah");
    hideElement("seta45h"); 
    showElement("seta");  
  }else if(angulo >= 60 && angulo < 75){
    hideElement("seta15ah");
    showElement("seta15h");
    hideElement("seta30ah");
    hideElement("seta30h");
    hideElement("seta45ah");
    hideElement("seta45h"); 
    hideElement("seta"); 
  }else if(angulo >= 75 && angulo < 90){
    hideElement("seta15ah");
    hideElement("seta15h");
    hideElement("seta30ah");
    showElement("seta30h");
    hideElement("seta45ah");
    hideElement("seta45h"); 
    hideElement("seta");  
  }else if(angulo >= 90 && angulo <= 100){
    hideElement("seta15ah");
    hideElement("seta15h");
    hideElement("seta30ah");
    hideElement("seta30h");
    hideElement("seta45ah");
    showElement("seta45h"); 
    hideElement("seta"); 
  }
});

//ações realizadas ao clicar o botão "ok"
onEvent("ok", "click", function( ) { 
  //esconde os elemento que não serão ultilizados e mostra o "sliderAngulo"
  hideElement("ok");
  hideElement("sliderBola");
  showElement("sliderAngulo"); 
});

//ações realizadas ao clicar o botão "go"
onEvent("go", "click", function( ) {
  click = 1;
  if (click == 1) {
    //velocidadeX = 0;
    //velocidadeY = 0;
    
    //determinar a velocidade da bola
    if (angulo >= 0 && angulo < 15) {
      velocidadeX = -1.3;
      velocidadeY = -0.9;
    }else if(angulo >= 15 && angulo < 30){
      velocidadeX = -0.9;
      velocidadeY = -1.5;
    }else if(angulo >= 30 && angulo < 45){
      velocidadeX = -0.7;
      velocidadeY = -1.6;
    }else if(angulo >= 45 && angulo < 60){
      velocidadeX = 0;
      velocidadeY = -2.5;
    }else if(angulo >= 60 && angulo < 75){
      velocidadeX = 0.7;
      velocidadeY = -1.8;
    }else if(angulo >= 75 && angulo < 90){
      velocidadeX = 0.6;
      velocidadeY = -1.4;
    }else if(angulo >= 90 && angulo <= 100){
      velocidadeX = 1.3;
      velocidadeY = -0.9;
    }
  }
  //esconde os elementos que não serão utilizados
  hideElement("go");
  hideElement("seta15ah");
  hideElement("seta15h");
  hideElement("seta30ah");
  hideElement("seta30h");
  hideElement("seta45ah");
  hideElement("seta45h"); 
  hideElement("seta");  
  hideElement("sliderAngulo");
  
  if (click == 1) {
    timedLoop(1500/60, function(){
      if(getYPosition("bola") > 100){
       setPosition("bola", getXPosition("bola") + velocidadeX ,getYPosition("bola")+velocidadeY);

        //salva os valores atuais de X e Y nas variáveis "bolaXA" e  "bolaYA"
        bolaXA = getXPosition("bola");
        bolaYA = getYPosition ("bola");
        
        //verifica a colisão dos pinos, mostra o pino caído e esconde o pino levantado caso haja colisão
        if (colisaopinos(bolaXA, bolaYA, bolaW, bolaH, pino1X, pinosY, pinosW, pinosH)) {
          hideElement("pino1");
          showElement("pinocaido1");
          pinoC1 = 1;
          
        }
        if ((colisaopinos(bolaXA, bolaYA, bolaW, bolaH, pino2X, pinosY, pinosW, pinosH))) {
          hideElement("pino2");
          showElement("pinocaido2");
          pinoC2 = 1;
          
        }
        if ((colisaopinos(bolaXA, bolaYA, bolaW, bolaH, pino3X, pinosY, pinosW, pinosH))) {
          hideElement("pino3");
          showElement("pinocaido3");
          pinoC3 = 1;
          
        }
        if ((colisaopinos(bolaXA, bolaYA, bolaW, bolaH, pino4X, pinosY, pinosW, pinosH))) {
          hideElement("pino4");
          showElement("pinocaido4");
          pinoC4 = 1;
          
        }
        if ((colisaopinos(bolaXA, bolaYA, bolaW, bolaH, pino5X, pinosY, pinosW, pinosH))) {
          hideElement("pino5");
          showElement("pinocaido5");
          pinoC5 = 1;
          
        }
        
        //verifica a colisão dos obstáculos
        if(fase == 2){          //cone
          if ((bolaXA > 75 && bolaXA < 140) && (bolaYA > 170 && bolaYA < 255)){   
            verificarVidas();
          }
        }else if (fase == 3){   //cone2 e cone22
          if(((bolaXA > 85 && bolaXA < 134) && (bolaYA > 300 && bolaYA < 355))|| (bolaXA + 20 > 180 && bolaXA <226) && (bolaYA > 170 && bolaYA <230)){
            verificarVidas();
          }
        }else if (fase == 4){   //caveira4 e cone4
          if(((bolaXA > 190 - 40 && bolaXA < 245) && (bolaYA > 275 && bolaYA < 330))|| (bolaXA > 55 && bolaXA < 115) && (bolaYA > 175 && bolaYA <255)){
            verificarVidas();
          }
        }else if (fase == 5){   //caveira5, estela5 e coracao5
          if((bolaXA > 130 && bolaXA < 230) && (bolaYA > 275 && bolaYA <330)){       //caveira5
            verificarVidas();
          }if ((bolaXA > 100 && bolaXA < 210) && (bolaYA > 145 && bolaYA < 210)){   //estrela5
            hideElement("estrela5");  
            e= 1;
          }if ((bolaXA > 85 && bolaXA < 145) && (bolaYA > 150 && bolaYA < 205)){    //coracao5
            hideElement("coracao5");  
            v = 1;
          }
        }else if(fase == 6){      //barra6
            if(getXPosition("barra6") + 50 > 250){
              velocidadeBarra6 = -1;
            }else if(getXPosition("barra6") < 66){
              velocidadeBarra6 = 1;
            }
            if((bolaXA > getXPosition("barra6") - 45 && bolaXA < (getXPosition("barra6") + 60)) && (bolaYA > 235 && bolaYA < 258) ){
              verificarVidas();
            } 
        }else if (fase == 7){     //barra7, caveira7 e estrela7
          if (getXPosition("barra7") + 50 > 250){
            velocidadeBarra7 = -1;
          }else if (getXPosition("barra7")< 66){
            velocidadeBarra7 = 1;
          }if ((bolaXA > 135  && bolaXA < 235 ) && (bolaYA > 205  && bolaYA < 255)){
            hideElement("estrela7");
            e = 1;
          }if ((bolaXA > 44 && bolaXA < 145) && (bolaYA > 160 && bolaYA < 225)){
            verificarVidas();
          }else if((bolaXA > getXPosition("barra7") - 40 && bolaXA < getXPosition("barra7") + 50) && (bolaYA > 282 && bolaYA < 297)){
            verificarVidas();
          }
        }else if(fase == 8){      //barra8, barra88, coracao8 e estrela8
          if (getXPosition("barra8") + 45 > 243){
            velocidadeBarra8 = -1;
          }else if (getXPosition("barra8") < 74){
            velocidadeBarra8 = 1;
          }
          if (getXPosition("barra88") + 35 > 246){
            velocidadeBarra88 = -1;
          }else if (getXPosition("barra88") < 77){
            velocidadeBarra88 = 1;
          }
          if ((bolaXA > 135  && bolaXA < 235 ) && (bolaYA > 165  && bolaYA < 230)){
            hideElement("estrela8");
            e = 1;
          }if ((bolaXA > 75 && bolaXA < 135) && (bolaYA > 250 && bolaYA < 305)){
            hideElement("coracao8");  
            v = 1;
          }if ((bolaXA > 140  && bolaXA < 245 ) && (bolaYA > 270  && bolaYA < 350)){
            verificarVidas();
          }else if((bolaXA > getXPosition("barra8") - 40 && bolaXA < getXPosition("barra8") + 44) && (bolaYA > 215 && bolaYA < 228)){
            verificarVidas();
            showElement("coracao8");
            showElement("estrela8");
          }else if((bolaXA > getXPosition("barra88") - 40 && bolaXA < getXPosition("barra8") + 44) && (bolaYA > 268 && bolaYA < 282)){
            verificarVidas();
            showElement("coracao8");
            showElement("estrela8");
          }
        }else if(fase == 9){      //barra9, barra92 e caveira 9
          if (getXPosition("barra9") + 18 > 256){
            velocidadeBarra9 = -1;
          }else if (getXPosition("barra9") < 60){
            velocidadeBarra9 = 1;
          }
          if (getXPosition("barra92") + 18 > 236){
            velocidadeBarra92 = -1;
          }else if (getXPosition("barra92") < 78){
            velocidadeBarra92 = 1;
          }
          if ((bolaXA > 130  && bolaXA < 235 ) && (bolaYA > 215  && bolaYA < 280)){   //caveira9
            verificarVidas();
          }else if((bolaXA > getXPosition("barra9") - 40 && bolaXA < getXPosition("barra9") + 18) && (bolaYA > 290 && bolaYA < 340)){
            verificarVidas();
          }else if((bolaXA > getXPosition("barra92") - 40 && bolaXA < getXPosition("barra92") + 18) && (bolaYA > 156 && bolaYA < 205)){
            verificarVidas();
          }
        }else if (fase == 10){      //barra10, barra102, estrela10 e estrela102
          if (getXPosition("barra10") + 20 > 256){
            velocidadeBarra10 = -1;
          }else if (getXPosition("barra10") < 60){
            velocidadeBarra10 = 1;
          }
          if (getXPosition("barra102") + 50 > 242){
            velocidadeBarra102 = 1;
          }else if (getXPosition("barra102") < 75){
            velocidadeBarra102 = -1;
          }
          if((bolaXA > 43 && bolaXA < 121) && (bolaYA > 240 && bolaYA < 313)){
            hideElement("estrela102");
            e = 1;
          }
          if ((bolaXA > 165 && bolaXA < 240) && (bolaYA > 175 && bolaYA < 248)){
            hideElement("estrela10");
            e = 1;
          }else if((bolaXA > getXPosition("barra10") - 40 && bolaXA < getXPosition("barra10") + 18) && (bolaYA > 276 && bolaYA < 325)){
            verificarVidas();
            showElement("estrela10");
          }else if((bolaXA > getXPosition("barra102") - 40 && bolaXA < getXPosition("barra102") + 50) && (bolaYA > 176 && bolaYA < 194)){
            verificarVidas();
            showElement("estrela102");
        }}
        
        //faz a bola ser rebatida ao chegar nas bordas da pista
        if (bolaXA < 55 || bolaXA + bolaW > 255){   
          velocidadeX = -velocidadeX;
        }
        
        //verificar quando os pinos forem derrubados e mostrar o botão "pronto"
        if (pinoC1 == 1 || pinoC2 == 1 || pinoC3 == 1 || pinoC4 == 1 || pinoC5 == 1) {    
          showElement("pronto");
          
          velocidadeX = 0;
          velocidadeY = 0;
        }
        } 
          //realiza a contagem de pinos derrubados
          contagem = pinoC1 + pinoC2 + pinoC3 + pinoC4 + pinoC5; 
          
    });
   
  }
    

});
  
//recebe os valores de "sliderBola"
onEvent("sliderBola", "input", function() {
  showElement("ok");      //mostra o botão "ok"
  rotacao = getNumber("sliderBola");    //salva o valor de "sliderBola" na variável "rotacao"
  posbola = rotacao;      //salva o valor da variável "rotacao" na variável "posbola" *****
  
  //determina a posição da bola
  if(posbola > 80 && posbola < 190 ){
    setPosition("bola", posbola, 370);
    setPosition("seta", posbola + 10, 310);
    setPosition("seta15h", posbola, 295);
    setPosition("seta15ah", posbola, 303);
    setPosition("seta30h", posbola, 295);
    setPosition("seta30ah", posbola - 15, 295);
    setPosition("seta45h", posbola - 3, 295);
    setPosition("seta45ah", posbola -32, 295);
  }else if(posbola < 80){
    setPosition("bola", 80, 370);
    setPosition("seta", 80 + 10, 310);
    setPosition("seta15h", 80 + 7 , 295);
    setPosition("seta15ah", 80, 303);
    setPosition("seta30h", 80 , 295);
    setPosition("seta30ah", 80 - 15, 295);
    setPosition("seta45h", 80 - 3, 295);
    setPosition("seta45ah", 80 -32, 295);
  }else if(posbola > 190){
    setPosition("bola", 190, 370);
    setPosition("seta", 190 + 10, 310);
    setPosition("seta15h", 190 + 7 , 295);
    setPosition("seta15ah",190, 303);
    setPosition("seta30h", 190 , 295);
    setPosition("seta30ah", 190 - 15, 295);
    setPosition("seta45h", 190 - 3, 295);
    setPosition("seta45ah", 190 -32, 295);
  }
});

//acontecimento ao clicar no botão "pronto"
onEvent("pronto", "click", function( ) {
  //verifica se o jogador conseguiu derrubar o mínimo de pinos e mostra "tela ganhou" 
  if(contagem >= 3){
    playSound("somPinos.mp3", false);
  if(e == 1){
      playSound("somEstrela.mp3", false);
      estrelas += 1;
      e = 0;
    }
    pinos += contagem;
    reset();
    fase += 1;
    setScreen("telaGanhou");
    if(v == 1){
      somarVidas();
      v = 0;
    }
  //mostra ou esconde os botões de avanço para cada fase
    if(fase == 2){
      hideElement("avancarfase3");
      hideElement("avancarfase4");
      hideElement("avancarfase5");
      hideElement("avancarfase6");
      hideElement("avancarfase7");
      hideElement("avancarfase8");
      hideElement("avancarfase9");
      hideElement("avancarfase10");
      showElement("avancarfase2");
    }else if(fase == 3){
      hideElement("avancarfase2");
      showElement("avancarfase3");               
    }else if(fase == 4){
      hideElement("avancarfase3");
      showElement("avancarfase4");               
    }else if(fase == 5){
      hideElement("avancarfase4");
      showElement("avancarfase5");               
    }else if(fase == 6){
      hideElement("avancarfase5");
      showElement("avancarfase6");               
    }else if(fase == 7){
      hideElement("avancarfase6");
      showElement("avancarfase7");
      showElement("estrela7");
    }else if(fase == 8){
      hideElement("avancarfase7");
      showElement("avancarfase8");               
    }else if(fase == 9){
      hideElement("avancarfase8");
      showElement("avancarfase9");               
    }else if(fase == 10){
      hideElement("avancarfase9");
      showElement("avancarfase10");
    }else if(fase > 10){
      setScreen("ganhouJogo"); 
      setText("informacoes", "pinos derrubados: " + pinos);
      setText("informacoes2", "estrelas coletadas: " + estrelas);
      var soma = pinos*15 + estrelas*40 + vidas*40;
      setText("informacoes3", "pontos totais: " + soma );
      pontuacaoAtual = soma;
      createRecord("highscores", {nome: nomeAtual,pontos: pontuacaoAtual,pinos: pinos, estrelas: estrelas, vidas: vidas } ,function(record) {
      });
      pinos = 0;
      estrelas = 0;
      soma = 0;
    }
  //verifica o número de vidas que o jogador possui 
  }else {
    playSound("sound://category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    e = 0;
    v = 0;
    if(fase == 5){
      showElement("coracao5");
      showElement("estrela5");
    }
    if(fase == 7){
      showElement("estrela7");
    }
    if(fase == 8){
      showElement("coracao8");
      showElement("estrela8");
    }
    if(fase == 10){
      showElement("estrela10");
      showElement("estrela102");
    }
    verificarVidas();
  }
}); 

//ao clicar no botão "jogarNovamente" o jogador retorna para aquela fase
onEvent("jogarNovamente", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  reset();
  setScreen("fase1");
});

//ao clicar no botão "avancarfase2" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase2", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  hideElement("tfase1");
  showElement("tfase2");
  showElement("cone");
  setScreen("fase1");
});

//ao clicar no botão "avancarfase3" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase3", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  hideElement("tfase2");
  showElement("tfase3");  
  hideElement("cone");
  showElement("cone2");
  showElement("cone22");
  setScreen("fase1");
});

//ao clicar no botão "avancarfase4" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase4", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  hideElement("tfase3");
  showElement("tfase4");
  showElement("cone4");
  showElement("caveira4");
  setScreen("fase1");
});

//ao clicar no botão "avancarfase5" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase5", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  hideElement("tfase4");
  showElement("tfase5");
  showElement("caveira5");
  showElement("estrela5");
  showElement("coracao5");
  setScreen("fase1");
});

//ao clicar no botão "avancarfase6" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase6", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  hideElement("tfase5");
  showElement("tfase6");
  showElement("barra6");
  setScreen("fase1");
  timedLoop(300/60, function() {
    setPosition("barra6", getXPosition("barra6") + velocidadeBarra6, 235);
  });
});

//ao clicar no botão "avancarfase7" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase7", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO8();
  esconderO9();
  esconderO10();
  showElement("tfase7");
  hideElement("barra6");
  showElement("estrela7");
  showElement("barra7");
  showElement("caveira7");
  setScreen("fase1");
  timedLoop(300/60, function() {
    setPosition("barra7", getXPosition("barra7") + velocidadeBarra7, 285);
  });
});

//ao clicar no botão "avancarfase8" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase8", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO9();
  esconderO10();
  showElement("cone8");
  showElement("barra8");
  showElement("barra88");
  showElement("coracao8");
  showElement("estrela8");
  showElement("tfase8");
  setScreen("fase1");
  timedLoop(300/60, function() {
    setPosition("barra8", getXPosition("barra8") + velocidadeBarra8, 213);
    setPosition("barra88", getXPosition("barra88") + velocidadeBarra88, 267);
  });
});

//ao clicar no botão "avancarfase9" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase9", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO10();
  hideElement("tfase8");
  showElement("tfase9");
  showElement("caveira9");
  showElement("barra9");
  showElement("barra92");
  setScreen("fase1");
  timedLoop(300/60, function() {
    setPosition("barra9", getXPosition("barra9") + velocidadeBarra9, 290);
    setPosition("barra92", getXPosition("barra92") + velocidadeBarra92, 156);
  });
});

//ao clicar no botão "avancarfase10" são mostrados apenas os elementos dessa fase e o resto é escondido
onEvent("avancarfase10", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  hideElement("tfase9");
  showElement("tfase10");
  showElement("estrela10");
  showElement("estrela102");
  showElement("barra10");
  showElement("barra102");
  setScreen("fase1");
  timedLoop(300/60, function() {
    setPosition("barra10", getXPosition("barra10") + velocidadeBarra10, 275);
    setPosition("barra102", getXPosition("barra102") - velocidadeBarra102, 177);
  });
});

//botões utilizados para retornar a tela inicial
onEvent("sairG", "click", function( ) {
  resetAll();
  setScreen("telainicial");
  playSound("clic-(online-audio-converter.com).mp3", false);
});

onEvent("sairP", "click", function( ) {
  resetAll();
  setScreen("telainicial");
  playSound("clic-(online-audio-converter.com).mp3", false);
});

onEvent("sairPP", "click", function( ) {
  resetAll();
  setScreen("telainicial");
  playSound("clic-(online-audio-converter.com).mp3", false);
});

onEvent("sairGG", "click", function( ) {
  resetAll();
  setScreen("telainicial");
  playSound("clic-(online-audio-converter.com).mp3", false);
});
onEvent("tutorialFechar", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  setScreen("telainicial");
});

onEvent("fechar", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  setScreen("telainicial");
  resetAll();
});

onEvent("fecharR", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  setScreen("telainicial");
});

//botão utilizado para ir parar a tela do tutorial
onEvent("tutorial", "click", function( ) {
  setScreen("telatutorial");
  hideElement("tutorial33333");
  playSound("clic-(online-audio-converter.com).mp3", false);
  
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 1 do tutorial
onEvent("btutorial1", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  showElement("tutorial1");
  showElement("tutorial11");
  showElement("tutorial111");
  showElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  hideElement("tutorial7");
  hideElement("tutorial77"); 
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 2 do tutorial
onEvent("btutorial2", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  showElement("tutorial2");
  showElement("tutorial22");
  showElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  hideElement("tutorial7");
  hideElement("tutorial77"); 
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 3 do tutorial
onEvent("btutorial3", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  showElement("tutorial3");
  showElement("tutorial33");
  showElement("tutorial333");
  showElement("tutorial3333");
  showElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  hideElement("tutorial7");
  hideElement("tutorial77"); 
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 4 do tutorial
onEvent("btutorial4", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  showElement("tutorial4");
  showElement("tutorial44");
  showElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  hideElement("tutorial7");
  hideElement("tutorial77"); 
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 5 do tutorial
onEvent("btutorial5", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  showElement("tutorial5");
  showElement("tutorial55");
  showElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  hideElement("tutorial7");
  hideElement("tutorial77"); 
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 6 do tutorial
onEvent("btutorial6", "click", function( ) {
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  showElement("tutorial6");
  showElement("tutorial66");
  hideElement("tutorial7");
  hideElement("tutorial77");  
});

//botão do tutorial utilizado para mostrar apenas os elementos da parte 7 do tutorial
onEvent("btutorial7", "click", function( ) {
  hideElement("tutorial1");
  hideElement("tutorial11");
  hideElement("tutorial111");
  hideElement("tutorial1111");
  hideElement("tutorial2");
  hideElement("tutorial22");
  hideElement("tutorial222");
  hideElement("tutorial3");
  hideElement("tutorial33");
  hideElement("tutorial333");
  hideElement("tutorial3333");
  hideElement("tutorial33333");
  hideElement("tutorial4");
  hideElement("tutorial44");
  hideElement("tutorial444");
  hideElement("tutorial5");
  hideElement("tutorial55");
  hideElement("tutorial555");
  hideElement("tutorial6");
  hideElement("tutorial66");  
  showElement("tutorial7");
  showElement("tutorial77");  
});

//botão utilizado para ir para a tela do ranking
onEvent("ranking", "click", function( ) {
  playSound("clic-(online-audio-converter.com).mp3", false);
  setScreen("telaranking");
  findHighScores();
  displayHighScores();
});

//função para mostrar os 3 primeiros colocados no ranking
function displayHighScores() {
  setText("ranking1", top1nome + ": " + top1pontos + " pontos" + ", " + top1pinos + " pinos" + ", " + top1estrelas + " estrelas");
  setText("ranking2", top2nome + ": " + top2pontos + " pontos" + ", " + top2pinos + " pinos" + ", " + top2estrelas + " estrelas");
  setText("ranking3", top3nome + ": " + top3pontos + " pontos" + ", " + top3pinos + " pinos" + ", " + top3estrelas + " estrelas");
}

//função para encontrar as melhores pontuações
function findHighScores() {
 readRecords("highscores", {}, function(records) {
   for(var i = 0; i < records.length;i++){
     if(records[i].pontos > top1pontos){
       top1nome = records[i].nome;
       top1pontos = records[i].pontos;
       top1pinos = records[i].pinos;
       top1vidas = records[i].vidas;
       top1estrelas = records[i].estrelas;
     }else if(records[i].pontos > top2pontos && records[i].nome != top1nome){
       top2nome = records[i].nome;
       top2pontos = records[i].pontos;
       top2pinos = records[i].pinos;
       top2vidas = records[i].vidas;
       top2estrelas = records[i].estrelas;
     }else if(records[i].pontos > top3pontos && records[i].nome != top1nome && records[i].nome != top2nome){
       top3nome = records[i].nome;
       top3pontos = records[i].pontos;
       top3pinos = records[i].pinos;
       top3vidas = records[i].vidas;
       top3estrelas = records[i].estrelas;
     }
    }
  });
}

//função utilizada para resetar o programa após cada partida
function reset() {
  //showElement("seta");
  showElement("sliderBola");
  hideElement("pronto");
  esconderPinosC();
  mostrarPinos();
  velocidadeX = 0;
  velocidadeY = 0;
  setPosition("bola", 135, 365);
  pinoC1 = 0;
  pinoC2 = 0;
  pinoC3 = 0;
  pinoC4 = 0;
  pinoC5 = 0;
  click = 0;

}

//função utilizada para resetar todo o programa 
function resetAll() {
  v = 0;
  e = 0;
  showElement("sliderBola");
  hideElement("pronto");
  esconderPinosC();
  mostrarPinos();
  velocidadeX = 0;
  velocidadeY = 0;
  setPosition("bola", 135, 365);
  pinos = 0;
  estrelas = 0;
  pinoC1 = 0;
  pinoC2 = 0;
  pinoC3 = 0;
  pinoC4 = 0;
  pinoC5 = 0;
  click = 0;
  fase = 1;
  vidas = 3;
  showElement("tfase1");
  hideElement("vida0");
  hideElement("vida1");
  hideElement("vida2");
  hideElement("vida4");
  hideElement("vida5");
  showElement("vida3");
  esconderO2();
  esconderO3();
  esconderO4();
  esconderO5();
  esconderO6();
  esconderO7();
  esconderO8();
  esconderO9();
  esconderO10();
  angulo = 0;
}

//função utilizada para verificar a colisão da bola com os pinos
function colisaopinos(x1, y1, w1,h1,x2,y2,w2,h2) {
  return (x1 < x2 + w2) && (x1 + w1 > x2) && (y1 < y2 + h2) && (y1+ h1 > y2);
}

//função utilizada para mostrar os pinos levantados
function mostrarPinos() {
  showElement("pino1");
  showElement("pino2");
  showElement("pino3");
  showElement("pino4");
  showElement("pino5");
}

//função para esconder os pinos caídos 
function esconderPinosC() {
  hideElement("pinocaido1");
  hideElement("pinocaido2");
  hideElement("pinocaido3");
  hideElement("pinocaido4");
  hideElement("pinocaido5");
}

//ao clicar o botão "fechar"(X) retorna-se para a tela inicial
onEvent("fechar", "click", function( ) {
	setScreen("telainicial");
});

//função para verificar o número de vidas restantes do jogador
function verificarVidas(){
  if(vidas > 0 ){
    vidas -= 1;
    if(vidas == 4){
      hideElement("vida5");
      showElement("vida4");
    }else if(vidas == 3){
      hideElement("vida4");
      showElement("vida3");
    }else if( vidas == 2){
      hideElement("vida3");
      showElement("vida2");
    }else if(vidas == 1){
      hideElement("vida2");
      showElement("vida1");
    }else {
      hideElement("vida1");
      showElement("vida0");
    }
    setScreen("telaPerdeu");
    reset();
    }else{
    setScreen("perdeuJogo");
    resetAll();
    }
}

//função para somar vidas ao coletar um coração
function somarVidas(){
  vidas += 1;
  if( vidas == 5){
    hideElement("vida4");
    showElement("vida5");
  }else if(vidas == 4){
    hideElement("vida3");
    showElement("vida4");
  }else if(vidas == 3){
    hideElement("vida2");
    showElement("vida3");
  }else if(vidas == 2){
    hideElement("vida1");
    showElement("vida2");
  }else {
    hideElement("vida0");
    showElement("vida1");
  }
}

//funções para esconder os elementos de cada fase
function esconderO2(){
  hideElement("cone");
  hideElement("tfase2");
}
function esconderO3(){
  hideElement("cone2");
  hideElement("cone22");
  hideElement("tfase3");
}
function esconderO4(){
  hideElement("cone4");
  hideElement("caveira4");
  hideElement("tfase4");
}
function esconderO5(){
  hideElement("coracao5");
  hideElement("estrela5");
  hideElement("caveira5");
  hideElement("tfase5");
}
function esconderO6(){
  hideElement("barra6");
  hideElement("tfase6");
}
function esconderO7(){
  hideElement("barra7");
  hideElement("caveira7");
  hideElement("estrela7");
  hideElement("tfase7");
}
function esconderO8(){
  hideElement("coracao8");
  hideElement("barra8");
  hideElement("barra88");
  hideElement("cone8");
  hideElement("estrela8");
  hideElement("tfase8");
}
function esconderO9(){
  hideElement("barra9");
  hideElement("barra92");
  hideElement("caveira9");
  hideElement("tfase9");
}
function esconderO10(){
  hideElement("tfase10");
  hideElement("barra10");
  hideElement("barra102");
  hideElement("estrela10");
  hideElement("estrela102");
}
