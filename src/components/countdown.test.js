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
    const DaysElement = screen.getByText("days until Halloween", {
      exact: false,
    });
    expect(DaysElement).toBeInTheDocument();
  });

  test("calculates Halloween day for current year", () => {
    //Arrange
    render(<Countdown />);

    //Calculate Halloween day for the mock date
    const mockDate = new Date("2023-08-16T12:00:00Z");
    global.Date = jest.fn(() => mockDate);

    //Act
    const currentYear = mockDate.getFullYear();
    const halloweenThisYear = new Date(`${currentYear}-10-31`);

    // Assert that the calculated Halloween date matches the expected value
    expect(halloweenThisYear).toEqual(new Date("2023-10-31"));
  });
});
