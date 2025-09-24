module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - sophisticated foundation
        secondary: "#FF6B35", // orange-500 - creative energy
        accent: "#8B5CF6", // violet-500 - innovation spark
        
        // Background Colors
        background: "#0A0A0A", // gray-950 - subtle depth variation
        surface: "#1A1A1A", // gray-900 - elevated content areas
        
        // Text Colors
        'text-primary': "#FFFFFF", // white - maximum readability
        'text-secondary': "#A3A3A3", // gray-400 - supporting information
        
        // Status Colors
        success: "#10B981", // emerald-500 - project completion
        warning: "#F59E0B", // amber-500 - attention needed
        error: "#EF4444", // red-500 - helpful correction
        
        // Border Colors
        border: "#333333", // gray-700 - content separation
        'border-focus': "#FF6B35", // orange-500 - focused elements
        
        // Additional Shades for Flexibility
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#A3A3A3", // text-secondary
          500: "#6B7280",
          600: "#4B5563",
          700: "#333333", // border
          800: "#1F2937",
          900: "#1A1A1A", // surface
          950: "#0A0A0A", // background
        },
        orange: {
          500: "#FF6B35", // secondary
        },
        violet: {
          500: "#8B5CF6", // accent
        },
        emerald: {
          500: "#10B981", // success
        },
        amber: {
          500: "#F59E0B", // warning
        },
        red: {
          500: "#EF4444", // error
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'neon-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
        'neon-orange-intense': '0 0 30px rgba(255, 107, 53, 0.5)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-violet-intense': '0 0 30px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}