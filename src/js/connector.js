console.log('Simple Kamban it alive');

window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
      // return an array of card badges
      return t.card('name', 'dateLastActivity', 'labels', 'idList')
      .then(function(card) {
        console.log(card);
        return [{
          text: card.isShort
        }];
      })
  }
});