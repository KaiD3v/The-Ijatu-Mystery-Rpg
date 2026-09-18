# 01 - Conteudo, consistencia e governanca editorial

**Prioridade:** P0
**Estimativa:** 2 a 4 dias
**Dependencias:** nenhuma

## Objetivo

Remover sinais de prototipo e estabelecer uma fonte de conteudo confiavel antes do redesign e da producao de imagens.

## Escopo principal

- `src/data/locals.ts`
- `src/data/rules.ts`
- `src/data/lores.ts`
- `src/data/catalog.ts`
- `src/data/characters.ts`
- `src/Pages/Contatos.tsx`
- `README.md`

## Tarefas

### Guia editorial

- [ ] Definir a grafia oficial: `Ijatu Mystery`, `Ijatu` e nomes próprios.
- [ ] Definir tom de voz, capitalizacao, pontuacao, unidades, moeda e convencoes de atributos.
- [ ] Definir o ano e os limites historicos do cenario para evitar objetos e termos anacronicos.
- [ ] Criar um glossario de regras, pericias, atributos, condicoes e categorias de dano.

### Revisao dos locais

- [ ] Corrigir erros como `Pranca`, `int-erior`, `c- idade`, `aredores`, `arvore`, `preca` e `xxxxx`.
- [ ] Eliminar descricoes copiadas entre casas e corrigir nomes inconsistentes.
- [ ] Escrever uma sinopse curta e uma descricao completa para cada um dos 18 locais.
- [ ] Definir categoria, atmosfera, personagens relacionados e relevancia narrativa de cada local.
- [ ] Decidir quais locais realmente necessitam de mapa.
- [ ] Completar os segredos ou remover o bloco quando nao fizer parte do design narrativo.

### Revisao dos personagens

- [ ] Padronizar nomes, acentos, idades, profissoes e medidas em portugues.
- [ ] Corrigir campos em ingles nas aparencias.
- [ ] Corrigir Carmen como professora, Mário como prefeito e a profissao truncada de Julio.
- [ ] Remover descricoes copiadas e preencher lores vazias.
- [ ] Padronizar nomes e valores de pericias, PV, PE e atributos.
- [ ] Definir relacoes entre personagens, locais frequentados e papel na trama.
- [ ] Separar informacoes publicas de spoilers reservados ao mestre.

### Regras, historias e catalogo

- [ ] Preencher as regras de curta, media e longa distancia.
- [ ] Corrigir condicoes incompletas, como `-1PV/`, e padronizar duracao e cura.
- [ ] Revisar coerencia entre rolagens de 2d6 e ataques descritos com 1d6.
- [ ] Reescrever habilidades ambiguas e corrigir termos mecanicos inconsistentes.
- [ ] Revisar as duas historias para ritmo, clareza, originalidade e conexao com a campanha.
- [ ] Padronizar precos e formato monetario de armas e itens.
- [ ] Definir politica para conteudo sensivel e avisos de spoiler.

### Credibilidade e autoria

- [ ] Substituir `contato@exemplo.com` por um contato real ou remover o CTA temporariamente.
- [ ] Criar informacoes de autoria, papeis no projeto, links profissionais e creditos.
- [ ] Definir licenca do codigo e politica de uso dos assets.
- [ ] Remover do README qualquer linguagem de produto provisório na versao publicada.

## Criterios de aceite

- [ ] Busca global nao encontra `exemplo.com`, `xxxxx`, palavras hifenizadas acidentalmente ou instrucoes de desenvolvimento.
- [ ] Todos os personagens possuem ficha completa e coerente.
- [ ] Todas as regras publicadas podem ser aplicadas sem lacunas.
- [ ] Cada local possui conteudo suficiente para orientar a futura imagem.
- [ ] Revisao final em portugues aprovada por uma segunda leitura humana.
