import ArtPieceDetails from "@/components/ArtPieceDetails";
import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
