document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('tree-container');
  const countElement = document.getElementById('count');
  let leafCount = 0;

  function createRandomLeaf() {
    // Create an img element for the leaf
    const leaf = document.createElement('img');
    leaf.className = 'leaf';
    // Set the source of the leaf image
    leaf.src = 'Assets/leaf.png'; // Replace with the actual path to your leaf image

    // Get the position of the image container
    const containerRect = imageContainer.getBoundingClientRect();

    // Set random position within the image container, restricting Y-coordinate to the top part
    const randomX = Math.random() * containerRect.width + containerRect.left;
    const randomY = Math.random() * (containerRect.height / 2) + containerRect.top;

    leaf.style.position = 'absolute';
    leaf.style.left = `${randomX}px`;
    leaf.style.top = `${randomY}px`;
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 600) {
      leaf.style.width = '20px';
      leaf.style.height = '20px';
    } else if (viewportWidth <= 1000) {
      leaf.style.width = '30px';
      leaf.style.height = '30px';
    } else {
      // Default size for larger screens
      leaf.style.width = '40px';
      leaf.style.height = '40px';
    }
  
    const handleClick = () => {
      leafCount++;
      updateCount();
      speakCount();
      imageContainer.removeChild(leaf);
    };

    // Add event listeners for both click and touch events
    leaf.addEventListener('click', handleClick);
    leaf.addEventListener('touchend', handleClick);

    imageContainer.appendChild(leaf);
  }
  function updateCount() {
    countElement.textContent = `Leaves picked: ${leafCount}`;
  }

  function speakCount() {
    // Use the Web Speech API to speak the count
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(`${leafCount}`);
    synth.speak(utterance);
  }

  // Create 10 leaves initially using a loop
  for (let i = 0; i < 20; i++) {
    createRandomLeaf();
  }

  // You can call createRandomLeaf() within an interval or other events to generate more leaves over time
});
