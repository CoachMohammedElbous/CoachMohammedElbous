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