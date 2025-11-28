# 🧪 Automação de Testes E2E - Cypress Real World App

> Projeto prático de automação de testes End-to-End (E2E) realizado como parte do curso **Guardião da Qualidade** (LumeStack). O objetivo é validar fluxos críticos de uma aplicação financeira real.

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 📄 Sobre o Projeto

O **Cypress Real World App (RWA)** é uma aplicação exemplo criada pela equipe do Cypress.io que simula um cenário real de uso (semelhante ao Venmo ou PicPay), permitindo transações financeiras entre usuários.

Neste repositório, automatizei os fluxos essenciais de entrada e cadastro, garantindo a qualidade e a regressão do sistema.

## ✅ Funcionalidades Testadas

### 🔐 Autenticação (Login)
- **Login válido:** Login com credenciais válidas e verificação de acesso à área logada.
- **Login inválido:** Tentativa de login com credenciais inválidas e validação de mensagens de erro.
- **Validação de Interface:** Verificação de elementos da UI usando seletores.

### 📝 Registro (Sign Up)
- **Cadastro :** Fluxo End-to-End cobrindo o registro inicial.
- **Massa de Dados Dinâmica:** Utilização da biblioteca `Chance.js` para gerar usuários, senhas e contas bancárias aleatórias a cada execução, garantindo a independência dos testes.
- **Fluxo Contínuo:** Registro -> Login Automático -> Onboarding Bancário -> Edição de Perfil.

## 🛠️ Destaques Técnicos

O código foi estruturado pensando em boas práticas de QA e manutenibilidade:

* **Seletores Robustos:** Utilização de atributos dedicados de teste (`data-test`), garantindo que o teste não quebre com mudanças de estilo.
* **Dados Dinâmicos:** Implementação da biblioteca `Chance` para evitar conflitos de "usuário já existente" e tornar o teste mais realista.
* **Separação de Dados:** Uso de fixtures (`credenciais.json`) para separar dados sensíveis da lógica de teste.

