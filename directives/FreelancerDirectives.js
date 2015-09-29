freelancerClone.directive("changeStyle", function(){

  return function(scope, element, attrs){
    element.bind("hover", function(){
      element.toggleClass(attrs.changeStyle);
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
