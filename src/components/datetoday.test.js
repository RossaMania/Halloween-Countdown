import { render, screen } from "@testing-library/react";
import DateToday from "./datetoday";

describe("DateToday component", () => {

  it("renders without crashing", () => {
    render(<DateToday />);
  });

  test("displays the correct formatted current date", () => {
    // Arrange
    render(<DateToday />);

    //Act
    // Mock the current date for the test
    const mockDate = new Date("2023-8-17T12:00:00Z");
    const originalDate = Date;
    global.Date = jest.fn(() => mockDate);

    //Assert
    const expectedText = screen.getByText("Today is Thursday, August 17.", {
      exact: false,
    });
    expect(expectedText).toBeInTheDocument();

    // Restore the original Date object after the test
    global.Date = originalDate;
  });
  test("renders Today is as a text", () => {
    //Arrange
    render(<DateToday />);

    //Act
    //...no functions

    //Assert
    const TodayElement = screen.getByText("Today is", { exact: false });
    expect(TodayElement).toBeInTheDocument();
  });
});
