import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the input text", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/text a city name/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the filter", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/filter by name/i);
  expect(linkElement).toBeInTheDocument();
});
