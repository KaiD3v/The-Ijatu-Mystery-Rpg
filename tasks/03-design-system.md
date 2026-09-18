# 03 - Design system premium

**Prioridade:** P1
**Estimativa:** 3 a 5 dias
**Dependencias:** tarefas 01 e 02

## Objetivo

Transformar a estetica atual em um sistema visual consistente, legivel e reutilizavel em toda a aplicacao.

## Tarefas

### Fundamentos

- [ ] Documentar tokens semanticos de cor para fundo, superficie, texto, borda, pista, perigo e foco.
- [ ] Validar contraste WCAG AA em todos os pares de texto e fundo.
- [ ] Definir escala tipografica responsiva com tamanho minimo legivel.
- [ ] Reduzir o uso de textos de 9-10 px apenas a metadados realmente secundarios.
- [ ] Definir escala de espacos, raios, sombras, bordas e largura de leitura.
- [ ] Definir regras de textura e grao para preservar clareza.

### Componentes

- [ ] Criar variantes de botao: primario, secundario, discreto e iconico.
- [ ] Criar componentes de card para local, personagem, historia, regra e evidencia.
- [ ] Criar `SectionHeader`, `DossierMeta`, `StatusBadge`, `MediaFrame` e `EmptyState`.
- [ ] Criar skeletons para paginas e imagens carregadas sob demanda.
- [ ] Padronizar estados hover, focus-visible, active, disabled e loading.
- [ ] Padronizar dialogs, drawers, tooltips e disclosures com componentes acessiveis.

### Movimento

- [ ] Definir duracoes e curvas para entrada, hover, modal e transicao de rota.
- [ ] Remover animacoes redundantes entre App, pagina e componentes internos.
- [ ] Manter parallax somente quando acrescentar profundidade narrativa.
- [ ] Garantir equivalentes estaticos com `prefers-reduced-motion`.

### Documentacao

- [ ] Criar uma pagina interna ou documento de referencia dos componentes.
- [ ] Registrar exemplos corretos e incorretos de uso.
- [ ] Centralizar composicao de classes para reduzir repeticao.

## Criterios de aceite

- [ ] Nenhuma pagina cria cores, sombras ou tipografia fora dos tokens sem justificativa.
- [ ] Todos os elementos interativos possuem estado de foco visivel.
- [ ] Textos corridos permanecem confortaveis em mobile e desktop.
- [ ] O design permanece reconhecivel mesmo sem as camadas de grao e vinheta.
