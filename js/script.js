var app = new Vue({
  el: '#app',
  data: {
    categories: ['name','category','address','distance'],
    pubs: []
  }
});

fetch('https://api.foursquare.com/v2/venues/search?&categoryId=4d4b7105d754a06376d81259&radius=3000&client_id=2TC0GHMY3FTKAY5Y3WSXWTYUT3EY0CL11DOTPSD5BELKYDVU&client_secret=ISIT3PFVCZORCQA0J3YGFOJOQ1C3GUZPUDFUKL3LKGRR4O5N&v=20170117&ll=56.108199809,10.162181854')
.then(function(response) {
  response.json().then(function(data){
    data.response.venues.map((venue) => {
      if (venue.location.address === undefined){
        venue.location.address = venue.location.formattedAddress[0]
      }
      app._data.pubs.push({
        name: venue.name,
        category: venue.categories[0].shortName,
        address: venue.location.address,
        distance: venue.location.distance,
      });
      console.log(app._data.pubs);
    });

  });
}).catch(function(err) {
	console.log('Error:' + err);
});

// address: venue.location.address,
