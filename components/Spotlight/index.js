import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ image, artist, title }) {
  return (
    <ul>
      <ArtPiecePreview image={image} artist={artist} title={title} />
    </ul>
  );
}
