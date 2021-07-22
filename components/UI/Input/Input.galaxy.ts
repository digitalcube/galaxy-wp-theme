
//block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300
export const inputTheme = {
  input: {
    DEFAULT: [
      'flex',
      'flex-grow',
      'py-3',
      'px-2',
      'border',
      'border-gray-300',
      'border-2',
    ],
    primary: [
      'rounded',
      'text-gray-700',
      'placeholder-gray-700',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-focus',
    ],
    danger: [
      'bg-status-danger-default',
      'text-white',
      'hover:bg-status-danger-dark',
    ],
    white: [
      'bg-white',
      'text-purple-primary',
      'placeholder-purple-primary',
      'hover:bg-gray-100',
      'hover:text-shifter-purple-700',
    ],
    ghost: [
      'bg-transparent',
      'text-shifter-purple-primary',
      'hover:bg-purple-200',
      'focus:bg-transparent',
    ],
    success: [
      'py-2',
      'px-4',
      'bg-status-success-default',
      'text-white',
      'hover:bg-status-success-dark',
    ],
    link: ['p-0'],
    outlinePrimary: [
      'py-2',
      'px-4',
      'bg-transparent',
      'ring-2',
      'ring-shifter-purple-primary',
      'hover:bg-purple-600',
      'hover:text-white',
      'focus:ring',
      'focus:bg-purple-500',
      'text-shifter-purple-primary',
      'disabled:bg-shifter-gray-200',
      'disabled:text-shifter-gray-300',
    ],
  },
};
