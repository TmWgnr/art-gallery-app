import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data } = useSWR(URL);
  console.log(data);
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
