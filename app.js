function incrementValue(id, endValue, duration) {
    let startValue = 0;
    let increment = endValue / (duration / 50); // Adjust increment based on duration

    let interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(interval);
        document.getElementById(id).textContent = endValue; // Set to endValue to avoid decimals
      } else {
        document.getElementById(id).textContent = Math.floor(startValue);
      }
    }, 50); // Interval duration
  }

  // Increment values for each section
  incrementValue('projects-completed', 10, 5000); // Projects Completed up to 10 in 2 seconds
  incrementValue('happy-clients', 15, 5000); // Happy Clients up to 15 in 2 seconds
  incrementValue('trusted', 100, 5000); // Trusted up to 100% in 2 seconds

//   contact form
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
          result.innerHTML = "Form submitted successfully";
      } else {
          console.log(response);
          result.innerHTML = json.message;
      }
  })
  .catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
  })
  .then(function() {
      form.reset();
      setTimeout(() => {
          result.style.display = "none";
      }, 3000);
  });
});



var navlink=document.querySelectorAll(".nav-link")
var nav=document.getElementById("nav")
var contnav=document.getElementById("contnav")
document.addEventListener("scroll",(e)=>{
    

    
    
    if(window.scrollY > 300){

       nav.classList.add("navScroll")
      contnav.classList.add("navCont")

    }
    
 
    else{
        nav.classList.remove("navScroll")
       contnav.classList.remove("navCont")
       navlink[1].classList.remove("unde");
       navlink[2].classList.remove("unde");

    
    }
})





