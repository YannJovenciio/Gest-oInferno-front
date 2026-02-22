# 🔥 Paleta de Cores - Referência Rápida

## ESpaços de Cores

```
╔════════════════════════════════════════════════════════════════╗
║                   INFERNO THEME COLOR PALETTE                 ║
╚════════════════════════════════════════════════════════════════╝
```

### Primária - Vermelho Infernal 🔴

| Nome    | Hex       | RGB             | Uso                  |
| ------- | --------- | --------------- | -------------------- |
| Primary | `#d32f2f` | rgb(211,47,47)  | Botões, Destaques    |
| Light   | `#ff6e40` | rgb(255,110,64) | Hovers, Overlays     |
| Dark    | `#7d0000` | rgb(125,0,0)    | Backgrounds, Borders |

### Secundária - Ouro Demoníaco ✨

| Nome      | Hex       | RGB             | Uso                 |
| --------- | --------- | --------------- | ------------------- |
| Secondary | `#ffd700` | rgb(255,215,0)  | Accents, Highlights |
| Light     | `#ffed4e` | rgb(255,237,78) | Backgrounds         |
| Dark      | `#b8860b` | rgb(184,134,11) | Borders, Details    |

### Neutras - Cinzas Infernais ⚫

| Nome        | Hex       | RGB              | Uso                |
| ----------- | --------- | ---------------- | ------------------ |
| Dark Gray   | `#0a0a0a` | rgb(10,10,10)    | Background Default |
| Medium Gray | `#1a1a1a` | rgb(26,26,26)    | Background Paper   |
| Light Gray  | `#b0bec5` | rgb(176,190,197) | Texto Secundário   |
| Border      | `#424242` | rgb(66,66,66)    | Dividers           |
| Disabled    | `#757575` | rgb(117,117,117) | Texto Desabilitado |
| White       | `#ffffff` | rgb(255,255,255) | Texto Principal    |
| Black       | `#000000` | rgb(0,0,0)       | Profundo           |

### Status - Cores de Feedback 🎨

| Status  | Hex       | RGB             | Explicação              |
| ------- | --------- | --------------- | ----------------------- |
| Error   | `#f44336` | rgb(244,67,54)  | Erros, Avisos críticos  |
| Warning | `#ff9800` | rgb(255,152,0)  | Avisos, Ações perigosas |
| Info    | `#2196f3` | rgb(33,150,243) | Informações, Dicas      |
| Success | `#4caf50` | rgb(76,175,80)  | Sucesso, Confirmação    |

---

## 📋 Resumo de Uso

### Para Componentes Principais

```
Botão Primário → Primary (#d32f2f)
Hover/Focus   → Primary Light (#ff6e40)
```

### Para Backgrounds

```
Fundo Escuro   → Dark Gray (#0a0a0a)
Cards/Papers   → Medium Gray (#1a1a1a)
```

### Para Texto

```
Texto Principal    → White (#ffffff)
Texto Secundário   → Light Gray (#b0bec5)
Texto Desabilitado → Disabled (#757575)
```

### Para Destaques

```
Destaque Principal → Secondary (#ffd700)
Hover              → Secondary Light (#ffed4e)
```

---

## 🎯 Combinações Recomendadas

### Cartão (Card)

- Background: Medium Gray (#1a1a1a)
- Border: Border (#424242)
- Title: White (#ffffff)
- Text: Light Gray (#b0bec5)
- CTA Button: Primary (#d32f2f)

### Formulário (Form)

- Input Background: Dark Gray (#0a0a0a)
- Input Border: Border (#424242)
- Input Focus: Primary (#d32f2f)
- Label: White (#ffffff)
- Error: Error (#f44336)

### Header/Navigation

- Background: Black (#000000)
- Text: White (#ffffff)
- Active: Secondary (#ffd700)
- Hover: Primary (#d32f2f)

### Modal/Overlay

- Background: rgba(0,0,0,0.7)
- Content: Medium Gray (#1a1a1a)
- Border: Primary (#d32f2f)
- Close Button: Light Gray (#b0bec5)

---

## 💻 Imports Rápidos

```typescript
// TypeScript/React
import { colors } from "../../Theme/theme";
import { useTheme } from "@mui/material/styles";
```

```css
/* CSS */
/* Variáveis disponíveis em :root */
var(--color-primary)
var(--color-secondary)
var(--color-dark-gray)
/* ... etc */
```

---

## 🎨 Visualização em Hex

```
Inferno Palette:
┌─────────────────────────────────────────┐
│ █ Primary        #d32f2f                │
│ █ Primary Light  #ff6e40                │
│ █ Primary Dark   #7d0000                │
│ █ Secondary      #ffd700                │
│ █ Secondary Light #ffed4e               │
│ █ Secondary Dark #b8860b                │
│ █ Dark Gray      #0a0a0a                │
│ █ Medium Gray    #1a1a1a                │
│ █ Light Gray     #b0bec5                │
│ █ White          #ffffff                │
└─────────────────────────────────────────┘
```

---

**Última Atualização**: Fevereiro 2026  
**Versão**: 1.0  
**Tema**: Inferno
