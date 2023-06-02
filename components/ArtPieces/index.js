import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <section>
      <ul>
        {!pieces ? (
          <h1>...loading</h1>
        ) : (
          pieces.map((piece) => {
            console.log(piece.artist);
            return (
              <ArtPiecePreview
                key={piece.slug}
                artist={piece.artist}
                title={piece.name}
                slug={piece.slug}
                image={piece.imageSource}
              />
            );
          })
        )}
      </ul>
    </section>
  );
}
