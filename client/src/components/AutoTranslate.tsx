import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useTranslate } from '../hooks/useTranslation';

interface AutoTranslateProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Extract plain text from React children (including nested elements)
 */
function extractText(children: ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  
  if (typeof children === 'number') {
    return String(children);
  }
  
  if (Array.isArray(children)) {
    return children.map(extractText).join(' ');
  }
  
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText((children as any).props.children);
  }
  
  return '';
}

/**
 * AutoTranslate component
 * Automatically translates text content based on selected language
 * Supports nested HTML elements
 * 
 * Usage:
 * <AutoTranslate>Texte en français</AutoTranslate>
 * <AutoTranslate as="h1" className="title">Titre</AutoTranslate>
 * <AutoTranslate as="p">Text with <strong>bold</strong> words</AutoTranslate>
 */
export default function AutoTranslate({ 
  children, 
  as: Component = 'span',
  className,
  style 
}: AutoTranslateProps) {
  // Extract text from children (even if nested in elements)
  const textToTranslate = extractText(children);
  const translatedText = useTranslate(textToTranslate);

  return (
    <Component className={className} style={style}>
      {translatedText}
    </Component>
  );
}

/**
 * Simplified version for inline text
 */
export function T({ children }: { children: string }) {
  return useTranslate(children);
}
