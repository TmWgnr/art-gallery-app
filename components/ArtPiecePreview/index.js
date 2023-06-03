import Image from "next/image";

export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <li key={slug}>
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <Image src={image} alt={title} width={192} height={243} />
    </li>
  );
}
