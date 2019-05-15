$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue == 1) {
        msg = "NEED TO IMPROVE";
    }
    else if (ratingValue == 2) {
        msg = "COULD BE BETTER";
    }
    else if (ratingValue == 3) {
        msg = "THERE IS SCOPE OF IMPROVEMENT";
    }
    else {
        msg = "EXCELLENT";
    }
    responseMessage(msg);    
  });
  
  
});


function responseMessage(msg) {
  $('.text-message').fadeIn(200);  
  $('.text-message').html("<span>" + msg + "</span>");
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function(){
  $("#fish").click(function(){
    $("#oyster").fadeTo("slow", 0.1);
    $("#cat").fadeTo("slow", 0.1);
    $("#whale").fadeTo("slow", 0.1);
    $("#goose").fadeTo("slow", 0.1);
    $("#elephant").fadeTo("slow", 0.1);

  });
});

$(document).ready(function(){
  $("#goose").click(function(){
    $("#oyster").fadeTo("slow", 0.1);
    $("#cat").fadeTo("slow", 0.1);
    $("#whale").fadeTo("slow", 0.1);
    $("#elephant").fadeTo("slow", 0.1);
    $("#fish").fadeTo("slow", 0.1);

  });
});

$(document).ready(function(){
  $("#oyster").click(function(){
    $("#goose").fadeTo("slow", 0.1);
    $("#cat").fadeTo("slow", 0.1);
    $("#whale").fadeTo("slow", 0.1);
    $("#elephant").fadeTo("slow", 0.1);
    $("#fish").fadeTo("slow", 0.1);

  });
});

$(document).ready(function(){
  $("#cat").click(function(){
    $("#oyster").fadeTo("slow", 0.1);
    $("#goose").fadeTo("slow", 0.1);
    $("#whale").fadeTo("slow", 0.1);
    $("#elephant").fadeTo("slow", 0.1);
    $("#fish").fadeTo("slow", 0.1);

  });
});

$(document).ready(function(){
  $("#whale").click(function(){
    $("#oyster").fadeTo("slow", 0.1);
    $("#cat").fadeTo("slow", 0.1);
    $("#goose").fadeTo("slow", 0.1);
    $("#elephant").fadeTo("slow", 0.1);
    $("#fish").fadeTo("slow", 0.1);

  });
});

$(document).ready(function(){
  $("#elephant").click(function(){
    $("#oyster").fadeTo("slow", 0.1);
    $("#cat").fadeTo("slow", 0.1);
    $("#whale").fadeTo("slow", 0.1);
    $("#goose").fadeTo("slow", 0.1);
    $("#fish").fadeTo("slow", 0.1);

  });
});