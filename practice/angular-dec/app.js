// Controller:
// Where we define our app’s behavior by defining functions and values.
// (Wrapping the Javascript in a closure is a good habit.)

(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products=gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

// add ng-controller="ReviewController as reviewCtrl" to html
  app.controller("ReviewController", function() {
    this.review = {};
    this.review.createdOn = Date.now();
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });


// Building a custom directive for <product-title></product-title>
  app.directive('productTitle', function(){
    return {
      restrict: 'E', /* stands for Element */
      templateUrl: 'product-title.html'
    };
  });


  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodecahedron is one of those gems. ",
      rarity: 4,
      color: '#C5525A',
      faces: 10,
      canPurchase: true,
      images: [
        "images/dodecahedron.png",
        "images/dodecahedron.png"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 10 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A very affordable gemstone. Due to its often hazy color and frequent flaws, it is more often tumbled or used as beads over faceting into gemstone cuts.",
      rarity: 4,
      color:'#32B179',
      faces: 6,
      images: [
        "images/Pentagonal.png"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 6 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }],
      canPurchase: true
    },
    {
            name: 'Azurite',
            description: "A soft, deep blue copper mineral produced by weathering of copper ore deposits.",
            shine: 8,
            price: 110.50,
            rarity: 7,
            color: '#1A328D',
            faces: 14,
            images: [
              "images/Azurite.png",
              "images/gem-05.gif",
              "images/gem-09.gif"
            ],
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            canPurchase: true
          },
          {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#7A0002',
            faces: 12,
            images: [
              "images/Bloodstone.png",
              "images/gem-03.gif",
              "images/gem-04.gif",
            ],
            reviews: [{
              stars: 3,
              body: "I think this gem was just OK, could honestly use more shine, IMO.",
              author: "JimmyDean@example.org",
              createdOn: 1397490980837
            }, {
              stars: 4,
              body: "Any gem with 12 faces is for me!",
              author: "gemsRock@example.org",
              createdOn: 1397490980837
            }],
            canPurchase: true
          },
          {
            name: 'Zircon',
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            price: 1100,
            rarity: 2,
            color: '#00AFE9',
            faces: 12,
            images: [
              "images/Zircon.png",
              "images/gem-07.gif",
              "images/gem-09.gif"
            ],
            reviews: [{
              stars: 1,
              body: "This gem is WAY too expensive for its rarity value.",
              author: "turtleguyy@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "BBW: High Shine != High Quality.",
              author: "LouisW407@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "Don't waste your rubles!",
              author: "nat@example.org",
              createdOn: 1397490980837
            }],
            canPurchase: true
          }

  ];
})();
