# 06 - Fichas e relacoes de personagens

**Prioridade:** P1
**Estimativa:** 3 a 5 dias
**Dependencias:** tarefas 01, 02 e 03

## Objetivo

Criar um elenco visualmente consistente, facil de consultar e relevante para a investigacao.

## Tarefas

### Modelo de dados

- [ ] Migrar dados JSX para uma estrutura tipada sem elementos React embutidos.
- [ ] Substituir icones JSX por IDs de icone ou categorias.
- [ ] Criar IDs estaveis, nome completo, apelido, ocupacao, idade e papel narrativo.
- [ ] Adicionar relacoes, locais, objetivos, pistas, segredos e status.
- [ ] Separar estatisticas mecanicas de descricao narrativa.

### Listagem

- [ ] Exibir retrato maior, nome, ocupacao e uma frase distintiva.
- [ ] Diferenciar protagonistas, NPCs, suspeitos e figuras publicas sem revelar spoilers.
- [ ] Adicionar filtros e busca.
- [ ] Melhorar acessibilidade dos retratos e nomes acessiveis dos cards.

### Ficha detalhada

- [ ] Avaliar substituir o modal por rota dedicada compartilhavel.
- [ ] Manter dialog rapido apenas para consulta resumida, se necessario.
- [ ] Exibir retrato, personalidade, aparencia, atributos, pericias, historia e relacoes com hierarquia clara.
- [ ] Ocultar spoilers no modo Jogador.
- [ ] Garantir focus trap, restauracao de foco, Escape e scroll correto.
- [ ] Evitar scroll interno excessivo em telas pequenas.

## Criterios de aceite

- [ ] As 13 fichas nao possuem campos vazios, duplicados, truncados ou em idioma inconsistente.
- [ ] Cada personagem possui retrato proprio e coerente com sua descricao.
- [ ] Links diretos para fichas podem ser compartilhados.
- [ ] Dialog ou pagina funciona integralmente por teclado e leitor de tela.
