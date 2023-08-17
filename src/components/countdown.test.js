import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Countdown from "./countdown";

describe("Countdown component", () => {
  test("renders days until Halloween as a text", () => {
    //Arrange
    render(<Countdown />);
    //Act
    // ...no functions

    //Assert
    const DaysElement = screen.getByText("days until Halloween", { exact: false });
    expect(DaysElement).toBeInTheDocument();
  });

});
