var reasons = [
    'having daddy issues\n',
    'simping for incels\n',
    'watching anime unironically\n',
    'uncontrollably sexualing gamers\n',
    'gay\n',
    'owning a discord server\n',
    'being a mentally ill\n',
    'not being a catboy (lame)\n',
    'shipping [REDACTED]\n',
    'hating children\n',
    'leaving everyone on read\n',
    'shoplifting from walmart\n',
    'kinning bill cipher\n',
    'endeavor thirstposting\n',
    'hating sasuke\n',
    'watching pewdiepie\n',
    'being a catboy\n',
    'unionizing the psych ward\n',
]


function newCallout(){
    var un = window.prompt("Enter username: ");
    var rand = Math.floor(Math.random() * (reasons.length));
    document.getElementById('calloutDisplay').innerHTML =
    "tumblr user @/"+ un +" is cancelled for " + reasons[rand] +"<br><br> stay safe. <br><br><br>";
}
