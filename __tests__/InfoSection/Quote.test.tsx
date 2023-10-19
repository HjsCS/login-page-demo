import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quote from "@/components/InfoPage/Quote";

describe("Quote Component", () => {
  it("should render without crashing and contain quoteText", () => {
    // Arrange
    render(<Quote />);

    // Act
    const quoteText = screen.getByText(
      "“Untitled truly has solved all our design and content problems, freeing up our time to work on more important things. We can’t imagine working without it.’"
    );

    // Assert
    expect(quoteText).toBeInTheDocument();
  });
});
