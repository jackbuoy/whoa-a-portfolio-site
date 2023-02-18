const tabs = document.querySelectorAll(".tab");
const discussionContainers = document.querySelectorAll(".discussion-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    discussionContainers.forEach((container) => {
      if (container.getAttribute("id") === target) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
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

const commentForm = document.querySelector("#comment-form");
const commentContainer = document.querySelector("#comments");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = commentForm.querySelector("#name");
  const contentInput = commentForm.querySelector("#content");

  const name = nameInput.value.trim();
  const content = contentInput.value.trim();

  if (name === "" || content === "") {
    const error = document.createElement("p");
    error.textContent = "Please fill out all fields.";
    error.classList.add("error");
    commentForm.insertBefore(error, commentForm.firstChild);
  } else {
    const date = new Date();
    const comment = createComment(name, content, date);
    commentContainer.appendChild(comment);
    nameInput.value = "";
    contentInput.value = "";
  }
});

function createComment(name, content, date) {
  const comment = document.createElement("div");
  comment.classList.add("comment");

  const heading = document.createElement("h4");
  heading.textContent = name;
  comment.appendChild(heading);

  const para = document.createElement("p");
  para.textContent = content;
  comment.appendChild(para);

  const datePara = document.createElement("p");
  datePara.textContent = formatDate(date);
  comment.appendChild(datePara);

  return comment;
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
    main.classList.add("scrolled");
  } else {
    header.classList.remove("fixed");
    main.classList.remove("scrolled");
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.classList.add("fixed");
  } else {
    footer.classList.remove("fixed");
  }
});

