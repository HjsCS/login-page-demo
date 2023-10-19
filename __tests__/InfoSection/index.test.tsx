import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoPage from "@/components/InfoPage/index";

it("it renders InfoSection and child components", () => {
  // Arrange
  render(<InfoPage />);

  // Act
  const authorComponent = screen.getByTestId("author");
  const companyComponent = screen.getByTestId("company");
  const quoteComponent = screen.getByTestId("quote");

  // Assert
  expect(authorComponent).toBeInTheDocument();
  expect(companyComponent).toBeInTheDocument();
  expect(quoteComponent).toBeInTheDocument();
});
