document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
  
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
        
          if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
          } else {
            dropdownMenu.style.display = 'block';
          }
        }
      });
    });
  
    
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });
  });
  
  
  // Select the hero section
  const heroSection = document.querySelector('.hero');
  
  // // Desktop and mobile image arrays
  // const desktopBgImages = [
  //     '../Images/C 17.jpeg',
  //     '../Images/Sarang Helicopter.png',
  //     '../Images/School 1.jpeg',
  //     '../Images/School 2.jpeg',
  //     '../Images/Tejas.jpeg'
  // ];
  
  // const mobileBgImages = [
  //     '../Images/C 17.jpeg',
  //     '../Images/Sarang Helicopter.png',
  //     '../Images/School 1.jpeg',
  //     '../Images/School 2.jpeg',
  //     '../Images/Tejas.jpeg'
  // ];
  
  // // Function to change background images based on screen size
  // function changeBackgroundImages() {
  //     const bgImages = window.innerWidth <= 768 ? mobileBgImages : desktopBgImages;
  //     let index = 0;
  
  //     // Set the first background image
  //     heroSection.style.backgroundImage = `url(${bgImages[index]})`;
  
  //     // Change background periodically
  //     setInterval(() => {
  //         index = (index + 1) % bgImages.length; // Loop through images
  //         heroSection.style.backgroundImage = `url(${bgImages[index]})`;
  //     }, 5000); // Change every 5 seconds
  // }
  
  // // Initial background setup
  // changeBackgroundImages();
  
  // // Reapply on window resize
  // window.addEventListener('resize', changeBackgroundImages);
  
  // let currentIndex = 0;
  
  // // Function to change background image

  // function changeBackground() {
  //     // Update the background image
  //     heroSection.style.backgroundImage = `url(${bgImages[currentIndex]})`;
      
  //     // Update the index to the next image
  //     currentIndex = (currentIndex + 1) % bgImages.length;
  // }
  
  
  // setInterval(changeBackground, 3000);
  
  
  // changeBackground();
  
  
  // const activities = {
  //     "2024-12-01": [
  //       "Asset/home_gallery/1.jpeg",
  //       "Asset/home_gallery/2.png ",
  //       "Asset/home_gallery/3.jpeg",
  //       "Asset/home_gallery/4.jpeg",
  //       "Asset/home_gallery/5.jpeg",
  //       "Asset/home_gallery/6.jpeg",
  //       "Asset/home_gallery/7.jpeg",
  //       "Asset/home_gallery/8.jpeg",
  
  //     "Asset/home_gallery/9.png",
  //       "Asset/home_gallery/10.png ",
  //       "Asset/home_gallery/13.png",
  //       "Asset/home_gallery/14.png",
  //       "Asset/home_gallery/15.png",
  //       "Asset/home_gallery/16.png",
  //       "Asset/home_gallery/11.png",
  //       "Asset/home_gallery/12.png",
  //     ],
  //     "2024-12-02": [
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  
  //     "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  
  //     "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png"
  //     ],
  //     "2024-12-03": [
  //   "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  
  //     "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png",
  
  //     "Asset/inovation hub.png",
  //       "Asset/ndaTraining.png",
  //       "Asset/inovation hub.png",
  //       "Asset/inovation hub.png"
  //     ]
  //   };
    
  // // Select DOM elements
  // const dateInput = document.getElementById("activity-date");
  // const imageGrid = document.getElementById("image-grid");
  
  // // Event listener for date input
  // dateInput.addEventListener("change", () => {
  //   const selectedDate = dateInput.value;
  //   displayImages(selectedDate);
  // });
  
  // // Function to display images based on selected date
  // function displayImages(date) {
  //   imageGrid.innerHTML = "";
  
  //   if (activities[date]) {
  //     activities[date].forEach((imageUrl) => {
  //       const img = document.createElement("img");
  //       img.src = imageUrl;
  //       img.alt = `Activity on ${date}`;
  //       img.classList.add("activity-image");
  //       img.onclick = () => openModal(img); // Add click event to open modal
  //       imageGrid.appendChild(img);
  //     });
  //   } else {
  //     const message = document.createElement("p");
  //     message.textContent = "No activities for the selected date.";
  //     message.style.fontSize = "16px";
  //     message.style.color = "#777";
  //     imageGrid.appendChild(message);
  //   }
  // }
  
  
  // const defaultDate = "2024-12-01";
  // dateInput.value = defaultDate;
  // displayImages(defaultDate);
  
  // Modal functions
  function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = img.src;
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  