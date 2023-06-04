import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ image, artist }) {
  return (
    <ul>
      <ArtPiecePreview image={image} artist={artist} />
    </ul>
  );
}
