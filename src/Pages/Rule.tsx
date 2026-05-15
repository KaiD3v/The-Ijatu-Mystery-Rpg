import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { RulesPageLayout } from "../components/layout/RulesPageLayout";
import { useRuleById } from "../hooks/useRuleById";
import { formatRichText } from "../utils/formatRichText";
import type { GameRule } from "../types/content";

function RuleArticle({ rule }: { rule: GameRule }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8"
      key={rule.id}
    >
      <h1 className="mt-2 border-b border-stroke/80 pb-4 font-display text-3xl font-light italic text-bone sm:text-4xl">
        {rule.title}
      </h1>
      <div
        className="text-left font-sans text-base leading-relaxed text-mist [&_strong]:text-bone [&_u]:text-signal/90"
        dangerouslySetInnerHTML={{
          __html: formatRichText(rule.content),
        }}
      />
    </m.div>
  );
}

export function Rule() {
  const { id } = useParams<{ id: string }>();
  const selectedRule = useRuleById(id);

  return (
    <RulesPageLayout>
      {selectedRule ? (
        <RuleArticle rule={selectedRule} />
      ) : (
        <p className="font-mono text-sm text-mist">Trecho não localizado no arquivo.</p>
      )}
    </RulesPageLayout>
  );
}
