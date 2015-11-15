Tasks = new Mongo.Collection("tasks");

//This uses iron router to setup the layout template, refers to template: main
Router.configure({layoutTemplate: 'main'});

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
        // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
      "submit.new-task": function (event){
          // Prevent default browser form submit
          event.preventDefault();

          // Get value from form element
          var text = event.target.text.value;

          // Insert a task into the collection
          Tasks.insert({
              text: text,
              createdAt: new Date() // current time
          });

          //Clear form
          event.target.text.value = "";
      }
  });

    Template.task.events({
        "click .toggle-checked": function () {
            //Set the checked property to the opposite of its current value
            Tasks.update(this._id, {
                $set: {checked: ! this.checked}
            });
        },
        "click .delete": function () {
            Tasks.remove(this._id);
        }
    });
}

//Using iron router to setup the hompage
//not that '/' refers to main root page @ localhost:3000
Router.route('/', {template:'home'});

//Using iron router to setup routes for other webpages
Router.route('/register');
Router.route('/list');