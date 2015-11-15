// counter starts at 0
var color = "red";

Template.body.helpers({
    DisplayList: function ()
    {
        return GroceryList.find({});
    }
});

Template.main.helpers(
    {
        counter: function ()
        {
            return Session.get('counter');
        },

        color: function ()
        {
            return color;
        }
    }
);

Template.main.events(
    {

    }
);

Template.mainHead.helpers(
    {
        color: function ()
        {
            return color;
        }
    }
);

Template.mainHead.events(
    {
        'click #searchBarClose': function ()
        {
            var frm = document.getElementById("searchForm");
            frm.reset();  // Reset
            return false;
        }
    }
);

Template.mainListCards.events(
    {

    }
);

Template.mainListCards.helpers(
    {
        color: function ()
        {
            return color;
        },

        listTitle: function ()
        {
            return this.title;
        },

        listInfo: function ()
        {
            return this.info;
        }
    }
);
