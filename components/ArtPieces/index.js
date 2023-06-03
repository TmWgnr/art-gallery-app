import ArtPiecePreview from "../ArtPiecePreview";
import Spotlight from "../Spotlight";

export default function ArtPieces({ pieces }) {
  return (
    <section>
      <ul>
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
                <Spotlight />
              </>
            );
          })
        )}
      </ul>
    </section>
  );
}
