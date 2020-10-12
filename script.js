var reasons = [
    'having daddy issues\n',
    'simping for incels\n',
    'watching anime unironically\n',
    'sexualing gamers uncontrollably\n',
    'gay\n',
    'owning a discord server\n'
]


function newCallout(){
    var un = window.prompt("Enter username: ");
    var rand = Math.floor(Math.random() * (reasons.length));
    document.getElementById('calloutDisplay').innerHTML = "@/"+ un + " is cancelled for " + reasons[rand];
}
