# Plano de renovacao do The Ijatu Mystery RPG

Este diretorio converte a auditoria do projeto em tarefas implementaveis para transformar o site em uma experiencia premium, confiavel e adequada para portfolio.

## Objetivo do projeto

Entregar um site de RPG com identidade autoral, conteudo revisado, midia propria, excelente experiencia em desktop e mobile, acessibilidade, performance e documentacao de case study.

## Definicao global de pronto

- [ ] Nenhuma imagem quebrada, remota ou sem origem controlada pelo projeto.
- [ ] Nenhum texto provisório, placeholder, campo truncado ou inconsistente publicado.
- [ ] Navegacao completa por teclado e hierarquia semantica validada.
- [ ] Build, lint, testes e auditorias automatizadas aprovados.
- [ ] Performance, acessibilidade, boas praticas e SEO com nota minima 90 no Lighthouse.
- [ ] Layout validado em 390, 768, 1024 e 1440 px.
- [ ] Identidade visual consistente entre home, listagens, detalhes e modais.
- [ ] README final estruturado como case study de portfolio.

## Ordem recomendada

| Ordem | Arquivo | Resultado principal | Dependencias |
| --- | --- | --- | --- |
| 1 | `01-conteudo-e-governanca.md` | Base editorial confiavel | Nenhuma |
| 2 | `02-direcao-de-arte-e-imagens.md` | Biblioteca visual propria | Tarefa 01 |
| 3 | `03-design-system.md` | Fundamentos visuais reutilizaveis | Tarefas 01-02 |
| 4 | `04-home-e-navegacao.md` | Nova primeira impressao | Tarefa 03 |
| 5 | `05-locais-e-mapas.md` | Dossies de locais premium | Tarefas 01-03 |
| 6 | `06-personagens.md` | Fichas consistentes e memoraveis | Tarefas 01-03 |
| 7 | `07-regras-historias-itens-e-modo-mestre.md` | Conteudo completo e diferencial de produto | Tarefas 01 e 03 |
| 8 | `08-arquitetura-performance-seo-a11y.md` | Qualidade tecnica de producao | Pode ocorrer em paralelo apos 03 |
| 9 | `09-testes-deploy-e-case-study.md` | Entrega publica e portfolio | Todas as anteriores |

## Prioridades

- **P0:** impede publicacao profissional ou quebra a experiencia.
- **P1:** necessario para a versao premium.
- **P2:** diferencial de produto e portfolio.

## Fluxo de execucao

1. Criar uma branch de trabalho para cada arquivo de tarefa.
2. Implementar os itens na ordem indicada.
3. Executar lint, checagem de tipos, testes e build antes de concluir cada frente.
4. Registrar decisoes visuais e tecnicas importantes no README do projeto.
5. Marcar checkboxes somente depois de validar o criterio de aceite correspondente.
