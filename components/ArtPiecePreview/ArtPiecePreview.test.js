import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("each art piece's image is displayed", () => {
  render(<ArtPiecePreview />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("each art piece's title is displayed", () => {
  render(<ArtPiecePreview />);
  const title = screen.getByRole("listitem");
  expect(title).toBeInTheDocument();
});

test("each art piece's artist is displayed", () => {
  render(<ArtPiecePreview artist="Steve" />);
  const artist = screen.getByText(/Steve/i);
  expect(artist).toBeInTheDocument();
});
