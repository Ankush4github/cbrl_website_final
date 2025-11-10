import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#318efe',
          dark: '#318efe',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#030711',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#111827',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#1f2937',
        },
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#030711',
          'card': '#111827',
          'popover': '#1f2937',
          'primary': '#318efe',
        }
      },
      textColor: {
        dark: {
          DEFAULT: '#f3f4f6',
          'muted': '#9ca3af',
          'primary': '#318efe',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 