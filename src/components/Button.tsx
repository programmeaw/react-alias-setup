import { ButtonProps } from '@nextui-org/react';
import { Button as NextUIButton } from '@nextui-org/react';

interface Props extends ButtonProps {
  hoverEffect?: boolean;
}

// don't remove this array. its for the tailwind JIT compiler to work
const twClasses = [
  'hover:bg-primary/10 hover:bg-primary/20 hover:bg-primary/70',
  'hover:bg-secondary/10 hover:bg-secondary/20 hover:bg-secondary/70',
  'hover:bg-success/10 hover:bg-success/20 hover:bg-success/70',
  'hover:bg-danger/10 hover:bg-danger/20 hover:bg-danger/70',
  'hover:bg-warning/10 hover:bg-warning/20 hover:bg-warning/70',
];

function getClass(color: string, opacity = 70): string {
  if (color === 'default') return 'hover:bg-gray-100 dark:hover:bg-gray-700/70';
  return `hover:bg-${color}/${opacity}`;
}

export default function Button({
  children,
  color = 'default',
  className,
  variant = 'solid',
  hoverEffect = true,
  ...rest
}: Props) {
  if (hoverEffect) {
    if (variant === 'solid' || variant === 'shadow') {
      className = `${className} ${getClass(color)}`;
    } else if (variant === 'bordered') {
      className = `${className} ${getClass(color, 20)}`;
    } else if (variant === 'flat') {
      className = `${className} ${getClass(color, 10)}`;
    }
  }

  return (
    <NextUIButton color={color} className={className} variant={variant} {...rest}>
      {children}
    </NextUIButton>
  );
}
