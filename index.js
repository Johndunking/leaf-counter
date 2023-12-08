document.addEventListener('DOMContentLoaded', function () {
  const tree = document.getElementById('tree');
  const treeContainer = document.getElementById('tree-container');
  const countElement = document.getElementById('count');
  let leafCount = 0;

  // Function to create a new leaf around the polygon
  function createLeafAroundPolygon(polygon) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';

    // Calculate the position based on the average of polygon points
    const averageX = polygon.reduce((sum, point) => sum + point.x, 0) / polygon.length;
    const averageY = polygon.reduce((sum, point) => sum + point.y, 0) / polygon.length;

    // Set position within the tree container
    leaf.style.top = averageY + 'px';
    leaf.style.left = averageX + 'px';

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

  // Get the points of the polygons
  const polygon1 = [{ x: 1730, y: 120 }, { x: 30, y: 160 }, { x: 70, y: 160 }];
  const polygon2 = [{ x: 1790, y: 80 }, { x: 30, y: 120 }, { x: 70, y: 120 }];
  const polygon3 = [{ x: 1700, y: 0 }, { x: 70, y: 50 }, { x: 70, y: 120 }];

  // Create leaves around the polygons
  createLeafAroundPolygon(polygon1);
  createLeafAroundPolygon(polygon2);
  createLeafAroundPolygon(polygon3);
  createLeafAroundPolygon(polygon4);
  createLeafAroundPolygon(polygon5);
  createLeafAroundPolygon(polygon6);
  createLeafAroundPolygon(polygon7);
  createLeafAroundPolygon(polygon8);
  // Add more polygons and create leaves as needed
});
