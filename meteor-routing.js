if (Meteor.isClient) {
  //client code here
}

Router.configure({
    layoutTemplate: 'main'
});

// static home page root
Router.route('/', function () {
  this.render('home');
});

// static home page
Router.route('/home', function () {
  this.render('home');
});

// static foo page
Router.route('/foo', function(){
  this.render('foo');
});

// server side route - useful for implementing RESTful endpoints
Router.route('/bar', function () {
  var req = this.request;
  var res = this.response;
  res.end('{"bar": "response from the server"}');
  this.render('bar');
}, {where: 'server'});

// server side route with url params
// given a url like "/baz/hello/qux/world"
Router.route('/baz/:param1/qux/:param2', function () {
  var baz = this.params.param1; // "hello"
  var qux = this.params.param2; // "world"
  this.render('baz', {
    data: {
      baz: baz,
      qux: qux
    }
  });
}, {
  name: 'baz'
});

// server side route with url param, query param, hash param
// given the url: "/corge/foo?q=bar#somehash"
Router.route('/corge/:foo', function () {
  var foo = this.params.foo; // "foo"
  var query = this.params.query.q; // "bar"
  var hash = this.params.hash; // "somehash"
  this.render('corge', {
    data: {
      foo: foo,
      query: query,
      hash: hash
    }
  });
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
