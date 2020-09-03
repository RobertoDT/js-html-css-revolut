$(document).ready(
  function(){

    /*blocco tariffazione*/
    $("#denaro").mouseenter(
      function(){
        $(".denaro-menu").show();
      }
    );

    $(".denaro-menu").mouseleave(
      function(){
        $(".denaro-menu").hide();
      }
    );


    /*blocco investimenti*/
    $("#investimenti").hover(
      function(){
        $(".investimenti-menu").show();
      }
    );

    $(".investimenti-menu").mouseleave(
      function(){
        $(".investimenti-menu").hide();
      }
    );

    /*blocco controllo*/
    $("#controllo").hover(
      function(){
        $(".controllo-menu").show();
      }
    );

    $(".controllo-menu").mouseleave(
      function(){
        $(".controllo-menu").hide();
      }
    );

    /*blocco altro*/
    $("#altro").hover(
      function(){
        $(".altro-menu").show();
      }
    );

    $(".altro-menu").mouseleave(
      function(){
        $(".altro-menu").hide();
      }
    );

    /*blocco abbonamenti*/
    $("#abbonamenti").hover(
      function(){
        $(".abbonamenti-menu").show();
      }
    );

    $(".abbonamenti-menu").mouseleave(
      function(){
        $(".abbonamenti-menu").hide();
      }
    );







  }
);
