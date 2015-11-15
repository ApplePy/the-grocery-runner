
Template.shopViewCollection.helpers(
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

Template.shoppaymentBar.helpers({
    color : function()
    {
        return color;
    }
});

Template.shopViewHeader.helpers({
    color : function()
    {
        return color;
    }
});


