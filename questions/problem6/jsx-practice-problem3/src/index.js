import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


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

   return <div>Ships from {location.city}, {location.country}</div>
}

//Has price, description, itemID, and ships from
let elemOfItem = function (item) {

   return <div>
      <h3>{item.description}</h3>
      price: ${item.price}
      <div>itemID: {item.itemid}</div>
      <div> {elemOfShippingLocation(item.shipsFrom)} </div>
   </div>
}

//Has city and country
let elemOfSellerLocation = function (location) {

   return <div>Seller location: {location.city}, {location.country}</div>
}

//Has name, location, and items
let elemOfSeller = function (seller) {

   return <div><h1> {seller.name} </h1> {elemOfSellerLocation(seller.location)} {seller.items.map(elemOfItem)}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    React.createElement("h1", {}, seller.name),
   //    elemOfSellerLocation(seller.location),
   //    seller.items.map(elemOfItem)
   // )
}

let sellerElements = sellers.map(elemOfSeller)

let rootdiv = document.getElementById('root')

ReactDOM.render(sellerElements, rootdiv)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
