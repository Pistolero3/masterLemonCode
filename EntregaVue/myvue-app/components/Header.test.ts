import { render, screen } from "@testing-library/vue";
import Header from "@/components/Header.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Header", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should render correctly", () => {
    render(Header);

    screen.getByText("Welcome");
  });
});
