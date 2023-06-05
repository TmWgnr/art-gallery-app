import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <>
      <li key={slug}>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} alt={title} width={192} height={243} />
        </Link>
        <p>{title}</p>
        <p>{artist}</p>
      </li>
    </>
  );
}
