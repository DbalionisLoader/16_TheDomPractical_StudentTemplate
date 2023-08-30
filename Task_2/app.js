console.log("connected");
//All radio button variable
const animalRadios = document.querySelectorAll('.animalRadio[type="radio"]');
console.log(animalRadios);
//Add images variable
const animalImages = document.querySelectorAll('.imageFilter');
console.log(animalImages);

const searchButton = document.getElementById("search");
console.log(searchButton);

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

}

searchAnimal = (e) => {

    //Check for radio button
    let selectedAnimal = document.querySelector('.animalRadio:checked');
    console.log(selectedAnimal.value);
    
   // const radioChecker = selectedAnimal.value === "all" ? true : false;
/*     if ( selectedAnimal.value === imageItem.getAttribute("animal")) {
        console.log(`The current radio value is: ${selectedAnimal.value}`);
        } else { */
    //Create a event object to allow us to use the .target function to fetch the value
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

updateSummary = () => {
    document.getElementById('summary').innerHTML = searchSummary;
}

animalRadios.forEach(radioItem => {
    radioItem.addEventListener('change', filterAnimals);
});

searchButton.addEventListener('keyup', searchAnimal);

form.addEventListener('submit', function(event) {
    event.preventDefault();
})


//Reset form on page refresh
window.addEventListener('load', function() {
    const form = document.getElementById('filters');
    form.reset(); // Reset the form elements to their default values
});