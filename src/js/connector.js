console.log('Simple Kamban it alive 2');

var numberOfElementTotal = 0;
var numberOfElementToday = 0;
var DoneCard = [];
var LabelsList = [];
var NumberOfLabels = 0;

window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {

      // return an array of card badges
      return Promise.all(t.card('name', 'dateLastActivity', 'labels', 'idList').then(function(card) {
            if (card.idList == "5b09bf74146fca0cbc15f1ab") {        // Id for Terminer list
              DoneCard.push(card);
            }
            return DoneCard;
          })
        )
        .finally(function() {
          for (var card in DoneCard){
            var labels = card.labels

            // Find the list of Label
            for (var label in labels) {
              NumberOfLabels++;
              var toAdd = true;
              for (var string in LabelsList) {
                if (string == label) {
                  toAdd = false;
                }
              }
              if (toAdd) {
                LabelsList.push(label);
              }
            }

          }

          console.log(DoneCard);
          console.log(LabelsList);
          console.log(NumberOfLabels);
        })
    }
});