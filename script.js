const categoryContainer = document.getElementById("categoryContainer");

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data.categories));
};
const showCategories = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
    <li>${category.title}</li>
    `;
  });
};
loadCategory();
