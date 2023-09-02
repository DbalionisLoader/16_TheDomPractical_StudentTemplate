console.log("connected");
//List all radios
const animalRadios = document.querySelectorAll('.animalRadio[type="radio"]');
//Select only checked radio
let selectedAnimal = document.querySelector('.animalRadio:checked');
//Add images variable
const animalImages = document.querySelectorAll('.imageFilter');

//Select search input - ignore the name
const searchButton = document.getElementById("search");
console.log(searchButton);

//Form element to help with reseting form after refresh
const form = document.getElementById('filters');




filterAnimals = (e) => {
    
   
    //Create a event object to allow us to use the .target function to fetch the value
    console.log(e.target.value);
    animalImages.forEach(imageItem =>{
        if (e.target.value === "all" || e.target.value === imageItem.getAttribute("animal")){
            imageItem.classList.remove('hidden');
        }
         else {
            imageItem.classList.add('hidden');
        } 
    })
  
    updateSummary(searchButton.value,e.target.value);
}

updateSummary = (searchvalue,radioValue) => {

    const searchTitle = searchvalue ? 
	`Showing animals that match the filter "${radioValue}" and the search "${searchvalue}".` : 
	`Showing animals that match the filter "${radioValue}".`

	document.getElementById('summary').innerHTML = searchTitle
}

searchAnimal = (e) => {
    
    e.preventDefault();

    console.log(selectedAnimal.value);
    console.log(searchButton.value);
    
    updateSummary(searchButton.value,selectedAnimal.value);

    animalImages.forEach(imageItem =>{
      const altText = imageItem.getAttribute('alt');

        //Add a ? all or animals with text
        if ( selectedAnimal.value === "all" && altText.toLowerCase().includes(e.target.value.toLowerCase())) {
            imageItem.classList.remove('hidden');
        } else if (selectedAnimal.value === imageItem.getAttribute("animal") && altText.toLowerCase().includes(e.target.value.toLowerCase()))
        {
            imageItem.classList.remove('hidden');
        }
        else {
            imageItem.classList.add('hidden');
        } 
    })

}


// if animal radio button is checked and has matching attribute, only apply search animal to the animal with the mathcing attribute
// if 




animalRadios.forEach(radioItem => {
    radioItem.addEventListener('change', filterAnimals);
});

searchButton.addEventListener('keyup', searchAnimal);



//Reset form on page refresh
window.addEventListener('load', function() {
    const form = document.getElementById('filters');
    form.reset(); // Reset the form elements to their default values
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
  });