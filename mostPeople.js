const getCountriesWithAmountOfPeople = personData => {
    let countries = {};
    personData.forEach(({ region }) => {
      if (region in countries) {
        countries[region]++;
      } else {
        countries[region] = 1;
      }
    });
  
    countries = Object.entries(countries);
    countries = countries.map(country => ({
      country: country[0],
      inhabitants: country[1],
    }));
  
    countries.sort((country1, country2) =>
      sort_helper(country1.inhabitants < country2.inhabitants)
    );
    return countries;
  };
  
  const generateCountryAndInhabitantsHTML = ({ country, inhabitants }) => {
    const li = document.createElement("li");
    li.innerHTML = `${country} - ${inhabitants}`;
    return li;
  };
  
  const displayCountriesSortedByPeople = () =>
    getCountriesWithAmountOfPeople(randomPersonData)
      .map(generateCountryAndInhabitantsHTML)
      .forEach(addToResultList);
  
  document
    .querySelector(".mostPeople")
    .addEventListener("click", displayCountriesSortedByPeople);
  