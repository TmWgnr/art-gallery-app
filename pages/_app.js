import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import React, { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState(data);
  console.log(artPiecesInfo);

  // Last doings: create favorite button, tried to implement the onToggleFavorite function. We gave all props from _app.js to the lower level components (up to "FavoriteButton") Right now we again don't receive data from our state "artPiecesInfo" when reloading the page. After the first render (npm run dev) we do receive the data.

  function onToggleFavorite(slug) {
    if (artPiecesInfo) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPieceInfo) =>
          artPieceInfo.slug === slug
            ? { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite }
            : artPieceInfo
        )
      );
    }
  }

  return (
    <>
      {!data ? (
        <p>...loading</p>
      ) : (
        <SWRConfig value={{ fetcher }}>
          <GlobalStyle />
          <Layout />
          <Component
            {...pageProps}
            pieces={data}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </SWRConfig>
      )}
    </>
  );
}
