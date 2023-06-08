import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  function getRandomArtPiece(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  const randomArtPiece = !pieces ? (
    <p>...loading</p>
  ) : (
    getRandomArtPiece(pieces)
  );

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        title={randomArtPiece.name}
        onToggleFavorite={onToggleFavorite}
        slug={randomArtPiece.slug}
        isFavorite={randomArtPiece.isFavorite}
      />
    </div>
  );
}
