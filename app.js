var readlineSync = require('readline-sync');

console.log("Are you a true fan of Amitabh Bachchan?");

var userName=readlineSync.question("\nPlease enter your name:\n")

console.log("\n\nHi,"+userName+"!"+" Welcome \n");


var highScores={
    first:"Rakesh:5",
    scoreOne:5,
    second:"Akshat:4",
    scoreTwo:4
  }
  var userQuestions=[
    {
      question: ("What is the DOB of\nAmitabh?\n")+"\na)28 March    b)18 Dec\n\nc)11 Oct    d)02 April\n\n",
      answer:"c"
    },
  
    {
      question:("In What year he came to Film Industry?\n")+"\na)1969    b)1972\n\nc)1967    d)1975\n\n",
      answer:"a"
    },
  
    {
      question:("On Which subject he was gradutate?\n")+"\na)MCA      b)B.Com.\n\nc)B.Sc.     d)none of this\n\n",
      answer:"c"
    },
  
  
  
    {
      question:("One of his flop movie?\n")+"\na)Jadugar b)Deevar\n\nc)Shole       d)Don\n\n",
      answer:"a"
    },
  
    {
      question:("At which movie he got major enjury?\n")+"\nda)Yarana       b)Khuddar\n\nc)Don         d)Cooli\n\n",
      answer:"d"
    },
  ]
  
  var score=0;
  