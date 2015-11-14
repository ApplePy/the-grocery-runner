// counter starts at 0
Session.setDefault('counter', 0);
var color = "red";

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

Template.mainHead.helpers(
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
        'click button': function ()
        {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    }
);