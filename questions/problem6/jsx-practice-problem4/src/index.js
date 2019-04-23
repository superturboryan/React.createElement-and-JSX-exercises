import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let subreddits = [
   {
      name: "learnjavascript",
      moderators: [
         { name: "jacques", nickname: "codeislife" },
         { name: "bob", nickname: "robert" }
      ],
      posts: [
         {
            title: "X is not a property of undefined. What gives?",
            date: {
               month: "January",
               year: "2018",
               op: "somecoder"
            }
         },
         {
            title: "Have you heard of Wakata? Best website ever.",
            date: {
               month: "February",
               year: "2018",
               op: "othercoder"
            }
         }
      ]
   },
   {
      name: "learnpython",
      moderators: [{ name: "pete", nickname: "pythonista42" }],
      posts: [
         {
            title: "Help me with arrays please!",
            date: {
               month: "March",
               year: "2017",
               op: "coder42"
            }
         }
      ]
   }
]

let elemOfPostDate = function (date) {

   return <div>Posted by {date.op}, {date.month} {date.year}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    date.month + " " + date.year + " / Posted by " + date.op
   // )
}

let elemOfPost = function (post) {

   return <div><h4>{post.title}</h4>{elemOfPostDate(post.date)}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    React.createElement(
   //       "h4",
   //       {},
   //       post.title
   //    ),
   //    elemOfPostDate(post.date)
   // )
}

let elemOfModerator = function (moderator) {

   return <div>Moderated by {moderator.name} aka {moderator.nickname}</div>

   // return React.createElement(
   //    "div",
   //    {},
   //    "Moderator: ",
   //    moderator.name + " aka " + moderator.nickname
   // )
}

let elemOfSubreddit = function (sub) {

   return <div>
      <h2>R: {sub.name}</h2>
      <div>
         {sub.moderators.map(elemOfModerator)}
         {sub.posts.map(elemOfPost)}
      </div>
   </div>

   // return React.createElement(
   //    "div",
   //    {},
   //    React.createElement(
   //       "h2",
   //       {},
   //       "R: " + sub.name
   //    ),
   //    React.createElement(
   //       "div",
   //       {},
   //       sub.moderators.map(elemOfModerator),
   //       sub.posts.map(elemOfPost)
   //    )
   // )
}

let subredditReact = subreddits.map(elemOfSubreddit)

let rootdiv = document.getElementById('root')

ReactDOM.render(subredditReact, rootdiv)