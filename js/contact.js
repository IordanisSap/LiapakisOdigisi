const scriptURL = 'https://script.google.com/macros/s/AKfycbyxsPFOYgu89IGDc8FGoIw3ylomhON4aCcwAzeIQ9vUdB4OFHy-DeIMJ8DPt7iCIuF5oQ/exec';
const form = document.forms['contact-form']; // Matches the ID of your form
const statusText = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevents the default page refresh
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerText = "Αποστολή...";
  
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form) 
  })
  .then(response => {
    // Show success message
    statusText.innerText = "Ευχαριστόυμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα.";
    statusText.style.display = "block";
    statusText.style.color = "green";
    
    // Reset form and button
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerText = "Αποστολή Μηνύματος";
  })
  .catch(error => {
    // Show error message
    statusText.innerText = "Σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ προσπαθήστε ξανά.";
    statusText.style.display = "block";
    statusText.style.color = "red";
    console.error('Error!', error.message);
    
    submitBtn.disabled = false;
    submitBtn.innerText = "Αποστολή Μηνύματος";
  });
});