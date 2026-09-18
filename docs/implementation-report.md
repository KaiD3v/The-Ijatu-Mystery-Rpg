# Relatório de implementação e revisão

**Data:** 18 de setembro de 2026
**Escopo:** tarefas `01` a `09` do diretório `tasks/`

## Resumo executivo

Quatro subagentes Luna trabalharam nas frentes de conteúdo/assets, design system/home, locais/personagens e regras/arquitetura/QA. Por limite de concorrência da sessão, três ficaram ativos simultaneamente e o quarto iniciou assim que a primeira vaga foi liberada.

O resultado é uma renovação ampla e integrável, mas não uma conclusão integral das nove especificações. A aplicação ganhou conteúdo tipado, rotas de detalhe, filtros, modo Jogador/Mestre, regras estruturadas, componentes reutilizáveis, carregamento lazy, metadados por rota e um quality gate inicial. Em contrapartida, a produção visual definitiva, os testes de interface/E2E, as auditorias mensuradas, o deploy e parte da governança editorial continuam pendentes.

### Atualização de arquitetura de dados

Após a revisão inicial, a fonte de conteúdo foi consolidada em objetos TypeScript readonly dentro de `src/data/`. Regras, locais, histórias, armas, itens e personagens agora usam `satisfies`, unions de IDs e referências cruzadas tipadas; os arquivos de dados JSON foram removidos. O validador de conteúdo foi atualizado para empacotar e inspecionar as coleções reais com esbuild, incluindo paridade dos registros de IDs e referências entre entidades.

Nenhum checkbox em `tasks/` foi marcado porque vários critérios de aceite ainda não foram validados.

## O que foi implementado

### Conteúdo e governança

- Guia editorial em `docs/editorial-guide.md`, com grafia oficial, tom, período de 1987, moeda, sistema 2d6, glossário mecânico, spoilers, conteúdo sensível e política de assets.
- Revisão dos dados editoriais de regras, locais, histórias, armas e itens.
- Remoção de `contato@exemplo.com`, hotlinks Bing/Pinterest, placeholders `xxxxx` e HTML injetado por `dangerouslySetInnerHTML`.
- Treze personagens migrados de JSX para `src/data/characters.ts`, com IDs estáveis, relações, locais, objetivos, pistas, segredos, status e estatísticas.
- Dezoito locais disponíveis em `src/data/locals.ts`, com categorias, resumo, atmosfera, coordenadas, tags, fatos públicos, pistas, segredos, eventos e relações.

### Experiência e design system

- Home reestruturada com proposta do projeto, caso, linha do tempo, destaques, “Como jogar” e autoria.
- Design system documentado em `docs/design-system.md` e componentes reutilizáveis em `src/components/ui/`.
- Tokens semânticos, foco visível, estados de interação, skeleton/spinner e suporte a `prefers-reduced-motion`.
- Menu móvel com foco contido, `Escape`, bloqueio de scroll, fechamento na navegação e restauração de foco.
- Intro cinematográfica limitada à Home e à primeira visita da sessão.

### Locais, personagens e modo de mesa

- Busca, filtros, contadores, limpeza de filtros e estados vazios para locais e personagens.
- Fichas compartilháveis em `/personagens/:id` e dossiês em `/locais/:id`.
- Navegação anterior/próximo, relações entre entidades e mapa esquemático com hotspots e alternativa em lista.
- Estado global Jogador/Mestre persistido localmente, padrão Jogador e confirmação adicional nas fichas antes de mostrar pistas e segredos.

### Regras, histórias e catálogo

- Regras convertidas para seções tipadas com sumário, seção atual, listas, tabelas, exemplos, callouts e navegação entre capítulos.
- Histórias com data, local, personagens, tipo, status e registros relacionados.
- Itens e armas com moeda, dano, alcance, tipo, disponibilidade, filtros e referências às regras.
- Tabelas responsivas, com cards equivalentes no mobile.

### Arquitetura, SEO e qualidade

- Rotas carregadas com `React.lazy` e `Suspense`.
- Lenis/GSAP retirados da casca global e usados apenas pela Home.
- `<main id="main-content">`, skip link e foco após mudança de rota.
- Título, description, canonical, Open Graph, Twitter Card e JSON-LD atualizados conforme o grupo de rota.
- `robots.txt`, sitemap, limite de alerta de chunk no Vite e rewrite de SPA.
- CI em `.github/workflows/ci.yml` com lint, tipos, teste de conteúdo e build em Node 24.
- Script `scripts/validate-content.mjs` para validação das coleções TypeScript reais, unicidade/paridade de IDs e referências cruzadas.
- README ampliado com seção de case study, decisões técnicas, limites e comandos de verificação.

## Estado por tarefa

| Tarefa | Estado | Observação |
| --- | --- | --- |
| 01 — Conteúdo e governança | Parcial avançado | Base editorial e dados revisados; falta revisão humana final e licença. A fonte única TypeScript foi consolidada. |
| 02 — Arte e imagens | Parcial | Hotlinks removidos e assets locais criados; a série visual definitiva não foi produzida. |
| 03 — Design system | Parcial avançado | Tokens, componentes e documentação existem; faltam auditoria de contraste e validação visual completa. |
| 04 — Home e navegação | Parcial avançado | Nova estrutura, menu e intro implementados; hero autoral não está integrado e breadcrumbs formais não existem. |
| 05 — Locais e mapas | Parcial avançado | Modelo, filtros, dossiês e mapa acessível existem; faltam capas/mapas exclusivos e validação no build de produção. |
| 06 — Personagens | Parcial avançado | Migração tipada, filtros e rotas dedicadas concluídos; retratos ainda não formam uma série visual nova e validada. |
| 07 — Regras, histórias, itens e Mestre | Parcial avançado | Estrutura funcional implementada; o aviso global de spoilers ainda precisa ser endurecido. |
| 08 — Arquitetura, performance, SEO e a11y | Parcial | Lazy loading e base semântica/SEO existem; métricas, prerender, axe e Lighthouse não foram executados. |
| 09 — Testes, deploy e case study | Parcial inicial | CI e validação estrutural TypeScript existem; componentes, E2E, a11y, regressão visual, preview e deploy permanecem pendentes. |

## Validações realizadas

- `git diff --check`: aprovado; apenas avisos esperados de LF/CRLF no Windows.
- Conteúdo TypeScript empacotado com esbuild: 5 regras, 18 locais, 2 histórias, 6 armas, 5 itens, 13 personagens.
- IDs únicos e paridade dos registros: todas as coleções correspondem aos unions de IDs declarados.
- Referências cruzadas verificadas: nenhuma relação de personagem ou local aponta para ID inexistente.
- Busca estática: sem `exemplo.com`, `xxxxx`, Bing/Pinterest ou `dangerouslySetInnerHTML` no código publicado.
- Transpilação com o binário local do esbuild: 45 arquivos TypeScript/TSX processados sem erro de sintaxe.
- Bundle alternativo com esbuild: 25 saídas geradas, 2.706.509 bytes brutos no total, com todos os imports resolvidos. Este número não é comparável diretamente ao bundle final do Vite porque a verificação usou configuração própria e imagens incorporadas.

### Validações não executadas

`node` e `npm` não estão disponíveis no ambiente. Por isso não foi possível executar:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Também não foram executados Lighthouse, axe, testes reais de navegador, inspeção em 390/768/1024/1440 px, LCP/CLS/INP ou testes cross-browser. O CI foi criado, mas ainda precisa rodar em um push ou pull request real.

## O que deve ser corrigido

### Prioridade alta

1. **Executar o quality gate real com Node 24.** O bundle alternativo valida sintaxe e imports, não tipos, regras do ESLint nem o build exato do Vite.
2. **Proteger a ativação global do modo Mestre.** Os botões da navegação mudam o modo imediatamente. Fichas exigem confirmação para pistas/segredos, mas capítulos exclusivos do mestre podem aparecer apenas ao trocar o modo. Deve haver aviso/confirmação global antes de persistir `mestre`.
3. **Manter a fonte única TypeScript.** A migração dos dados para `src/data/*.ts` foi concluída nesta atualização. O validador agora acompanha as coleções reais, seus registros de IDs e as referências cruzadas; manter esse fluxo ao adicionar novos conteúdos.
4. **Continuar a atualização documental.** O README foi ajustado para descrever a fonte TypeScript e o validador esbuild. Permanecem apenas revisões editoriais gerais e a atualização das métricas de QA quando o CI estiver disponível.
5. **Confirmar o domínio antes do deploy.** O sitemap assume `https://ijatu-mystery.vercel.app`, e o `robots.txt` referencia sitemap relativo. Ajustar ambos para a URL canônica definitiva e verificar links diretos no ambiente publicado.
6. **Remover o anacronismo das “câmeras”.** Uma pista do Boteco do Tonhão diz que alguém “não consta nas câmeras”, em conflito com a ambientação de 1987 e com o próprio guia editorial.

### Prioridade média

1. **Produzir a biblioteca visual definitiva.** Os 18 locais reutilizam a mesma capa, os mapas reutilizam a mesma planta e o hero criado não é usado pela Home. Ainda faltam 18 capas próprias, retratos coerentes, mapas relevantes, AVIF/WebP responsivos e placeholders de baixa resolução.
2. **Trocar Open Graph SVG por PNG/JPEG 1200×630.** SVG não é aceito de forma consistente por crawlers sociais. Manter o SVG como fonte e exportar um derivado raster.
3. **Ampliar os testes.** O teste atual cobre coleções, IDs e referências em runtime. Adicionar testes de schemas mais detalhados, hooks, filtros, menu, dialogs/drawers, modo Mestre, links, imagens, console, acessibilidade e rotas E2E.
4. **Executar QA visual e acessível.** Validar breakpoints, zoom 200%, teclado, reduced motion, alto contraste, leitores de tela, focus trap e falha de assets.
5. **Revisar metadados de detalhe.** Títulos e descriptions são genéricos por grupo de rota; páginas de personagem, local, história e regra devem usar o nome da entidade. Gerar sitemap com detalhes públicos ou adotar prerender.
6. **Remover dependências e assets sem uso.** Radix Dialog/Dropdown/Icons e vários retratos/ícones antigos continuam no projeto sem import. Confirmar licenças antes de manter fotografias existentes.
7. **Self-host de fontes e medição real.** As fontes ainda vêm do Google Fonts. Avaliar privacidade, cache, preload e impacto no LCP antes de decidir.
8. **Reduzir valores visuais fora dos tokens.** Ainda existem cores hexadecimais e gradientes literais em componentes; documentar exceções ou promover esses valores a tokens semânticos.

### Governança e publicação

- Definir e adicionar uma licença; o README atualmente declara que não há licença.
- Fazer segunda leitura humana do conteúdo em português e revisar consistência histórica/mecânica.
- Atualizar capturas antes/depois do case study; as imagens atuais antecedem a renovação.
- Configurar preview por PR, analytics com privacidade, checklist de rollback e verificação pós-deploy.
- Publicar métricas somente depois de medi-las; não declarar Lighthouse 90, LCP ou CLS como atingidos antes da auditoria.

## Conclusão

A base passou de protótipo estático para uma aplicação mais estruturada, navegável e consciente de spoilers. O maior ganho está na arquitetura de conteúdo e na experiência de consulta. O maior débito continua sendo a distância entre a biblioteca visual provisória e a direção cinematográfica proposta, seguida pela falta de testes de interface e métricas reais. A próxima etapa deve começar pelo quality gate com Node 24, pela unificação dos dados e pelo fluxo seguro do modo Mestre; depois, produção visual e QA de navegador.
