var ary1 = ['red','green','cyan'];
var ary2 = [];
var ary3 = [];
// setInterval(draw, 1000)
var imgDict = {};
var last = {};


setInterval(draw(), 100);

function draw(){
  clear(ary1,'x');
  clear(ary2,'y');
  clear(ary3,'z');
}

function clear(ary, zone){
  if (last[zone]!=ary.toString()){
      last[zone]= ary.toString();
      document.getElementById(zone).innerHTML=""
      ary.forEach(drawSquare.bind(null, zone));
  }
}

function drawSquare(zone, value, index, ary){
  console.log(typeof value);
  if(typeof value =='string'){
    if (validTextColour(value)){
      return drawColorSquare(zone, value, index, ary)
    }
    return drawStringSquare(zone, value, index, ary)
  }else if(typeof value == 'number'){
    return drawNumberSquare(zone, value, index, ary)
  }
  return drawOtherSquare(zone, value, index, ary);
}

function drawColorSquare(zone, color, index, ary){
  var box = document.createElement('div');
  box.innerHTML=index;
  box.setAttribute('class','box');
  box.setAttribute('style','background-color:'+color);
  document.getElementById(zone).appendChild(box);
}

function drawOtherSquare(zone, value, index, ary){
  var box = document.createElement('div');
  console.log(typeof value);
  box.innerHTML=typeof value;
  box.setAttribute('class','box');
  box.setAttribute('style','background-color:mintcream');
  document.getElementById(zone).appendChild(box);
}

function drawStringSquare(zone, value, index, ary){
  var box = document.createElement('div');
  box.innerHTML="<span class='nofont'>.</span>"
  box.setAttribute('class','box');
  var promise = apiSearch(value);
  if (promise.then){
    promise.then(function(pic){
      box.setAttribute('style','background-image:url("'+pic+'")');
      document.getElementById(zone).appendChild(box);
    })
  }else{
    box.setAttribute('style','background-image:url("'+promise+'")');
    document.getElementById(zone).appendChild(box);
  }

}

function drawNumberSquare(zone, value, index, ary){
  var box = document.createElement('div');
  box.innerHTML=value;
  box.setAttribute('class','box');
  document.getElementById(zone).appendChild(box);
}

function drawArraySquare(zone, value, index, ary){
  var box = document.createElement('div');
  box.setAttribute('class', 'box flex');
}

apiSearch();

function apiSearch(term){
  var gipphyKey = 'dc6zaTOxFJmzC';
  if (imgDict[term]){
    return imgDict[term];
  }
  imgDict[term]='question-mark_318-52837.jpg'
  return fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&rating=pg&q='+term).then(function(response){
    return response.json()
  }).then(function(response){
    imgDict[term] = response.data[0].images.fixed_height_small_still.url;
    return imgDict[term];
  })

}

function validTextColour(stringToTest) {
    //Alter the following conditions according to your need.
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}
