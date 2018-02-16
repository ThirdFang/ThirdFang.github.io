/* This function is used for providing quotes once the "More Quotes, Please" button from the index is clicked. One array (quotes) holds all the quotes, while the other (usedQuotes) is the container for used quotes. Once a quote has been displayed, it will move into the usedQuotes array, until all quotes have been used. Once all quotes have been used and moved to the usedQuotes array, the IF statement activates, and copies all the quotes from the usedQuotes array to the quotes array, and then makes the usedQuotes array empty again. The quotes are displayed randomly from the quotes array. There is a chance (that decreases with each new addition to the quotes array) that a quote can be displayed twice   */

(function() {

	var quotes = [

		'I don\'t have the solution...But I certainly do admire the problem <br />-Ashleigh Brilliant',
		'A day without sunshine is like, you know, night <br />-Steve Martin',
		'People who think they know everything are a great annoyance to those of us who do <br />-Isaac Asimov',
		'Get your facts first, then you can distort them as you please <br />-Mark Twain',
		'I\'m sorry, if you were right, I\'d agree with you <br />-Robin Williams',
		'There\'s a very fine line between not listening and not caring. I like to think I walk that line every day of my life <br />-Church from \"Red vs Blue\"',
		'Procrastination is the art of keeping up with yesterday <br />-Don Marquis',
		'I love deadlines. I like the whooshing sound they make as they fly by <br />-Douglas Adams',
		'Weather forecast for tonight: Dark. Continued dark overnight, with widely scattered light by morning<br />-George Carlin',
		'Isn\'t a bit unnerving that doctors call what they do \"Practice\"<br />-George Carlin',
		'If two wrongs don\'t make a right, try three <br />-Laurence J. Peter',
		'My life needs more editing <br />-Mort Sahl',
		'Not only do I not know what\'s going on, I wouldn\'t know what to do about it if I did <br />-George Carlin',
		'The reason I talk to myself is that I\'m the only one whose answers I accept <br />-George Carlin',
		'Spring is nature\'s way of saying, \"Let\'s Party!\" <br />-Robin Williams',
		'It is a scientific fact that your body will not absorb cholesterol if you take it from another person\'s plate <br />-Dave Barry',
		'I am so clever that sometimes I don\'t understand a single word of what I am saying <br />-Oscar Wilde',
		'I never forget a face, but in your case I\'ll make an exception <br />-Groucho Marx',
		'Before you judge a man, walk a mile in his shoes. After that, who cares?...He\'s a mile away and you\'ve got his shoes! <br />-Billy Connolly',
		'The difference between genius and stupidity is that genius has its limits <br />-Albert Einstein',
		'If you find it hard to laugh at yourself, I would be happy to do it for you <br />-Groucho Marx',
		'To steal ideas from one person is plagiarism; to seal from many is research <br />-Steven Wright',
		'The road to success is dotted with many tempting parking spaces <br />-Will Rogers',
		'Life is hard; it\'s harder if you\'re stupid <br />-John Wayne',
		'A lie gets halfway around the world before the truth has a chance to get its pants on <br />-Winston Churchill',
		'If you think nobody cares if you\'re alive, try missing a couple of car payments <br />-Earl Wilson',
		'If you try to fail, and succeed, which have you done? <br />-George Carlin',
		'A lot of people are afraid of heights. Not me, I\'m afraid of widths <br />-Steven Wright',
		'By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day <br />-Robert Frost',
		'I\'d rather have 1% of the effort of 100 men than 100% of my own effort <br />-J. Paul Getty',
		'Recession is when a neighbor loses his job. Depression is when you lose yours <br />-Ronald Reagan',
		'It\'s true that had work never killed anybody. But I figure, why take the chance? <br />-Ronald Reagan',
		'I have not failed. I\'ve just found 10,000 ways that won\'t work <br />-Thomas A. Edison',
		'I can resist everything except temptation <br />-Oscar Wilde',
		'It\'s always darkest before the dawn. So if you\'re going to steal your neighbor\'s newspaper, that\'s the time to do it <br />-Navjot Singh Sidhu',
		'Always borrow money from a pessimist. He won\'t expect it back <br />-Oscar Wilde',
		'May the forces of evil become confused on the way to your house <br />-George Carlin',
		'It does not matter whether you win or lose, what matters is whether I win or lose! <br />-Steven Weinberg',
		'Lead me not into temptation; I can find the way myself <br />-Rita Mae Brown',
		'I have learned from my mistakes, and I am sure I can repeat them exactly <br />-Peter Cook',
		'If you must make a noise, make it quietly <br />-Oliver Hardy',
		'I always arrive late at the office, but I make up for it by leaving early <br />-Charles Lamb',
		'The road to success is always under construction <br />-Lily Tomlin',
		'What the world needs is more geniuses with humility; there are so few of us left <br />-Oscar Levant',
		'It\'s always funny until someone gets hurt. Then it\'s just hilarious <br />-Bill Hicks',
		'Talking about music is like dancing about architecture <br />-Steve Martin',
		'Kilometers are shorter than miles. Save gas, take your next trip in kilometers <br />-George Carlin',
		'I like coffee because it gives me the illusion that I might be awake <br />-Lewis Black',
		'\"Be yourself\" is about the worst advice you can give to some people <br />-Thomas Lansing Masson',
		'There is hardship in everything except eating pancakes <br />-Charles Spurgeon',
		'It\'s simple: if it jiggles, it\'s fat <br />-Arnold Schwarzenegger',
		'When in doubt, blow something up <br />-J. Michael Straczynski',
		'There is no such thing as fun for the whole family <br />-Jerry Seinfeld',
		'You know the trouble with real life? There\'s no danger music <br />-Jim Carrey',
		'There\'s no better feeling in the world than a warm pizza box on your lap <br />-Kevin James',
		'Don\'t sweat the petty things and don\'t pet the sweaty things <br />-George Carlin',
		'My psychiatrist told me I was crazy and I said I want a second opinion. He said "Okay, you\'re ugly too" <br />-Rodney Dangerfield',
		'I believe that if life gives you lemons, you should make lemonade...And try to find somebody whose life has given them vodka, and have a party <br />-Ron White',
		'The man who smiles when things go wrong has thought of someone to blame it on <br />-Robert Block',
		'Better to remain silent and be thought a fool than to speak out and remove all doubt <br />-Abraham Lincoln',
		'Two wrongs do not make right; But three rights make a left <br />-George Lopez',
		'I don\'t trust children. They\'re here to replace us <br />-Stephen Colbert',
		'Why is there so much month left at the end of the money? <br />-John Barrymore',
		'If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions? <br />-Scott Adams',
		'Looking at cleavage is like looking at the sun. You don\'t stare at it. It\'s too risky. Ya get a sense of it and then you look away <br />-Jerry from \"Seinfeld\"',
		'Hardware: the parts of a computer that can be kicked <br />-Jeff Pesis',
		'There are two ways to write error-free programs; only the third one works <br />-Alan Perlis',
		'I reject your reality and substitute my own <br />-Adam Savage',
		'Computer Science is no more about computers than Astronomy is about telescopes <br />-Edsger W. Dijkstra',
		'You know it\'s love when you memorize her IP number to skip DNS overhead <br />-Unknown',
		'Everyone needs computer programming. It will be the way we speak to the servants <br />-John McCarthy',
		'Of course I don\'t look busy, I did it right the first time <br />-Scott Adams',
		'A clear conscience is usually the sign of a bad memory <br />-Steven Wright',
		'Rice is great if you\'re really hungry and want to eat two thousand of something <br />-Mitch Hedberg',
		'I\'m sick of following my dreams. I\'m just going to ask them where they\'re goin\', and hook up with them later <br />-Mitch Hedberg',
		'If at first you don\'t succeed, try, try again. Then quit. There\'s no point in being a damn fool about it <br />-W. C. Fields',
		'There are 10 types of people in the world: those who understand binary, and those who don\'t <br />-Unknown',
		'Never half-ass two things. Whole-ass one thing <br />-Ron Swanson from \"Parks and Recreation\"',
		'Change is inevitable, except from a vending machine <br />-Unknown',
		'No one can be exactly like me. Sometimes even I have trouble doing it <br />-Tallulah Bankhead',
		'Do you know what \'meteorologist\' means in English? It means liar <br />-Lewis Black',
		'When life gives you lemons, squirt someone in the eye <br />-Cathy Guisewite',
		'Never miss a good chance to shut up <br />-Will Rogers',
		'One should never give up on hope...Unless that\'s the name of the girl who cheated on you, in which case, yeah, give her up <br />-Carroll Bryant',
		'I understood it-until you tried to explain it <br />-Erin Pracht',
		'I refuse to answer that question on the grounds that I don\'t know the answer <br />-Douglas Adams',
		'Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws <br />-Douglas Adams',
		'I know all those words, but that sentence makes no sense to me <br />-Matt Groening',
		'Who was the guy who first looked at a cow and said \"I think I\'ll drink whatever comes out of these when I squeeze \'em\" <br />-Bill Watterson',
		'Never knock on death\'s door. Ring the doorbell then run. He totally hates that <br />-Darynda Jones',
		'If I\'m walking on thin ice, I might as well dance my way across <br />-Mercedes Lackey',
		'Oh, you hate your job? Why didn\'t you say so? There\'s a support group for that. It\'s called EVERYBODY, and the meet at the bar <br />-Drew Carey',
		'Anybody who says they are a good liar obviously is not, because any legitimately savvy liar would always insist they\'re honest about everything <br />-Chuck Klosterman',
		'If at first you don\'t succeed, destroy all evidence that you tried <br />-Steven Wright',
		'I\'m not dumb. I just have a command of thoroughly useless information <br />-Bill Watterson',
		'I think I am, therefore, I am...I think <br />-George Carlin',
		'I believe in equality. Equality for everybody. No matter how stupid they are or how superior I am to them <br />-Steve Martin',
		'When I get sad, I stop being sad and be awesome instead <br />-Barney Stinson from \"How I Met Your Mother\"',
		'You are only young once, but you can stay immature indefinitely <br />-Ogden Nash',
		'To alcohol! The cause of, and solution to, all of life\'s problems <br />-Matt Groening',
		'The length of a film should be directly related to the endurance of the human bladder <br />-Alfred Hitchcock',
		'Never put off till tomorrow what may be done day after tomorrow just as well <br />-Mark Twain',
		'College is the best time of your life. When else are your parents going to spend several thousand dollars a year just for you to go to a strange town to get drunk every night <br />-David Wood',
		'Be twice as funny as you are outrageous, because no one can resist the truth wrapped in a good joke <br />-Milo Yiannopoulos',
		'Aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don\'t know <br />-Brandon Sanderson',
		'Time line? Time isn\'t made out of lines. It is made out of circles. That is why clocks are round <br />-Caboose from \"Red vs Blue\"',
		'We\'re not retreating! We\'re advancing toward future victories <br />-Sarge from \"Red vs Blue\"',
		'Just act like you normally do. Wait, not like you, act like someone more brave...and smarter...and more masculine for God\'s sake! <br />-Sarge from \"Red vs Blue\"',
		'There are two kinds of people in the world; those who have a plan prepared for when the zombies take over the Earth, and those who don\'t. We call those last people \"Dinner\" <br />-Grif from \"Red vs Blue\"',
		'People learn English all the time...it aren\'t that hard <br />-Tucker from \"Red vs Blue\"',
		'No matter how bad things seem, they can\'t be any better, and they can\'t be any worse, because that\'s the way things are, and you better get used to it, Nancy. Quit your bitchin\' <br />-Church from \"Red vs Blue\"',
		'Ahh, the middle finger. The Most communicative of fingers <br />-Guybrush Threepwood from the \"Monkey Island\" series',
		'If fucking is up power, I should be the Hulk by now <br />-Richard Kadrey',
		'Two wrongs don\'t make a right, but they make a good excuse <br />-Thomas Szasz',
		'I like work: it fascinates me. I can sit and look at it for hours <br />-Jerome K. Jerome',
		'The amount of sleep required by the average person is about five minutes more <br />-Max Kauffmann',
		'There are two ways to handle a woman, and nobody knows either of them <br />-Frank McKinney Hubbard',
		'Weddings are basically funerals with cake <br />-Rick from \"Rick and Morty\"',
		'A know-it-all is a person who knows everything except for how annoying he is <br />-Demetri Martin',
		'Some things are exactly as they seem, folks. Killer Whales kill, Pilot Whales wear dark sunglasses. I\'m not sure how the Sperm Whale got his name, but I\'m not getting in the pool <br />-Ron White',
		'When my time comes, I wanna be buried facedown. That way whoever doesn\'t like me can kiss my ass <br />-Red Foreman from \"That 70\'s Show\"',
		'Society teaches us that having feelings and crying is bad and wrong. Well, that\'s baloney, because grief isn\'t wrong. There\'s such a thing as good grief. Just ask Charlie Brown <br />Michael Scott from \"The Office\"',
		'Sometimes I feel like everyone I work with is an idiot. And by sometimes, I mean all times. All the time. Every of the time <br />-Kevin Malone from \"The Office\"',
		'I never lie. I believe everything I say, so it\'s not a lie <br />-Mark Wahlberg',
		'The message \"Bad command or file name\" is as informative as \"If you don\'t know why I\'m mad at you, they I\'m certainly not going to tell you <br />-Unknown',
		'\"Meow\" means \"woof\" in cat <br />-George Carlin',
		'I went to a bookstore and asked the saleswoman, "Where\'s the self-help section?\" She said if she told me, it would defeat the purpose <br />-George Carlin',
		'[There\'s no \"I\" in team, Grif] Oh, yeah? Well, there\'s no \"U\", either. So I guess if \"I\'m\" not on the team and \"you\'re\" not on the team, nobody\'s on the goddamned team! The team sucks! <br />-Grif from \"Red vs Blue\"',
		'Some people have no idea what they\'re doing, and a lot of them are really good at it <br />-George Carlin',
		'When you\'re not looking, somebody\'ll sneak up and write \"Fuck you\" right under your nose <br />-J.D. Salinger',
		'As far as I\'m concerned, if something is so complicated that you can\'t explain it in 10 seconds, then it\'s probably not worth knowing anyway <br />-Bill Watterson',
		'One morning I shot an elephant in my pajamas. How he got in my pajamas I\'ll never know <br />-Groucho Marx',
		'When all else fails, there\'s always delusion <br />-Conan O\'Brien',
		'It\'s not denial. I\'m just selective about the reality I accept <br />-Bill Watterson',
		'When I was growing up I always wanted to be someone. Now I realize I should have been more specific <br />-Lily Tomlin',
		'The biggest challenge after success is shutting up about it <br />-Criss Jami',
		'I like nonsense, it wakes up the brain cells <br />-Dr. Seuss',
		'I never made a mistake in my life; at least, never one that I couldn\'t explain away afterwards <br />-Rudyard Kipling',
		'A good night sleep, or a ten minute bawl, or a pint of chocolate ice cream, or all three together, is good medicine <br />-Ray Bradbury',
		'You can only be in a bad mood for so long before you have to face up to the fact that it isn\'t a bad mood at all; it\'s just your sucky personality <br />-Megan McCafferty',
		'You have to remember one thing about the will of the people: it wasn\'t that long ago that we were swept away by the Macarena <br />-Jon Stewart',
		'I find my life is a lot easier the lower I keep my expectations <br />-Bill Watterson',
		'Telling an introvert to go to a party is like telling a saint to go to Hell <br />-Criss Jami',
		'An original idea. That can\'t be too hard. The library must be full of them <br />-Stephen Fry',
		'Just give me a second. Attempting to give a fuck...Attempting harder to give a fuck...Sorry, there was an error; fuck not given <br />-Suzanne Wright',
		'We\'re not retreating. We\'re advancing in reverse <br />-Skulduggery Pleasant from \"Skulduggery Pleaseant\" series',
		'We must have pie. Stress cannot exist in the presence of a pie <br />-David Mamet',
		'If you had to identify, in one word, the reason why the human race has not achieved, and never will achieve, its full potential, that word would be \"meetings\" <br />-Dave Barry',
		'I\'ve been accused of vulgarity. I say that\'s bullshit <br />-Mel Brooks',
		'You know on TV when there\'s one of those awkward, shocking moments and all you hear are the crickets in the background? Well chirp fucking chirp...this is one of those moments <br />-Emma Chase',
		'When in doubt, look intelligent <br />-Garrison Keillor',
		'Learn from yesterday, live for today, look to tomorrow, rest this afternoon <br />-Charles M. Schulz',
		'Thinking is hard work, which is why you don\'t see many people doing it <br />-Sue Grafton',
		'My opinions may have changed, but not the fact that I\'m right <br />-Ashleigh Brilliant',
		'Honesty may be the best policy, but it\'s important to remember that apparently, by elimination, dishonesty is the second-best policy <br />-George Carlin',
		'\"If you want to shoot the general, first shoot the horse\" <br />\"If you wanna shoot the general, then you should just SHOOT THE GENERAL!\" <br />-Ling Yao and Edward Elric from \"Fullmetal Alchemist: Brotherhood\"',
		'Every year, many, many stupid people graduate from college. And if they can do it, so can you <br />-John Green',
		'The nice part about being a pessimist is that you are constantly being either proven right or pleasantly surprised <br />-George F. Will',
		'Everybody\'s got to believe in something. I believe I\'ll have another beer <br />-W.C. Fields',
		'There is a great need for a sarcasm font <br />-Darynda Jones',
		'WHoever said the pen is mightier than the sword obviously never encountered automatic weapons <br />-Douglas MacArthur',
		'Everything here is edible; even I\'m edible. But that, dear children, is cannibalism, and is in fact frowned upon in most societies <br />-Johnny Depp',
		'I\'d kill for a Nobel Peace Prize <br />-Steven Wright',
		'Just about everything in this world is easier said than done, with the exception of \"sytemmatically assisting Sisyphus\'s stealth, cyst-susceptible sister,\" which is easier done than said <br />-Lemony Snicket',
		'Only Irish coffee provides in a single glass all four essential food groups: alcohol, caffeine, sugar and fat <br />-Alex Levine',
		'All are lunatics, but he who can analyze his delusion is called a philosopher <br />-Ambrose Bierce',
		'ROFL! What? Are you really rolling on the floor laughing? Well, please stay down there for a sec while I KICK YOUR ASS <br />-David Levithan',
		'My formula for life is very simple: in the morning, wake up; at night, go to sleep. In between I try and accupy myself as best I can <br />-Cary Grant',
		'Don\'t mess with a wizard when he\'s wizarding! <br />-Jim Butcher',
		'Talk is cheap. Show me the code <br />-Linus Torvalds',
		'The two most beautiful words in the English language are \"cheque enclosed\" <br />-Dorothy Parker',
		'If your kid needs a role model and you ain\'t it, you\'re both fucked <br />-George Carlin',
		'Gravity is a contributing factor in nearly 73 percent of all accidents involving falling objects <br />-Dave Barry',
		'Shin: a device for finding furniture in the dark <br />-Steven Wright',
		'No man\'s life, liberty, or property are safe while the legislature is in session <br />-Gideo J. Tucker',
		'Life is half delicious yogurt, half crap, and your job is to keep the plastic spoon in the yogurt <br />-Scott Adams',
		'I\'m no cactus expert, but I know a prick when I see one <br />-Mark A. Cooper',
		'There are too many idiots in this world. And having said it, I have the burden of proving it <br />-Frantz Fanon',
		'If anger were mileage, I\'d be a very frequent flyer, right up there in First Class <br />-Gina Barreca',
		'Computers are like Old Testament gods; lots of rules and no mercy <br />-Joseph Campbell',
		'It doesn\'t matter what temperature a room is, it\'s always room temperature <br />-Steven Wright',
		'Wikipedia is the first place I go when I\'m looking for knowledge...or when I want to create some <br />-Stephen Colbert',
		'The ability to speak does not make you intelligent <br />-George Lucas',
		'Above all, if what you\'ve done is stupid, but works, it ain\'t stupid <br />-Robert Fulghum',
		'Revenge is sweet and not fattening <br />-Alfred Hitchcock',
		'I\'d give my right arm to be ambidextrous <br />-Yogi Berra',
		'I\'m not stubborn. My way is just better <br />-Maya Banks',
		'Don\'t explain computers to laymen. Simpler to explain sex to a virgin <br />-Robert A. Heinlein',
		'If it\'s zero degrees outside today and it\'s supposed to be twice as cold tomorrow, how cold is it going to be? <br />-Steven Wright',
		'My powers of persuasion are only as strong as the bullshit I have to back it up <br />-Darynda Jones',
		'Nobody messes around with a nerd\'s computer and esacpes unscathed <br />-E.A. Bucchianeri',
		'The worst time to have a heart attack is during a game of charades <br />-Demetri Martin',
		'I don\'t have a girlfriend. But I do know a woman who\'d be mad at me for saying that <br />-Mitch Hedberg',
		'I don\'t understand the whole concept of a massage. You get a woman to rub all over every single part of you body except the one part you really want rubbed on <br />-Rodney Carrington',
		'Childhood is throwing rocks at shit you shouldn\'t be throwing rocks at <br />-Joel Heyman',
		'If you make enough bad decisions, every once in a while things work out for you <br />-Geoff Ramsey',
		'Do you think goosebumps for blind people is just like reading a bunch of jumbled letters? <br />-Gavin Free',
		'I\'m really smart sometimes. But only sometimes <br />-Gavin Free',
		'I don\'t do ups. Ups defy gravity. Gravity is a law. I obey the law <br />-John Pinette',
		'To be sure of hitting the target, shoot first, and call whatever you hit the target <br />-Ashleigh Brilliant',
	];
	
	var usedQuotes = []; // empty array for used quotes
	
	document.getElementById('retrieve').onclick = function() {
		var indexToSplice = Math.floor(Math.random() * quotes.length);
		var spliceQuote = quotes.splice(indexToSplice, 1);
		usedQuotes.push(spliceQuote);
		print(spliceQuote);
		
		if (quotes.length == 0) {
			quotes = usedQuotes;
			usedQuotes = [];
		}
	};
	
	function print (q) {
		document.getElementById("send").innerHTML = q;
	}
})();
