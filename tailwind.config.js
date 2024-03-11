/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: 'var(--color-text-default)',
        muted: 'var(--color-text-muted)',
        disable: 'var(--color-text-disabled)',
        invert: 'var(--color-text-invert)',
      },
      ringColor: {
        default: 'var(--color-ring-default)',
      },
      backgroundColor: {
        default: {
          DEFAULT: 'var(--color-bg-default)',
          hover: 'var(--color-bg-default-hover)',
          active: 'var(--color-bg-default-active)',
        },
        accent: {
          DEFAULT: 'var(--color-bg-accent)',
          hover: 'var(--color-bg-accent-hover)',
          active: 'var(--color-bg-accent-active)',
        },
        success: {
          DEFAULT: 'var(--color-bg-success)',
          hover: 'var(--color-bg-success-hover)',
          active: 'var(--color-bg-success-active)',
        },
        warning: {
          DEFAULT: 'var(--color-bg-warning)',
          hover: 'var(--color-bg-warning-hover)',
          active: 'var(--color-bg-warning-active)',
        },
        destructive: {
          DEFAULT: 'var(--color-bg-destructive)',
          hover: 'var(--color-bg-destructive-hover)',
          active: 'var(--color-bg-destructive-active)',
        },
      },
    },
  },
  plugins: [],
};
