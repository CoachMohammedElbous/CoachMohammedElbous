  //plans contents
  function showContent(id) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
    });
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
    setTimeout(() => {
        activeContent.style.opacity = '1';
    }, 10);
}


//Alternatives Calculator contents 
// وظيفة لعرض المحتوى بناءً على التاب المحدد
function showContent(contentId) {

  const allContents = document.querySelectorAll('.food_content');
  allContents.forEach(content => content.classList.remove('active'));

  const selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');

  fillAlternativeFoodDropdown(contentId);
}

function fillAlternativeFoodDropdown(tabId) {
  const dropdown = document.getElementById('select-alternative-food');
  dropdown.innerHTML = '';

  const selectedTabContent = document.getElementById(tabId);
  const selectElement = selectedTabContent.querySelector('select');
  
  const options = selectElement.querySelectorAll('option');
  

  options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.textContent;
      dropdown.appendChild(optionElement);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  showContent('content1'); 
});

  const foodToCalories = {
      "whole-milk": 200,
      "skim-milk": 250,
      "almond-milk": 500,
      "soy-milk": 333,
      "oat-milk": 250,
      "rice-milk": 200,
      "coconut-milk": 333,
      "goat-milk": 167,
      "buffalo-milk": 143,
      "lactose-free-milk": 200,
      "greek-yoghurt": 125,
      "roumi-cheese": 33,
      "cottage-cheese": 143,
      "cheddar-light": 50,
      "oats": 26,
      "white-rice": 77,
      "pasta": 63,
      "quinoa": 83,
      "sweet-potatoes-cocked": 116,
      "potatoes-boiled": 130,
      "popcorn": 26,
      "corn-flakes": 28,
      "koshary": 61,
      "taro": 89,
      "grilled-corn": 104,
      "brown-toast": 38,
      "white-toast": 38,
      "tortilla-bread": 42,
      "baladi-bread": 36,
      "shami-bread": 36,
      "rice-cake": 26,
      "honey": 33,
      "lentils": 86,
      "chickpeas": 61,
      "kidney-beans": 79,
      "lima-beans": 81,
      "soybeans": 58,
      "peas": 119,
      "brown-beans": 91,
      "lupine-beans": 84,
      "apple": 192.31,
      "orange": 212.77,
      "banana": 112.36,
      "grapes": 144.93,
      "strawberries": 312.5,
      "blueberries": 175.44,
      "pineapple": 200,
      "mango": 166.67,
      "peach": 256.41,
      "pear": 175.44,
      "watermelon": 333.33,
      "kiwi": 163.93,
      "cherries": 200,
      "pomegranate": 120.48,
      "raspberry": 192.31,
      "blackberries": 232.56,
      "cantaloupe": 294.12,
      "fig": 135.14,
      "dates": 36.1,
      "carrot": 243.90,
      "broccoli": 294.12,
      "spinach": 434.78,
      "bell-peppers": 500,
      "tomatoes": 555.56,
      "cucumbers": 625,
      "green-beans": 322.58,
      "potatoes": 129.87,
      "sweet-potatoes": 116.28,
      "onions": 250,
      "mushrooms": 454.55,
      "eggplant": 400,
      "pumpkin": 384.62,
      "celery": 625,
      "chicken-breast": 61,
      "chicken-thigh": 48,
      "chicken-wing": 49,
      "chicken-liver": 58,
      "turkey-breast": 74,
      "whole-eggs": 1 ,
      "egg-whites": 6,
      "ground-beef": 40,
      "shrimp": 101,
      "salmon": 49,
      "tuna": 76,
      "mackerel": 33,
      "sardines": 48,
      "tilapia": 78,
      "crab": 103,
      "beef-liver": 52,
      "cottage-cheese-proteins": 102,
      "rabbit-meat": 58,
      "mullet-fish": 83,
      "olive-oil": 11,
      "avocado": 63,
      "almonds": 17,
      "hazelnuts": 16,
      "cashews": 18,
      "pistachios": 18,
      "peanuts": 18,
      "chia-seeds": 21,
      "peanut-butter": 17,
      "almond-butter": 16,
      "pecans": 14,
  };


  window.showContent = function(category) {

      const allContent = document.getElementsByClassName('food_content');
      for (let i = 0; i < allContent.length; i++) {
          allContent[i].classList.remove('active');
      }

      const targetContent = document.getElementById(category);
      targetContent.classList.add('active');

      const alternativeDropdown = document.getElementById('select-alternative-food');
      const currentItems = document.getElementById(category).getElementsByTagName('option');

      while (alternativeDropdown.firstChild)
          alternativeDropdown.firstChild.remove();

      for (let i = 0; i < currentItems.length; i++) {
          const newOption = document.createElement('option');
          newOption.value = currentItems[i].value;
          newOption.innerText = currentItems[i].innerText;
          alternativeDropdown.appendChild(newOption);
      }
  }






  
  const calculateButton = document.getElementById('calculate');

  calculateButton.addEventListener('click', function (event) {
      
      event.preventDefault();
  
      
      const amountInput = document.getElementById('amount');
      const selectedAmount = amountInput.value.trim();
  
      
      if (selectedAmount === "") {
          amountInput.setCustomValidity("Please enter the amount in grams.");
          amountInput.reportValidity(); 
          return; 
      } else {
          amountInput.setCustomValidity(""); 
      }
  
     
      const activeDivId = document.querySelector('.food_content.active').id;
      const selectedFoodElementId = document.querySelector(`#${activeDivId} select`).id;
  
      const selectedFood = document.getElementById(selectedFoodElementId).value;
      const alternativeFood = document.getElementById('select-alternative-food').value;
  
      
      const alternativeFoodSelect = document.getElementById('select-alternative-food');
      if (!alternativeFood) {
          alternativeFoodSelect.setCustomValidity("Please select an alternative food.");
          alternativeFoodSelect.reportValidity(); 
          return; 
      } else {
          alternativeFoodSelect.setCustomValidity(""); 
      }
  
      
      const selectedFoodCalories = (parseFloat(selectedAmount) / foodToCalories[selectedFood]) * 100;
      const alternativeFoodAmount = (selectedFoodCalories * foodToCalories[alternativeFood]) / 100;
  
      
      let resultElement = document.querySelector('#result');
      resultElement.textContent = `You should eat ${alternativeFoodAmount.toFixed(2)} g of ${alternativeFood} to get the same value of ${selectedFood}.`;
  });
  



  
  const calculateCaloriesButton = document.getElementById('calculate-calories');

calculateCaloriesButton.addEventListener("click", function (event) {
    
    event.preventDefault();

    
    const sex = document.getElementById("sex");
    const age = document.getElementById("Age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const activityLevel = document.getElementById("Activity");
    const dietTarget = document.getElementById("target");

    
    if (!sex.value) {
        sex.setCustomValidity("Please select your sex.");
        sex.reportValidity(); 
        return;
    }
    if (!age.value.trim()) {
        age.setCustomValidity("Please enter your age.");
        age.reportValidity();
        return;
    }
    if (!weight.value.trim()) {
        weight.setCustomValidity("Please enter your weight.");
        weight.reportValidity();
        return;
    }
    if (!height.value.trim()) {
        height.setCustomValidity("Please enter your height.");
        height.reportValidity();
        return;
    }
    if (!activityLevel.value) {
        activityLevel.setCustomValidity("Please select your activity level.");
        activityLevel.reportValidity();
        return;
    }
    if (!dietTarget.value) {
        dietTarget.setCustomValidity("Please select your diet target.");
        dietTarget.reportValidity();
        return;
    }

   
    sex.setCustomValidity("");
    age.setCustomValidity("");
    weight.setCustomValidity("");
    height.setCustomValidity("");
    activityLevel.setCustomValidity("");
    dietTarget.setCustomValidity("");

    
    let bmr = (10 * parseFloat(weight.value)) + (6.25 * parseFloat(height.value)) - (5 * parseFloat(age.value));
    bmr += (sex.value === "Female") ? -161 : 5;

    let factor;
    switch (activityLevel.value) {
        case "Sedentary (little or no exercise)":
            factor = 1.2;
            break;
        case "Lightly active (light exercise / sport 1-3 days a week)":
            factor = 1.375;
            break;
        case "Moderately active (moderate exercise / sport 3-5 days a week)":
            factor = 1.55;
            break;
        case "Very Active (hard exercise / sport 6-7 days a week)":
            factor = 1.725;
            break;
        case "extra active (very hard exercise / sports and physical job)":
            factor = 1.9;
            break;
    }

    let caloriesPerDay;
    switch (dietTarget.value) {
        case "Extreme Lose weight":
            caloriesPerDay = (bmr * factor) - 1000;
            break;
        case "Lose weight":
            caloriesPerDay = (bmr * factor) - 500;
            break;
        case "Maintain weight":
            caloriesPerDay = bmr * factor;
            break;
        case "Gain weight":
            caloriesPerDay = (bmr * factor) + 500;
            break;
        case "Extreme Gain weight":
            caloriesPerDay = (bmr * factor) + 1000;
            break;
    }

    
    const resultElement = document.getElementById('calories-result');
    resultElement.textContent = `You should intake ${caloriesPerDay.toFixed(2)} Kcal per day.`;
});




  
  
