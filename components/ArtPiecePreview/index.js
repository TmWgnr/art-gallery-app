import Image from "next/image";

export default function ArtPiecePreview({ slug, image, title, artist }) {
  console.log(artist);
  return (
    <li key={slug}>
      <p>
        {artist} - {title}
      </p>
      <Image src={image} alt={title} width={192} height={243} />
    </li>
  );
}
