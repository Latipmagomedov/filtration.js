document.body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.getAttribute("data-filter-btn")) {
    const attribute = target.getAttribute("data-filter-btn");
    document
      .querySelectorAll("[data-filter-btn]")
      .forEach((item) => item.classList.remove("filter-btn-active"));
    target.classList.add("filter-btn-active");

    const allProducts = document.querySelectorAll("[data-filter-product]");
    allProducts.forEach((item, index) => (item.style.display = "none"));

    const filterProducts = document.querySelectorAll(
      `[data-filter-product="${attribute}"]`
    );
    filterProducts.forEach((item) => (item.style.display = "block"));
  }

  if (target.getAttribute("data-filter-btn") == "all") {
    const allProducts = document.querySelectorAll("[data-filter-product]");
    allProducts.forEach((item, index) => (item.style.display = "block"));
  }
});
