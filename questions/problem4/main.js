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

   return React.createElement(
      "div",
      {},
      "Location: " + location.city + ", " + location.province + ", " + location.country
   )
}

let elemOfJob = function (occupation) {

   return React.createElement(
      "div",
      {},
      "Job: " + occupation.title,
      " / salary: $" + occupation.salary,
      elemOfJobLocation(occupation.location)
   )
}

let elemOfLookingFor = function (lookingFor) {

   return React.createElement(
      "div",
      {},
      "Looking for: ",
      lookingFor.gender,
      ", kids " + lookingFor.kids,
      lookingFor.smoking ? ", smoking" : ", non-smoking \n"
   )
}

let elemOfProfile = function (profile) {

   return React.createElement(
      "div",
      {},
      React.createElement("h3", {}, profile.name),
      React.createElement(
         "div",
         {},
         profile.gender,
         elemOfJob(profile.occupation),
         elemOfLookingFor(profile.lookingFor)
      )
   )
}

let profiles = datingProfiles.map(elemOfProfile)

let rootdiv = document.getElementById('root')

ReactDOM.render(profiles, root)
