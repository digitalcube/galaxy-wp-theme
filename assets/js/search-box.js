import { Search } from "./search-client";

// instantiate custom widget
Search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    cssClasses: {
      root: "",
      form: "relative",
      reset: "absolute top-0 h-full right-3",
      resetIcon: "",
      loadingIndicator: "absolute top-0 h-full right-6",
      loadingIcon: "",
      submit: "absolute top-0 h-full left-3",
      submitIcon: "",
      input: "w-full px-8 focus:border-gray-700 focus:ring-gray-700",
    },
  }),
]);
