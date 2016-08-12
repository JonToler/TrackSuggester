
  //==Business_Side==
$(document).ready(function()  {
  //==User_NM_Fuction==
    $("#blanks form").submit(function(event) {
      var neophyteInput = $("input#neophyte").val();

       $(".neophyte").text(neophyteInput);

       $("#userNm").show();

       event.preventDefault();
     });
  //==Parses_the_User's_Selections tally the values==
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



//==Front_End==
     if (pathWork <=6){
       $('#outPut').html('<img/src="img/ruby.png"><p>Ruby/Rails</p>');
     }
     else if (pathWork <=11){
       $('#outPut').html('<img/src="img/php.gif"><p>PHP/Drupal</p>');
     }
     else if (pathWork <=15){
       $('#outPut').html('<img/src="img/java.gif"><p>Java/Android</p>');
     }
     else if (pathWork <=21){
       $('#outPut').html('<img/src="img/css.gif"><p>CSS/Design</p>');
     }
     else if (pathWork <=25){
       $('#outPut').html('<img/src="img/csharp.jpg"><p>C#/.Net</p>');
     }

   });
 });
