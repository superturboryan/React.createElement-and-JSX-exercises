let sellers = [
   {
      name: "bob",
      location: {
         city: "Montreal",
         country: "Canada"
      },
      items: [
         {
            itemid: 0,
            price: 30,
            description: "a very nice hat",
            shipsFrom: {
               city: "Quebec",
               country: "Canada"
            }
         },
         {
            itemid: 1,
            price: 300,
            description: "a fast bicycle",
            shipsFrom: {
               city: "Quebec",
               country: "Canada"
            }
         }
      ]
   },
   {
      name: "sue",
      location: {
         city: "Toronto",
         country: "Canada"
      },
      items: [
         {
            itemid: 5,
            price: 60,
            description: "A warm peacoat",
            shipsFrom: {
               city: "Vancouver",
               country: "Canada"
            }
         },
         {
            price: 30000,
            description: "A nice boat",
            itemid: 1,
            shipsFrom: {
               city: "Seoul",
               country: "Korea"
            }
         }
      ]
   }
]

//Has two properties city and country
let elemOfShippingLocation = function (location) {

   return React.createElement(
      "div",
      {},
      "Ships from " + location.city + ", " + location.country
   )
}

//Has price, description, itemID, and ships from
let elemOfItem = function (item) {

   return React.createElement(
      "div",
      {},
      React.createElement("h3", {}, item.description),
      "price: $" + item.price,
      React.createElement("div", {}, "itemID: " + item.itemid),
      elemOfShippingLocation(item.shipsFrom)
   )
}

//Has city and country
let elemOfSellerLocation = function (location) {

   return React.createElement(
      "div",
      {},
      "Seller location: " + location.city + ", " + location.country
   )
}

//Has name, location, and items
let elemOfSeller = function (seller) {

   return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, seller.name),
      elemOfSellerLocation(seller.location),
      seller.items.map(elemOfItem)
   )
}

let sellerElements = sellers.map(elemOfSeller)

let rootdiv = document.getElementById('root')

ReactDOM.render(sellerElements, root)