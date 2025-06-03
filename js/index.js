var arrayQoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    qoute: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    author: "― Oscar Wilde",
  },
  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    qoute: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
];

// console.log(qoutes[2].qoute)

var qoutes = document.getElementById("qoute");
var authors = document.getElementById("author");
function test() {
  var random = Math.floor(Math.random() * arrayQoutes.length);
  console.log(random);

  qoutes.innerHTML = `${arrayQoutes[random].qoute}`;
  authors.innerHTML = `${arrayQoutes[random].author}`;
}























//   if (random === random) {
//     random = Math.floor(Math.random() * arrayQoutes.length);
//   }
