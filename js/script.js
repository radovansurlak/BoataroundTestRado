var app = new Vue({
  el: '#app',
  data: {
    pubs: [
      {
        name: 'testname',
        category: 'testcat',
        address: 'testadd',
        distance: 'testdist'
      },
      {
        name: 'testname2',
        category: 'testcat2',
        address: 'testadd2',
        distance: 'testdist2'
      },
      {
        name: 'testname2',
        category: 'testcat2',
        address: 'testadd2',
        distance: 'testdist2'
      }

    ]
  }
});

fetch('https://api.foursquare.com/v2/venues/search?&categoryId=4d4b7105d754a06376d81259&radius=300&client_id=2TC0GHMY3FTKAY5Y3WSXWTYUT3EY0CL11DOTPSD5BELKYDVU&client_secret=ISIT3PFVCZORCQA0J3YGFOJOQ1C3GUZPUDFUKL3LKGRR4O5N&v=20170117&ll=48.168088,17.138037')
.then(function(response) {
  response.json().then(function(data){
    data.response.venues.map((venue) => {
      console.log(venue.name)
    });

  });
}).catch(function(err) {
	console.log('Error:' + err);
});
