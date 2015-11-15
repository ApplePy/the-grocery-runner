// counter starts at 0
var color = "red";
Session.set("valid", false);
Session.set("activateWarningText", false);

Meteor.subscribe("grocerylist");

Template.body.helpers({

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

        'submit #addNewList': function(event)
        {
            event.preventDefault();

            if (Session.get("valid") == false) {
                //event.preventDefault();
                Session.set("activateWarningText",true);
            }
            else {
                // Close the window if input is correct
                $('#modal1').closeModal();

                // David, implement your submissions here

            }

            console.log(event);

            return 0;

        },

        "click #addButtonBottomRight" : function()
        {
            $('#modal1').openModal();
            return 0;
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

Template.HomeScreen.helpers(
    {
        DisplayList: function ()
        {
            return GroceryList.find({}, {sort: {listName: 1}});
        }
    }
);
