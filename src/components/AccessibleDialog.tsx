import { useEffect, useRef, type ReactNode } from 'react';

interface AccessibleDialogProps {
  titleId: string;
  descriptionId: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}

/** Native modal behavior keeps background content inert and focus inside the dialog. */
export function AccessibleDialog({ titleId, descriptionId, onClose, children, wide }: AccessibleDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current!;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.querySelector<HTMLElement>('[data-dialog-heading]')?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-modal="true"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
        )).filter(element => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first) { event.preventDefault(); return; }
        if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement as HTMLElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }}
      className={`phase-one m-auto w-[calc(100%-2rem)] ${wide ? 'max-w-3xl' : 'max-w-2xl'} max-h-[90dvh] overflow-hidden rounded-card border border-line bg-canvas p-0 text-ink  backdrop:bg-inset`}
    >
      <div className="flex max-h-[90dvh] flex-col">{children}</div>
    </dialog>
  );
}
