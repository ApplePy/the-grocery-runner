GroceryList = new Mongo.Collection("grocerylist");

var ItemDesignation = {
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