const BG_SRC = "./assets_dark/bg.jpg";
const MASK_SRC = "./assets_dark/vein_mask.png";
const SPARKLES = [{"x": 0.481, "y": 0.0666, "phase": 4.287, "speed": 0.992, "size": 5.85}, {"x": 0.542, "y": 0.9603, "phase": 1.594, "speed": 0.917, "size": 5.39}, {"x": 0.206, "y": 0.3074, "phase": 4.101, "speed": 0.401, "size": 4.29}, {"x": 0.437, "y": 0.7989, "phase": 5.132, "speed": 0.582, "size": 3.88}, {"x": 0.389, "y": 0.0227, "phase": 6.173, "speed": 0.809, "size": 4.4}, {"x": 0.384, "y": 0.5864, "phase": 3.754, "speed": 1.165, "size": 4.09}, {"x": 0.607, "y": 0.4575, "phase": 5.646, "speed": 1.035, "size": 3.9}, {"x": 0.289, "y": 0.9221, "phase": 3.864, "speed": 0.67, "size": 2.68}, {"x": 0.649, "y": 0.9136, "phase": 3.049, "speed": 0.441, "size": 3.55}, {"x": 0.166, "y": 0.5241, "phase": 5.298, "speed": 1.273, "size": 3.19}, {"x": 0.503, "y": 0.211, "phase": 1.042, "speed": 0.718, "size": 4.08}, {"x": 0.191, "y": 0.1062, "phase": 0.891, "speed": 1.126, "size": 3.05}, {"x": 0.673, "y": 0.0807, "phase": 3.389, "speed": 0.645, "size": 4.76}, {"x": 0.447, "y": 0.1006, "phase": 0.73, "speed": 0.845, "size": 5.47}, {"x": 0.727, "y": 0.4348, "phase": 0.105, "speed": 0.574, "size": 2.75}, {"x": 0.383, "y": 0.5142, "phase": 5.253, "speed": 1.004, "size": 3.35}, {"x": 0.688, "y": 0.9731, "phase": 5.655, "speed": 0.556, "size": 4.21}, {"x": 0.836, "y": 0.4136, "phase": 4.586, "speed": 0.941, "size": 2.73}, {"x": 0.993, "y": 0.3258, "phase": 0.297, "speed": 0.566, "size": 5.81}, {"x": 0.676, "y": 0.6147, "phase": 5.648, "speed": 0.67, "size": 2.67}, {"x": 0.328, "y": 0.3654, "phase": 3.989, "speed": 0.578, "size": 5.62}, {"x": 0.718, "y": 0.0751, "phase": 5.772, "speed": 1.104, "size": 5.22}, {"x": 0.042, "y": 0.3414, "phase": 4.892, "speed": 1.149, "size": 3.83}, {"x": 0.976, "y": 0.4065, "phase": 4.536, "speed": 0.411, "size": 4.93}, {"x": 0.93, "y": 0.5538, "phase": 2.795, "speed": 1.286, "size": 5.25}, {"x": 0.073, "y": 0.2139, "phase": 2.845, "speed": 1.036, "size": 4.55}, {"x": 0.189, "y": 0.9462, "phase": 3.876, "speed": 0.407, "size": 3.29}, {"x": 0.84, "y": 0.83, "phase": 1.618, "speed": 1.033, "size": 5.71}, {"x": 0.99, "y": 0.017, "phase": 3.949, "speed": 1.082, "size": 4.73}, {"x": 0.392, "y": 0.2932, "phase": 0.917, "speed": 0.63, "size": 4.54}, {"x": 0.264, "y": 0.6445, "phase": 4.737, "speed": 0.777, "size": 4.93}, {"x": 0.94, "y": 0.2691, "phase": 2.1, "speed": 0.683, "size": 3.09}, {"x": 0.584, "y": 0.755, "phase": 2.601, "speed": 0.922, "size": 2.88}, {"x": 0.905, "y": 0.4363, "phase": 5.844, "speed": 0.408, "size": 5.06}, {"x": 0.15, "y": 0.1133, "phase": 2.179, "speed": 1.244, "size": 3.5}, {"x": 0.201, "y": 0.8669, "phase": 0.161, "speed": 1.021, "size": 3.82}, {"x": 0.483, "y": 0.4292, "phase": 5.14, "speed": 1.0, "size": 4.04}, {"x": 0.494, "y": 0.6034, "phase": 4.152, "speed": 1.013, "size": 3.65}, {"x": 0.846, "y": 0.9674, "phase": 1.224, "speed": 0.988, "size": 4.49}, {"x": 0.471, "y": 0.6388, "phase": 0.299, "speed": 0.546, "size": 4.01}, {"x": 0.219, "y": 0.9943, "phase": 0.565, "speed": 0.872, "size": 3.88}, {"x": 0.656, "y": 0.7238, "phase": 1.857, "speed": 1.076, "size": 5.08}, {"x": 0.338, "y": 0.6884, "phase": 0.421, "speed": 0.937, "size": 5.97}, {"x": 0.942, "y": 0.7507, "phase": 3.81, "speed": 1.286, "size": 3.31}, {"x": 0.084, "y": 0.6756, "phase": 1.388, "speed": 0.694, "size": 3.32}, {"x": 0.373, "y": 0.9292, "phase": 1.003, "speed": 0.629, "size": 4.25}, {"x": 0.264, "y": 0.8201, "phase": 5.099, "speed": 1.095, "size": 2.64}, {"x": 0.284, "y": 0.5496, "phase": 4.817, "speed": 0.974, "size": 3.43}, {"x": 0.305, "y": 0.2748, "phase": 0.043, "speed": 1.174, "size": 2.97}, {"x": 0.291, "y": 0.7705, "phase": 1.595, "speed": 0.674, "size": 5.29}, {"x": 0.525, "y": 0.8782, "phase": 5.94, "speed": 1.224, "size": 5.47}, {"x": 0.075, "y": 0.5382, "phase": 5.312, "speed": 0.825, "size": 2.7}, {"x": 0.783, "y": 0.2394, "phase": 1.476, "speed": 0.526, "size": 2.91}, {"x": 0.854, "y": 0.136, "phase": 0.846, "speed": 0.687, "size": 2.68}, {"x": 0.112, "y": 0.1133, "phase": 1.855, "speed": 1.17, "size": 3.35}];

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let W = 0, H = 0;
let speedMul = 1;

const bgImg = new Image();
const maskImg = new Image();
let loaded = 0;

let glow, gctx;

function tryStart() {
  loaded++;
  if (loaded < 2) return;
  W = bgImg.naturalWidth;
  H = bgImg.naturalHeight;
  canvas.width = W;
  canvas.height = H;

  glow = document.createElement('canvas');
  glow.width = W;
  glow.height = H;
  gctx = glow.getContext('2d');

  requestAnimationFrame(loop);
}

bgImg.onload = tryStart;
maskImg.onload = tryStart;
bgImg.src = BG_SRC;
maskImg.src = MASK_SRC;

// Direction of the sun sweep (angle in radians) and its travel range
const ANGLE = -0.38; // ~ -22 deg, gentle diagonal like low sun
const dirX = Math.cos(ANGLE);
const dirY = Math.sin(ANGLE);

let t0 = performance.now();

function loop(now) {
  const t = (now - t0) / 1000 * speedMul;

  // --- diagonal projection range of the canvas corners onto the sweep direction ---
  const corners = [[0, 0], [W, 0], [0, H], [W, H]];
  let minP = Infinity, maxP = -Infinity;
  for (const [cx, cy] of corners) {
    const p = cx * dirX + cy * dirY;
    if (p < minP) minP = p;
    if (p > maxP) maxP = p;
  }
  const span = maxP - minP;
  const bandHalf = span * 0.42;
  const period = 11; // seconds for one full sweep pass, calmer pace
  const rawCycle = (t % period) / period; // 0..1
  // ease-in-out: the light slows and softens as it nears each end of its pass
  const cycle = 0.5 - 0.5 * Math.cos(Math.PI * rawCycle);
  const center = minP - bandHalf * 2 + cycle * (span + bandHalf * 4);

  const gx0 = dirX * (center - bandHalf * 2);
  const gy0 = dirY * (center - bandHalf * 2);
  const gx1 = dirX * (center + bandHalf * 2);
  const gy1 = dirY * (center + bandHalf * 2);

  // build the "sunlight" gradient band — wide, gradual, and much softer overall
  gctx.clearRect(0, 0, W, H);
  const grad = gctx.createLinearGradient(gx0, gy0, gx1, gy1);
  grad.addColorStop(0.00, 'rgba(255,244,214,0)');
  grad.addColorStop(0.28, 'rgba(255,240,200,0.05)');
  grad.addColorStop(0.40, 'rgba(255,238,195,0.14)');
  grad.addColorStop(0.48, 'rgba(255,240,220,0.28)');
  grad.addColorStop(0.50, 'rgba(255,250,240,0.34)');
  grad.addColorStop(0.52, 'rgba(220,240,255,0.28)');
  grad.addColorStop(0.60, 'rgba(210,235,255,0.14)');
  grad.addColorStop(0.72, 'rgba(200,230,255,0.05)');
  grad.addColorStop(1.00, 'rgba(200,230,255,0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, W, H);

  // keep only the pixels over the vein network
  gctx.globalCompositeOperation = 'destination-in';
  gctx.drawImage(maskImg, 0, 0, W, H);
  gctx.globalCompositeOperation = 'source-over';

  // subtle constant twinkle sparkles on top of the sweep (no trail, instantaneous per frame)
  gctx.globalCompositeOperation = 'lighter';
  for (const s of SPARKLES) {
    const b = (Math.sin(t * s.speed + s.phase) + 1) / 2; // 0..1
    const alpha = 0.10 + b * 0.55;
    const x = s.x * W, y = s.y * H;
    const r = s.size * (1 + b * 0.6);
    const rg = gctx.createRadialGradient(x, y, 0, x, y, r * 3);
    rg.addColorStop(0, `rgba(255,250,225,${alpha})`);
    rg.addColorStop(1, `rgba(255,250,225,0)`);
    gctx.fillStyle = rg;
    gctx.beginPath();
    gctx.arc(x, y, r * 3, 0, Math.PI * 2);
    gctx.fill();
  }
  gctx.globalCompositeOperation = 'source-over';

  // composite: background, then screen-blend the glow layer on top
  // (no accumulation/fade-trail — fully recomputed each frame)
  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(bgImg, 0, 0, W, H);
  ctx.globalCompositeOperation = 'screen';
  ctx.drawImage(glow, 0, 0);
  ctx.globalCompositeOperation = 'source-over';

  requestAnimationFrame(loop);
}

document.getElementById('toggleSpeed').addEventListener('click', (e) => {
  if (speedMul === 1) {
    speedMul = 2.4;
    e.target.textContent = 'Vitesse: rapide';
  } else if (speedMul === 2.4) {
    speedMul = 0.35;
    e.target.textContent = 'Vitesse: lente';
  } else {
    speedMul = 1;
    e.target.textContent = 'Vitesse: normale';
  }
});
