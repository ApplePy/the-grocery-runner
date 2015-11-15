/**
 * Created by darryl on 2015-11-14.
 */
// counter starts at 0
//Session.setDefault('counter', 0);

Template.body.events({
    "click .list_object": function (event) {
        this.route("/list_items",function(){
            //put code in here to figure out what data to load
        });
    },
    "click .new_object": function (event) {
        this.route("/new_lists",function(){
            //put code in here to figure out what data to load
        });
    }
});

Meteor.subscribe("lists");

Template.body.helpers({
    "DisplayList": function () {
        return Lists.find({}, {sort: {listName: 1}}); //This data is filtered by publish
    }
});
