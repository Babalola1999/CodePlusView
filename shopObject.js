const profilePicture = document.getElementById("profilePicture");
const savedProfilePicture = localStorage.getItem("profilePicture");

// Check if a profile picture is saved in localStorage
if (savedProfilePicture) {
  // If profile picture exists, set it and show the image element
  profilePicture.src = savedProfilePicture;
  profilePicture.style.display = "block";
  profilePicture.style.borderRadius = "50%";
} else {
  // If no profile picture is saved, show a default icon
  profilePicture.style.backgroundImage = "url(images/default-icon.png)";
  profilePicture.style.display = "block";
}

// Example event listener for changing the profile picture
// Replace this with your actual logic for changing the profile picture
profilePicture.addEventListener("click", function () {
  // Simulate changing the profile picture
  const newProfilePicture = "url(images/new-profile-picture.jpg)";

  // Save the new profile picture to localStorage
  localStorage.setItem("profilePicture", newProfilePicture);

  // Update the profile picture displayed
  profilePicture.src = newProfilePicture;
  profilePicture.style.backgroundImage = "none"; // Remove default icon
});
