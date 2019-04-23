let rootdiv = document.getElementById('root')

let elem = React.createElement("div", {},
   React.createElement("img", { src: "http://cats.com/cat.png", height: 100, width: 100 }),
   React.createElement("img", { src: "http://cats.com/cat.png", height: 100, width: 100 }),
   React.createElement("ul", {},
      React.createElement("li", {}, "Cat1"),
      React.createElement("li", {}, "Cat2")
   )
)

ReactDOM.render(elem, rootdiv)