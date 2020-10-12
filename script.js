var reasons = [
    'having daddy issues\n',
    'simping for incels\n',
    'watching anime unironically\n',
    'sexualing gamers uncontrollably\n',
    'gay\n',
    'owning a discord server\n',
    'hating children\n',
    'leaving everyone on read\n',
    'shoplifting from walmart\n',
    'kinning bill cipher\n',
    ''
]


function newCallout(){
    var un = window.prompt("Enter username: ");
    var rand = Math.floor(Math.random() * (reasons.length));
    document.getElementById('calloutDisplay').innerHTML = "tumblr user @/"+ un + " is cancelled for " + reasons[rand] + "<br> Stay safe. <br>";
}
