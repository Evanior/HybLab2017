$(document).ready(function(){
  typed_title();
  $('.overlay .overlay_content .skip').click(function(event){
    console.log('test');
    event.preventDefault();
    $('.overlay').hide();
  });
});
function typed_title(){
  $("#typed_title").typed({
strings: ["Qu'est ce que smart city ?"],
typeSpeed: 30, callback: function(){
  typed_text();
  }
});
}
function typed_text(){
  $("#typed_text").typed({
strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
typeSpeed: 10, callback: function(){
    $('.typed-cursor').hide();
  }
});
}
