function generateQuote() {
    var quote = document.getElementById("quote");
    var quotesArray = [
      "“A user interface is like a joke. If you have to explain it, it’s not that good.”",
      "“If you think math is hard, try web design.”",
      "“I don’t care if it works on your machine! We are not shipping your machine!”",
      "“If debugging is the process of removing software bugs, then programming must be the process of putting them in”",
      " “It’s not a bug. It’s an undocumented feature!”",
      "“Be who you are and say what you feel, because those who mind don't matter, and those .”",
    ];
    var randomQuote = Math.floor(Math.random() * quotesArray.length);
    quote.innerHTML = quotesArray[randomQuote];
  }
  