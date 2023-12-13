/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let selectedDays = 0;
let totalCost = 0;

const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");


const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");

const clearButton =  document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function handleDayClick(dayButton) {
    if (dayButton.classList.contains("clicked")){
        dayButton.classList.remove("clicked");
        selectedDays = selectedDays - 1;
    }
    else {
        dayButton.classList.add("clicked");
        selectedDays = selectedDays + 1;
    }
    updateTotalCost()   
}


mondayButton.addEventListener('click', function() {
    handleDayClick(this);
});
tuesdayButton.addEventListener('click', function() {
    handleDayClick(this);
});
wednesdayButton.addEventListener('click', function() {
    handleDayClick(this);
});
thursdayButton.addEventListener('click', function() {
    handleDayClick(this);
});
fridayButton.addEventListener('click', function() {
    handleDayClick(this);
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset_all(){
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");

    
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");

    dailyRate= 35;  
    selectedDays = 0;  
    totalCost= 0;

    updateTotalCost();

 }

 clearButton.addEventListener('click', function() {
    reset_all();
    });





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener('click', function() {
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    dailyRate= 20;
    updateTotalCost()
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', function() {
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    dailyRate= 35;
    updateTotalCost()
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateTotalCost() {
    totalCost = dailyRate * selectedDays;
    calculatedCost.innerText = totalCost;
  }


