# Design system · Ijatu Mystery

Este documento registra os fundamentos reutilizáveis da interface. A composição visual deve continuar legível quando o grão, a vinheta e o brilho de cursor são removidos.

## Tokens semânticos

| Token | Uso | Valor |
| --- | --- | --- |
| `void` | fundo principal | `#050508` |
| `abyss` | fundo de rodapé e áreas profundas | `#08080f` |
| `panel` / `panel2` | superfícies e elevação | `#0e0e16` / `#14141f` |
| `stroke` | divisórias e bordas | `#2a2a38` |
| `bone` | texto principal | `#eae6de` |
| `mist` | texto secundário (mínimo AA em superfícies escuras) | `#aaa7b1` |
| `signal` | ação, foco e evidência | `#c9a227` |
| `blood` | alerta narrativo/perigo | `#5c1a22` |

Escala de tipo: corpo começa em `0.875rem` (`14px`), leitura confortável em `1rem–1.125rem`, títulos usam a fonte display em escala fluida. `10px` é reservado a etiquetas técnicas e metadados, nunca a texto corrido.

Escala de espaço: múltiplos de `4px`, com `1rem` para controles compactos, `1.5rem–2rem` para cards e `5rem–7rem` para seções. Raios são discretos (`6px` para controles, `12px` para cards); sombras só indicam elevação, não substituem bordas ou contraste.

## Componentes

Os componentes estão em `src/components/ui/index.tsx`:

- `Button` / `ButtonLink`: `primary`, `secondary`, `quiet` e `icon`, com foco, disabled e loading.
- `DossierCard`: superfície para locais, personagens, histórias, regras e evidências.
- `SectionHeader`, `DossierMeta` e `StatusBadge`: hierarquia editorial e metadados.
- `MediaFrame`: proporção e tratamento de mídia com carregamento lazy.
- `EmptyState`, `Skeleton` e `Spinner`: estados de ausência, carregamento e ação pendente.

### Composição correta

```tsx
<DossierCard href="/locais/cidade-ijatu" label="Abrir dossiê">
  <MediaFrame src={image} alt="A praça de Ijatu ao entardecer" />
  <p className="eyebrow">Local · Acesso público</p>
  <h3 className="mt-2 font-display text-2xl text-bone">A Cidade de Ijatu</h3>
</DossierCard>
```

### Evitar

- Não usar cor, sombra ou fonte fora dos tokens sem justificar a exceção.
- Não transformar `hover` em único indicador de ação; todos os links e botões têm foco visível.
- Não usar imagem sem `alt`, nem escrever texto corrido em `9px/10px`.
- Não empilhar três CTAs de mesmo peso; a Home tem uma ação primária e uma secundária.

## Movimento e acessibilidade

As curvas usam `cubic-bezier(0.22, 1, 0.36, 1)` e durações de `160ms`, `260ms` e `520ms`. `prefers-reduced-motion: reduce` remove parallax, transições longas e scroll suave. O menu móvel prende foco, fecha com `Escape`, fecha ao navegar e restaura o scroll do documento.
