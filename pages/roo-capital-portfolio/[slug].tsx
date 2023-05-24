import Spotlight from "@/components/SearchSpotlight/Spotlight";
import Head from "next/head";

const BioPage = () => {
  return (
    <>
      <Head>
        <title>Roo Capital - Spotlight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spotlight bgChange={true} />
    </>
  );
};

export default BioPage;
