Template.listViewCollection.helpers(
    {
        displayListItems: function ()
        {
            return listViewTest.find({});
        },

        itemName: function ()
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

Template.paymentBar.helpers(
    {
        color: function ()
        {
            return color;
        }
    }
);

Template.listViewHeader.helpers(
    {
        color: function ()
        {
            return color;
        }
    }
);

Template.listViewCollection.events(
    {
        "submit #addGItem": function (event)
        {
            event.preventDefault();
            console.log(event);
            console.log(event.target.value);


            listViewTest.insert(
                {
                    itemName: event.target[0].value,
                    itemQuantity: event.target[1].value,
                    itemOwner: event.target[2].value
                }
            );
            console.log(event);
            return 0;
        }
    }
);
