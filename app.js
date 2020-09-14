!function() {
    function e(e) {
        var t = this;
        t.items = [{
            name: "litres of milk",
            quantity: 5
        }, {
            name: "kilos of apples",
            quantity: 6
        }, {
            name: "eggs",
            quantity: 10
        }, {
            name: "cookies",
            quantity: 4
        }, {
            name: "bananas",
            quantity: 5
        }, {
            name: "litres of orange juice",
            quantity: 4
        }],
        t.moveItem = function(i) {
            e.moveItem(i, t.items)
        }
    }
    function t(e) {
        this.items = e.items
    }
    angular.module("ShoppingListCheckOff", []).controller("ToBuyController", e).controller("AlreadyBoughtController", t).service("ShoppingListCheckOffService", function() {
        var e = this;
        e.items = [],
        e.moveItem = function(t, i) {
            var n = {
                name: "",
                quantity: ""
            };
            n.name = i[t].name,
            n.quantity = i[t].quantity,
            i.splice(t, 1),
            e.items.push(n)
        }
    }),
    e.$inject = ["ShoppingListCheckOffService"],
    t.$inject = ["ShoppingListCheckOffService"]
}();