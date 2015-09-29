freelancerClone.directive("changeStyle", function(){

  return function(scope, element, attrs){
    element.bind("mouseover", function(){
      element.addClass(attrs.changeStyle);
    });
    element.bind("mouseleave", function(){
      element.removeClass(attrs.changeStyle);
    });
  }

});


// return{
//   restrict: "A",
//   scope: true;
//
//   link: function(scope, element, attrs){
//     element.bind("click", function(){
//       element.toggleClass(attrs.ChangeStyle);
//   });
// }
// }
