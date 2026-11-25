import { ImageResponse } from 'next/og';

export const alt = 'Tesseracton — Sovereign & Regulated AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#131617', color: '#f2f0e9', fontFamily: 'sans-serif' }}>
      <div style={{ color: '#edb65b', fontSize: 30, marginBottom: 36 }}>Tesseracton</div>
      <div style={{ fontSize: 66, fontWeight: 500, lineHeight: 1.15 }}>The Trust Fabric for Sovereign &amp; Regulated AI</div>
      <div style={{ color: '#a0aaaa', fontSize: 21, marginTop: 40 }}>Aegis AI OS / Infrastructure Intelligence / TAG / AI Trust Fabric</div>
    </div>,
    size,
  );
}
