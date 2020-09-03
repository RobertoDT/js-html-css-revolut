$(document).ready(
  function(){

    /*blocco tariffazione*/
    $("#denaro").mouseenter(
      function(){
        $(".denaro-menu").show();
        $(".investimenti-menu").hide();
        $(".controllo-menu").hide();
        $(".altro-menu").hide();
        $(".abbonamenti-menu").hide();
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
        $(".denaro-menu").hide();
        $(".controllo-menu").hide();
        $(".altro-menu").hide();
        $(".abbonamenti-menu").hide();
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
        $(".investimenti-menu").hide();
        $(".denaro-menu").hide();
        $(".altro-menu").hide();
        $(".abbonamenti-menu").hide();
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
        $(".controllo-menu").hide();
        $(".investimenti-menu").hide();
        $(".denaro-menu").hide();
        $(".abbonamenti-menu").hide();
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
        $(".altro-menu").hide();
        $(".controllo-menu").hide();
        $(".investimenti-menu").hide();
        $(".denaro-menu").hide();
      }
    );

    $(".abbonamenti-menu").mouseleave(
      function(){
        $(".abbonamenti-menu").hide();
      }
    );







  }
);
