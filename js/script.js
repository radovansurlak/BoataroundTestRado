var app = new Vue({
  el: '#app',
  data: {
    venueTypes: ['bar','café','restaurant'],
    categories: ['name','category','address','distance'],
    pubs: []
  },
  methods: {
    changeCategory: function(chosenCategory) {
      switch(chosenCategory) {
        case 'bar':
          app._data.pubs = []
          getData('4bf58dd8d48988d116941735')
          break;
        case 'café':
          app._data.pubs = []
          getData('4bf58dd8d48988d16d941735')
          break;
        case 'restaurant':
          app._data.pubs = []
          getData('4d4b7105d754a06374d81259')
          break;
      }
    }
  }
});


function getData(category = '4d4b7105d754a06376d81259') {
  fetch(`https://api.foursquare.com/v2/venues/search?&categoryId=${category}&radius=3000&client_id=2TC0GHMY3FTKAY5Y3WSXWTYUT3EY0CL11DOTPSD5BELKYDVU&client_secret=ISIT3PFVCZORCQA0J3YGFOJOQ1C3GUZPUDFUKL3LKGRR4O5N&v=20170117&ll=56.108199809,10.162181854`)
  .then(function(response) {
    response.json().then(function(data){
      function compare(a,b) {
        if (a.location.distance < b.location.distance)
          return -1;
        if (a.location.distance > b.location.distance)
          return 1;
        return 0;
      }
      var venues = data.response.venues.sort(compare);
      venues.map((venue) => {
        if (venue.location.address === undefined){
          venue.location.address = venue.location.formattedAddress[0]
        }
        app._data.pubs.push({
          name: venue.name,
          category: venue.categories[0].shortName,
          address: venue.location.address,
          distance: venue.location.distance.toString() + 'm',
        });
      });

    });
  }).catch(function(err) {
  	console.log('Error:' + err);
  });
}

getData();
