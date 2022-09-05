import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/logo.svg" alt="Logo" width={512} height={512} />
    </>
  );
}
