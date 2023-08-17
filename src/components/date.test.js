import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Date from "./date";

describe("Date component", () => {
  test("renders Today is as a text", () => {
    //Arrange
    render(<Date />);

    //Act
    //...no functions

    //Assert
    const TodayElement = screen.getByText("Today is", { exact: false });
    expect(TodayElement).toBeInTheDocument();
  });
});
