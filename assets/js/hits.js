import { Search } from "./search-client";

// Create the render function
const renderHits = (renderOptions, isFirstRender) => {
  const { hits, widgetParams } = renderOptions;

  widgetParams.container.innerHTML = `
  <div class="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      ${hits
        .map(
          (item) =>
            `
            <div>
            <div>
              <a href="#" class="inline-block">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100">
                  ${item.taxonomies.category[0]}
                </span>
              </a>
            </div>
            <a href="#" class="block mt-4">
              <p class="text-xl font-semibold text-gray-900">
                ${instantsearch.highlight({
                  attribute: "post_title",
                  hit: item,
                })}
              </p>
              <p class="mt-3 text-base text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
          </div>`
        )
        .join("")}
    </div>
  `;
};

// Create the custom widget
const customHits = instantsearch.connectors.connectHits(renderHits);

// Instantiate the custom widget
Search.addWidgets([
  customHits({
    container: document.querySelector("#hits"),
  }),
]);
