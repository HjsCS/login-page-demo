import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Company from "@/components/InfoPage/Company";

describe("Company Component", () => {
  it("should render without crashing and contain companyText", () => {
    // Arrange
    render(<Company />);

    // Act
    const companyText = screen.getByText("Bolt Agency");

    // Assert
    expect(companyText).toBeInTheDocument();
  });

  it("should render the company logo", () => {
    // Arrange
    render(<Company />);

    // Act
    const companyLogo = screen.getByTestId("companyLogo");

    // Assert
    expect(companyLogo).toBeInTheDocument();
  });

  it("shoulde render the left arrow", () => {
    // Arrange
    render(<Company />);

    // Act
    const leftArrow = screen.getByTestId("leftArrow");

    // Assert
    expect(leftArrow).toBeInTheDocument();
  });

  it("should render the right arrow", () => {
    // Arrange
    render(<Company />);

    // Act
    const rightArrow = screen.getByTestId("rightArrow");

    // Assert
    expect(rightArrow).toBeInTheDocument();
  });
});
