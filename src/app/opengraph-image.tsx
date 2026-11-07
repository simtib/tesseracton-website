import { ImageResponse } from 'next/og';

export const alt = 'Tesseracton — Sovereign & Regulated AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#07090e', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      <div style={{ color: '#818cf8', fontSize: 30, marginBottom: 36 }}>Tesseracton</div>
      <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.15 }}>The Trust Fabric for Sovereign &amp; Regulated AI</div>
      <div style={{ color: '#94a3b8', fontSize: 26, marginTop: 40 }}>TAG Attestation Gateway · Aegis AI OS</div>
    </div>,
    size,
  );
}
