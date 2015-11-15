Router.configure({
    layoutTemplate: 'layout'
});

Router.map(
    function()
    {
        this.route('HomeScreen', {path: '/'});
        this.route('ListView', {path: '/ListView'});
    }
);