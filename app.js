(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuyItem = this;

    toBuyItem.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyItem.addBoughtItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      ShoppingListCheckOffService.removeItem(itemIndex);
    }

    toBuyItem.isEmpty = function () {
      return toBuyItem.items.length == 0;
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var boughtItem = this;

    boughtItem.items = ShoppingListCheckOffService.getBoughtItems();

    boughtItem.isEmpty = function () {
      return boughtItem.items.lenght == 0;
    }
  }

  function ShoppingListCheckOffService () {
    //Just to declare this
    var service = this;

    //List of buy items
    var toBuyItems = [
      { name: "Cookies", quantity: 10 },
      { name: "Chocolate", quantity: 5 },
      { name: "Candies", quantity: 8 },
      { name: "Cake", quantity: 2 },
      { name: "Drink", quantity: 7 },
    ];
    //List of shopping items
    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
    }

    service.removeItem = function (itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

  }
})();
