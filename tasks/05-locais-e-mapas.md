# 05 - Experiencia de locais e mapas

**Prioridade:** P1
**Estimativa:** 3 a 5 dias
**Dependencias:** tarefas 01, 02 e 03

## Objetivo

Transformar a listagem de locais em um arquivo exploravel e as paginas de detalhe em dossies ricos e uteis durante uma sessao.

## Tarefas

### Modelo de dados

- [ ] Adicionar categoria, resumo, atmosfera, coordenada de mapa, personagens relacionados e tags.
- [ ] Separar `publicFacts`, `gmSecrets`, `clues` e `relatedEvents`.
- [ ] Substituir URLs livres por IDs de assets tipados.
- [ ] Validar dados obrigatorios em build ou teste.

### Listagem

- [ ] Redesenhar cards com imagem, categoria, numero de arquivo, titulo e resumo.
- [ ] Criar filtros por categoria e relevancia narrativa.
- [ ] Criar busca por titulo, personagem e palavra-chave.
- [ ] Adicionar estado vazio e opcao para limpar filtros.
- [ ] Virtualizar ou paginar apenas se as medicoes mostrarem necessidade.

### Detalhes

- [ ] Criar cabecalho com capa, metadados e resumo.
- [ ] Organizar descricao, pistas, personagens relacionados, eventos e mapa em secoes.
- [ ] Proteger segredos com o modo Mestre.
- [ ] Adicionar links de retorno, local anterior/proximo e itens relacionados.
- [ ] Tratar local inexistente com a mesma experiencia da pagina 404.

### Mapa de Ijatu

- [ ] Definir se o mapa sera SVG interativo ou uma imagem com hotspots acessiveis.
- [ ] Permitir selecionar um ponto e abrir resumo do local.
- [ ] Criar alternativa em lista para teclado e leitores de tela.
- [ ] Sincronizar IDs do mapa com as rotas de detalhes.

## Criterios de aceite

- [ ] Todos os 18 locais possuem capa propria e ficha editorial completa.
- [ ] Filtros e busca funcionam em teclado, touch e desktop.
- [ ] Segredos nao aparecem no modo Jogador.
- [ ] O mapa possui alternativa acessivel e nao depende apenas de cor.
