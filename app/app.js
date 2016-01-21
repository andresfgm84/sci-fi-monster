angular.module('ScifiMonster', [])
    .controller('MainCtrl', function ($scope) {
        $scope.animals = [
            { id: 0, name: 'Pollo' },
            { id: 1, name: 'Mapache' },
            { id: 2, name: 'Tejón' },
            { id: 3, name: 'Serpiente' },
            { id: 4, name: 'Araña' },
            { id: 5, name: 'Saltamontes' }
        ];

        $scope.powers = [
            { id: 0, name: 'telépata' },
            { id: 1, name: 'chupacerebros' },
            { id: 2, name: 'parte piernas' },
            { id: 3, name: 'absorve olores' },
            { id: 4, name: 'roba almas' },
            { id: 5, name: 'desintegrador de calzoncillos' }
        ];



        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function generateMonster(){
            var animalIndex = getRandomInt($scope.animals.length, 0);
            var powerIndex = getRandomInt($scope.powers.length, 0);

            $scope.monster = $scope.animals[animalIndex].name + ' ' + $scope.powers[powerIndex].name;

            console.log(animalIndex);
            console.log(powerIndex);
        }

        $scope.generateMonster = generateMonster;
        $scope.monster = "";

    });
