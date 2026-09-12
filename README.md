# API Testing - PokéAPI

Suíte de testes automatizados para validar endpoints, respostas e status 
codes da PokéAPI (https://pokeapi.co), usando Postman e Newman.
Este repositório foi desenvolvido como atividade prática da disciplina 
de DevOps (PUCPR), com o objetivo de aplicar conceitos de versionamento 
com Git e testes automatizados de API, servindo de base para futura 
integração com pipelines de CI/CD.

## Ferramentas utilizadas
 1. Postman (criação e organização dos testes)
 2. Newman (execução via linha de comando / CI)
 3. PokéAPI (API pública utilizada como alvo dos testes)

## Estrutura
 `pokeapi.postman_collection.json` — collection com as requisições e 
  testes automatizados

## Endpoints testados
 - GET /pokemon/{name} — busca de Pokémon por nome
 - (em construção...)

## Como rodar os testes localmente
\`\`\`bash
newman run pokeapi.postman_collection.json
\`\`\`
