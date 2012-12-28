var food = {
  meat: 'steak',
  veggie: 'potatoes',
  drink: 'beer',
  print: function (prefix) {
    prefix = prefix || 'Items';
    console.log(prefix + ': ' + this.meat + ', ' + this.veggie + ', ' + this.drink);
  }
};

var hax = {
  meat: 'fish',
  veggie: 'beets',
  drink: 'mud'
};

food.print.apply(hax, ['Example']);
