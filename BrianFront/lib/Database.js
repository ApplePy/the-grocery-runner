GroceryList = new Mongo.Collection("grocerylist");

ItemDesignation = {
    OWNER : 1,
    HOUSEHOLD : 2
}

// Note, this defaults to owner if invalid
function ListItems (name, quantity, owner, designation) {
    this.name = name;
    this.quantity = quantity;
    this.owner = owner;

    if (designation === ItemDesignation.OWNER || designation === ItemDesignation.HOUSEHOLD) {
        this.designation = designation;
    }
    else {
        this.designation = ItemDesignation.OWNER;
    }

    this.price = 0;
}

Meteor.methods({
    nList: function(input) {
        var pin = Math.floor(Math.random() * 100000 + 1);

        // Ensure no duplicates
        while (GroceryList.find({pin: pin}).count() > 0) {
            pin = Math.floor(Math.random() * 100000 + 1);
        }

        GroceryList.insert({name: input, pin: pin});
        console.log(input);
        console.log(pin);
        console.log(GroceryList.find({}).count());
    }
});