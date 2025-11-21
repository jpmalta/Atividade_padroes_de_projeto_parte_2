# MediaManager – Sistema de Gerenciamento de Mídia com Padrões de Projeto

## 👨‍💻 Autores
João Pedro Costa Malta 23002743
Gustavo Santos Steluti 23016017

Este projeto foi desenvolvido como parte da atividade acadêmica da disciplina de Padrões de Projeto.  
A aplicação implementa **4 padrões clássicos de software**, com estudos e referências retiradas da plataforma Refactoring.Guru.

---

## 🎯 Objetivo da Aplicação
Criar um sistema simples para gerenciar uma coleção de mídias (filmes, músicas e livros).  
Ele permite:

- Criar itens de mídia por tipo  
- Atribuir metadados adicionais a objetos usando Decorator  
- Ordenar usando diferentes estratégias  
- Notificar automaticamente observadores quando a coleção muda  

---

## 🧩 Padrões de Projeto Implementados

| Padrão | Categoria | Localização |
|-------|-----------|-------------|
| **Factory Method** | Criacional | `src/factory/MediaFactory.js` |
| **Decorator** | Estrutural | `src/decorator/` |
| **Strategy** | Comportamental | `src/strategy/` |
| **Observer** | Comportamental | `src/observer/` |

---

## 📁 Estrutura de Pastas
src/
├── main.js
├── factory/
│ └── MediaFactory.js
├── model/
│ ├── Media.js
│ ├── Movie.js
│ ├── Music.js
│ └── Book.js
├── decorator/
│ ├── MediaDecorator.js
│ └── RatingDecorator.js
├── strategy/
│ ├── SortStrategy.js
│ ├── SortByTitle.js
│ └── SortByYear.js
└── observer/
├── ObservableCollection.js
└── LoggerObserver.js

---

## ▶ Como Executar
1. Clone o repositório  
2. Entre na pasta do projeto  
3. Execute:

4. 
Nenhuma dependência adicional é necessária.

---

## 📚 Documentação

- **RESUMO.md** – Estudo teórico dos padrões  
- **JUSTIFICATIVAS.md** – Justificativas detalhadas da aplicação no projeto  

---
