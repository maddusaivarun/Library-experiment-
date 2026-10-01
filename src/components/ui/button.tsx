import { cn } from '@/lib/utils';

export function Button({ className, variant = 'default', ...props }: any) {
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-200 dark:border-slate-800 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
    ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800',
  };
  return (
    <button 
      className={cn('px-4 py-2 rounded-lg font-medium transition-all active:scale-95', variants[variant as keyof typeof variants], className)} 
      {...props} 
    />
  );
}
