# AGENT.md

Notas para retomar trabalho de automação/agentes neste repo.

## Migração de major versions (Dependabot) — 2026-09-06

Escopo: migrar PRs abertos do Dependabot com bump de MAJOR version.

### Migrado com sucesso

- **PR #14** `react-router-dom` 5.0.1 → 6.30.6. Reescrito `src/components/Routes.js`:
  `Switch` → `Routes` (aliased `RouterRoutes` para não colidir com o componente
  local `Routes`), `Route component={X}` → `Route element={<X />}`, removido
  `exact` (default no v6), removido hack `useContext(__RouterContext)` em favor
  de `useLocation()` (API pública, já existia no v5 mas não era usada aqui).
  `yarn test` e `yarn build` passando. CI verde, merge squash manual (ver nota
  abaixo). PR MERGED.

### Adiado (fora de escopo — não são major)

Ficaram abertos, não mexi: PR #10 (`lodash` 4.17.15→4.18.1), #9 (`node-forge`
1.3.1→1.4.0), #2 (`handlebars` 4.1.2→4.5.3), #1 (`eslint-utils` 1.4.0→1.4.3).
Todos minor/patch — dependabot.yml só agrupa minor/patch, majors saem em PR
individual. Se quiser, dá pra mergear direto (sem migração de código).

### Decisão técnica não-óbvia

O job `dependabot` do workflow compartilhado (`osmarpetry/.github` node.yml)
só roda automerge quando `github.actor == 'dependabot[bot]'`. Ao empurrar um
commit meu pro branch do PR pra corrigir a migração, o actor do evento
`pull_request` synchronize passa a ser eu, então o automerge NÃO dispara mais
sozinho nesse PR. Tive que rodar `gh pr merge --squash` manualmente após CI
verde. Isso vale pra qualquer PR de major que precise de correção manual:
depois de um push humano, checar CI e mergear manualmente — o automerge não
volta a agir nesse PR.

### Próximos passos se retomar

- Nada pendente de major no momento. Repo tem 128 vulns reportadas pelo
  GitHub (7 critical) no dependabot alerts — não investigado aqui, escopo era
  só PRs abertos de major version.
