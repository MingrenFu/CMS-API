const app = {

  apiUrl: 'https://sheetdb.io/api/v1/of2sifladfz6m',

  planetTemplate: '',

  initialize: async () => {
    // load template first before getting data
    app.planetTemplate = await app.loadTemplate();
    app.getTheData();
  },

  getTheData: function () {
    fetch(app.apiUrl)
    .then(response => response.json())
    .then (response => {
      console.log(response);
      response.forEach(item => {
        // render the template with data from SheetDB
        const renderedResponse = Mustache.render(app.planetTemplate, item);
        // add elements to the web page
        $('.container').append(renderedResponse);
      })
    });
  },

  loadTemplate: () =>
  fetch('planet.mustache')
  .then(response => response.text())
  .then(template => template)
};
