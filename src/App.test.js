import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders DateToday component when it is not Halloween", () => {
    //Arrange
    render(<App />);

    //Act
    //...no function

    //Assert
    const dateTodayElement = screen.getByText(/Today is/);
    expect(dateTodayElement).toBeInTheDocument();
  });

  test("renders HalloweenStatus component when it is Halloween", () => {
    //Arrange
    render(<App />);

    //Act
    // Mock the date to be October 31
    const mockDate = new Date("2023-10-31T12:00:00Z");
    const originalDate = Date;
    global.Date = jest.fn(() => mockDate);

    //Assert
    const halloweenElement = screen.getByText(/Halloween/);
    expect(halloweenElement).toBeInTheDocument();

    // Restore the original Date object after the test
    global.Date = originalDate;
  });
});