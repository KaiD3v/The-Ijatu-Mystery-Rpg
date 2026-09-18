# 07 - Regras, historias, itens e modo Mestre

**Prioridade:** P1 para conteudo; P2 para modo Mestre
**Estimativa:** 4 a 7 dias
**Dependencias:** tarefas 01 e 03

## Objetivo

Transformar secoes atualmente estaticas em uma referencia editorial clara e adicionar o principal diferencial funcional do projeto.

## Tarefas

### Regras

- [ ] Substituir strings com HTML por secoes estruturadas e tipadas.
- [ ] Criar sumario com ancora e indicador da secao atual.
- [ ] Usar listas, callouts, tabelas e exemplos semanticamente corretos.
- [ ] Resolver os dois `<h1>` nas paginas individuais.
- [ ] Adicionar exemplos praticos de rolagem, combate, cura e condicoes.
- [ ] Criar navegacao anterior/proximo entre capitulos.

### Historias

- [ ] Criar metadados: data, local, personagens, tipo de registro e status.
- [ ] Melhorar tipografia de leitura longa e largura de coluna.
- [ ] Adicionar relacoes com locais e personagens citados.
- [ ] Criar capa ou evidencia visual apenas quando contribuir para a narrativa.
- [ ] Adicionar navegacao entre registros.

### Itens e armas

- [ ] Padronizar moeda, dano, alcance, tipo e disponibilidade.
- [ ] Criar filtros por tipo e alcance.
- [ ] Garantir tabelas responsivas sem duplicar integralmente a logica dos cards.
- [ ] Criar detalhes ou tooltips para termos mecanicos.
- [ ] Relacionar equipamentos a regras relevantes.

### Modo Jogador/Mestre

- [ ] Definir quais campos sao spoilers em cada entidade.
- [ ] Criar controle global de modo com estado persistente local.
- [ ] Usar revelacao explicita para conteudo do mestre.
- [ ] Exibir aviso claro antes de revelar spoilers.
- [ ] Garantir que o modo Jogador seja o padrao.
- [ ] Nao tratar o controle local como protecao de seguranca real.

## Criterios de aceite

- [ ] Nenhuma regra depende de `dangerouslySetInnerHTML`.
- [ ] Hierarquia de headings possui somente um `<h1>` por pagina.
- [ ] Tabelas permanecem utilizaveis em mobile.
- [ ] Conteudo do mestre nao aparece acidentalmente em cards, busca ou metadados do modo Jogador.
