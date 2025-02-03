const galleryData = {
    tsa: [
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 1", description: "TSA event highlights." },
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 2", description: "Students working on TSA projects." },
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 3", description: "More TSA activities." },
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 4", description: "TSA competition moments." },
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 5", description: "Collaboration at TSA." },
      { img: "imgs/placeholdersmall.svg", title: "TSA Image 6", description: "Innovative TSA projects." }
    ],
    mustang: [
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 1", description: "Behind the scenes of Mustang Morning Show." },
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 2", description: "Filming in progress." },
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 3", description: "Production work in action." },
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 4", description: "Broadcasting live." },
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 5", description: "Editing the show." },
      { img: "imgs/placeholdersmall.svg", title: "Morning Show 6", description: "Crew working together." }
    ],
    projects: [
      { img: "imgs/placeholdersmall.svg", title: "Student Project 1", description: "A creative student project." },
      { img: "imgs/placeholdersmall.svg", title: "Student Project 2", description: "Innovative ideas from students." },
      { img: "imgs/placeholdersmall.svg", title: "Student Project 3", description: "Students presenting their work." },
      { img: "imgs/placeholdersmall.svg", title: "Student Project 4", description: "Project development stage." },
      { img: "imgs/placeholdersmall.svg", title: "Student Project 5", description: "Final touches on projects." },
      { img: "imgs/placeholdersmall.svg", title: "Student Project 6", description: "Showcasing student creativity." }
    ]
  };
  
  function updateGallery(category) {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = ""; 
    
    galleryData[category].forEach((item, index) => {
      const col = document.createElement("div");
      col.className = "col-2";
      col.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="img-fluid">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${index}">
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
    updateGallery('tsa');
  });

  const words = [
    { text: "JavaScript", frequency: 50 },
    { text: "HTML", frequency: 30 },
    { text: "CSS", frequency: 40 },
    { text: "React", frequency: 20 },
    { text: "Node.js", frequency: 25 },
    { text: "Python", frequency: 10 },
    { text: "Git", frequency: 35 },
    { text: "TypeScript", frequency: 45 },
    { text: "Vue.js", frequency: 15 },
    { text: "PHP", frequency: 5 },
];

function createWordCloud() {
    const wordCloudContainer = document.getElementById('word-cloud');
    
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word.text;

        // Set font size based on frequency
        const fontSize = 10 + word.frequency; // Adjust scale here
        span.style.fontSize = `${fontSize}px`;

        // Optionally add random color
        span.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;

        wordCloudContainer.appendChild(span);
    });
}

// Generate the word cloud when the page loads
window.onload = createWordCloud;