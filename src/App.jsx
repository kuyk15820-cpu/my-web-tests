import React, { useEffect } from 'react';
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
    downloadUrl: '/download.php?file=com.garena.game.kgth_1.63.11716331_F1X3R-Decrypt.ipa'
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
    downloadUrl: '/download.php?file=com.mobile.legends_2.1.95_F1X3R-Decrypt.ipa'
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
    downloadUrl: '/download.php?file=com.devsisters.crg_26.7.11_F1X3R-Decrypt.ipa'
  }
];

export default function App() {
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

  return (
    <>
      <div className="hero">
        <img 
          className="hero-logo" 
          src={LOGO_BASE64} 
          alt="F1X3R" 
          onContextMenu={(e) => e.preventDefault()}
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
                onContextMenu={(e) => e.preventDefault()}
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
            <a 
              key={pkg.id} 
              href={pkg.downloadUrl} 
              download 
              className="pkg-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {CardContent}
            </a>
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
