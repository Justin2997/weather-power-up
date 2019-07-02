console.log('Simple Kamban it alive 2');

var numberOfElementTotal = 0;
var numberOfElementToday = 0;
var DoneCard = [];

window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {

      // return an array of card badges
      return t.card('name', 'dateLastActivity', 'labels', 'idList')
        .then(function(card) {
          if (card.idList == "5b09bf74146fca0cbc15f1ab") {        // Id for Terminer list
            DoneCard.push(card);
          }
          return DoneCard;
        })
        .then(function() {
          console.log(DoneCard);
        })
    }
});