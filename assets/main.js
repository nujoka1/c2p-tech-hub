// Progressive enhancement only. All navigation works without JavaScript.
const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = String(new Date().getFullYear());
