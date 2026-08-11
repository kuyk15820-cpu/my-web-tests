import React, { useEffect } from 'react';
import DisableDevtool from 'disable-devtool';
import './App.css';

const PACKAGES = [
  { 
    id: 'rov', 
    name: 'Garena RoV x DAN DA DAN', 
    server: 'TH', 
    version: '1.63.11716331', 
    bundle: 'com.garena.game.kgth', 
    price: 'Free', 
    type: 'Decrypt', 
    icon: 'Rov.png',
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
    icon: 'Mlbb.png' 
  },
  { 
    id: 'cookierunclassic', 
    name: 'CookieRun Classic', 
    server: 'GL', 
    version: '26.7.11', 
    bundle: 'com.devsisters.crg', 
    price: 'Free', 
    type: 'Decrypt', 
    icon: 'CookieRunClassic.png' 
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
        {/* Inline SVG โลโก้ F1X3R แสดงผลทันที 0s ไม่มีวันกระตุกหรือรูปหลุด */}
        <svg 
          className="hero-logo" 
          version="1.0" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 736.000000 736.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,736.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
            <path d="M2728 6747 c-50 -46 -69 -75 -161 -257 -57 -113 -123 -252 -147 -310 -121 -294 -163 -402 -186 -480 -14 -47 -34 -110 -45 -140 -10 -30 -32 -118 -49 -195 -33 -150 -34 -155 -55 -230 -15 -57 -28 -145 -51 -360 -21 -194 -13 -449 21 -651 24 -144 23 -215 -4 -322 -31 -124 -20 -327 24 -433 29 -67 25 -78 -25 -79 -88 -2 -294 -14 -400 -24 -123 -11 -125 -11 -128 -37 -5 -44 12 -49 139 -38 169 14 388 29 434 28 l40 0 47 -99 c45 -96 46 -98 25 -104 -12 -3 -34 -6 -49 -6 -14 0 -88 -17 -165 -38 -76 -22 -199 -54 -273 -72 -74 -18 -141 -38 -148 -45 -18 -17 1 -55 28 -55 25 0 253 54 359 86 120 36 299 64 329 53 27 -11 82 -62 82 -78 0 -6 5 -11 10 -11 47 0 -57 -68 -365 -238 -174 -97 -233 -134 -246 -157 -53 -91 -7 -75 382 140 113 62 224 114 259 121 17 4 33 11 36 15 16 26 82 4 162 -54 57 -41 202 -116 263 -136 56 -18 72 -42 64 -93 -11 -71 -113 -365 -171 -491 -30 -65 -54 -120 -54 -123 0 -2 -13 -32 -29 -66 -15 -35 -40 -102 -55 -149 -15 -47 -47 -123 -72 -170 -24 -46 -83 -163 -130 -259 -48 -96 -103 -209 -123 -250 -21 -41 -50 -96 -65 -122 -33 -57 -136 -306 -136 -330 0 -9 -4 -19 -9 -23 -5 -3 -13 -20 -16 -38 -4 -17 -25 -86 -47 -152 -22 -66 -44 -147 -48 -180 -4 -33 -11 -68 -15 -77 -7 -17 68 -18 1485 -18 l1493 0 -7 88 c-18 219 -44 339 -139 622 -41 124 -79 243 -85 265 -19 68 -62 254 -82 354 -11 53 -29 141 -41 196 -81 388 -104 548 -115 792 -7 141 -20 124 126 172 52 17 118 39 145 48 28 9 52 20 55 24 3 4 26 18 52 32 26 14 60 34 76 46 17 11 33 21 37 21 4 0 26 14 50 31 40 29 47 31 95 24 106 -15 241 -55 435 -129 110 -43 219 -88 242 -102 48 -28 66 -30 82 -10 9 11 5 19 -21 38 -51 37 -118 72 -243 128 -29 13 -172 59 -233 76 -112 30 -232 77 -232 90 0 8 4 14 8 14 5 0 33 30 63 68 30 37 60 73 67 81 12 12 43 13 215 2 324 -19 377 -27 505 -71 116 -40 156 -43 150 -12 -6 33 -229 104 -378 121 -52 5 -168 13 -257 17 -196 8 -202 10 -183 80 16 61 43 116 65 134 34 28 292 60 520 64 167 3 190 5 193 19 2 11 -6 21 -23 27 -40 15 -321 12 -498 -6 -87 -9 -161 -14 -164 -10 -4 3 2 34 11 68 27 95 31 232 12 387 -9 74 -20 141 -25 150 -4 9 -14 42 -21 74 -12 51 -11 73 3 171 24 156 43 655 28 706 -6 20 -11 79 -11 131 0 56 -8 127 -19 179 -11 47 -27 128 -36 180 -9 52 -23 118 -30 145 -7 28 -19 75 -25 105 -7 30 -38 136 -70 235 -32 99 -65 209 -74 245 -23 93 -75 251 -92 277 -8 12 -14 27 -14 32 0 23 -75 168 -112 217 -46 61 -69 78 -128 94 -106 28 -198 -44 -285 -225 -29 -60 -60 -130 -68 -155 -8 -25 -29 -75 -45 -111 -17 -37 -40 -100 -53 -140 -12 -41 -55 -174 -95 -297 -41 -123 -85 -267 -98 -320 -31 -120 -91 -301 -105 -315 -6 -6 -11 -17 -11 -24 0 -30 -45 -38 -225 -41 -99 -1 -207 -3 -240 -5 l-60 -2 -6 70 c-8 86 -25 157 -96 395 -98 333 -85 295 -197 550 -26 58 -80 191 -122 295 -97 246 -104 260 -152 322 -35 44 -48 53 -92 62 -76 16 -80 15 -142 -42z m514 -2291 c63 -15 92 -34 184 -122 79 -77 116 -155 143 -305 12 -62 21 -141 21 -174 0 -88 -34 -206 -80 -279 -82 -130 -193 -170 -445 -164 -193 5 -226 18 -343 132 -79 76 -121 138 -135 196 -4 14 -7 87 -8 161 -2 158 9 202 73 301 102 159 233 245 393 258 125 11 136 11 197 -4z m1551 -34 c86 -47 113 -70 155 -131 61 -89 73 -123 102 -281 42 -224 15 -346 -103 -475 -70 -77 -121 -113 -188 -131 -69 -18 -212 -18 -273 0 -103 31 -218 155 -251 271 -22 74 -22 283 0 365 41 157 161 328 275 391 52 28 60 30 141 26 73 -4 95 -9 142 -35z m-730 -934 c8 -29 -6 -45 -50 -53 -44 -8 -153 14 -160 32 -12 32 18 43 112 43 87 0 93 -1 98 -22z" />
            <path d="M3218 4093 c-47 -51 -62 -92 -63 -173 0 -92 31 -164 83 -194 31 -17 36 -18 66 -3 44 20 76 106 76 201 0 74 -14 115 -54 164 -35 41 -72 43 -108 5z" />
            <path d="M4490 4083 c-41 -52 -51 -93 -51 -196 1 -138 33 -197 108 -197 50 0 72 12 94 47 20 32 21 45 17 142 -6 112 -15 142 -64 200 -34 40 -74 42 -104 4z" />
          </g>
        </svg>

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
                src={`/images/${pkg.icon}`} 
                alt={`${pkg.name} icon`} 
                loading="eager"
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
