import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({
// Actualizar la base de datos desde un metodo del servidor.
'update'(id,idsteam){
    check(id,String);
    check(idsteam,String);
    Meteor.users.update({_id:id},{$set:{
      "services.steam.id_steam": idsteam ,
    }});

},
// Eliminar la cuenta creada por steam de la base de datos
'remove'(idsteam){

    check(idsteam,String);
    Meteor.users.remove({"profile.id":idsteam});

}

});
