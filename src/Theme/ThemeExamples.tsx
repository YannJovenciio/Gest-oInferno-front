import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "./theme";

/**
 * Exemplos de como usar a paleta de cores do Inferno Theme
 *
 * Este arquivo contém exemplos práticos de como usar as cores
 * em diferentes contextos do projeto.
 */

// ============================================
// Exemplo 1: Usando useTheme com sx prop
// ============================================
export const Example1_UseTheme = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(3),
        borderRadius: theme.spacing(1),
      }}
    >
      <Typography variant="h4">Usando useTheme</Typography>
      <Typography variant="body2">As cores vêm do tema Material-UI</Typography>
    </Box>
  );
};

// ============================================
// Exemplo 2: Usando colors direto
// ============================================
export const Example2_DirectColors = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.mediumGray,
        border: `2px solid ${colors.primary}`,
        color: colors.white,
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4">Usando Colors Direto</Typography>
      <Typography variant="body2">
        Import de colors fornece acesso direto às cores
      </Typography>
    </Box>
  );
};

// ============================================
// Exemplo 3: Botões com diferentes variantes
// ============================================
export const Example3_ButtonVariants = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button variant="contained" color="primary">
        Botão Principal
      </Button>
      <Button variant="outlined" color="primary">
        Botão Outline
      </Button>
      <Button variant="text" color="primary">
        Botão Text
      </Button>
      <Button variant="contained" color="warning">
        Botão Warning
      </Button>
    </Box>
  );
};

// ============================================
// Exemplo 4: Usando CSS Variables
// ============================================
export const Example4_CSSVariables = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--color-medium-gray)",
        border: "2px solid var(--color-secondary)",
        color: "var(--color-white)",
        padding: "var(--spacing-lg)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <Typography variant="h4">Usando CSS Variables</Typography>
      <Typography variant="body2">
        As variáveis CSS estão disponíveis globalmente
      </Typography>
    </Box>
  );
};

// ============================================
// Exemplo 5: Gradiente com cores infernais
// ============================================
export const Example5_Gradient = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
        color: colors.white,
        padding: "24px",
        borderRadius: "8px",
        boxShadow: colors.primary,
      }}
    >
      <Typography variant="h4">Gradiente Infernal</Typography>
      <Typography variant="body2">
        Combinando cores primárias para efeito visual
      </Typography>
    </Box>
  );
};

// ============================================
// Exemplo 6: Card com padrão comum
// ============================================
export const Example6_Card = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        padding: theme.spacing(3),
        boxShadow: theme.shadows[4],
        "&:hover": {
          boxShadow: theme.shadows[8],
          borderColor: theme.palette.primary.main,
          transition: theme.transitions.create(["box-shadow", "border-color"], {
            duration: theme.transitions.duration.standard,
          }),
        },
      }}
    >
      <Typography variant="h5">Card Exemplo</Typography>
      <Typography variant="body2">
        Hover para ver o efeito de elevação
      </Typography>
      <Button variant="contained" sx={{ marginTop: theme.spacing(2) }}>
        Ação
      </Button>
    </Box>
  );
};

// ============================================
// Exemplo 7: Status Colors
// ============================================
export const Example7_StatusColors = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ width: 20, height: 20, backgroundColor: colors.success }} />
        <Typography>Sucesso: {colors.success}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ width: 20, height: 20, backgroundColor: colors.warning }} />
        <Typography>Aviso: {colors.warning}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ width: 20, height: 20, backgroundColor: colors.error }} />
        <Typography>Erro: {colors.error}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ width: 20, height: 20, backgroundColor: colors.info }} />
        <Typography>Info: {colors.info}</Typography>
      </Box>
    </Box>
  );
};

// ============================================
// Exemplo 8: Palette Colors
// ============================================
export const Example8_AllColors = () => {
  const theme = useTheme();

  const colorSets = [
    {
      label: "Primary",
      main: theme.palette.primary.main,
      light: theme.palette.primary.light,
      dark: theme.palette.primary.dark,
    },
    {
      label: "Secondary",
      main: theme.palette.secondary.main,
      light: theme.palette.secondary.light,
      dark: theme.palette.secondary.dark,
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {colorSets.map((colorSet) => (
        <Box key={colorSet.label}>
          <Typography variant="h6">{colorSet.label}</Typography>
          <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                backgroundColor: colorSet.main,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                width: 60,
                height: 60,
                backgroundColor: colorSet.light,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                width: 60,
                height: 60,
                backgroundColor: colorSet.dark,
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
