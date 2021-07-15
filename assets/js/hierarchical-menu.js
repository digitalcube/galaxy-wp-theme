import { Search } from "./search-client";

// Create the render function
const renderList = ({ items, createURL }) => `
  <nav class="space-y-1" aria-label="Sidebar">
    ${items
      .map(
        (item) => `
            <a
              href="${createURL(item.value)}"
              data-value="${item.value}"
              style="font-weight: ${item.isRefined ? "bold" : ""}"
              class="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            >
              <span class="truncate">
                ${item.label}
              </span>
              <span class="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                ${item.count}
              </span>
            </a>
            ${item.data ? renderList({ items: item.data, createURL }) : ""}
          </a>
        `
      )
      .join("")}
  </ul>
`;

const renderHierarchicalMenu = (renderOptions, isFirstRender) => {
  const {
    items,
    isShowingMore,
    refine,
    toggleShowMore,
    createURL,
    widgetParams,
  } = renderOptions;

  if (isFirstRender) {
    const list = document.createElement("div");
    const button = document.createElement("button");

    button.addEventListener("click", () => {
      toggleShowMore();
    });

    widgetParams.container.appendChild(list);
    widgetParams.container.appendChild(button);
  }

  const children = renderList({ items, createURL });

  widgetParams.container.querySelector("div").innerHTML = children;
  widgetParams.container.querySelector("button").textContent = isShowingMore
    ? "Show less"
    : "Show more";

  [...widgetParams.container.querySelectorAll("a")].forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      refine(event.target.dataset.value);
    });
  });
};

// Create the custom widget
const customHierarchicalMenu = instantsearch.connectors.connectHierarchicalMenu(
  renderHierarchicalMenu
);

// Instantiate the custom widget
Search.addWidgets([
  customHierarchicalMenu({
    container: document.querySelector("#hierarchical-menu"),
    attributes: [
      "taxonomies_hierarchical.category.lvl0",
      "taxonomies_hierarchical.category.lvl1",
      "taxonomies_hierarchical.category.lvl2",
      "taxonomies_hierarchical.category.lvl3",
    ],
    limit: 5,
    showMoreLimit: 10,
  }),
]);
