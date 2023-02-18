const articles = document.querySelectorAll('article');
let currentArticle = 0;

function showArticle(index) {
  articles[currentArticle].style.display = 'none';
  articles[index].style.display = 'block';
  currentArticle = index;
}

function showNextArticle() {
  const nextArticle = (currentArticle + 1) % articles.length;
  showArticle(nextArticle);
}

document.querySelector('#next-btn').addEventListener('click', showNextArticle);
