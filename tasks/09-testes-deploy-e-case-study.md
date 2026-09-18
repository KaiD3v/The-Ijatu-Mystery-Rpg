# 09 - Testes, deploy e case study de portfolio

**Prioridade:** P1
**Estimativa:** 3 a 5 dias
**Dependencias:** tarefas 01 a 08

## Objetivo

Concluir a renovacao com garantia de qualidade, publicacao confiavel e uma apresentacao de portfolio capaz de explicar as decisoes do projeto.

## Tarefas

### Testes automatizados

- [ ] Configurar testes unitarios para dados, hooks e formatadores.
- [ ] Validar schema e unicidade de IDs de regras, locais, historias, personagens e itens.
- [ ] Criar testes de componentes para menu, cards, filtros, dialogs e modo Mestre.
- [ ] Criar testes end-to-end para todas as rotas principais e detalhes.
- [ ] Verificar links quebrados, imagens falhas e erros de console automaticamente.
- [ ] Adicionar testes de acessibilidade nos fluxos essenciais.

### QA visual e funcional

- [ ] Validar 390, 768, 1024 e 1440 px.
- [ ] Testar Chrome, Edge, Firefox e Safari ou ambiente equivalente.
- [ ] Testar navegacao somente por teclado.
- [ ] Testar conexao lenta e falha de carregamento de asset.
- [ ] Criar capturas de regressao visual das paginas principais.
- [ ] Revisar textos finais e creditos antes do deploy.

### Integracao e deploy

- [ ] Criar pipeline de CI com lint, tipos, testes e build.
- [ ] Bloquear merge quando um quality gate falhar.
- [ ] Configurar preview por pull request.
- [ ] Validar rewrite de SPA ou pre-renderizacao no ambiente final.
- [ ] Configurar dominio, HTTPS, analytics com privacidade e pagina 404.
- [ ] Criar checklist de rollback e verificacao pos-deploy.

### Case study

- [ ] Atualizar README com contexto, problema, objetivo e publico.
- [ ] Documentar auditoria inicial e principais riscos encontrados.
- [ ] Mostrar direcao de arte, design system e fluxo de geracao de assets.
- [ ] Explicar decisoes de arquitetura, acessibilidade e performance.
- [ ] Incluir comparacoes antes/depois e imagens de desktop/mobile.
- [ ] Publicar metricas finais de bundle, Lighthouse e testes.
- [ ] Explicitar contribuicoes autorais, stack, desafios e aprendizados.
- [ ] Adicionar links para demo, repositorio e contato profissional.

## Criterios de aceite

- [ ] CI passa em uma instalacao limpa.
- [ ] Todas as rotas abrem diretamente em producao.
- [ ] Nao existem erros de console, imagens quebradas ou links provisórios.
- [ ] O case study demonstra processo e resultados, nao apenas screenshots.
- [ ] A demo publicada corresponde ao commit documentado no portfolio.
