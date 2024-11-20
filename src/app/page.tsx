import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const myNumber = await api.myNumber.getNumber({
    id: "cm3pkhx9r0001cfrfd54oaoef",
  });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <p>My number is: {myNumber?.currentValue.toString()}</p>
      </main>
    </HydrateClient>
  );
}
