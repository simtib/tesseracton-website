import React, { useEffect, useRef, useState } from 'react';
import { AccessibleDialog } from './AccessibleDialog';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) =>
  isOpen ? <PilotForm onClose={onClose} /> : null;

function PilotForm({ onClose }: { onClose: () => void }) {
  const [gpuCount, setGpuCount] = useState<number>(64);
  const [acceleratorType, setAcceleratorType] = useState<string>('NVIDIA H100 SXM5');
  const [region, setRegion] = useState<string>('EU-Central (Frankfurt)');
  const [capabilities, setCapabilities] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [error, setError] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const didReview = useRef(false);
  useEffect(() => {
    if (submitted) {
      didReview.current = true;
      resultRef.current?.focus({ preventScroll: true });
    } else if (didReview.current) {
      formRef.current?.querySelector<HTMLInputElement>('input')?.focus();
    }
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [submitted]);

  const startOver = () => {
    setGpuCount(64);
    setAcceleratorType('NVIDIA H100 SXM5');
    setRegion('EU-Central (Frankfurt)');
    setCapabilities([]);
    setEmail('');
    setCompany('');
    setError('');
    setInvalidFields([]);
    setSubmitted(false);
  };

  const toggleCapability = (fw: string) => {
    if (capabilities.includes(fw)) {
      setCapabilities(capabilities.filter((f) => f !== fw));
    } else {
      setCapabilities([...capabilities, fw]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity() || !company.trim()) {
      setInvalidFields(Array.from(form.querySelectorAll<HTMLInputElement>('input:invalid')).map(input => input.id).concat(company.trim() ? [] : ['pilot-company']));
      setError('Enter a valid work email and organization to review this demo request.');
      const invalid = form.querySelector<HTMLElement>('input:invalid, select:invalid') || form.querySelector<HTMLElement>('#pilot-company');
      invalid?.focus();
      return;
    }
    setError('');
    setInvalidFields([]);
    setSubmitted(true);
  };

  return (
    <AccessibleDialog titleId="pilot-title" descriptionId="pilot-description" onClose={onClose}>

        {/* Header */}
        <div className="p-6 border-b border-line flex items-start justify-between gap-4 bg-inset">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 id="pilot-title" data-dialog-heading tabIndex={-1} className="type-card text-ink">Request Enterprise Pilot</h3>
              <p id="pilot-description" className="text-sm text-secondary mt-1">Demo only. Review your pilot requirements here; nothing is sent or saved.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close pilot dialog"
            className="control shrink-0 min-h-11 min-w-11 p-2 text-muted hover:text-ink hover:bg-raised transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div ref={bodyRef} className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 min-h-0">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-md bg-raised border border-line text-success flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 ref={resultRef} tabIndex={-1} className="type-label text-ink">Demo request ready to review</h4>
              <p className="text-sm text-secondary max-w-md mx-auto leading-relaxed">
                Your requirements are shown below. This is a local preview, not a submitted application. No request has been received by Tesseracton and no follow-up is scheduled.
              </p>
              <div className="p-4 rounded-card bg-surface border border-line text-left font-mono text-sm text-secondary max-w-md mx-auto space-y-1">
                <div className="break-words">Organization: {company}</div>
                <div className="break-all">Email: {email}</div>
                <div>Cluster: <span className="text-accent">{gpuCount}x {acceleratorType}</span></div>
                <div>Region: <span className="text-accent">{region}</span></div>
                <div>Product Capabilities: <span className="text-success">{capabilities.join(', ') || 'None selected'}</span></div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button type="button" onClick={() => setSubmitted(false)} className="control min-h-11 px-4 bg-raised hover:bg-selected">Edit details</button>
                <button type="button" onClick={startOver} className="control min-h-11 px-4 bg-raised hover:bg-selected">Start a new demo request</button>
              </div>
              <button
                onClick={onClose}
                className="control control-primary mt-4 px-6 py-3  font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6 text-sm">
              <p className="text-secondary">Work email and organization are required for this preview. Closing the dialog clears your entries.</p>
              {error && <p id="pilot-error" role="alert" className="text-danger border border-line rounded-lg p-3">{error}</p>}
              <fieldset className="space-y-4 min-w-0">
                <legend className="text-base font-semibold text-ink mb-3">Compute requirements</legend>

              {/* Cluster Size Slider */}
              <div className="bg-surface p-4 rounded-card border border-line space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="pilot-gpus" className="font-semibold text-ink">GPU count</label>
                  <span className="text-sm font-mono font-semibold text-accent">{gpuCount} GPUs</span>
                </div>
                <input
                  id="pilot-gpus"
                  aria-valuetext={`${gpuCount.toLocaleString('en-US')} GPUs`}
                  aria-describedby="pilot-gpu-help"
                  type="range"
                  min="8"
                  max="1024"
                  step="8"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(Number(e.target.value))}
                  className="w-full accent-action cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted font-mono">
                  <span>8 GPUs</span>
                  <span>1,024 GPUs</span>
                </div>
              </div>

              <p id="pilot-gpu-help" className="text-sm text-secondary">Choose 8 to 1,024 GPUs in increments of 8.</p>

              {/* Accelerator & Hardware Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pilot-accelerator" className="block text-secondary font-semibold mb-2">Accelerator Architecture</label>
                  <select
                    id="pilot-accelerator" value={acceleratorType}
                    onChange={(e) => setAcceleratorType(e.target.value)}
                    className="field w-full border p-3 font-mono"
                  >
                    <option value="NVIDIA H100 SXM5">NVIDIA H100 SXM5 (80GB)</option>
                    <option value="NVIDIA B200 NVL">NVIDIA B200 NVL (192GB)</option>
                    <option value="NVIDIA H200 SXM">NVIDIA H200 SXM (141GB)</option>
                    <option value="AMD Instinct MI300X">AMD Instinct MI300X (192GB)</option>
                    <option value="Intel Gaudi 3">Intel Gaudi 3 AI Accelerator</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-region" className="block text-secondary font-semibold mb-2">Deployment Region</label>
                  <select
                    id="pilot-region" value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="field w-full border p-3 font-mono"
                  >
                    <option value="EU-Central (Frankfurt)">EU-Central (Frankfurt - Sovereign)</option>
                    <option value="US-East (Virginia - FedRAMP)">US-East (Virginia - FedRAMP)</option>
                    <option value="UK-London (Healthcare NHS)">UK-London (Healthcare NHS)</option>
                    <option value="APAC-Tokyo (Financial Cloud)">APAC-Tokyo (Financial Cloud)</option>
                    <option value="On-Premises Bare Metal">On-Premises Air-Gapped Data Center</option>
                  </select>
                </div>
              </div>

              </fieldset>
              {/* Product Capabilities Selection */}
              <fieldset className="min-w-0">
                <legend className="block text-base text-ink font-semibold mb-3">Product Capabilities (optional)</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Infrastructure Foundation',
                    'Asset Visibility & Compliance',
                    'Hardware Assurance & Governance',
                    'Regulator-Facing Assurance Plane',
                  ].map((fw) => (
                    <label
                      key={fw}
                      className={`p-3 rounded-lg border cursor-pointer flex items-center gap-2 transition-colors ${
                        capabilities.includes(fw)
                          ? 'bg-raised border-line text-ink'
                          : 'bg-surface border-line text-muted hover:text-ink'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={capabilities.includes(fw)}
                        onChange={() => toggleCapability(fw)}
                        className="h-4 w-4 shrink-0 accent-action"
                      />
                      <span className="text-sm">{fw}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Contact Information */}
              <fieldset className="min-w-0">
              <legend className="text-base font-semibold text-ink mb-3">Contact details</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pilot-email" className="block text-secondary font-semibold mb-2">Work Email (required)</label>
                  <input
                    autoComplete="email"
                    aria-describedby={error ? 'pilot-error' : undefined}
                    type="email"
                    required
                    placeholder="architect@enterprise.com"
                    id="pilot-email" aria-invalid={invalidFields.includes('pilot-email')} value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field w-full border p-3 placeholder-muted"
                  />
                </div>
                <div>
                  <label htmlFor="pilot-company" className="block text-secondary font-semibold mb-2">Organization / Cloud Provider (required)</label>
                  <input
                    autoComplete="organization"
                    aria-describedby={error ? 'pilot-error' : undefined}
                    type="text"
                    required
                    placeholder="e.g. Anthropic, Mistral, Lambda, CoreWeave"
                    id="pilot-company" aria-invalid={invalidFields.includes('pilot-company')} value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="field w-full border p-3 placeholder-muted"
                  />
                </div>
              </div>

              </fieldset>
              <div className="pt-2">
                <button
                  type="submit"
                  className="control w-full py-3 bg-surface text-ink font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Review demo request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

    </AccessibleDialog>
  );
}
