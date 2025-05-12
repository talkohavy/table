import { useRef } from 'react';
import clsx from 'clsx';
import styles from './CodeBlock.module.scss';
import CopyToClipboardButton from './logic/CopyToClipboardButton';
import useSyntaxHighlighter from './logic/hooks/useSyntaxHighlighter';

type CodeBlockProps = {
  code: string;
  onCopySuccess?: () => void;
  language?: string; // 'bash' | 'javascript' | 'typescript' | 'html';
  className?: string;
};

export default function CodeBlock(props: CodeBlockProps) {
  const { code, language, onCopySuccess, className } = props;

  const codeRef = useRef<HTMLElement>(null);

  useSyntaxHighlighter({ codeRef });

  return (
    <pre className={clsx(styles.codeBlock, className)}>
      <code ref={codeRef} className={language}>
        {code}
      </code>

      <CopyToClipboardButton code={code} onCopySuccess={onCopySuccess} />
    </pre>
  );
}
