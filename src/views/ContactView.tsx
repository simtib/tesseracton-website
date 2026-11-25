import React, { useState } from 'react';
import {
  Mail,
  User,
  Building,
  FileText,
  ArrowRight,
  Check,
  MessageSquare
} from 'lucide-react';

interface ContactViewProps {
  onOpenPilotModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenPilotModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: 'Enterprise Pilot Evaluation',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `TSS-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}



      <div className="page-container relative z-10">

        {/* Header */}
        <div className="max-w-3xl text-left pt-8 pb-12 space-y-4">
          <div className="eyebrow">
            <Mail className="w-4 h-4 text-accent" />
            <span className=" text-xs font-mono  font-semibold text-accent">
              DIRECT ARCHITECT CONTACT
            </span>
          </div>

          <h1 className="type-display text-ink">
            Connect with Our{' '}
            <span className="text-ink text-ink">
              Security Architects
            </span>
          </h1>

          <p className="text-base text-secondary leading-relaxed">
            Whether evaluating TAG for continuous compliance or deploying Aegis AI OS on sovereign GPU clusters, our cryptographic solutions team is ready to assist.
          </p>
        </div>

        {/* Engineering Inquiry Form */}
        <div className="max-w-2xl mx-auto my-8">
          <div className="rounded-card bg-surface border border-line p-6 sm:p-10  relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-md bg-raised text-success mx-auto flex items-center justify-center border border-line">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="type-card text-ink">Inquiry Dispatched Successfully</h3>
                <p className="text-sm sm:text-sm text-secondary max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-ink">{formData.firstName}</strong>. We have routed your request regarding <strong className="text-ink">{formData.inquiryType}</strong> for <strong className="text-ink">{formData.company}</strong> to our primary systems architect.
                </p>
                <div className="p-3 bg-inset rounded-card border border-line text-xs font-mono text-success inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-md bg-success " />
                  <span>Ticket Ref: #{ticketId} • Response SLA: &lt; 4 Hours</span>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        company: '',
                        inquiryType: 'Enterprise Pilot Evaluation',
                        description: '',
                      });
                    }}
                    className="control text-accent hover:text-accent underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-line pb-4 mb-4">
                  <h3 className="type-card text-ink">Send an Engineering Inquiry</h3>
                  <p className="text-sm text-muted">Fill in the specifications below for a direct technical consultation.</p>
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span>First Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="field w-full px-4 py-3 border placeholder-muted transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span>Last Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rostova"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="field w-full px-4 py-3 border placeholder-muted transition-colors"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <span>Work Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@sovereign-ai.eu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field w-full px-4 py-3 border placeholder-muted transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-accent" />
                    <span>Company / Organization Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="EuroHPC AI Cloud Infrastructure"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="field w-full px-4 py-3 border placeholder-muted transition-colors"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-accent" />
                    <span>Inquiry Focus</span>
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="field w-full px-4 py-3 border transition-colors cursor-pointer"
                  >
                    <option value="Enterprise Pilot Evaluation">TAG (Assurance Grid) Enterprise Pilot</option>
                    <option value="Aegis AI OS Cluster Trial">Aegis AI OS Hardened Kernel Trial</option>
                    <option value="Sovereign Cloud Architecture Briefing">Sovereign Cloud / Air-Gapped Architecture Briefing</option>
                    <option value="EU AI Act / FedRAMP Compliance Fast-Track">EU AI Act / FedRAMP Certification Fast-Track</option>
                    <option value="Datacenter & Hardware Partner Integration">Datacenter & Hardware Partner Integration</option>
                    <option value="Security Research & Vulnerability Disclosure">Security Research & Other</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent" />
                    <span>Description & Technical Requirements</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your GPU infrastructure scale, compliance targets, or sovereign datacenter requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="field w-full px-4 py-3 border placeholder-muted transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="control control-primary w-full py-4 px-4  font-semibold transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Transmit Engineering Inquiry</span>
                    <ArrowRight className="w-4 h-4  transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
