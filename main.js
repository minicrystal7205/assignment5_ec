$('#submit-btn').click(function(event) {
  event.preventDefault();
  var inputCity = $('#city-type').val().toLowerCase();
  if (inputCity === 'austin') {
    $('body').css('background-image', 'url(images/austin.jpg)');
  } else if (inputCity === 'la' || inputCity === 'los angeles') {
    $('body').css('background-image', 'url(images/la.jpg)');
  } else if (inputCity === 'sf' || inputCity === 'san francisco') {
    $('body').css('background-image', 'url(images/sf.jpg)');
  } else if (inputCity === 'nyc' || inputCity === 'new york') {
    $('body').css('background-image', 'url(images/nyc.jpg)');
  } else if (inputCity === 'sydney') {
    $('body').css('background-image', 'url(images/sydney.jpg)');
  } else {
    $('body').css('background-image', 'url(images/citipix_skyline.jpg)');
  }
})


//if it's array
// $('#submit-btn').click(function(event) {
//   event.preventDefault();
//   var inputCity = $('#city-type').val().toLowerCase();
//   var cityList = ['austin', 'la', 'sf', 'nyc', 'sydney'];
//   console.log(cityList.indexOf(inputCity));
// })


//use indexOf()
// function isOnList(cities, city) {
//   if (cities.indexOf(city) > -1) {
//     console.log('already exists');
//   }
// }
// isOnList(cityList, 'sydney')


//use array of objects
// var cityList = [{
//     city: ['austin'],
//     backgroundPic: 'images/austin.jpg',
//   },
//   {
//     city: ['la', 'los angeles'],
//     backgroundPic: 'images/la.jpg',
//   },
//   {
//     city: ['sf', 'san francisco'],
//     backgroundPic: 'images/sf.jpg',
//   },
//   {
//     city: ['nyc', 'new york city', 'new york'],
//     backgroundPic: 'images/nyc.jpg',
//   },
//   {
//     city: ['sydney'],
//     backgroundPic: 'images/sydney.jpg'
//   }
// ];
//
// $('#submit-btn').click(function(event) {
//   event.preventDefault();
//   var inputCity = $('#city-type').val().toLowerCase();
//   for (var i = 0; i < cityList.length; i++) {
//     if (cityList[i].city.indexOf(inputCity) !== -1) {
//       // set background: url is part of the strings.
//       $('body').css('background-image', 'url(' + cityList[i].backgroundPic + ')');
//       return; //after changing the background, needs to leave the whole function!!
//     }
//   }
//   $('body').css('background-image', 'url(images/citipix_skyline.jpg)');
// })