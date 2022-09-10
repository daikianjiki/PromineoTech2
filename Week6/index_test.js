var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#shuffle the deck', function() {
        it(`should display an array of all 52 cards`, function() {
            var x = shuffle(deckOfCards.cards);
            expect(x.length).to.equal(52);
        });
    });
});