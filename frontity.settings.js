const settings = {
  "name": "scholarship4eth",
  "state": {
    "frontity": {
      "url": "https://scholars4dev.com",
      "title": "Scholarships for Developing Countries",
      "description": "Scholarships for students from developing countries and international students to study abroad."

    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            ["Asia", "/category/target-group/asians-scholarships/"],
            ["Europe", "/category/country/europe-scholarships/"],
            ["Canada", "/category/country/canada-scholarships/"],
            ["USA", "/category/country/usa-scholarships/"],
            ["UK", "/category/country/uk-scholarships/"],
            ["Australia", "/category/country/australia-scholarships/"],
            ["Netherlands", "/category/country/netherlands-scholarships/"],
            ["Germany", "/category/country/germany-scholarships/"],
            ["List", "/category/scholarships-list"],
            ["Masters", "/category/level-of-study/masters-scholarships/"],
            ["African Scholarships", "/category/target-group/africans-scholarships/"],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://scholars4dev.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
