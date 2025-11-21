# RESUMO TÉCNICO – Padrões de Projeto

Este documento apresenta o estudo técnico dos quatro padrões utilizados na implementação.

---

# 1. Factory Method (Criacional)

## 📌 Propósito
Fornece uma interface para criação de objetos, permitindo que subclasses decidam qual classe instanciar.

## 📌 Problema que resolve
Remove a necessidade de utilizar condicionais repetitivas (if/else, switch) para criação de objetos de subclasses.

## 📌 Estrutura
- Creator
- ConcreteCreator
- Product
- ConcreteProduct

## 📌 Variações
- Parâmetros adicionais no método fábrica  
- Vários métodos fábrica  
- Registro de criadores  

## 📌 Comparações
- Difere de Abstract Factory porque não cria famílias de objetos.  
- Mais simples que Builder e Prototype.  

---

# 2. Decorator (Estrutural)

## 📌 Propósito
Adicionar responsabilidades a objetos dinamicamente, sem modificar sua classe.

## 📌 Problema que resolve
Evita subclasses excessivas para adicionar pequenas variações de comportamento.

## 📌 Estrutura
- Component  
- ConcreteComponent  
- Decorator  
- ConcreteDecorator  

## 📌 Variações
- Decorators encadeados  
- Múltiplos decoradores aplicados simultaneamente  

## 📌 Comparações
- Difere de Adapter pois não muda interface  
- Difere de Proxy pois não controla acesso  

---

# 3. Strategy (Comportamental)

## 📌 Propósito
Definir uma família de algoritmos e torná-los intercambiáveis em tempo de execução.

## 📌 Problema que resolve
Remover condicionais de escolha de algoritmo e permitir troca dinâmica.

## 📌 Estrutura
- Strategy  
- ConcreteStrategy  
- Context  

## 📌 Variações
- Estratégias criadas dinamicamente  
- Estratégias compostas  

## 📌 Comparações
- Difere de State: Strategy não armazena estado interno.  

---

# 4. Observer (Comportamental)

## 📌 Propósito
Permitir que objetos observadores sejam notificados automaticamente quando um objeto muda de estado.

## 📌 Problema que resolve
Evita acoplamento forte entre classes que dependem de atualizações.

## 📌 Estrutura
- Subject  
- Observer  
- ConcreteObserver  

## 📌 Variações
- Pull vs Push notification  
- Vários tipos de eventos  

## 📌 Comparações
- Similar ao Publish/Subscribe porém mais simples e direto.
