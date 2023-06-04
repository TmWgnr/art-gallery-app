import ArtPiecePreview from "../ArtPiecePreview";
import Spotlight from "../Spotlight";

export default function ArtPieces({ pieces }) {
  function getRandomArtPiece(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
  }

  const randomArtPiece = !pieces ? (
    <h1>...loading</h1>
  ) : (
    getRandomArtPiece(pieces)
  );

  return (
    <section>
      <ul>
        <Spotlight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
        />
        {!pieces ? (
          <h1>...loading</h1>
        ) : (
          // deconstruct piece object in callback function
          pieces.map(({ slug, artist, name, imageSource }) => {
            return (
              <>
                <ArtPiecePreview
                  key={slug}
                  artist={artist}
                  title={name}
                  slug={slug}
                  image={imageSource}
                />
              </>
            );
          })
        )}
      </ul>
    </section>
  );
}
