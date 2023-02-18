const articles = document.querySelectorAll('article');
let currentArticle = 0;

function showArticle(index) {
  for (let i = 0; i < articles.length; i++) {
    if (i === index) {
      articles[i].style.display = 'block';
    } else {
      articles[i].style.display = 'none';
    }
  }
  currentArticle = index;
}

function showNextArticle() {
  const nextArticle = (currentArticle + 1) % articles.length;
  showArticle(nextArticle);
}

document.querySelector('#next-btn').addEventListener('click', showNextArticle);
