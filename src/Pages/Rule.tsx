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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col gap-8"
      key={rule.id}
    >
      <h1 className="sm:text-4xl underline text-gray-50 text-2xl italic font-times mt-4">
        {rule.title}
      </h1>
      <div className="text-left">
        <p
          dangerouslySetInnerHTML={{
            __html: formatRichText(rule.content),
          }}
        />
      </div>
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
      ) : null}
    </RulesPageLayout>
  );
}
