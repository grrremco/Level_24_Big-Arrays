const sort_helper = result => {
    if (result) {
      return 1;
    } else {
      return -1;
    }
  };
  
  const getStarSign = (month, day) => {
    if (month === 1 && day <= 20) return CAPRICORN;
    if (month === 1 && day >= 21) return AQUARIUS;
    if (month === 2 && day <= 19) return AQUARIUS;
    if (month === 2 && day >= 20) return PISCES;
    if (month === 3 && day <= 20) return PISCES;
    if (month === 3 && day >= 21) return ARIES;
    if (month === 4 && day <= 20) return ARIES;
    if (month === 4 && day >= 21) return TAURUS;
    if (month === 5 && day <= 20) return TAURUS;
    if (month === 5 && day >= 21) return GEMINI;
    if (month === 6 && day <= 21) return GEMINI;
    if (month === 6 && day >= 22) return CANCER;
    if (month === 7 && day <= 22) return CANCER;
    if (month === 7 && day >= 23) return LEO;
    if (month === 8 && day <= 23) return LEO;
    if (month === 8 && day >= 24) return VIRGO;
    if (month === 9 && day <= 21) return VIRGO;
    if (month === 9 && day >= 22) return LIBRA;
    if (month === 10 && day <= 22) return LIBRA;
    if (month === 10 && day >= 23) return SCORPIO;
    if (month === 11 && day <= 21) return SCORPIO;
    if (month === 11 && day >= 22) return SAGGITARIUS;
    if (month === 12 && day <= 21) return SAGGITARIUS;
    if (month === 12 && day >= 22) return CAPRICORN;
  };
  
  const addStarSign = person => {
    const month = parseInt(person.birthday.dmy.split("/")[1]); 
    const day = parseInt(person.birthday.dmy.split("/")[0]); 
    person.sign = getStarSign(month, day);
    return person;
  };
  
  
  const keepUnique = (items, item) => {
    if (!Array.isArray(items)) items = [];
    if (!items.includes(item)) items.push(item);
    return items;
  };
  
  const getCountries = personData =>
    personData
      .map(person => person.region)
      .reduce(keepUnique)
      .sort();
  
  const emptyResultList = () =>
    (document.querySelector(".results").innerHTML = "");
  
  const addToResultList = li =>
    document.querySelector(".results").appendChild(li);
  
  const emptyButtonList = () =>
    (document.querySelector(".sub_buttons").innerHTML = "");
  
  const addToButtonList = button =>
    document.querySelector(".sub_buttons").appendChild(button);
  
  document.querySelectorAll("nav input").forEach(input =>
    input.addEventListener("click", () => {
      emptyResultList();
      emptyButtonList();
    })
  );