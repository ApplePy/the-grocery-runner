
Template.listViewCollection.helpers(
    {
        displayListItems : function()
        {
            return listViewTest.find({});
        },

        itemName : function ()
        {
            return this.itemName;
        },
        itemQuantity: function ()
        {
            return this.itemQuantity;
        },
        itemOwner: function ()
        {
            return this.itemOwner;
        }
    }
);

Template.paymentBar.helpers({
    color : function()
    {
        return color;
    }
});
