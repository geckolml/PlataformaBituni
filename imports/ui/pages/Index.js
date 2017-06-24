import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

const Index = () => (

  <Jumbotron className="text-center">
    <h2>BITUNI</h2>
    <Button
      bsStyle="success"
      className="pull-center"
      onClick={(event) => {

                  id_current=Meteor.userId();
                 Meteor.loginWithSteam((data,err)=>{
                   if (err)
                    console.log(err);
                   else
                    {
                         var idSteam = String(Meteor.user().profile.id); // ID de Steam
                         Meteor.call('update',String(id_current),String(idSteam)); // Agrega el ID de steam al documento del usuario loggeado.
                         Meteor.call('remove',String(idSteam)); // Elimina el usuario creado por la API de steam por defecto.

                         console.log(id_current); // Imprime ID del usuario
                         console.log(idSteam); // Imprime ID del usuario
                    }

                 });

          }}>Mis Transacciones</Button>


          <Button
            bsStyle="success"
            className="pull-center"
            onClick={(event) => {

                        id_current=Meteor.userId();
                       Meteor.loginWithSteam((data,err)=>{
                         if (err)
                          console.log(err);
                         else
                          {
                               var idSteam = String(Meteor.user().profile.id); // ID de Steam
                               Meteor.call('update',String(id_current),String(idSteam)); // Agrega el ID de steam al documento del usuario loggeado.
                               Meteor.call('remove',String(idSteam)); // Elimina el usuario creado por la API de steam por defecto.

                               console.log(id_current); // Imprime ID del usuario
                               console.log(idSteam); // Imprime ID del usuario
                          }

                       });

                }}>Saldo</Button>

                <Button
                  bsStyle="success"
                  className="pull-center"
                  onClick={(event) => {

                              id_current=Meteor.userId();
                             Meteor.loginWithSteam((data,err)=>{
                               if (err)
                                console.log(err);
                               else
                                {
                                     var idSteam = String(Meteor.user().profile.id); // ID de Steam
                                     Meteor.call('update',String(id_current),String(idSteam)); // Agrega el ID de steam al documento del usuario loggeado.
                                     Meteor.call('remove',String(idSteam)); // Elimina el usuario creado por la API de steam por defecto.

                                     console.log(id_current); // Imprime ID del usuario
                                     console.log(idSteam); // Imprime ID del usuario
                                }

                             });

                      }}>Enviar Dinero</Button>

                      <Button
                        bsStyle="success"
                        className="pull-center"
                        onClick={(event) => {

                                    id_current=Meteor.userId();
                                   Meteor.loginWithSteam((data,err)=>{
                                     if (err)
                                      console.log(err);
                                     else
                                      {
                                           var idSteam = String(Meteor.user().profile.id); // ID de Steam
                                           Meteor.call('update',String(id_current),String(idSteam)); // Agrega el ID de steam al documento del usuario loggeado.
                                           Meteor.call('remove',String(idSteam)); // Elimina el usuario creado por la API de steam por defecto.

                                           console.log(id_current); // Imprime ID del usuario
                                           console.log(idSteam); // Imprime ID del usuario
                                      }

                                   });

                            }}>Cambiar Divisa</Button>


  </Jumbotron>


);

export default Index;
