import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DisableDevtool from 'disable-devtool';
import './App.css';

// Import รูปภาพ Base64 จากไฟล์ assets.js
import { LOGO_BASE64, ICONS_BASE64 } from './assets';

const PACKAGES = [
  { 
    id: 'rov', 
    name: 'Garena RoV x DAN DA DAN', 
    server: 'TH', 
    version: '1.63.11716331', 
    bundle: 'com.garena.game.kgth', 
    price: 'Free', 
    type: 'Decrypt', 
    iconKey: 'rov', // อ้างอิง Key ให้ตรงกับใน assets.js
    downloadUrl: '/apps/com.garena.game.kgth_1.63.11716331_F1X3R-Decrypt.ipa'
  },
  { 
    id: 'mlbb', 
    name: 'Mobile Legends: Bang Bang', 
    server: 'GL', 
    version: '2.1.95', 
    bundle: 'com.mobile.legends', 
    price: 'Free', 
    type: 'Decrypt', 
    iconKey: 'mlbb',
    downloadUrl: '/apps/com.mobile.legends_2.1.95_F1X3R-Decrypt.ipa'
  },
  { 
    id: 'cookierunclassic', 
    name: 'CookieRun Classic', 
    server: 'GL', 
    version: '26.7.11', 
    bundle: 'com.devsisters.crg', 
    price: 'Free', 
    type: 'Decrypt', 
    iconKey: 'cookierunclassic',
    downloadUrl: '/apps/com.devsisters.crg_26.7.11_F1X3R-Decrypt.ipa'
  }
];

function MainStore() {
  useEffect(() => {
    DisableDevtool({
      disableMenu: true,
      disableSelect: true,
      disableCopy: true,
      disableCut: true,
      disablePaste: true,
      clearLog: true,
    });
  }, []);

  const handleDownload = (e, downloadUrl) => {
    e.preventDefault();
    if (!downloadUrl) return;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero">
        <img 
          className="hero-logo" 
          src={LOGO_BASE64} 
          alt="F1X3R" 
        />
        <h1>F1X3R Store</h1>
        <p>Download Tweaked Apps & Moded Games for Free &nbsp;&middot;&nbsp; {PACKAGES.length} packages</p>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h2>Packages</h2>
        <span className="badge">{PACKAGES.length}</span>
      </div>

      <div className="pkg-grid">
        {PACKAGES.map((pkg) => {
          const CardContent = (
            <>
              <img 
                className="pkg-icon" 
                src={ICONS_BASE64[pkg.iconKey]} 
                alt={`${pkg.name} icon`} 
              />
              <div className="pkg-info">
                <div className="pkg-name">
                  {pkg.name}
                  {pkg.server && (
                    <>
                      &nbsp;&middot;&nbsp;
                      <span className="pkg-server-text">{pkg.server}</span>
                    </>
                  )}
                </div>
                <div className="pkg-version">Version: {pkg.version}</div>
                <div className="pkg-bundle">Identifier: {pkg.bundle}</div>
                <div className="pkg-tags">
                  {pkg.price && <span className="pkg-price">{pkg.price}</span>}
                  {pkg.type && <span className="pkg-type">{pkg.type}</span>}
                </div>
              </div>
            </>
          );

          return pkg.downloadUrl ? (
            <div 
              key={pkg.id} 
              onClick={(e) => handleDownload(e, pkg.downloadUrl)}
              className="pkg-card"
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              {CardContent}
            </div>
          ) : (
            <div className="pkg-card" key={pkg.id}>
              {CardContent}
            </div>
          );
        })}
      </div>

      <div className="divider"></div>

      <footer>
        <p>Made with ♡ by <a href="tg://user?id=6105731078">F1X3R</a></p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainStore />} />
        <Route path="/apps/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
