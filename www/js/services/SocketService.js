(function(){

    angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
        return socketFactory({

            ioSocket: io.connect('http://122.173.27.194:3000')

        });
    }
})();