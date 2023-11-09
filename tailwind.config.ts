function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderColor: {
        theme: {
          base: withOpacity('--theme-base'),
          inverted: withOpacity('--theme-base-inverted'),
          accent: withOpacity('--theme-accent'),
        }
      },
      textColor: {
        theme: {
          base: withOpacity('--theme-base'),
          accent: withOpacity('--theme-accent'),
          inverted: withOpacity('--theme-base-inverted')
        }
      },
      backgroundColor: {
        theme: {
          base: withOpacity('--theme-bg'),
          inverted: withOpacity('--theme-bg-inverted'),
          accent: withOpacity('--theme-accent')
        }
      },
      fontFamily: {
        grotesque: ['Basement-Grotesque'],
        basement: ['Grotesque'],
        aileron: ['aileron', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
