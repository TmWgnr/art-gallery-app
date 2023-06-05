import Image from "next/image";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  dimensions,
}) {
  return (
    <>
      <button type="button" value="Back" onClick={() => window.history.back()}>
        ←
      </button>
      <Image alt={title} src={image} height={240} width={130} />
      <p>
        {artist}:{`"${title}"`}
      </p>
      <p>genre: {genre}</p>
      <p>year: {year}</p>
      <p>Comments: I love pieces</p>
      <label htmlFor="commentInput">Add comment</label>
      <input id="commentInput" name="commentInput"></input>
      <button type="submit">Send</button>
    </>
  );
}
