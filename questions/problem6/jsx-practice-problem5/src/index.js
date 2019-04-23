import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let datingProfiles = [
   {
      lookingFor: { gender: "female", kids: "not ok", smoking: false },
      gender: "male",
      name: "Peter Bob",
      occupation: {
         title: "teacher",
         salary: "30000",
         location: {
            city: "Montreal",
            province: "Quebec",
            country: "Canada"
         }
      }
   },
   {
      lookingFor: { gender: "male", kids: "ok", smoking: false },
      gender: "female",
      name: "Jessica Sue",
      occupation: {
         title: "manager",
         salary: "80000",
         location: {
            city: "Toronto",
            province: "Ontario",
            country: "Canada"
         }
      }
   },
   {
      lookingFor: { gender: "female", kids: "ok", smoking: false },
      gender: "female",
      name: "Grace Smith",
      occupation: {
         title: "CEO",
         salary: "900000",
         location: {
            city: "Vacouver",
            province: "British Colombia",
            country: "Canada"
         }
      }
   }
]

let elemOfJobLocation = function (location) {

   return <div>Location: {location.city}, {location.province}, {location.country}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    "Location: " + location.city + ", " + location.province + ", " + location.country
   // )
}

let elemOfJob = function (occupation) {

   return <div>Job: {occupation.title} / salary: ${occupation.salary} {elemOfJobLocation(occupation.location)}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    "Job: " + occupation.title,
   //    " / salary: $" + occupation.salary,
   //    elemOfJobLocation(occupation.location)
   // )
}

let elemOfLookingFor = function (lookingFor) {

   return <div>Looking for {lookingFor.gender}, kids {lookingFor.kids}{lookingFor.smoking ? ", smoking" : ", non smoking"}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    "Looking for: ",
   //    lookingFor.gender,
   //    ", kids " + lookingFor.kids,
   //    lookingFor.smoking ? ", smoking" : ", non-smoking"
   // )
}

let elemOfProfile = function (profile) {

   return <div>
      <h3>{profile.name}</h3>
      <div>{profile.gender} {elemOfJob(profile.occupation)} {elemOfLookingFor(profile.lookingFor)}</div>
   </div>

   // return React.createElement(
   //    "div",
   //    {},
   //    React.createElement("h3", {}, profile.name),
   //    React.createElement(
   //       "div",
   //       {},
   //       profile.gender,
   //       elemOfJob(profile.occupation),
   //       elemOfLookingFor(profile.lookingFor)
   //    )
   // )
}

let profiles = datingProfiles.map(elemOfProfile)

let rootdiv = document.getElementById('root')

ReactDOM.render(profiles, rootdiv)
