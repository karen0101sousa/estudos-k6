# 📊 Estudos com K6 – Testes de Performance

Este repositório reúne meus estudos práticos com a ferramenta **[K6](https://k6.io/)**, realizados durante um curso introdutório de testes de desempenho. Testes não funcionais sempre chamaram minha atenção, principalmente por muitas vezes não receberem o devido foco em projetos. Aqui compartilho os principais aprendizados e práticas aplicadas com a ferramenta.

---

## 🚀 Sobre o projeto

O objetivo deste projeto é documentar meu processo de aprendizagem sobre testes de performance utilizando o K6 — uma ferramenta moderna, simples e eficiente para realizar testes de carga e estresse em APIs.

---

## 🎯 O que aprendi até aqui

- ✅ **Conceitos fundamentais** sobre testes de desempenho
  - Diferença entre testes funcionais e não funcionais
  - Tipos de testes de performance:
    - Teste de carga
    - Teste de estresse
    - Teste de pico (spike test)
    - Teste de absorção (soak test)
    - Teste de fumaça (smoke test)

- ✅ **Testando requisições HTTP** com K6 e Postman
  - Métodos: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`
  - Verificações com `check()` e `group()`

- ✅ **Uso de parâmetros e dados externos**
  - Funções `random` para simulação de usuários
  - Leitura de arquivos `.json` e `.csv` para alimentar os testes

- ✅ **Execução dos testes**
  - Rodando testes localmente com `k6 run`
  - Configuração de VUs, iterações e cenários personalizados

- ✅ **Métricas e organização**
  - Uso de `tags` para agrupamento e filtro de resultados

- ✅ **Execução na nuvem e integração**
  - Rodando testes na nuvem com a plataforma da Grafana Labs
  - Integração com **pipelines CI/CD** (ex: Jenkins)
  - Apoio do Docker para simular e subir APIs localmente
