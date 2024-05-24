import Image from "next/image";
import Lists from "./components/lists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="grid justify-center items-center h-[80vh]">
        <div>
        <Lists />
        <pre>{JSON.stringify(session)}</pre>
        </div>
      </div>
    </>
  );
}
