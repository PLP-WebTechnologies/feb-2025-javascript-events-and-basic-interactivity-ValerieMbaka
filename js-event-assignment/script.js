document.getElementById("toggle-bg-btn").addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});

document.getElementById("magic-btn").addEventListener("click", () => {
    alert("You clicked the magic button! 🎉");
});

document.getElementById("magic-btn").addEventListener("dblclick", () => {
    alert("🧙‍♂️ Secret unlocked!");
});

document.addEventListener("keypress", (e) => {
    document.getElementById("keypress-display").textContent = `You pressed: ${e.key}`;
});

document.getElementById("hover-text").addEventListener("mouseover", () => {
    document.getElementById("hover-text").textContent = "You hovered! 🎈";
});

document.getElementById("change-text-btn").addEventListener("click", () => {
    const target = document.getElementById("text-target");
    target.textContent = target.textContent === "Original text here"
        ? "Text changed! 🔥"
        : "Original text here";
});

const slideshowImages = [
  'code4.jpeg',
  'program1.jpeg',
  'programming.jpeg',
];

let currentImageIndex = 0;
const slideshowImg = document.getElementById('slideshow-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
  slideshowImg.src = slideshowImages[index];
}

prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
  showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  showImage(currentImageIndex);
});

// Initialize slideshow with first image
showImage(currentImageIndex);

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
        document.getElementById(btn.dataset.tab).classList.add("active");
        btn.classList.add("active");
    });
});

// Modal
const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");

document.getElementById("open-modal-btn").addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
});

document.getElementById("close-modal-btn").addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

document.getElementById("text-slider").addEventListener("input", (e) => {
    document.getElementById("slider-text").style.fontSize = `${e.target.value}px`;
});

// Form Validation with Real-time Feedback
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorDiv = document.getElementById("error-messages");

function validateName() {
    return nameInput.value.length >= 3;
}

function validateEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
}

function validatePassword() {
    return /(?=.*[A-Z])(?=.*\d).{8,}/.test(passwordInput.value);
}

function showValidation(input, isValid) {
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
}

[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener("input", () => {
        showValidation(nameInput, validateName());
        showValidation(emailInput, validateEmail());
        showValidation(passwordInput, validatePassword());
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    
    if (nameValid && emailValid && passwordValid) {
        errorDiv.textContent = "Form submitted successfully! ✅";
        errorDiv.style.color = "green";
    } else {
        errorDiv.textContent = "Please correct the errors above.";
        errorDiv.style.color = "red";
    }
});
