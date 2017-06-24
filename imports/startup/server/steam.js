Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'steam' },
    {
      $set: {
        loginStyle: 'popup',
        timeout: 10000000
      }
    }
  );
});
