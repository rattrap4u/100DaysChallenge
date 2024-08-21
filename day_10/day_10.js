const cube = document.getElementById('cube');
const content = document.getElementById('content');
const faces = document.querySelectorAll('.face');

let currentFaceIndex = 0; // Track the current face index
const totalFaces = faces.length; // Total number of faces

// Function to update the cube's rotation based on the current face index
function updateCubeRotation() {
    const rotationY = currentFaceIndex * 90; // Each face is 90 degrees apart
    cube.style.transform = `rotateY(-${rotationY}deg)`; // Rotate to show the current face
}

// Handle mouse wheel event for scrolling
document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll down
        currentFaceIndex = (currentFaceIndex + 1) % totalFaces; // Move to the next face
    } else {
        // Scroll up
        currentFaceIndex = (currentFaceIndex - 1 + totalFaces) % totalFaces; // Move to the previous face
    }
    updateCubeRotation(); // Update the cube rotation
});


// Handle face clicks
faces.forEach((face, index) => {
    face.addEventListener('click', function() {
        currentFaceIndex = index; // Set the current face index based on the clicked face
        updateCubeRotation(); // Update the cube rotation
        
        const page = this.getAttribute('data-page');
        switch (page) {
            case 'Page 1':
                window.location.href = '../day_9/day_9.html'; // Replace with the actual URL or path
                break;
            case 'Page 2':
                window.location.href = '../day_7/day_7.html'; // Replace with the actual URL or path
                break;
            case 'Page 3':
                window.location.href = '../day_5/day_5.html'; // Replace with the actual URL or path
                break;
            case 'Page 4':
                window.location.href = '../day_4/day_4.html'; // Replace with the actual URL or path
                break;
            case 'Page 5':
                window.location.href = '../day_3/day_3.html'; // Replace with the actual URL or path
                break;
            case 'Page 6':
                window.location.href = '../day_2/day_2.html'; // Replace with the actual URL or path
                break;
        }
    });
});

updateCubeRotation();