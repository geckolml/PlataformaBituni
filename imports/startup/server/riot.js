var LolApi = require('leagueapi');

LolApi.init('RGAPI-33126f2c-3ef5-42e1-ae89-07c9ef27b606', 'na');

LolApi.getChampions(true, function(err, champs) {
    console.log(champs);
});
// Jossias Hybrid117  LAN
LolApi.Summoner.getByName('Hybrid117', function(err, summoner) {
    if(!err) {
        console.log(summoner);
    }
})

//The wrapper also accepts promises:
LolApi.Summoner.getByName('Hybrid117')
.then(function (summoner) {
    console.log(summoner);
});
