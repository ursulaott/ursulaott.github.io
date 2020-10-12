var reasons = [
    'having daddy issues\n',
    'simping for incels\n',
    'watching anime unironically\n',
    'uncontrollably sexualing gamers\n',
    'gay\n',
    'owning a discord server\n',
    'shipping REDACTED\n',
    'being in the onceler fandom\n'
    'hating children\n',
    'leaving everyone on read\n',
    'shoplifting from walmart\n',
    'kinning bill cipher\n',
    'hating sasuke\n',
    'watching pewdiepie\n',
    'shipping REDACTED\n',
    'shipping REDACTED\n',
    'shipping REDACTED\n',
]


function newCallout(){
    var un = window.prompt("Enter username: ");
    var rand = Math.floor(Math.random() * (reasons.length));
    document.getElementById('calloutDisplay').innerHTML =
    "tumblr user @/"+ un +" is cancelled for " + reasons[rand] +"<br><br> Stay safe <br><br><br>";
}
