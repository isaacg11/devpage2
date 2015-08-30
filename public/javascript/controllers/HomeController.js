// (function() {
//   'use strict';
//   angular.module('app')
//   .controller('HomeController', HomeController);

//   HomeController.$inject = ['$modal','PhotoFactory','UserFactory', 'HomeFactory', '$window','$state', '$stateParams'];

//   function HomeController($modal, PhotoFactory, UserFactory, HomeFactory, $window, $state, $stateParams) {
//     var vm = this;

// //OPEN ADD COMMENT MODAL
// vm.openModal = function (photo) {
//   var instance = $modal.open({
//     controller: 'HomeController',
//     controllerAs: "vm",
//     templateUrl: './../views/Home.html',
//     resolve: {
//       photo: function() {
//         return res;
//       }
//     }
//   });
//   instance.result.then(function(c) {
//     console.log(c);

//   });
// };







// }
// })();
