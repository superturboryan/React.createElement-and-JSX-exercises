import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let touristAttractions = [
   {
      name: "Eiffel tower",
      location: {
         city: "Paris",
         country: "France"
      },
      visitorsPerYear: 1000000,
      entrancePrice: 10,
      picture: "http://..."
   },
   {
      name: "Statue of liberty",
      location: {
         city: "New York",
         country: "USA"
      },
      visitorsPerYear: 800000,
      entrancePrice: 8,
      picture: "http://..."
   }
]

let elemOfLocation = function (location) {

   return <h3>{location.city}, {location.country}</h3>
}

let elemOfAttraction = function (attraction) {

   return <div>
      <h2>{attraction.name}</h2>
      {elemOfLocation(attraction.location)}
      <div>
         Visitors per year: {attraction.visitorsPerYear}
      </div>
      <div>
         Entry fee: ${attraction.entrancePrice}
      </div>
      {attraction.name === "Eiffel tower" ?
         <img height="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"></img>
         : <img height="100px" src="https://www.ytravelblog.com/wp-content/uploads/2018/07/statue-of-liberty-cruise-6.jpg"></img>}
   </div>
}

let attractions = touristAttractions.map(elemOfAttraction)

let rootdiv = document.getElementById('root')

ReactDOM.render(attractions, rootdiv)
