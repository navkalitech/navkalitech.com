import {
  presetUno,
  defineConfig,
  presetTypography,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    container: {},
    colors: {
      ring: "rgba(var(--colors-ring-rgb), <alpha-value>)",
      input: "rgba(var(--colors-input-rgb), <alpha-value>)",
      border: "rgba(var(--colors-border-rgb), <alpha-value>)",
      foreground: "rgba(var(--colors-foreground-rgb), <alpha-value>)",
      background: "rgba(var(--colors-background-rgb), <alpha-value>)",

      primary: "rgba(var(--colors-primary-rgb), <alpha-value>)",
      "primary-foreground": "rgba(var(--colors-primary-foreground-rgb), <alpha-value>)",

      secondary: "rgba(var(--colors-secondary-rgb), <alpha-value>)",
      "secondary-foreground": "rgba(var(--colors-secondary-foreground-rgb), <alpha-value>)",

      destructive: "rgba(var(--colors-destructive-rgb), <alpha-value>)",
      "destructive-foreground": "rgba(var(--colors-destructive-foreground-rgb), <alpha-value>)",

      success: "rgba(var(--colors-success-rgb), <alpha-value>)",
      "success-foreground": "rgba(var(--colors-success-foreground-rgb), <alpha-value>)",

      muted: "rgba(var(--colors-muted-rgb), <alpha-value>)",
      "muted-foreground": "rgba(var(--colors-muted-foreground-rgb), <alpha-value>)",

      accent: "rgba(var(--colors-accent-rgb), <alpha-value>)",
      "accent-foreground": "rgba(var(--colors-accent-foreground-rgb), <alpha-value>)",

      popover: "rgba(var(--colors-popover-rgb), <alpha-value>)",
      "popover-foreground": "rgba(var(--colors-popover-foreground-rgb), <alpha-value>)",

      card: "rgba(var(--colors-card-rgb), <alpha-value>)",
      "card-foreground": "rgba(var(--colors-card-foreground-rgb), <alpha-value>)",

      highlight: "rgba(var(--colors-highlight-rgb), <alpha-value>)",
      "highlight-foreground": "rgba(var(--colors-highlight-foreground-rgb), <alpha-value>)"
    }
  },
  rules: [
    [
      "drag-none",
      {
        "-webkit-user-drag": "none",
        "-khtml-user-drag": "none",
        "-moz-user-drag": "none",
        "-o-user-drag": "none",
        "user-drag": "none"
      }
    ]
  ]
});
