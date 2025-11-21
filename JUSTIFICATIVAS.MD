# JUSTIFICATIVAS – Escolha dos Padrões

---

## 1. Factory Method

### Por que foi escolhido?
Para centralizar a criação de objetos de mídia.

### Que problema resolve?
Evita condicionais para criar Movie, Music ou Book.

### Benefícios
- Extensibilidade
- Redução de acoplamento
- Clareza na criação de novos tipos

### Como seria pior sem o padrão?
O código principal teria vários `if/else`, ficando rígido e difícil de manter.

---

## 2. Decorator

### Por que foi escolhido?
Para adicionar notas (rating) aos itens de mídia sem alterar as classes originais.

### Problema que resolve?
Evita a explosão de subclasses como `MovieWithRating`, `MusicWithRating`.

### Benefícios
- Flexibilidade
- Composição dinâmica
- Reuso de comportamento

### Sem o padrão?
Seriam necessárias várias subclasses redundantes.

---

## 3. Strategy

### Por que foi escolhido?
Para permitir múltiplos modos de ordenar as mídias.

### Problema resolvido?
Remove condicionais de seleção de algoritmo de ordenação.

### Benefícios
- Fácil adicionar novas estratégias
- Trocável em tempo de execução

### Sem o padrão?
O código ficaria repleto de switches/ifs para escolher ordenação.

---

## 4. Observer

### Por que foi escolhido?
Para registrar automaticamente ações quando itens são adicionados.

### Problema resolvido?
Evita chamar manualmente funções auxiliares no código principal.

### Benefícios
- Menos acoplamento
- Reatividade
- Mais fácil manutenção

### Sem o padrão?
O main teria responsabilidades demais e violaria SRP.
