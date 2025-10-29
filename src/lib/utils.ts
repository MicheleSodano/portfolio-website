import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const [year, month] = date.split('-');
  const monthNames = [
    'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
    'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export function formatPeriod(start: string, end: string | 'presente'): string {
  const startFormatted = formatDate(start);
  const endFormatted = end === 'presente' ? 'Presente' : formatDate(end);
  return `${startFormatted} - ${endFormatted}`;
}
