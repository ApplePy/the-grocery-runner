// counter starts at 0
var color = "red";
Session.set("valid", false);
Session.set("activateWarningText", false);

Meteor.subscribe("grocerylist");

Template.body.helpers({
    DisplayList: function ()
    {
        return GroceryList.find({}, {sort: {listName: 1}});
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
        },
        activateWarningTextFunc: function() {
            return Session.get("activateWarningText");
        },
        validFunc: function() {
            return Session.get("valid");
        }
    }
);

Template.main.events(
    {
        'keyup #emailInput': function(event) {
            var splitArray = $(event.target).val().split(',');
            for (var num in splitArray) {
                if (Meteor.myFunctions.validateEmail(splitArray[num]) === true) {
                    Session.set("valid",true);
                }
                else {
                    Session.set("valid",false);
                    break;
                }
            }
            console.log(Session.get("valid"));
        },
        'submit #emailInput': function(event) {
            event.preventDefault();
        },
        'submit #listName': function(event) {
            event.preventDefault();
        },
        'click #modalSubmit': function(event) {
            if (Session.get("valid") == false) {
                //event.preventDefault();
                Session.set("activateWarningText",true);
            }
            else {
                //Meteor.call("addToDatabase", whatever);
                //Meteor.call("sendInvitations", emailsarray);
                //Route to next page
            }
        }
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
        "click .card": function(event) {
            Session.set("ListID", this._id);
        }
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