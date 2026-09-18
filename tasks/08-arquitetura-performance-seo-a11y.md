# 08 - Arquitetura, performance, SEO e acessibilidade

**Prioridade:** P1
**Estimativa:** 4 a 6 dias
**Dependencias:** pode iniciar apos a tarefa 03

## Objetivo

Levar a aplicacao de uma SPA funcional para uma entrega tecnicamente madura e mensuravel.

## Tarefas

### Arquitetura e bundle

- [ ] Converter paginas para lazy loading com `React.lazy` e `Suspense`.
- [ ] Isolar GSAP e ScrollTrigger na home.
- [ ] Avaliar se Lenis agrega valor suficiente para permanecer global.
- [ ] Remover dependencias e assets nao utilizados.
- [ ] Modernizar Vite, Tailwind e PostCSS em uma branch dedicada.
- [ ] Corrigir avisos de build e atualizar a base de browsers suportados.
- [ ] Definir budgets de JavaScript, CSS e imagens.

### Performance

- [ ] Medir bundle inicial antes e depois das mudancas.
- [ ] Evitar preload ou prioridade em imagens abaixo da dobra.
- [ ] Otimizar fontes e considerar self-host dos arquivos usados.
- [ ] Minimizar filtros de blur, backdrop e camadas fixas em dispositivos modestos.
- [ ] Validar LCP, CLS e INP em build de producao.

### SEO e compartilhamento

- [ ] Criar titulo e description especificos por rota.
- [ ] Adicionar canonical, Open Graph e Twitter Card.
- [ ] Criar `robots.txt` e sitemap.
- [ ] Adicionar JSON-LD apropriado para projeto criativo ou jogo.
- [ ] Garantir que links diretos funcionem no hosting.
- [ ] Avaliar pre-renderizacao das principais rotas publicas.

### Acessibilidade

- [ ] Trocar o container principal por `<main id="main-content">`.
- [ ] Gerenciar foco ao mudar de rota.
- [ ] Garantir apenas um `<h1>` por pagina.
- [ ] Revisar alt texts, labels, nomes acessiveis e landmarks.
- [ ] Substituir o drawer customizado por uma primitive com focus trap.
- [ ] Testar zoom de 200%, reduced motion, alto contraste e teclado.
- [ ] Corrigir contraste de microtextos com opacidade.

## Criterios de aceite

- [ ] Chunk inicial abaixo do budget definido e sem alerta de 500 kB.
- [ ] Lighthouse >= 90 em performance, acessibilidade, boas praticas e SEO.
- [ ] LCP <= 2,5 s e CLS <= 0,1 em uma configuracao de teste documentada.
- [ ] Nenhum erro critico em axe ou auditoria equivalente.
- [ ] Todas as rotas importantes possuem metadados proprios.
