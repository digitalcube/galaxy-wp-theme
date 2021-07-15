import { Search } from "./search-client";

// 1. Create a render function
const renderRefinementList = (renderOptions, isFirstRender) => {
  const {
    items,
    isFromSearch,
    refine,
    createURL,
    isShowingMore,
    canToggleShowMore,
    searchForItems,
    toggleShowMore,
    widgetParams
  } = renderOptions;

  if (isFirstRender) {
    const input = document.createElement("input");
    const ul = document.createElement("ul");
    const button = document.createElement("button");
    button.textContent = "Show more";

    input.addEventListener("input", (event) => {
      searchForItems(event.currentTarget.value);
    });

    button.addEventListener("click", () => {
      toggleShowMore();
    });

    widgetParams.container.appendChild(input);
    widgetParams.container.appendChild(ul);
    widgetParams.container.appendChild(button);
  }

  const input = widgetParams.container.querySelector("input");

  if (!isFromSearch && input.value) {
    input.value = "";
  }

  widgetParams.container.querySelector("ul").innerHTML = items
    .map(
      (item) => `
        <li>
          <a
            href="${createURL(item.value)}"
            data-value="${item.value}"
            style="font-weight: ${item.isRefined ? "bold" : ""}"
          >
            ${item.label} (${item.count})
          </a>
        </li>
      `
    )
    .join("");

  [...widgetParams.container.querySelectorAll("a")].forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      refine(event.currentTarget.dataset.value);
    });
  });

  const button = widgetParams.container.querySelector("button");

  button.disabled = !canToggleShowMore;
  button.textContent = isShowingMore ? "Show less" : "Show more";
};

// 2. Create the custom widget
const customRefinementList = instantsearch.connectors.connectRefinementList(
  renderRefinementList
);

// 3. Instantiate
Search.addWidgets([
  customRefinementList({
    container: document.querySelector("#refinement-list"),
    attribute: "taxonomies.category",
    showMoreLimit: 20
  })
]);
