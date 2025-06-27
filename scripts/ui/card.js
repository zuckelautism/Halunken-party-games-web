export function Card({ title, childrenHtml, onClick }) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${title}</h3><div class="card-content">${childrenHtml}</div>`;
  if (onClick) card.addEventListener('click', onClick);
  return card;
}
