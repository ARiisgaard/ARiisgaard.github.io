var storyPromts = ["First", "second", "third"]

// fetch('prompts.txt')
//   .then(response => response.text())
//   .then(data => {
//   	// Do something with your data
//   	console.log(data);
//   });

  fetch('prompts.txt')
   .then( response => response.text() )
   .then( data => storyPromts =data.split("\n") )

function getNumber() {
    var randomnumber = Math.floor(Math.random() * storyPromts.length); // Generates random number
    var randomPromt = storyPromts[randomnumber]
    storyPromts.splice(randomnumber, 1) //Prevent the user from getting the same prompt
    $('#myNumber').html(randomPromt); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}
