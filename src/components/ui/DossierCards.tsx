import type { ReactNode } from "react";
import { DossierCard, MediaFrame } from "./index";

interface BaseCardProps {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  children?: ReactNode;
}

export function LocationCard({ title, description, href, image, children }: BaseCardProps) {
  return (
    <DossierCard href={href} label="Abrir local">
      {image ? <MediaFrame src={image} alt="" /> : null}
      <p className="eyebrow mt-5">Local</p>
      <h3 className="mt-2 font-display text-2xl text-bone">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p> : null}
      {children}
    </DossierCard>
  );
}

export function CharacterPreviewCard({ title, description, href, image, children }: BaseCardProps) {
  return (
    <DossierCard href={href} label="Ver ficha">
      {image ? <MediaFrame src={image} alt={`Retrato de ${title}`} aspect="portrait" /> : null}
      <p className="eyebrow mt-5">Personagem</p>
      <h3 className="mt-2 font-display text-2xl text-bone">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p> : null}
      {children}
    </DossierCard>
  );
}

export function StoryCard(props: BaseCardProps) {
  return <TextDossierCard {...props} label="Ler história" eyebrow="História" />;
}

export function RuleCard(props: BaseCardProps) {
  return <TextDossierCard {...props} label="Abrir regra" eyebrow="Regra" />;
}

export function EvidenceCard(props: BaseCardProps) {
  return <TextDossierCard {...props} label="Examinar evidência" eyebrow="Evidência" />;
}

function TextDossierCard({ title, description, href, children, label, eyebrow }: BaseCardProps & { label: string; eyebrow: string }) {
  return (
    <DossierCard href={href} label={label}>
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-2 font-display text-2xl text-bone">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p> : null}
      {children}
    </DossierCard>
  );
}
