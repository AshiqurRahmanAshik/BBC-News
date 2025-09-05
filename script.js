const categoryContainer = document.getElementById("categoryContainer");

const loadCategory = () => {
  fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategory(data.categories);
    });
};
const displayCategory = (categories) => {
  categoryContainer.addEventListener("click", (e) => {
    const allLi = categoryContainer.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("border-b-2", "border-red-600");
    });
    if (e.target.localName === "li") {
      e.target.classList.add("border-b-2", "border-red-600");
    }
  });
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
      <li class="hover:border-b-2 border-red-600">${category.title}</li>
    `;
  });
};
loadCategory();
