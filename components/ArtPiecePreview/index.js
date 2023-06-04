import Image from "next/image";

export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <li key={slug}>
      <Image src={image} alt={title} width={192} height={243} />
      <p>{title}</p>
      <p>{artist}</p>
    </li>
  );
}
