import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NateChain</title>
      </Head>
      <Image src="/logo.svg" alt="Logo" width={512} height={512} />
    </>
  );
}
