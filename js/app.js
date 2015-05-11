angular
.module('app', [])
.factory('storageService', function () {
    return {
        /**
        * get item out of local storage and if it's a string, turn it into a json object
        * @param key
        * @returns {*}
        */
        get: function (key) {
            var item = localStorage.getItem(key);
            if (item && _.isString(item) && _.isEmpty(item) === false) {
                return angular.fromJson(item);
            } else {
                return item;
            }
        },

        /**
        * save object as a json string
        * @param key
        * @param data
        */
        save: function (key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        },

        /**
        * remove a specific item
        * @param key
        */
        remove: function (key) {
            localStorage.removeItem(key);
        },

        /**
        * blow them all away
        */
        clearAll : function () {
            localStorage.clear();
        }
    };
})
.directive('checkThisOut', [function(){
    return function (scope, element) {
        var row = angular.element(element[0].parentNode.parentNode);
        element.bind('keyup', function(){
            if(this.value.length) {
                row.addClass('input-has-data');
            } else {
                row.removeClass('input-has-data');
            }
            // console.log(this.value, this.selectionStart, this.selectionEnd, element[0].parentNode.parentNode);
        });
    };
}])
.controller('mainController', ['$scope', function($scope) {

    $scope.styles = {
        1: {key:'none', name:'Insufficient Funz'},
        2: {key:'national', name:'The National'},
        3: {key:'spy', name:'Spies Like Us'},
        4: {key:'end', name:'End of Line, Man'},
        5: {key:'pusher', name:'Pusher Robot'},
        6: {key:'shover', name:'Shover Robot'},
        7: {key:'legend', name:'Legendary Characters'}
    };

    $scope.config = {
        style: 1
    };

}]);
