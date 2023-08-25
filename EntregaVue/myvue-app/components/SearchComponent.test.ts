import { render, screen } from "@testing-library/vue";
import SearchComponent from "../components/SearchComponent.vue";
import { createPinia, setActivePinia } from "pinia";

describe("SearchComponent", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render correctly", () => {
    render(SearchComponent);

    screen.getByText("Org:");
  });

  it("should render the input", () => {
    render(SearchComponent);
    screen.getByTestId("input-data");
  });

  it("should render the button", () => {
    render(SearchComponent);
    screen.getByTestId("button-data");
  });
});
