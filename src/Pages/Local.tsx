import { motion as m } from "framer-motion";
import { useLocalById } from "../hooks/useLocalById";
import { formatRichText } from "../utils/formatRichText";
import { useParams } from "react-router-dom";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Local() {
  const { id } = useParams<{ id: string }>();
  const selectedLocal = useLocalById(id);

  if (!selectedLocal) {
    return (
      <PageFrame eyebrow="404" title="Local não encontrado">
        <p className="font-sans text-mist">Este endereço não consta no arquivo.</p>
      </PageFrame>
    );
  }

  const hasMapImage = Boolean(
    selectedLocal.mapImage && selectedLocal.mapImage.trim() !== ""
  );

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame eyebrow="Cena" title={selectedLocal.title}>
        <div className="mt-8 space-y-10">
          <div className="overflow-hidden rounded-lg border border-stroke shadow-panel">
            <img
              src={selectedLocal.image}
              alt={selectedLocal.title}
              className="max-h-[28rem] w-full object-cover"
            />
          </div>
          <div
            className="font-sans text-base leading-relaxed text-mist [&_strong]:text-bone"
            dangerouslySetInnerHTML={{
              __html: formatRichText(selectedLocal.details),
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-stroke to-transparent" />
          {hasMapImage ? (
            <section>
              <h2 className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                Planta / mapa
              </h2>
              <img
                src={selectedLocal.mapImage}
                alt={`Mapa de ${selectedLocal.title}`}
                className="mt-4 rounded-lg border border-stroke shadow-innerline"
              />
            </section>
          ) : null}
          <div className="h-px bg-stroke/80" />
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
              Segredos arquivados
            </h2>
            {selectedLocal.secrets && selectedLocal.secrets.length > 0 ? (
              <ul className="mt-4 list-inside list-disc space-y-2 text-left font-sans text-mist">
                {selectedLocal.secrets.map((secret, index) => (
                  <li key={index}>{secret}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 font-sans text-sm text-mist/80">
                Nenhuma anotação confidencial neste dossiê.
              </p>
            )}
          </section>
        </div>
      </PageFrame>
    </m.div>
  );
}
