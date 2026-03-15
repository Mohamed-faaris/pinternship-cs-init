import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "../CommentBox";

describe("CommentBox", () => {
  test("renders an input and a Post button", () => {
    render(<CommentBox onPost={() => {}} />);
    expect(screen.getByTestId("comment-input")).toBeInTheDocument();
    expect(screen.getByTestId("post-button")).toHaveTextContent("Post");
  });

  test("calls onPost with input value when clicked", () => {
    let capturedValue = "";
    render(
      <CommentBox
        onPost={(value) => {
          capturedValue = value;
        }}
      />,
    );

    const input = screen.getByTestId("comment-input");
    fireEvent.change(input, { target: { value: "Hello World" } });
    fireEvent.click(screen.getByTestId("post-button"));

    expect(capturedValue).toBe("Hello World");
  });

  test("clears the input after posting", () => {
    render(<CommentBox onPost={() => {}} />);

    const input = screen.getByTestId("comment-input");
    fireEvent.change(input, { target: { value: "Hello World" } });
    fireEvent.click(screen.getByTestId("post-button"));

    expect(input).toHaveValue("");
  });
});
