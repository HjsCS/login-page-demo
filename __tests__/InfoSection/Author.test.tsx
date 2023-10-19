import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Author from "@/components/InfoPage/Author"; // Update the path accordingly

describe("Author Component", () => {
  it('should display the author name "Mischca Sullivan"', () => {
    // Arrange
    render(<Author />);

    // Act
    const authorName = screen.getByText("Mischca Sullivan");

    // Assert
    expect(authorName).toBeInTheDocument();
  });

  it("should render 5 stars", () => {
    // Arrange
    render(<Author />);

    // Act
    const stars = screen.getAllByTestId("star-icon");

    // Assert
    expect(stars.length).toBe(5); // stars should be an array of length 5
  });
});
