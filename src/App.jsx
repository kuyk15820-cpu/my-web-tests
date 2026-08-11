import React from 'react';
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
  { id: 'batterymirror', name: 'BatteryMirror', version: 'v0.0.4', bundle: 'com.futur3sn0w.batterymirror', price: 'Free', icon: 'com.futur3sn0w.batterymirror.png' },
  { id: 'battfx', name: 'BattFX', version: 'v0.0.5', bundle: 'com.futur3sn0w.battfx', price: 'Free', icon: 'com.futur3sn0w.battfx.png' },
  { id: 'ccaster', name: 'CCAster', version: 'v0.2.2', bundle: 'com.futur3sn0w.ccaster', price: 'Free', icon: 'com.futur3sn0w.ccaster.png' },
  { id: 'ccsupportbatteryfix', name: 'CCSupport Battery Fix', version: 'v0.0.2', bundle: 'com.futur3sn0w.ccsupportbatteryfix', price: 'Free', icon: 'com.futur3sn0w.ccsupportbatteryfix.png' },
  { id: 'centerlastrow', name: 'CenterLastRow', version: 'v0.0.1-2+debug', bundle: 'com.futur3sn0w.centerlastrow', price: 'Free', icon: 'com.futur3sn0w.centerlastrow.png' },
  { id: 'custhome', name: 'CustHome', version: 'v0.2.0', bundle: 'com.futur3sn0w.custhome', price: 'Free', icon: 'com.futur3sn0w.custhome.png' },
  { id: 'dockfull', name: 'DockFull', version: 'v0.0.3', bundle: 'com.futur3sn0w.dockfull', price: 'Free', icon: 'com.futur3sn0w.dockfull.png' },
  { id: 'docklibrary', name: 'DockLibrary', version: 'v0.4.2', bundle: 'com.futur3sn0w.docklibrary', price: 'Free', icon: 'com.futur3sn0w.docklibrary.png' },
  { id: 'duowall', name: 'DuoWall', version: 'v0.0.76-2+debug', bundle: 'com.futur3sn0w.duowall', price: 'Free', icon: 'com.futur3sn0w.duowall.png' },
  { id: 'finn', name: 'Finn', version: 'v1.0.1', bundle: 'com.futur3sn0w.finn', price: 'Free', icon: 'com.futur3sn0w.finn.png' },
  { id: 'muteflash', name: 'MuteFlash', version: 'v0.0.2', bundle: 'com.futur3sn0w.muteflash', price: 'Free', icon: 'com.futur3sn0w.muteflash.png' },
  { id: 'mutemodule', name: 'MuteModule', version: 'v0.0.1-4+debug', bundle: 'com.futur3sn0w.mutemodule', price: 'Free', icon: 'com.futur3sn0w.mutemodule.png' },
  { id: 'noseparators', name: 'NoSeparators', version: 'v0.0.1-2+debug', bundle: 'com.futur3sn0w.noseparators', price: 'Free', icon: 'com.futur3sn0w.noseparators.png' },
  { id: 'solert', name: 'Solert', version: 'v0.0.1-1+debug', bundle: 'com.futur3sn0w.solert', price: 'Free', icon: 'com.futur3sn0w.solert.png' },
  { id: 'swipeformore7', name: 'SwipeForMore7', version: 'v1.2.5+ios7.12', bundle: 'com.futur3sn0w.swipeformore7', price: 'Free', icon: 'com.futur3sn0w.swipeformore7.png' },
  { id: 'taptimenneo', name: 'TapTimeNeo', version: 'v0.0.1-7+debug', bundle: 'com.futur3sn0w.taptimenneo', price: 'Free', icon: 'com.futur3sn0w.taptimenneo.png' },
];

export default function App() {
  return (
    <>
      <div className="hero">
        <img 
          className="hero-logo" 
          src="https://futur3sn0w.github.io/repo/CydiaIcon.png" 
          alt="F1X3R" 
        />
        <h1>F1X3R Developer</h1>
        <p>DarkStore &nbsp;&middot;&nbsp; {PACKAGES.length} packages</p>
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
              src={`https://futur3sn0w.github.io/repo/icons/${pkg.icon}`} 
              alt={`${pkg.name} icon`} 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="pkg-info">
              <div className="pkg-name">{pkg.name}</div>
              <div className="pkg-version">{pkg.version}</div>
              <div className="pkg-bundle">{pkg.bundle}</div>
              <div className="pkg-price">{pkg.price}</div>
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
