# 02 - Direcao de arte e pipeline de imagens

**Prioridade:** P0
**Estimativa:** 5 a 8 dias
**Dependencias:** tarefa 01

## Objetivo

Eliminar hotlinks e imagens quebradas, criando uma biblioteca visual autoral e coerente com o universo de Ijatu.

## Direcao proposta

`Arquivo criminal amazonico de 1987`: fotografia cinematografica umida, neblina, vegetacao densa, luz pratica quente, grao analogico moderado, tons de preto, osso, verde profundo, dourado envelhecido e vermelho oxidado.

## Tarefas

### Biblia visual

- [ ] Criar referencias de enquadramento, lente, iluminacao, granulação e paleta.
- [ ] Definir regras para arquitetura, figurino, tecnologia e veiculos do periodo.
- [ ] Definir prompts-base e negativos: sem texto gerado, marcas, objetos modernos ou anatomia inconsistente.
- [ ] Criar uma imagem piloto de local e um retrato piloto antes de produzir a serie completa.
- [ ] Aprovar consistencia visual em desktop e mobile.

### Assets a produzir

- [ ] Criar 1 hero cinematografico para a home.
- [ ] Criar novas capas 4:3 para todos os 18 locais, inclusive os 8 hotlinks que ainda carregam.
- [ ] Criar retratos coerentes para os 13 personagens publicados, preferencialmente em 4:5.
- [ ] Refazer os 9 mapas atuais como plantas de evidencia controladas pelo projeto.
- [ ] Produzir mapas adicionais apenas quando forem relevantes para gameplay.
- [ ] Criar imagem Open Graph de 1200x630.
- [ ] Criar favicon e icones derivados da identidade definitiva.

### Pipeline tecnico

- [ ] Organizar assets em `src/assets/locations`, `characters`, `maps`, `brand` e `social`.
- [ ] Adotar nomes previsiveis e sem caracteres especiais.
- [ ] Preservar arquivos mestres fora do bundle e versionar apenas derivados de producao.
- [ ] Exportar AVIF e WebP com fallback quando necessario.
- [ ] Gerar tamanhos responsivos, por exemplo 480, 768, 1200 e 1600 px.
- [ ] Registrar largura, altura, alt text, legenda e credito em um manifesto tipado.
- [ ] Implementar placeholder de baixa resolucao e fallback visual para erro.
- [ ] Aplicar `loading="lazy"` abaixo da dobra e prioridade apenas no hero.
- [ ] Remover todas as URLs do Bing e Pinterest dos dados.

## Criterios de aceite

- [ ] Nenhum `<img>` utiliza URL externa.
- [ ] Nenhuma imagem retorna `naturalWidth = 0` durante os testes.
- [ ] Capas e retratos parecem pertencer ao mesmo universo visual.
- [ ] Nao ha texto ilegivel, marcas, artefatos ou elementos anacronicos nas geracoes.
- [ ] Cada imagem possui alt text adequado e dimensoes declaradas.
- [ ] O carregamento abaixo da dobra e lazy e nao causa layout shift perceptivel.
