import { Accounts } from 'meteor/accounts-base';
import { Random } from 'meteor/random'

Accounts.onCreateUser(function (options, user) {

        if(options.profile)
          user.profile=options.profile;
        if(options.services)
          user.services = options.services;
        user.services.steam = {}; // Se creará el campo id_steam en users.
        user.services.steam.id_steam = ""; // Se creará el campo id_steam en users.
        user.services.riot={};
      	user.services.riot.summonerName = "" ;
        user.services.riot.summonerId = "" ;
        user.services.riot.region = "" ;
        user.services.riot.cod_runa = Random.id() ;

        return user;    		      // record is re-inserted

});
