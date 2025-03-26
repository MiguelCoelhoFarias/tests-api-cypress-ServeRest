# 🧪 Testes de API com Cypress

![Cypress Logo](https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-dark.png) 

Este repositório contém testes automatizados de API utilizando **Cypress** para a aplicação **ServeRest**, um ambiente desenvolvido para prática de testes automatizados!

![ServeRest Logo](https://github.com/user-attachments/assets/7a45e85d-0799-40ba-8635-f623723f5bd8)

## 🚀 Tecnologias Utilizadas

- **Cypress** 🏗️ - Ferramenta para automação de testes de API
- **Faker.js** 🎭 - Geração de massa de dados para os testes

## 📌 Endpoints Testados

### 🛍️ Produtos
- **🆕 (C) Criar Produto** - Criação de um novo produto na API.
- **📖 (R) Listar Produtos** - Recuperação da lista de produtos cadastrados.
- **✏️ (U) Atualizar Produto** - Modificação das informações de um produto existente.
- **🗑️ (D) Deletar Produto** - Remoção de um produto da base de dados.

### 👤 Usuários
- **🆕 (C) Criar Usuário** - Registro de um novo usuário no sistema.
- **📖 (R) Buscar Usuário** - Recuperação de informações de um usuário específico.
- **✏️ (U) Atualizar Usuário** - Modificação dos dados de um usuário existente.
- **🗑️ (D) Deletar Usuário** - Exclusão de um usuário do sistema.

---

## 🎯 Padrões de Projeto Utilizados

### 📌 POM (Page Object Model) para API  
Utilizei o **Page Object Model (POM)** para estruturar as chamadas da API de forma modular e reutilizável.  
Cada entidade da API possui um client dedicado que encapsula todas as chamadas HTTP necessárias.  

📌 Benefícios do POM na API:  
- 🔄 Reutilização de código nas chamadas de API  
- 🛠️ Facilidade de manutenção dos testes  
- 🎯 Separação clara entre os testes e as requisições HTTP  

---

### 🏭 FactoryData  
Para gerar dados dinâmicos e evitar dependência de valores fixos, implementei o **FactoryData**.  
Com isso, consigo criar usuários e produtos de forma dinâmica, garantindo cenários de testes mais robustos.  

📌 Benefícios do **FactoryData**:  
- 🛠️ Evita hardcoded (dados fixos), tornando os testes mais dinâmicos  
- 🔄 Facilita a criação de múltiplos cenários  
- 🚀 Redução de redundância, já que os dados de teste são centralizados  

---

## ▶️ Para executar os testes, execute estes comandos no terminal:

1️⃣ **Instale as dependências:**
```sh
npm install
```

2️⃣ **Execute os testes em modo handless**
```sh
npx cypress run
```

---

💡 **Alternativo:** Você também pode rodar os testes em modo interativo com:
```sh
npx cypress open
```
