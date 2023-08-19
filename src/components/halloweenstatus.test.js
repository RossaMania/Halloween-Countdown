import React from "react";
import { render, screen } from "@testing-library/react";
import HalloweenStatus from "./halloweenstatus";

describe("HalloweenStatus component", () => {
  test('renders "Halloween" message', () => {
    //Arrange
    render(<HalloweenStatus />);
    //Act
    //...nothing

    //Assert
    const halloweenTextElement = screen.getByText(/Halloween/);
    expect(halloweenTextElement).toBeInTheDocument();
  });

  test("halloweenTheme applied", () => {
    //Arrange
    render(<HalloweenStatus />);

    //Act
    //Assert
    const element = screen.getByTestId("text-content");

    expect(element).toHaveStyle("font-size: 2.857142857142857rem");
  });
});
