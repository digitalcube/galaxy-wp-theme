import { Search } from "./search-client";

// Create the render function
const renderPagination = (renderOptions, isFirstRender) => {
  const {
    pages,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
    createURL
  } = renderOptions;

  const container = document.querySelector("#pagination");

  container.innerHTML = `
  <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      ${
        !isFirstPage
          ? `
          <div class="-mt-px w-0 flex-1 flex">
            <a
              href="${createURL(0)}"
              class="
                border-t-2 border-transparent
                pt-4
                pr-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-300
              "
              data-value="${0}"
            >
              <svg
                class="mr-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              First
            </a>
            <a
              href="${createURL(currentRefinement - 1)}"
              class="
                border-t-2 border-transparent
                pt-4
                pr-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-300
              "
              data-value="${currentRefinement - 1}"
            >
              Previous
            </a>
          </div>
            `
          : ""
      }
      ${pages
        .map(
          (page) => `
              <a
                href="${createURL(page)}"
                data-value="${page}"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
                style="font-weight: ${currentRefinement === page ? "bold" : ""}"
              >
                ${page + 1}
              </a>
          `
        )
        .join("")}
        ${
          !isLastPage
            ? `
            <div class="-mt-px w-0 flex-1 flex justify-end">
            <a
              href="${createURL(currentRefinement + 1)}"
              data-value="${currentRefinement + 1}"
              class="
                border-t-2 border-transparent
                pt-4
                pl-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-300
              "
            >
              Next
            </a>

            <a
              href="${createURL(nbPages - 1)}"
              data-value="${nbPages - 1}"
              class="
                border-t-2 border-transparent
                pt-4
                pl-1
                inline-flex
                items-center
                text-sm
                font-medium
                text-gray-500
                hover:text-gray-700 hover:border-gray-300
              "
            >
              Last
              <svg
                class="ml-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

              `
            : ""
        }
    </nav>
  `;

  [...container.querySelectorAll("a")].forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      refine(event.currentTarget.dataset.value);
    });
  });
};

// Create the custom widget
const customPagination = instantsearch.connectors.connectPagination(
  renderPagination
);

// Instantiate the custom widget
Search.addWidgets([
  customPagination({
    container: document.querySelector("#pagination")
  })
]);
