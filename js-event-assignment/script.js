// Change Text Content Dynamically
function changeHeadingText() {
    document.querySelector('h2').textContent = "Welcome to My Simple Website!";
}

// Modify CSS Styles Dynamically
function changeBackground() {
    document.body.style.background = "lightblue";
}

// Dynamically add a new section when button is clicked
function addNewSection() {
    const newSection = document.createElement('section');
    newSection.innerHTML = `
        <h2> New Section Added Dynamically </h2>
        <p> This section was added using JavaScript! </p>
    `;
    document.body.appendChild(newSection);
}

// Remove a section when a button is clicked
function removeSection() {
    const sectionToRemove = document.querySelector('.hobbies');
    if (sectionToRemove) {
        sectionToRemove.remove();
    }
}

// Respond to User Interactions (Example: on form submit)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});

// Button to trigger text change
document.querySelector('#changeTextBtn').addEventListener('click', changeHeadingText);

// Button to trigger background color change
document.querySelector('#changeBgBtn').addEventListener('click', changeBackground);

// Button to add a new section
document.querySelector('#addSectionBtn').addEventListener('click', addNewSection);

// Button to remove a section
document.querySelector('#removeSectionBtn').addEventListener('click', removeSection);