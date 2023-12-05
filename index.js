document.addEventListener('DOMContentLoaded', function () {
    const treeContainer = document.getElementById('tree-container');
    const countElement = document.getElementById('count');
    let leafCount = 0;
  
    // Function to create a new leaf
    function createLeaf(row, col) {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
  
      // Calculate position based on row and col
      const leafTop = row * 50; // Adjust the spacing as needed
      const leafLeft = col * 50; // Adjust the spacing as needed
  
      // Set position within the tree container
      leaf.style.top = leafTop + 'px';
      leaf.style.left = leafLeft + 'px';
  
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
  
    // Create leaves in a specific pattern (e.g., 3x5 grid)
    const rows = 3;
    const cols = 5;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        createLeaf(i, j);
      }
    }
  });