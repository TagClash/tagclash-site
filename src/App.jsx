import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const monsters = [
  "Canopu",
  "Chull",
  "Dapurr",
  "Dedrino",
  "Dedrinold",
  "Diamachos",
  "Ditsa",
  "Duskrox",
  "Emberoar",
  "Figon",
  "Fikas",
  "Floritsa",
  "Gelos",
  "Himer",
  "Ive",
  "Kritos",
  "Laka",
  "Lykoron",
  "Monas",
  "Nenen",
  "Pop",
  "Rito",
  "Samisa",
  "Snaime",
  "Tascodi",
  "Tsiki",
  "Waton"
].map((name) => ({
  name,
  image: `/images/${name.replace(/\s+/g, "").toLowerCase()}.png`
}));

export default function MonsterList() {
  const [search, setSearch] = useState("");

  const filtered = monsters.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">MonsterList</h1>
      <Input
        placeholder="Search monsters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 bg-zinc-800 text-white border-zinc-700"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((monster) => (
          <Card key={monster.name} className="hover:scale-105 transition bg-zinc-800">
            <CardContent className="p-4 text-center">
              <img
                src={monster.image}
                alt={monster.name}
                className="w-32 h-32 object-contain mx-auto mb-2"
              />
              <h2 className="text-xl font-semibold text-white">{monster.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
