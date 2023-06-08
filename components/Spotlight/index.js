import ArtPiecePreview from "../ArtPiecePreview";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  slug,
  image,
  artist,
  title,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <ul>
      <ArtPiecePreview image={image} artist={artist} title={title} />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
    </ul>
  );
}
