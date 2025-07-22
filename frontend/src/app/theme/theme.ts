export const theme = {
  colors: {
    primary: '#4A55A2', // Primary Action
    accent: '#78C1A2', // Vibrant Accent
    background: '#F8F9FA', // Background
    surface: '#FFFFFF', // Card / Surface
    text: '#2D3748', // Primary Text
    textMuted: '#718096', // Muted Text
    border: '#E2E8F0', // Borders / Lines
  },
  typography: {
    fontFamily: {
      sans: 'Inter',
    },
    fontSize: {
      h1: 32,
      h2: 24,
      h3: 20,
      body: 16,
      label: 14,
      small: 12,
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
  },
  borderRadius: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999,
  },
  shadow: {
    card: {
      shadowColor: '#2D3748',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
    button: {
      shadowColor: '#2D3748',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      elevation: 1,
    },
  },
};
