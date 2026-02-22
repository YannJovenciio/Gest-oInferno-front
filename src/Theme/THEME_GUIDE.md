# 🔥 Paleta de Cores - Tema Inferno

## Visão Geral

O tema "Inferno" foi criado com cores quentes e infernais, perfeito para a estética do projeto Gest-o Inferno.

## Cores Principais

### Primária (Vermelho Infernal)

- **Main**: `#d32f2f` - Vermelho vibrante
- **Light**: `#ff6e40` - Laranja queimado
- **Dark**: `#7d0000` - Vermelho escuro profundo
- **Contrast**: Branco

### Secundária (Ouro Demoníaco)

- **Main**: `#ffd700` - Ouro puro
- **Light**: `#ffed4e` - Ouro claro
- **Dark**: `#b8860b` - Ouro escuro
- **Contrast**: Preto

## Cores de Fundo e Texto

- **Background Default**: `#0a0a0a` - Preto profundo
- **Background Paper**: `#1a1a1a` - Cinza muito escuro
- **Text Primary**: `#ffffff` - Branco
- **Text Secondary**: `#b0bec5` - Cinza claro
- **Divider**: `#424242` - Cinza médio

## Cores de Status

- **Error**: `#f44336` (vermelho claro)
- **Warning**: `#ff9800` (laranja)
- **Info**: `#2196f3` (azul)
- **Success**: `#4caf50` (verde)

## Como Usar

### 1. No Material-UI (useTheme)

```tsx
import { useTheme } from "@mui/material/styles";

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
      }}
    >
      Conteúdo
    </Box>
  );
};
```

### 2. Cores Diretas

```tsx
import { colors } from "../../Theme/theme";

const MyComponent = () => {
  return (
    <Box
      sx={{
        color: colors.primary,
        backgroundColor: colors.darkGray,
      }}
    >
      Conteúdo
    </Box>
  );
};
```

### 3. Em styled-components

```tsx
import styled from "styled-components";
import { colors } from "../../Theme/theme";

const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 2px solid ${colors.secondary};
`;
```

## Tipografia

O tema usa as seguintes famílias de fontes:

- **Headings (H1-H6)**: `Playfair Display, serif`
- **Body Text**: `Merriweather, serif`
- **Buttons**: `Playfair Display, serif`

### Exemplos de Uso

```tsx
<Typography variant="h4">Título Principal</Typography>
<Typography variant="body1">Corpo de texto normal</Typography>
<Button variant="contained">Botão</Button>
```

## Variantes de Componentes

### Button

- **contained**: Fundo sólido com sombra infernal
- **outlined**: Apenas borda
- **text**: Apenas texto

### TextField

- Foco em vermelho infernal
- Texto branco
- Borda cinza

### Autocomplete

- Opções com fundo escuro
- Hover com toque de vermelho

## Personalizações Adicionais

Para usar o tema em um novo arquivo:

```tsx
import { useTheme } from "@mui/material/styles";
import { colors } from "../../Theme/theme";

// Use conforme necessário
```

---

**Tema criado**: Fevereiro 2026
**Paleta**: Inferno
