var reasons = [
    'has daddy issues',
    'simps for incels',
    'watches anime unironically',
    'sexualizes gamers uncontrollably',
    'gay',
    'owns a discord server'
]


function newCallout(){
    var rand = Math.floor(Math.random() * (reasons.length));
    document.getElementById('calloutDisplay').innerHTML = reasons[rand];
}
