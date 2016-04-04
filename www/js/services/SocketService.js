(function(){

    angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
        return socketFactory({

            ioSocket: io.connect('http://122.173.188.182:3000')

        });
    }
})();