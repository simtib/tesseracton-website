import React, { useState } from 'react';
import { 
  Mail, 
  User, 
  Building, 
  FileText, 
  ArrowRight, 
  Check, 
  MapPin, 
  ShieldCheck, 
  Key, 
  Clock, 
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
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center pt-8 pb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
              DIRECT ARCHITECT CONTACT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Connect with Our{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Security Architects
            </span>
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Whether evaluating TAG for continuous compliance or deploying Aegis AI OS on sovereign GPU clusters, our cryptographic solutions team is ready to assist.
          </p>
        </div>

        {/* Two-Column Grid: Form + Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start my-8">

          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Dispatched Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.firstName}</strong>. We have routed your request regarding <strong className="text-white">{formData.inquiryType}</strong> for <strong className="text-white">{formData.company}</strong> to our primary systems architect.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                    className="text-xs text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-white">Send an Engineering Inquiry</h3>
                  <p className="text-xs text-slate-400">Fill in the specifications below for a direct technical consultation.</p>
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-400" />
                      <span>First Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Last Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rostova"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Work Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@sovereign-ai.eu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Company / Organization Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="EuroHPC AI Cloud Infrastructure"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Inquiry Focus</span>
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer"
                  >
                    <option value="Enterprise Pilot Evaluation">TAG (Attestation Gateway) Enterprise Pilot</option>
                    <option value="Aegis AI OS Cluster Trial">Aegis AI OS Hardened Kernel Trial</option>
                    <option value="Sovereign Cloud Architecture Briefing">Sovereign Cloud / Air-Gapped Architecture Briefing</option>
                    <option value="EU AI Act / FedRAMP Compliance Fast-Track">EU AI Act / FedRAMP Certification Fast-Track</option>
                    <option value="Datacenter & Hardware Partner Integration">Datacenter & Hardware Partner Integration</option>
                    <option value="Security Research & Vulnerability Disclosure">Security Research & Other</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Description & Technical Requirements</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your GPU infrastructure scale, compliance targets, or sovereign datacenter requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Transmit Engineering Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Security Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Response Commitments</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inquiries are triaged directly by senior cryptographic systems engineers. We maintain a strict 4-hour SLA on technical evaluations.
              </p>
              <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>General Architecture:</span>
                  <span className="text-white font-mono">arch@tesseracton.ai</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Enterprise Pilots:</span>
                  <span className="text-white font-mono">pilots@tesseracton.ai</span>
                </div>
              </div>
            </div>

            {/* PGP Security Key */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-emerald-400" />
                <span>Encrypted Communications</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For sensitive air-gapped architecture disclosures or defense evaluations, use our security PGP key:
              </p>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[10px] text-emerald-400 break-all select-all">
                PGP Fingerprint: 4E92 B01F 77A8 30CD 881E F32A 9400 231B C009 51EE
              </div>
            </div>

            {/* Global Labs */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Primary Sovereign Lab</span>
              </h4>
              <div className="text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white">Tesseracton AG (Switzerland)</p>
                <p className="text-slate-400">Technoparkstrasse 1, 8005 Zurich</p>
                <p className="text-[11px] font-mono text-indigo-400 pt-1">UID: CHE-491.802.193</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
