import { render, screen } from "@testing-library/react";
import Countdown from "./countdown";


// // Mock current date
const mockDate = new Date('2023-08-18T12:00:00Z');
const originalDate = Date;
global.Date = jest.fn(() => mockDate);

describe("Countdown component", () => {
  // beforeEach(() => {
  //   // Clear usage data of the mock Date before each test
  //   global.Date.mockClear();
  // });

  test("renders days until Halloween as a text", () => {
//     //Arrange
    render(<Countdown />);
//     //Act
//     // ...no functions

//     //Assert
    const DaysElement = screen.getByText("days until Halloween", {
      exact: false,
    });
    expect(DaysElement).toBeInTheDocument();
  });

  test("calculates Halloween day for current year", () => {
//     //Arrange
    render(<Countdown />);

//     //Calculate Halloween day for the mock date
//     //Act
    const currentYear = mockDate.getFullYear();
    const halloweenThisYear = new Date(`${currentYear}-10-31`);

//     // Assert that the calculated Halloween date matches the expected value
    expect(halloweenThisYear).toEqual(new Date("2023-10-31"));
  });

  test("the days remaining until Halloween", () => {
    //     //Arrange
    render(<Countdown />);

    //     // Calculate time remaining until Halloween
    const currentYear = mockDate.getFullYear();
    const halloweenThisYear = new Date(`${currentYear}-10-31`);
    const timeRemaining = halloweenThisYear - mockDate;

    //     // Convert milliseconds to days
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

// Assert that the expected countdown text is rendered
  const expectedText = new RegExp(`${daysRemaining} days until Halloween`);
  const expectedTextElement = screen.getByText(expectedText);
  expect(expectedTextElement).toBeInTheDocument();
    });
});

// // Restore the original Date object after the test
global.Date = originalDate;
