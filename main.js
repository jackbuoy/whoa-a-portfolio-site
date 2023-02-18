// Define constants for elements that will be manipulated
const tabs = document.querySelectorAll(".tab");
const ideas = document.querySelectorAll(".idea");
const ideaContainers = document.querySelectorAll(".idea-container");

// Add event listeners to tabs to display the appropriate idea
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    ideas.forEach((idea) => {
      if (idea.getAttribute("id") === target) {
        idea.classList.add("active");
      } else {
        idea.classList.remove("active");
      }
    });

    tabs.forEach((t) => {
      if (t === tab) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });
  });
});

// Add event listener to form to handle form submission
const form = document.querySelector("#idea-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.querySelector("#idea-title").value.trim();
  const description = form.querySelector("#idea-description").value.trim();
  const tags = form.querySelector("#idea-tags").value.trim();
  const date = new Date().toLocaleDateString();
  
  // Create new idea element and append to container
  const newIdea = document.createElement("div");
  newIdea.classList.add("idea");
  newIdea.setAttribute("id", title.toLowerCase().replace(/\s+/g, '-'));
  newIdea.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="tags">${tags}</div>
    <div class="date">${date}</div>
  `;
  ideaContainers[0].appendChild(newIdea);
  
  // Clear form fields
  form.reset();
});

// Add event listener to show/hide form
const addBtn = document.querySelector(".add-btn");
const formContainer = document.querySelector(".form-container");
addBtn.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
});
