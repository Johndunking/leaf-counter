document.addEventListener('DOMContentLoaded', function () {
    const treeContainer = document.getElementById('tree-container');
    const countElement = document.getElementById('count');
    let leafCount = 0;
  
    // Function to create a new leaf
    function createLeaf() {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      
      // Set random position within the tree container
      leaf.style.top = Math.random() * (treeContainer.clientHeight - 10) + 'px';
      leaf.style.left = Math.random() * (treeContainer.clientWidth - 10) + 'px';
  
      // Add click event listener to the leaf
      leaf.addEventListener('click', () => {
        leafCount++;
        updateCount();
        // Remove the leaf after it's clicked
        treeContainer.removeChild(leaf);
      });
  
      // Append the leaf to the tree container
      treeContainer.appendChild(leaf);
    }
  
    // Function to update the count
    function updateCount() {
      countElement.textContent = `Leaves picked: ${leafCount}`;
    }
  
    // Create initial leaves
    for (let i = 0; i < 10; i++) {
      createLeaf();
    }
  });
  
  