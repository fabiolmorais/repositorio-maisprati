# 📘 Atividades de React - MaisPrati

Este repositório contém diversas atividades desenvolvidas em React, cada uma com o objetivo de ensinar e praticar conceitos fundamentais da biblioteca.

## 📂 Estrutura das Atividades

### 1. Contador Simples
**Descrição:** Um componente de contador que exibe um número na tela com botões para “Incrementar” e “Decrementar”.  
**Conceitos Praticados:** Hook `useState`.  
**Desafio:** Não permitir que o valor do contador seja menor que zero.

### 2. Alteração de Cor de Fundo
**Descrição:** Um componente que muda a cor do fundo da página ao clicar em um botão.  
**Conceitos Praticados:** Hooks `useState` e `useEffect`.  
**Desafio:** Gerar cores aleatórias a cada clique.

### 3. Lista de Tarefas (To-Do List)
**Descrição:** Um aplicativo que permite adicionar e remover tarefas.  
**Conceitos Praticados:** Hook `useState` e manipulação de listas.  
**Desafio:** Marcar tarefas como concluídas e filtrar para mostrar apenas tarefas pendentes.

### 4. Temporizador com useEffect
**Descrição:** Um temporizador que conta o tempo em segundos e exibe na tela.  
**Conceitos Praticados:** Hooks `useState` e `useEffect`.  
**Desafio:** Botões para pausar e reiniciar o temporizador.

### 5. Filtro de Lista
**Descrição:** Um componente que filtra uma lista de nomes com base no texto digitado.  
**Conceitos Praticados:** Hook `useState`, função `map` e manipulação de strings.  
**Desafio:** Ignorar maiúsculas e minúsculas na filtragem.

### 6. Formulário de Registro Simples
**Descrição:** Um formulário com campos de nome, e-mail e senha que exibe uma mensagem de boas-vindas ao ser enviado.  
**Conceitos Praticados:** Hook `useState` e manipulação de formulários.  
**Desafio:** Validação de campos (todos os campos preenchidos, e-mail válido, senha com regras de segurança).

### 7. Aplicação de Requisição de Dados Simples
**Descrição:** Exibe uma lista de posts obtidos de uma API pública (JSONPlaceholder).  
**Conceitos Praticados:** Hooks `useState` e `useEffect`, consumo de APIs.  
**Desafio:** Botão para recarregar os dados e indicador de carregamento.

### 8. Galeria de Imagens com Visualização Detalhada
**Descrição:** Uma galeria simples que exibe imagens ampliadas em um modal ao clicar.  
**Conceitos Praticados:** Hook `useState` e manipulação condicional de componentes.  
**Desafio:** Adicionar navegação entre imagens e botão de “Fechar” no modal.

### 9. Timer com Intervalo e Alerta
**Descrição:** Timer configurável pelo usuário que faz contagem regressiva.  
**Conceitos Praticados:** Hooks `useState` e `useEffect`.  
**Desafio:** Botões para pausar e reiniciar o timer e alerta ao chegar a zero.

### 10. Componentes com Tabs Navegáveis
**Descrição:** Interface com abas que exibem conteúdos diferentes ao serem clicadas.  
**Conceitos Praticados:** Hook `useState` e manipulação condicional de componentes.  
**Desafio:** Destaque visual para a aba ativa.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/fabiolmorais/repositorio-maisprati.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd react/atv-4-mais-prati
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

### Dependências Necessárias
- Node.js (v14 ou superior)
- React (v18 ou superior)
- NPM ou Yarn

Cada atividade está implementada em um componente separado, permitindo fácil navegação e compreensão do código.

---