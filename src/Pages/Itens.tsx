import "../index.css";
import { useEffect, useState } from "react";
import weaponsData from "../json/Weapons.json";
import itemsData from "../json/Items.json";

interface Weapon {
  id: string;
  name: string;
  description: string;
  price: string;
  damage: string;
}

interface Item {
  id: string;
  name: string;
  description: string;
  price: string;
  type: string;
}

const weapons: Weapon[] = weaponsData.weapons;
const items: Item[] = itemsData.items;

export const Itens = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // buscar dados do json weapons
  useEffect(() => {
    const weapon = weapons.find(
      (weapon) => weapon.id === (selectedWeapon?.id || "")
    );
    setSelectedWeapon(weapon || null);

    const item = items.find((item) => item.id === (selectedItem?.id || ""));
    setSelectedItem(item || null);
  }, [selectedWeapon, selectedItem]);

  return (
    <div className="text-gray-300 m-4">
      <div className="flex flex-col justify-center items-center text-initial content-center">
        <h1 className="m-2 text-2xl">Bem-vindo à página de itens!</h1>
        <p className="sm:mx-32 my-5 m-4">
          Nossa página de itens é o lugar ideal para explorar uma ampla
          variedade de equipamentos, artefatos e objetos que podem enriquecer e
          diversificar sua experiência no mundo do jogo. Aqui, você encontrará
          uma vasta coleção de itens cuidadosamente selecionados para atender às
          necessidades e interesses dos aventureiros mais exigentes.
        </p>
      </div>
      <div className="m-0 p-0 border border-gray-400 w-full" />
      <div className="flex flex-col my-5 justify-center items-center gap-4 text-initial content-center">
        <h1 className="m-2 underline text-2xl">Armas</h1>
        <table>
          <thead>
            <tr>
              <th>Arma</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Dano</th>
            </tr>
          </thead>
          <tbody>
            {/* Map das armas */}
            {weapons.map((weapon) => (
              <tr key={weapon.id}>
                <td>{weapon.name}</td>
                <td>{weapon.description}</td>
                <td>Cr$ {weapon.price} </td>
                <td>{weapon.damage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col my-5 justify-center items-center gap-4 text-initial content-center">
        <h1 className="m-2 underline text-2xl">Itens</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {/* Map das armas */}
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>CR$ {item.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col my-5 justify-center items-center gap-4 text-initial content-center">
        <h1 className="m-2 text-2xl">Improvisando</h1>
        <p>
          Às vezes, os aventureiros se deparam com situações onde não têm acesso
          aos equipamentos adequados. Nessas circunstâncias, a criatividade e a
          habilidade em improvisar podem ser suas melhores aliadas. Abaixo estão
          algumas ideias e sugestões para improvisar itens e soluções em
          momentos de necessidade:
        </p>
        <ul>
          <li>
            <strong>Armas Improvisadas:</strong> Utilize objetos do ambiente,
            como pedras, paus ou ferramentas, para criar armas improvisadas em
            situações de combate desesperadoras.
          </li>
          <li>
            <strong>Utensílios de Sobrevivência:</strong> Aproveite recursos
            naturais, como folhas, galhos e cascas de árvores, para construir
            abrigos temporários, armadilhas para caça ou ferramentas de pesca.
          </li>
          <li>
            <strong>Disfarces e Camuflagem:</strong> Use roupas e tecidos
            disponíveis para se misturar ao ambiente e passar despercebido por
            inimigos ou animais selvagens.
          </li>
          <li>
            <strong>Truques e Armadilhas:</strong> Improvise dispositivos
            simples, como armadilhas de corda ou armadilhas improvisadas, para
            desativar armadilhas inimigas ou atrasar perseguidores.
          </li>
          <li>
            <strong>Comunicação e Sinais:</strong> Use sinais de fumaça, pedras
            ou ramos para comunicar com aliados à distância ou enviar mensagens
            codificadas para reforços.
          </li>
        </ul>
        <p>
          Lembrando sempre que a eficácia dessas improvisações depende da
          criatividade, do conhecimento do ambiente e das habilidades dos
          personagens envolvidos.
        </p>
      </div>
    </div>
  );
};
