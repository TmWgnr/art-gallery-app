import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import router from "next/router";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return (
      <button type="button" value="Back" onClick={() => window.history.back()}>
        your imaage not found. go back!
      </button>
    );
  } else
    return (
      <ArtPieceDetails
        image={currentArtPiece.imageSource}
        title={currentArtPiece.name}
        artist={currentArtPiece.artist}
        year={currentArtPiece.year}
        genre={currentArtPiece.genre}
        dimensions={currentArtPiece.dimensions}
      />
    );
}
