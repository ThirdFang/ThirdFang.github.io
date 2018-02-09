var quotes = [

  	'I don\'t have the solution...But I certainly do admire the problem <br />-Ashleigh Brilliant',
	'A day without sunshine is like, you know, night <br />-Steve Martin',
	'People who think they know everything are a great annoyance to those of us who do <br />-Isaac Asimov',
	'Get your facts first, then you can distort them as you please <br />-Mark Twain',
	'I\'m sorry, if you were right, I\'d agree with you <br />-Robin Williams',
	'There\'s a very fine line between not listening and not caring. I like to think I walk that line every day of my life <br />-Church\, \"Red vs Blue\"',
	'Procrastination is the art of keeping up with yesterday <br />-Don Marquis',
	'I love deadlines. I like the whooshing sound they make as they fly by <br />-Douglas Adams',
	'Weather forcast for tonight: Dark <br />-George Carlin',
	'If two wrongs don\'t make a right, try three <br />-Laurence J. Peter',
	'My life needs more editing <br />-Mort Sahl',
	'Not only do I not know what\'s going on, I wouldn\'t know what to do about it if I did <br />-George Carlin',
	'The reason I talk to myself is that I\'m the only one whose answers I accept <br />-George Carlin',
	'Spring is nature\'s way of saying, \'Let\'s Party!\' <br />-Robin Williams'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}