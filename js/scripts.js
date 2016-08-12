
//==Business_Side==
$(document).ready(function()  {

//==Parses_the_User's_Selection==
  $('form#trackSuggester').submit(function(event){
    event.preventDefault();

    var seed = parseInt($('select#seed').val());
    console.log(seed);

    var sprout = parseInt($('select#sprout').val());
    console.log(sprout);

    var sapling = parseInt($('select#sapling').val());
    console.log(sapling);

    var matureOak = parseInt($('select#matureOak').val());
    console.log(matureOak);

    var snag = parseInt($('select#snag').val());
    console.log(snag);

    var pathWork = seed+sprout+sapling+matureOak+snag;
    console.log(pathWork)

//==User_NM_Fuction==
  $('#blanks form').submit (function(event){
    var blanks = ["name"];

    blanks.forEach(function(blank){
      var userInput = $("input."+ blank).val();
      console.log(userInput);
      $("."+blank).text(userInput).val();
    });

    $("#usrNm").show();
  });

//==Front_End==
     if (pathWork <=5){
       $('#outPut').html('<p>Ruby</p>');
     }
     else if (pathWork <=10){
       $('#outPut').html('<img "src=img/PHP.jpg"><p>PHP</p>');
     }
     else if (pathWork <=15){
       $('#outPut').html('<p>JAVA</p>');
     }
     else if (pathWork <=20){
       $('#outPut').html('<img"src=img/aCss.jpg"><p>CSS</p>');
     }
     else if (pathWork <=25){
       $('#outPut').html('<img "src=img/C#.jpg"><p>C#</p>');
     }

   });
 });
