import Image from "next/image";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <>
      <button onClick={() => onToggleFavorite(slug)}>
        {isFavorite ? (
          <Image src="/heart.svg" alt="heart" width="50" height="50" />
        ) : (
          <Image
            src="/heart-empty.svg"
            alt="epmty heart"
            width="50"
            height="50"
          />
        )}
      </button>
    </>
  );
}
