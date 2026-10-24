// High-quality fashion flat pencil sketch SVG Data URIs matching the uploaded tops sketches

const createPaperSvg = (content: string) => 
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000' width='100%' height='100%'><rect width='800' height='1000' fill='%23f5f2eb'/><rect width='760' height='960' x='20' y='20' fill='%23faf8f5' rx='12' stroke='%23e6e1d6' stroke-width='2'/><g stroke='%232c2a29' stroke-width='2.2' fill='none' stroke-linecap='round' stroke-linejoin='round'>${content}</g></svg>`;

// Top 1: Tie-Front Crop Top (Front & Back Knot Detail)
export const TOP1_KNOT_SKETCH_SVG = createPaperSvg(`
  <!-- Front View (Top) -->
  <g transform='translate(0, -30)'>
    <path d='M 260 140 Q 400 240 540 140' stroke-width='2.5' fill='%23f2efe8'/>
    <path d='M 260 140 L 160 190 Q 200 320 280 430 L 370 410' fill='%23f2efe8' stroke-width='2.5'/>
    <path d='M 540 140 L 640 190 Q 600 320 520 430 L 430 410' fill='%23f2efe8' stroke-width='2.5'/>
    <!-- Neck V & Placket -->
    <path d='M 260 140 Q 340 320 380 390' stroke-width='2.2'/>
    <path d='M 540 140 Q 460 320 420 390' stroke-width='2.2'/>
    <!-- Tied Knot at front -->
    <circle cx='400' cy='400' r='18' fill='%23ebd8cb' stroke-width='2.5'/>
    <path d='M 388 408 Q 330 440 310 510 Q 360 480 395 415' fill='%23f2efe8' stroke-width='2.2'/>
    <path d='M 412 408 Q 470 440 490 510 Q 440 480 405 415' fill='%23f2efe8' stroke-width='2.2'/>
    <!-- Fold Shading -->
    <path d='M 340 280 Q 370 340 385 385' stroke-width='1.2' opacity='0.6'/>
    <path d='M 310 260 Q 350 330 375 380' stroke-width='1.2' opacity='0.6'/>
    <path d='M 460 280 Q 430 340 415 385' stroke-width='1.2' opacity='0.6'/>
    <path d='M 490 260 Q 450 330 425 380' stroke-width='1.2' opacity='0.6'/>
  </g>

  <!-- Back View (Bottom) -->
  <g transform='translate(0, 390)'>
    <path d='M 300 130 Q 400 150 500 130 L 610 180 Q 560 320 500 410 Q 400 420 300 410 Q 240 320 190 180 Z' fill='%23f2efe8' stroke-width='2.5'/>
    <path d='M 300 130 Q 400 160 500 130' stroke-width='2.2'/>
    <!-- Tied Knot at back hem -->
    <circle cx='400' cy='415' r='14' fill='%23ebd8cb' stroke-width='2.5'/>
    <path d='M 390 422 Q 350 460 335 520 Q 380 490 396 426' fill='%23f2efe8' stroke-width='2'/>
    <path d='M 410 422 Q 450 460 465 520 Q 420 490 404 426' fill='%23f2efe8' stroke-width='2'/>
    <!-- Back seam lines -->
    <path d='M 300 130 Q 330 280 340 410' stroke-width='1.2' opacity='0.5'/>
    <path d='M 500 130 Q 470 280 460 410' stroke-width='1.2' opacity='0.5'/>
  </g>
`);

// Top 2: V-Neck Puff Sleeve Button-Down Blouse
export const TOP2_PUFF_SKETCH_SVG = createPaperSvg(`
  <g transform='translate(0, 100)'>
    <!-- Neckline & Placket -->
    <path d='M 310 120 Q 400 240 490 120' stroke-width='2.5' fill='%23f2efe8'/>
    <path d='M 400 215 L 400 520' stroke-width='2.2'/>
    
    <!-- Bodice -->
    <path d='M 310 120 L 250 160 Q 270 330 290 390 L 510 390 Q 530 330 550 160 L 490 120' fill='%23f2efe8' stroke-width='2.5'/>
    
    <!-- Wide Fitted Waistband with Buttons -->
    <path d='M 290 390 L 310 520 L 490 520 L 510 390 Z' fill='%23eae5dc' stroke-width='2.5'/>
    <circle cx='400' cy='425' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='455' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='485' r='6' fill='%232c2a29'/>
    
    <!-- Upper Placket Buttons -->
    <circle cx='400' cy='260' r='5' fill='%232c2a29'/>
    <circle cx='400' cy='300' r='5' fill='%232c2a29'/>
    <circle cx='400' cy='340' r='5' fill='%232c2a29'/>

    <!-- Puffed Sleeves -->
    <path d='M 250 160 Q 150 250 140 380 Q 180 500 230 520 L 265 520 Q 230 420 290 390' fill='%23f5f1ea' stroke-width='2.5'/>
    <path d='M 490 120 Q 650 250 660 380 Q 620 500 570 520 L 535 520 Q 570 420 510 390' fill='%23f5f1ea' stroke-width='2.5'/>
    
    <!-- Sleeve Cuffs -->
    <path d='M 140 505 Q 185 530 230 520 L 225 540 Q 180 550 135 520 Z' fill='%23eae5dc' stroke-width='2'/>
    <path d='M 660 505 Q 615 530 570 520 L 575 540 Q 620 550 665 520 Z' fill='%23eae5dc' stroke-width='2'/>

    <!-- Underbust Gathers -->
    <path d='M 320 390 Q 330 350 335 320' stroke-width='1.2' opacity='0.7'/>
    <path d='M 350 390 Q 360 345 365 310' stroke-width='1.2' opacity='0.7'/>
    <path d='M 380 390 Q 385 350 388 320' stroke-width='1.2' opacity='0.7'/>
    <path d='M 420 390 Q 415 350 412 320' stroke-width='1.2' opacity='0.7'/>
    <path d='M 450 390 Q 440 345 435 310' stroke-width='1.2' opacity='0.7'/>
    <path d='M 480 390 Q 470 350 465 320' stroke-width='1.2' opacity='0.7'/>
  </g>
`);

// Top 3: Tailored Belted Vest Top
export const TOP3_VEST_SKETCH_SVG = createPaperSvg(`
  <g transform='translate(0, 100)'>
    <!-- Straps -->
    <path d='M 300 100 L 280 230' stroke-width='3'/>
    <path d='M 320 100 L 305 220' stroke-width='2'/>
    <path d='M 500 100 L 520 230' stroke-width='3'/>
    <path d='M 480 100 L 495 220' stroke-width='2'/>

    <!-- V Neck & Double Lapel Overlap -->
    <path d='M 280 230 Q 370 340 400 480' stroke-width='2.5' fill='%23f2efe8'/>
    <path d='M 520 230 Q 420 330 370 480' stroke-width='2.5'/>

    <!-- Vest Main Bodice -->
    <path d='M 280 230 Q 230 380 260 480 L 240 680 Q 400 720 560 680 L 540 480 Q 570 380 520 230 Z' fill='%23f2efe8' stroke-width='2.5'/>

    <!-- Center Buttons -->
    <circle cx='415' cy='360' r='10' fill='%23e5dfd5' stroke='%232c2a29' stroke-width='2'/>
    <circle cx='415' cy='430' r='10' fill='%23e5dfd5' stroke='%232c2a29' stroke-width='2'/>
    <circle cx='415' cy='580' r='10' fill='%23e5dfd5' stroke='%232c2a29' stroke-width='2'/>

    <!-- Belt with Buckle -->
    <path d='M 255 480 L 545 480 L 545 540 L 255 540 Z' fill='%23eae5dc' stroke-width='2.5'/>
    <rect x='375' y='468' width='50' height='84' rx='6' fill='%23f5f2eb' stroke='%232c2a29' stroke-width='3'/>
    <rect x='388' y='480' width='24' height='60' rx='3' stroke='%232c2a29' stroke-width='2'/>

    <!-- Pleated Hem Below Belt -->
    <line x1='300' y1='540' x2='290' y2='685' stroke-width='2'/>
    <line x1='340' y1='540' x2='335' y2='690' stroke-width='2'/>
    <line x1='460' y1='540' x2='465' y2='690' stroke-width='2'/>
    <line x1='500' y1='540' x2='510' y2='685' stroke-width='2'/>
  </g>
`);

// Top 4: Asymmetrical One-Shoulder Corset Peplum
export const TOP4_ONESHoulder_SKETCH_SVG = createPaperSvg(`
  <g transform='translate(0, 100)'>
    <!-- One Shoulder Strap & Neckline -->
    <path d='M 480 80 Q 560 160 550 240' stroke-width='3'/>
    <path d='M 510 90 Q 580 180 570 240' stroke-width='2'/>
    <path d='M 480 80 Q 320 220 250 280' stroke-width='2.5' fill='%23f2efe8'/>

    <!-- Corset Bodice Seams -->
    <path d='M 250 280 Q 230 400 270 480 L 530 480 Q 570 380 550 240 Z' fill='%23f2efe8' stroke-width='2.5'/>
    <path d='M 320 300 Q 310 400 325 480' stroke-width='1.8'/>
    <path d='M 380 320 L 380 480' stroke-width='1.8'/>
    <path d='M 440 320 L 440 480' stroke-width='1.8'/>
    <path d='M 500 270 Q 490 380 495 480' stroke-width='1.8'/>

    <!-- Cascading Tiered Ruffled Peplum -->
    <path d='M 270 480 Q 150 600 120 720 Q 380 780 640 700 Q 600 580 530 480 Z' fill='%23eae5dc' stroke-width='2.5'/>
    <path d='M 270 480 Q 200 640 220 740 Q 380 820 660 720 Q 580 620 530 480' fill='%23f5f2eb' stroke-width='2.2'/>

    <!-- Ruffle Folds & Waves -->
    <path d='M 240 510 Q 210 620 230 730' stroke-width='1.5' opacity='0.7'/>
    <path d='M 310 490 Q 290 620 320 750' stroke-width='1.5' opacity='0.7'/>
    <path d='M 380 485 Q 370 630 410 760' stroke-width='1.5' opacity='0.7'/>
    <path d='M 450 485 Q 460 630 500 740' stroke-width='1.5' opacity='0.7'/>
    <path d='M 510 490 Q 540 620 590 720' stroke-width='1.5' opacity='0.7'/>
  </g>
`);

// Top 5: Lace-Trimmed Buttoned Corset Top
export const TOP5_CORSET_SKETCH_SVG = createPaperSvg(`
  <g transform='translate(0, 100)'>
    <!-- Straps -->
    <path d='M 290 110 L 280 230' stroke-width='3'/>
    <path d='M 310 110 L 300 220' stroke-width='2'/>
    <path d='M 510 110 L 520 230' stroke-width='3'/>
    <path d='M 490 110 L 500 220' stroke-width='2'/>

    <!-- Sweetheart Neckline -->
    <path d='M 280 230 Q 340 280 400 240 Q 460 280 520 230' stroke-width='2.5' fill='%23f2efe8'/>

    <!-- Corset Bodice with Vertical Seams -->
    <path d='M 280 230 Q 230 420 260 620 Q 400 640 540 620 Q 570 420 520 230 Z' fill='%23f2efe8' stroke-width='2.5'/>

    <path d='M 320 250 Q 290 440 310 622' stroke-width='1.8'/>
    <path d='M 360 255 Q 340 440 355 625' stroke-width='1.8'/>
    <path d='M 440 255 Q 460 440 445 625' stroke-width='1.8'/>
    <path d='M 480 250 Q 510 440 490 622' stroke-width='1.8'/>

    <!-- Center Buttons -->
    <line x1='400' y1='240' x2='400' y2='630' stroke-width='2'/>
    <circle cx='400' cy='280' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='350' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='420' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='490' r='6' fill='%232c2a29'/>
    <circle cx='400' cy='560' r='6' fill='%232c2a29'/>

    <!-- Scalloped Lace Trim at Bottom Hem -->
    <path d='M 260 620 Q 280 650 300 620 Q 320 650 340 620 Q 360 650 380 620 Q 400 650 420 620 Q 440 650 460 620 Q 480 650 500 620 Q 520 650 540 620' stroke-width='2.2' fill='%23eae5dc'/>
    <path d='M 265 632 Q 280 658 295 632 Q 315 658 335 632 Q 355 658 375 632 Q 395 658 415 632 Q 435 658 455 632 Q 475 658 495 632 Q 515 658 535 632' stroke-width='1.2' opacity='0.75'/>
  </g>
`);

// Top 6: Wide Ruffled Flounce Collar Crop Blouse
export const TOP6_RUFFLE_SKETCH_SVG = createPaperSvg(`
  <g transform='translate(0, 100)'>
    <!-- Neckline -->
    <path d='M 290 140 Q 400 240 510 140' stroke-width='2.5' fill='%23f2efe8'/>

    <!-- Wide Ruffled Flounce Collar -->
    <path d='M 290 140 Q 150 200 120 320 Q 260 420 400 370 Q 540 420 680 320 Q 650 200 510 140 Z' fill='%23eae5dc' stroke-width='2.5'/>

    <!-- Lace Border Edging on Collar -->
    <path d='M 120 320 Q 140 345 160 330 Q 180 355 200 340 Q 220 365 240 350 Q 260 375 280 360 Q 300 380 320 365 Q 340 385 360 370 Q 380 385 400 370 Q 420 385 440 370 Q 460 385 480 365 Q 500 380 520 360 Q 540 375 560 350 Q 580 365 600 340 Q 620 355 640 330 Q 660 345 680 320' stroke-width='1.8' fill='none'/>

    <!-- Collar Radial Flounce Folds -->
    <line x1='210' y1='220' x2='230' y2='340' stroke-width='1.5' opacity='0.7'/>
    <line x1='270' y1='225' x2='300' y2='360' stroke-width='1.5' opacity='0.7'/>
    <line x1='330' y1='230' x2='360' y2='368' stroke-width='1.5' opacity='0.7'/>
    <line x1='470' y1='230' x2='440' y2='368' stroke-width='1.5' opacity='0.7'/>
    <line x1='530' y1='225' x2='500' y2='360' stroke-width='1.5' opacity='0.7'/>
    <line x1='590' y1='220' x2='570' y2='340' stroke-width='1.5' opacity='0.7'/>

    <!-- Fitted Bodice Below Collar -->
    <path d='M 280 350 Q 260 480 290 600 L 510 600 Q 540 480 520 350 Z' fill='%23f2efe8' stroke-width='2.5'/>
    <line x1='350' y1='360' x2='350' y2='600' stroke-width='1.8'/>
    <line x1='450' y1='360' x2='450' y2='600' stroke-width='1.8'/>

    <!-- Lace Trim at Bottom Hem -->
    <path d='M 290 600 Q 305 620 320 600 Q 335 620 350 600 Q 365 620 380 600 Q 395 620 410 600 Q 425 620 440 600 Q 455 620 470 600 Q 485 620 510 600' stroke-width='1.8' fill='%23eae5dc'/>
  </g>
`);
