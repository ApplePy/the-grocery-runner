Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.publish("grocerylist", function() {
    return GroceryList.find({user: this.userId});
});