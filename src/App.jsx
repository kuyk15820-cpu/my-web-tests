import React, { useEffect } from 'react';
import DisableDevtool from 'disable-devtool';
import './App.css';

// Import Heavy Libraries เพื่อดันขนาดไฟล์ .js ตอน Build
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { jsPDF } from "jspdf";
import Chart from "chart.js/auto";
import * as echarts from "echarts";
import moment from "moment-timezone";
import _ from "lodash";

// ผูก Font ของ pdfmake
if (pdfFonts && pdfFonts.pdfMake) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
}

// อ้างอิงตัวแปรไว้สั้นๆ ด้านนอก Component เพื่อป้องกันไม่ให้ Vite ตัดโค้ดทิ้ง (Tree-Shaking)
if (false) {
  console.log(pdfMake, jsPDF, Chart, echarts, moment, _);
}

const PACKAGES = [
  { id: 'cookierunclassic', name: 'CookieRun Classic', server: 'GL', version: '26.7.11', bundle: 'com.devsisters.crg', price: 'Free', type: 'Decrypt', icon: 'CookieRunClassic.png' },
  { id: 'rov', name: 'Garena Rov', server: 'TH', version: '1.63.11716331', bundle: 'com.garena.game.kgth', price: 'Free', type: 'Decrypt', icon: 'Rov.png' },
  { id: 'mlbb', name: 'Mobile Legends: Bang Bang', server: 'GL', version: '2.1.95', bundle: 'com.mobile.legends', price: 'Free', type: 'Decrypt', icon: 'Mlbb.png' }
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
          src="/images/F1X3R.png" 
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
        {PACKAGES.map((pkg) => (
          <div className="pkg-card" key={pkg.id}>
            <img 
              className="pkg-icon" 
              src={`/images/${pkg.icon}`} 
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
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <footer>
        <p>Made with ♡ by <a href="tg://user?id=6105731078">F1X3R</a></p>
      </footer>
    </>
  );
}
