import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateToday from "./datetoday";

describe("DateToday component", () => {

  it("renders without crashing", () => {
    render(<DateToday />);
  });

  test("displays the correct formatted current date", () => {
    // Arrange
    // Mock the current date for the test
    render(<DateToday />)

    //Act
    //Assert
    const mockDate = new Date();
    const originalDate = Date;
    global.Date = jest.fn(() => mockDate);

    const expectedText = screen.getByText("Today is Wednesday, August 16.", { exact: false });
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
