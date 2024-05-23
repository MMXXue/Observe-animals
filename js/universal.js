// Use if, else if methods to get the URL of the current webpage, then judge the type 
// of the current webpage according to the URL, and finally execute the corresponding JS code.
if (window.location.href.indexOf('feedback.html') > -1) {
  // This part belongs to the pop-up function of feedback.html.
  // When the submit button is clicked, a prompt box will pop up on the page
  // Get the form element with the ID 'form_id' and store it in a constant variable named form
  const form = document.getElementById('form_id');
  // Add an event listener to the form for the 'submit' event
  form.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Display an alert message with the text 'Thanks for your support!'
    alert('Thanks for your support!');
  });
} 
else if (window.location.href.indexOf('fish.html') > -1 || 
  window.location.href.indexOf('cougar.html') > -1 || 
  window.location.href.indexOf('snow_leopard.html') > -1 || 
  window.location.href.indexOf('elephant.html') > -1 || 
  window.location.href.indexOf('fox.html') > -1 || 
  window.location.href.indexOf('littlepanda.html') > -1 || 
  window.location.href.indexOf('alcedo.html') > -1 || 
  window.location.href.indexOf('bear.html') > -1) {
  // Load Facebook SDK for JavaScript
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
else if (window.location.href.indexOf('urban_animals.html') > -1) {
  // This part belongs to the button monitor function of urban_animal.html
  // Once the button is clicked, get the corresponding href. Jump to this page at the same time.
  // Get all elements with the class 'btn' and store them in a constant variable named buttons
  const buttons = document.querySelectorAll('.btn');
  // Loop through each button element in the buttons collection
  buttons.forEach(button => {
    // Add an event listener for the 'click' event to each button
    button.addEventListener('click', () => {
      // Get the value of the 'data-href' attribute of the button
      const href = button.getAttribute('data-href');
      // Set the window location to the value of the 'data-href' attribute, redirecting the user to that URL
      window.location.href = href;
    });
  });
}
else if (window.location.href.indexOf('animal.html') > -1) {
  // This part belongs to the carousel function of animal.html.
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  // Add click event to all dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      setActiveSlide();
    });
  });

  // Set the status of the currently displayed slideshow and dots
  function setActiveSlide() {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Set the current slideshow to the displayed state
    slides[currentSlide].classList.add('active');

    // Set all dots to unselected
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    // Set the current small dot to the selected state
    dots[currentSlide].classList.add('active');
  }

  // Play slideshow automatically
  function autoPlay() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    setActiveSlide();
  }

  setInterval(autoPlay, 5000); // Automatically play the next slide every 5 seconds
} 
else if (window.location.href.indexOf('assignment.html') > -1) {
  // This part belongs to the carousel function of assignment.html.
  function readMode() {
    var stylesheet = document.getElementById("readmode");
    if (stylesheet.getAttribute("href") == "./css/universal.css") {
      // Toggle css files.
      stylesheet.setAttribute("href", "./css/night.css");
    } else {
      // Toggle css files.
      stylesheet.setAttribute("href", "./css/universal.css");
    }
  }
}

// Scope to other pages (except assignment.html) that use the transition button.
// Because their directory addresses are different, they need to be written separately.
function readMode() {
  var stylesheet = document.getElementById("readmode");
  if (stylesheet.getAttribute("href") == "../css/universal.css") {
      // Toggle css files.
    stylesheet.setAttribute("href", "../css/night.css");
  } else {
      // Toggle css files.
    stylesheet.setAttribute("href", "../css/universal.css");
  }
}