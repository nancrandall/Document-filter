export default function filterMenu() { // set your custom pattern init function name

  var filters = {
    rating: 4,
    mealType: ""
  };
  
  rating.value = filters.rating;
  mealtype.value = filters.mealType;
  
  rating.addEventListener("input", function() {
    filters.rating = rating.value;
    update();
  });
  mealtype.addEventListener("input", function() {
    filters.mealType = mealtype.value;
    update();
  });
  
  function filterRating(hotel) {
    return hotel.rating >= filters.rating;
  }
  
  function filterMeal(hotel) {
    return !filters.mealType.length || hotel.mealType == filters.mealType;
  }
  
  function update() {
    let filteredCards = getHotels().filter(filterRating).filter(filterMeal);
    console.log(filters);
    output.innerHTML = filteredCards.map(hotel => `<span>${hotel.name}</span>`).join("");
  };
  update();
  
  function getHotels() {
    return [{
        name: "A",
        rating: 5,
        mealType: "full"
      },
      {
        name: "B",
        rating: 4,
        mealType: "full"
      },
      {
        name: "C",
        rating: 4,
        mealType: "breakfast"
      },
      {
        name: "D",
        rating: 5,
        mealType: "breakfast"
      }
    ];
  }
  
};