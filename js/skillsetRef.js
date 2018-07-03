var object = [

  {

    'headline':'HTML & CSS',
    'value':8,
    'length':9,
    'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

  },
  {

    'headline':'JavaScript & jQuery',
    'value':6,
    'length':5,
    'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

  },
  {

    'headline':'Ruby & Python',
    'value':3,
    'length':5,
    'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

  }

];

$(document).ready(function(){

  $("#skillset").skillset({

    object:object,
    duration:40

  });

});
