import { useParams } from "react-router-dom";
import { useLoreById } from "../hooks/useLoreById";

export function Lore() {
  const { id } = useParams<{ id: string }>();
  const lore = useLoreById(id);

  if (!lore) {
    return <div className="text-gray-200 mt-4">História não encontrada</div>;
  }

  return (
    <div className="text-gray-200 mt-4">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{lore.title}</h1>
        <p className="text-lg">{lore.content ?? ""}</p>
      </div>
    </div>
  );
}
