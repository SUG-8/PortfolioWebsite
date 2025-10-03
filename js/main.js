// Wait until the whole HTML document is fully loaded before running this script
document.addEventListener('DOMContentLoaded', () => {
  
  // Get all <a> links inside the element with class "experienceLinks"
  const links = document.querySelectorAll('.experienceLinks a');
  
  // Get all elements with the class "exp-block" (hidden content sections)
  const expBlocks = document.querySelectorAll('.exp-block');
  
  // Get the container where selected work details will be displayed
  const workDetails = document.getElementById('work-details');

  // Function to hide all experience blocks (adds the "hidden" class)
  function hideAllBlocks() {
    expBlocks.forEach(block => block.classList.add('hidden'));
  }

  // Function to show a specific block by ID and copy its content into #work-details
  function showBlock(id) {
    const block = document.getElementById(id);
    if (block) {
        workDetails.innerHTML = "";        // clear old content
        block.classList.remove('hidden');
    }
  }

  // Add click event listeners to each experience link
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // stop the link from jumping/refreshing the page
      
      // Get the "href" value from the link (e.g., "#exp-it")
      const href = link.getAttribute('href');
      
      // If the href exists and starts with "#", extract the ID part (e.g., "exp-it")
      if (href && href.startsWith('#')) {
        const id = href.substring(1); // remove the "#"
        
        hideAllBlocks(); // hide all blocks first
        showBlock(id);   // then show the selected one
      }
    });
  });
});
