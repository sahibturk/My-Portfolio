// Function to download the resume when the 'Download Resume' button is clicked

// hameburger

const hamburger = document.querySelector('.fa-bars');

const cross = document.querySelector('.fa-xmark');

const mobieMenu = document.querySelector('.mobile-menu');



hamburger.addEventListener('click', () => {
    mobieMenu.style.display = 'block';
    hamburger.style.display = 'none';
    cross.style.display = 'block';

});

cross.addEventListener('click', () => {
    mobieMenu.style.display = 'none';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
})


document.getElementById('download-resume').addEventListener('click', function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'path/to/your/resume.pdf'; // Replace with the actual path to your resume
    link.download = 'Your_Resume.pdf'; // Specify the default download file name
    link.click();
  });
  
  // Function to open the project on GitHub when the 'View on GitHub' button is clicked
  const projectButtons = document.querySelectorAll('.project button');
  projectButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const githubUrl = button.getAttribute('data-github'); // Expecting a data-github attribute on buttons
      if (githubUrl) {
        window.open(githubUrl, '_blank'); // Open the GitHub project in a new tab
      }
    });
  });
  
  // Scroll to sections smoothly when clicking on navigation links
  document.querySelectorAll('header ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Scroll with a slight offset to account for the header
          behavior: 'smooth'
        });
      }
    });
  });
  