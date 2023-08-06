'use client'
import { Image } from "@nextui-org/react";
import { connectDB } from "../../util/database";
import { MongoClient } from "mongodb";

interface AppProps {
  result: { pic: string }[];
}

export default function App({ result }: AppProps) {


  return (
    <Image
      width="100%"
      height="100%"
      src={result[0].pic}
      alt="Default Image"
      objectFit="cover"
    />
  );
}