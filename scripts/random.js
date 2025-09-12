 const textSelect= [
  '"It\'s far more impressive and personable than YOUR website!"',
  '<b>BUY WAR BONDS!!</b>',
  '<i>Dear Robert,<br>I was going to send you some stationary Anyway, but since you got greedy and asked for it, now you get nothing. i hope you learnt your lesson.<br> Love, Eunuchs 🖤</i><br>[sic]',
  'Why are we still standing here just looking around? Click the links.',
  'Don\'t forget to submit a question on the questions tab.',
  'Not optimized for mobile. Never optimized for mobile.',
  '"The kitchen is so dirty I just stopped using it. I got a hot plate in my room or I go to my friends to coom"',
  'Stop caring so much',
  'Can you believe this site uses Bootstrap??',
  '<rainbow><b><(0_0<) <(0_0)> (>0_0)> KIRBY DANCE</b><rainbow>',
  '<code>man door hand hook car door</code>',
  'One div led to another',
  '<iframe src="media/Annus_Destiny.mp4" frameborder="0"></iframe>',
  '"I can\'t really control my hunger and i\'m autistic"',
  '"Ey, Tony, lift ya shirt up a lil\' bit, I\'m tryna see..."',
  'DO NOT FINISH THE GAME',
  'Web design is 2% planning 8% execution 20% staring at the page wondering how else you can spruce it up and 70% hacking away at div containers because the entire page is now shifted 2px to the left and you can\'t figure out why',
  'A new power will rise...',
  'Mr beast give me money',
];
 
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textSelect.length);
    return textSelect[randomIndex];
  }
 
function loadText() {
  const myDiv = document.getElementById('random');
  myDiv.innerHTML= getRandomText();
}
 
window.onload = loadText;