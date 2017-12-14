// For simplicity, keeping all the angular code in one file. Normally you'd break it out by component into separate files.

angular.module('battleship', []);

angular.module('battleship').factory('BoardService', [function () {
  const height = 10;
  const width = 10;

  const cellEmpty = 0;
  const cellOccupied = 1;
  const cellAttacked = 2;
  const cellStruck = 3;

  var isSetupEnabled = true;

  var ships = [{
      name: "Carrier",
      spaces: 5,
      row: 1,
      column: 1,
      direction: "S"
    },
    {
      name: "Battleship",
      spaces: 4,
      row: 4,
      column: 4,
      direction: "S"
    },
    {
      name: "Cruiser",
      spaces: 3,
      row: 8,
      column: 0,
      direction: "E"
    },
    {
      name: "Submarine",
      spaces: 3,
      row: 5,
      column: 5,
      direction: "E"
    },
    {
      name: "Destroyer",
      spaces: 2,
      row: 2,
      column: 8,
      direction: "S"
    },
  ];

  // create the empty board to start
  var board = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      row.push(cellEmpty); // empty cell
    }
    board.push(row);
  }

  return {
    isSetupEnabled: isSetupEnabled,
    height: height,
    width: width,
    cellEmpty: cellEmpty,
    cellOccupied: cellOccupied,
    cellAttacked: cellAttacked,
    cellStruck: cellStruck,
    board: board,
    ships: ships
  };
}]);

angular.module('battleship').controller('SetupController', ['BoardService', function (BoardService) {
  var vm = this;
  vm.BoardService = BoardService;
  vm.ships = BoardService.ships;
  vm.board = BoardService.board;
  vm.greeting = 'Welcome to Battleship';

  vm.arrangeBoard = function () {
    // reset the board
    for (var i = 0; i < BoardService.height; i++) {
      for (var j = 0; j < BoardService.width; j++) {
        vm.board[i][j] = BoardService.cellEmpty;
      }
    }

    // set the ships
    vm.ships.forEach(function (ship) {
      // make sure it's a valid ship
      if (ship.row == undefined || ship.column == undefined || ship.direction == undefined) {
        return;
      }

      // does it fit on the board?
      if (ship.direction == 'S') {
        if (ship.row + ship.spaces < BoardService.height) {
          for (var i = ship.row; i < ship.row + ship.spaces; i++) {
            vm.board[i][ship.column] = BoardService.cellOccupied;
          }
        }
      }

      if (ship.direction == 'N') {
        if (ship.row - ship.spaces >= 0) {
          for (var i = ship.row; i < ship.row - ship.spaces; i--) {
            vm.board[i][ship.column] = BoardService.cellOccupied;
          }
        }
      }

      if (ship.direction == 'E') {
        if (ship.column + ship.spaces < BoardService.width) {
          for (var i = ship.column; i < ship.column + ship.spaces; i++) {
            vm.board[ship.row][i] = BoardService.cellOccupied;
          }
        }
      }

      if (ship.direction == 'W') {
        if (ship.column - ship.spaces >= 0) {
          for (var i = ship.column; i < ship.column - ship.spaces; i--) {
            vm.board[ship.row][i] = BoardService.cellOccupied;
          }
        }
      }

    });
  };

  vm.arrangeBoard();
}]);

angular.module('battleship').directive('board', ['BoardService', function (BoardService) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'board.html',
    link: function (scope) {
      scope.board = BoardService.board;
      
      scope.attack = function (row, column) {
        if (scope.isGameOver) {
          return;
        }

        BoardService.isSetupEnabled = false;

        if (BoardService.board[row][column] == BoardService.cellOccupied || BoardService.board[row][column] == BoardService.cellStruck) {
          BoardService.board[row][column] = BoardService.cellStruck;
        } else {
          BoardService.board[row][column] = BoardService.cellAttacked;
        }

        // find out if all the ships are now sunk
        var totalShipCells = 0;
        BoardService.ships.forEach(function (ship) {
          totalShipCells += ship.spaces;
        });

        var sunkCount = 0;
        for (var i = 0; i < BoardService.height; i++) {
          for (var j = 0; j < BoardService.width; j++) {
            if (BoardService.board[i][j] == BoardService.cellStruck) {
              sunkCount++;
            }
          }
        }

        if (sunkCount == totalShipCells) {
          scope.isGameOver = true;
        }
      }
    }
  };
}]);