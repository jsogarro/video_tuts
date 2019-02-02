'use strict';

// test loading
console.log('JavaScript loaded!');


$(document).ready(function() {
  // select all elements by class
  var $container = $(".container");

  // change the CSS
  $container.css('background-color', '#ffffff');

  // add a class
  var $button = $('.btn');
  $button.attr('class', 'btn btn-success');

  // hide element
  $button.hide();

  // show element
  $button.show();

  // remove an attribute
  $button.removeAttr('class');

  // add class
  $button.addClass('btn');
  $button.addClass('btn-primary');

  // get the height and width
  var $container = $('.container');
  var height = $container.height();
  var width = $container.width();

  console.log('The height and width are', height, 'x', width);

  // get element inside an element
  var $readMoreLinks = $('.post > a');
  $readMoreLinks.css('color', 'green');

  // find elements inside another
  var $posts = $('.post');
  var $links = $posts.find('a');
  $links.text('I changed this text!');

  // add some more html
  var $container = $('.container');
  $container.append('<h1>This a header we just added</h1>');
  $container.prepend('<h1>This a header we prepended</h1>');
  $container.find('h1:first').addClass('jumbotron');

  // change height
  $container.find('.jumbotron').height('400px');

  // change width
  $container.find('.jumbotron').width('200px');

  // edit even/odd
  $('.post:even').css('background-color', 'pink');
  $('.post:odd').css('background-color', 'grey');

  // add data attribute
  $('.post:even').attr('data-type', 'odd');

  // read the data
  var data = $('.post:even').data();
  console.log('data: ', data);
  
  // load posts from an array
  var posts = [
    {
      title: 'Air Jordan 3',
      subtitle: 'Release Date: 1/30/19',
      content: "These are cool",
      img: 'https://sneakernews.com/wp-content/uploads/2018/02/air-jordan-3-jth-giveaway.jpg?w=780&h=550&crop=1'
    },
    {
      title: 'Air Jordan 1',
      subtitle: 'Release Date: 1/30/19',
      content: "These are cool",
      img: 'https://sneakernews.com/wp-content/uploads/2018/11/air-jordan-11-concord-store-list-1.jpg'
    },
    {
      title: 'Air Jordan 2',
      subtitle: 'Release Date: 1/30/19',
      content: "These are cool",
      img: 'https://sneakernews.com/wp-content/uploads/2018/12/air-jordan-11-bred-2019.jpg?w=780&h=547&crop=1'
    },
  ];
  var $posts = $('.post');
  $posts.each(function(index) {
    var post = posts[index];
    $(this).find('h4').text(post.title);
    $(this).find('h5').text(post.subtitle);
    $(this).find('p').text(post.content);
    $(this).find('img').attr('src', post.img);
  });



  // select all elements by ID


  // change an element's text


  // change an element's HTML


  // hide an element


  // show an element


  // $.each


  /************************EVENTS ********************************/

  // mouseover
  var $posts = $('.post');
  $posts.on('mouseover', function() {
    $(this).css({ color: 'green', fontSize: 20 });
  });

  // mouseout
  $posts.on('mouseout', function() {
    $(this).css({ color: 'black', fontSize: 14})
  });

  //click
  var $button = $('#subscribe-button');
  $button.on('click', function() {
    var $subscribeInput = $('#subscribe-input');
    var emailAddress = $subscribeInput.val();

    var message = `You have successfully suscribed with the email: ${emailAddress}`;

    alert(message);
  });

});
