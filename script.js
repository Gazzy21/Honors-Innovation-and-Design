const galleryData = {
    tsa: [
      { img: "imgs/tsa1.png", title: "TSA Image 1", description: "House model" },
      { img: "imgs/tsa2.png", title: "TSA Image 2", description: "Drone design" },
      { img: "imgs/tsa3.png", title: "TSA Image 3", description: "Motorcycle + sidecar" },
      { img: "imgs/tsa4.png", title: "TSA Image 4", description: "Derby car" },
      { img: "imgs/tsa5.png", title: "TSA Image 5", description: "Group's cars" },
      { img: "imgs/tsa6.png", title: "TSA Image 6", description: "Race time!" }
    ],
    mustang: [
      { img: "imgs/mms1.png", title: "Morning Show 1", description: "The youtube channel" },
      { img: "imgs/mms2.png", title: "Morning Show 2", description: "1st ever episode" },
      { img: "imgs/mms3.png", title: "Morning Show 3", description: "1st episode of the new season!" },
    ]
  };
  
  function updateGallery(category) {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = ""; // Clear the gallery
  
    const categoryData = galleryData[category];
    const totalItems = 6; // We want 6 slots in total
    const numberOfItems = categoryData.length;
  
    // Calculate number of columns based on the number of items
    let columns = 3; // Default to 3 columns
    if (numberOfItems <= 2) {
      columns = 1; // 1 column for 1 or 2 items
    } else if (numberOfItems <= 4) {
      columns = 3; // 2 columns for 3 or 4 items
    }
  
    // Apply the layout dynamically
    galleryContainer.style.display = "grid";
    galleryContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Define grid columns
    galleryContainer.style.gridGap = "1rem"; // Add spacing between grid items
    galleryContainer.style.justifyItems = "center"; // Center items horizontally
  
    // Add gallery items to the container
    categoryData.forEach((item, index) => {
      const col = document.createElement("div");
      col.className = "gallery-item";
      col.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="img-fluid roundedborder">
        <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#modal${index}">
          View Details
        </button>
        <div class="modal fade" id="modal${index}" tabindex="-1" aria-labelledby="modalLabel${index}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalLabel${index}">${item.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${item.img}" class="img-fluid roundedborder">
                <hr>
                ${item.description}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
      galleryContainer.appendChild(col);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    updateGallery('mustang');
  });
  

  const words = [
    { text: "Woodworking", frequency: 50 },
    { text: "Graphics", frequency: 30 },
    { text: "Video Productions", frequency: 40 },
    { text: "Architecture", frequency: 20 },
    { text: "Digital Media", frequency: 25 },
    { text: "Video Game Design", frequency: 10 },
    { text: "Programming", frequency: 35 },
    { text: "Photography", frequency: 45 },
    { text: "Engineering", frequency: 15 },
    { text: "3D Printing", frequency: 5 },
];

// Randomize frequency between 20 and 40 for each word
words.forEach(word => {
    word.frequency = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
});

function createWordCloud() {
  const wordCloudContainer = document.getElementById('word-cloud');
  
  words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word.text;

      // Set font size based on the randomized frequency
      const fontSize = 10 + word.frequency; // Adjust scale here
      span.style.fontSize = `${fontSize}px`;

      // Randomly pick either a dark blue or an orange hue
      let hue;
      const colorType = Math.random();

      if (colorType < 0.5) {
          // Dark blue: 180° to 240° (dark shades)
          hue = 180 + Math.random() * 60;
          span.style.color = `hsl(${hue}, 70%, 35%)`; // Dark blue with 35% lightness
      } else {
          // Orange: 30° to 45°
          hue = 30 + Math.random() * 15;
          span.style.color = `hsl(${hue}, 70%, 45%)`; // Orange with 45% lightness
      }

      // Apply the Fuzzy Bubbles font
      span.style.fontFamily = '"Fuzzy Bubbles", sans-serif'; // Use Fuzzy Bubbles font

      wordCloudContainer.appendChild(span);
  });
}

// Generate the word cloud when the page loads
window.onload = createWordCloud;

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
