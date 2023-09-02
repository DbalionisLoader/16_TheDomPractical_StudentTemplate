console.log("connected to task 3 js");

//List all radios
const animalRadios = document.querySelectorAll('.animalRadio[type="radio"]');

//User search input 
const searchInput = document.getElementById("search");
console.log(searchInput);

//Images container 
const imageContainer = document.getElementById('imageContainer');

//Div to display the applied filters
const appliedFilters = document.getElementById('filterSummary');

//Add a lister to each radio button to apply filters
animalRadios.forEach(radio => {
    radio.addEventListener('change', filterAnimals);
  });
  //Add a listener to the text search box
  searchInput.addEventListener('keyup', filterAnimals);

  function filterAnimals() {
    //Select the 
    let selectedAnimal = document.querySelector('.animalRadio:checked');
    console.log(selectedAnimal);
    //Retrieve text input valye and lowercase it for validation
    const searchInputText = searchInput.value.toLowerCase();
    console.log(searchInputText);
    //Select all images
    const animalImages = document.querySelectorAll('.imageFilter');

  
    animalImages.forEach(image => {
        //get single image
        const img = image.querySelector('img');
        //get the single images alt text
        const altText = image.getAttribute('alt').toLowerCase();
        //get the images animal attribute
        const animalType = image.getAttribute("animal")
        
        //if either all or selected animal type AND search text included in alt text display image (since empty input == altText.includes is always TRUE)
        //console.log(`alt text is ${altText.includes((""))}`);
        if((selectedAnimal.value === 'all' || animalType === selectedAnimal.value) && altText.includes((searchInputText)) ){    
            //console.log(`search input text is ${searchInputText}`);
            image.classList.remove('hidden');    
        } else {
            image.classList.add('hidden');
        }

    });
    //Update labels displaying selected filters
    updateFilterSummary(selectedAnimal.value, searchInput);
  }

//function to display selected filters - IF user text field has input show both select radio value and text label. ELSE only show selected radio button label
function updateFilterSummary(animalType,searchInput){
    const searchTitle = searchInput.value ? 
	`Showing animals that match the filter "${animalType}" and the search "${searchInput.value}".` : 
	`Showing animals that match the filter "${animalType}".`
    document.getElementById('filterSummary').innerHTML = searchTitle
}  

filterAnimals();