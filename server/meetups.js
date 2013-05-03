Meteor.startup(function() {
  /* Make sure we have a geo-spatial index on the meetups */
  Meetups._ensureIndex({'loc': '2d' })
});

