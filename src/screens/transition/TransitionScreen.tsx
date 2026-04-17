import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import OldPlatformBoard from "../old-platform/OldPlatformBoard";

const ff = "Figtree, sans-serif";

const GROUP_COLORS  = ['#E44B23', '#0073EA', '#E2445C'] as const;
const GROUP_LABELS  = ['Screening', 'Interviews', 'Contract negotiation'] as const;
const GROUP_COUNTS  = [3, 3, 2] as const;
// pre-fixed name widths so no Math.random() during render
const ROW_WIDTHS    = [140, 115, 162, 128, 122, 148, 112, 138];
const SIDEBAR_PCT   = [72, 54, 88, 62, 78, 54, 68, 58];

const KEYFRAMES = `
  @media (prefers-reduced-motion: no-preference) {
    @keyframes tsk-shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes tsk-float-a {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-20px); }
    }
    @keyframes tsk-float-b {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(20px); }
    }
    @keyframes tsk-float-c {
      0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
      50%       { transform: translateY(-12px) scale(1.12); opacity: 0.62; }
    }
    .tsk-o1 { animation: tsk-float-a 3s   ease-in-out infinite; }
    .tsk-o2 { animation: tsk-float-b 3.5s ease-in-out infinite; }
    .tsk-o3 { animation: tsk-float-c 4s   ease-in-out infinite; }
    .tsk-sk {
      background: linear-gradient(90deg, #1E1E2E 25%, #2A2A3E 50%, #1E1E2E 75%);
      background-size: 200% 100%;
      animation: tsk-shimmer 1.2s infinite linear;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .tsk-sk { background: #1E1E2E; }
  }
`;

/* ── tiny helper ── */
function Sk({ h, w, r = 4, fill }: { h: number; w: number | string; r?: number; fill?: string }) {
  return (
    <div
      className={fill ? undefined : 'tsk-sk'}
      style={{
        height: h,
        width: w,
        borderRadius: r,
        flexShrink: 0,
        background: fill,
        transition: fill ? 'background 0.3s ease' : undefined,
      }}
    />
  );
}

export default function TransitionScreen() {
  const navigate = useNavigate();

  type Phase = 'dissolve' | 'energy' | 'skeleton';
  const [phase,        setPhase]        = useState<Phase>('dissolve');
  const [showLogo,     setShowLogo]     = useState(false);
  const [showL1,       setShowL1]       = useState(false);
  const [showL2,       setShowL2]       = useState(false);
  const [showL3,       setShowL3]       = useState(false);
  const [showSparkle,  setShowSparkle]  = useState(false);
  const [orbsOut,      setOrbsOut]      = useState(false);
  const [skelIn,       setSkelIn]       = useState(false);
  const [navFilled,    setNavFilled]    = useState(false);
  const [sidebarFilled,setSidebarFilled]= useState(false);
  const [groupsFilled, setGroupsFilled] = useState<number[]>([]);
  const [rowsFilled,   setRowsFilled]   = useState(false);
  const [pillsFilled,  setPillsFilled]  = useState(false);
  const [showGlow,     setShowGlow]     = useState(false);
  const [whiteOut,     setWhiteOut]     = useState(false);

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => ts.push(setTimeout(fn, ms));

    // Phase 1 → 2
    at(600,  () => setPhase('energy'));

    // Phase 2: energy text
    at(700,  () => setShowLogo(true));
    at(1000, () => setShowL1(true));
    at(1600, () => setShowL2(true));
    at(2200, () => setShowL3(true));
    at(2600, () => setShowSparkle(true));

    // Phase 3: skeleton
    at(3200, () => { setOrbsOut(true); setPhase('skeleton'); });
    at(3500, () => setSkelIn(true));

    // Color bleed-in
    at(3600, () => setNavFilled(true));
    at(3750, () => setSidebarFilled(true));
    at(3900, () => setGroupsFilled([0]));
    at(4000, () => setGroupsFilled([0, 1]));
    at(4100, () => setGroupsFilled([0, 1, 2]));
    at(4200, () => setRowsFilled(true));
    at(4400, () => setPillsFilled(true));

    // Glow + white-out + navigate
    at(4600, () => setShowGlow(true));
    at(4900, () => setWhiteOut(true));
    at(5100, () => navigate('/new?sidekick=open'));

    return () => ts.forEach(clearTimeout);
  }, [navigate]);

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div style={{ position: 'fixed', inset: 0, background: '#0A0A12', overflow: 'hidden' }}>

        {/* ── Phase 1: old platform dissolves ─────────────────── */}
        <AnimatePresence>
          {phase === 'dissolve' && (
            <motion.div
              key="old"
              initial={{ opacity: 1, filter: 'blur(0px)' }}
              animate={{ opacity: 0,   filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <OldPlatformBoard />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Orbs (Phase 2, fade on Phase 3) ─────────────────── */}
        <AnimatePresence>
          {phase !== 'dissolve' && !orbsOut && (
            <motion.div
              key="orbs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
            >
              {/* Orb 1 — purple/blue, top-left */}
              <div className="tsk-o1" style={{
                position: 'absolute', width: 400, height: 400, borderRadius: '50%',
                background: 'conic-gradient(from 210deg, #9450FD, #0074FD, #9450FD)',
                filter: 'blur(80px)', top: -120, left: -120, opacity: 0.7,
              }} />
              {/* Orb 2 — teal/cyan, bottom-right */}
              <div className="tsk-o2" style={{
                position: 'absolute', width: 400, height: 400, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #04F0FB, #00BAFF, #04F0FB)',
                filter: 'blur(80px)', bottom: -120, right: -120, opacity: 0.5,
              }} />
              {/* Orb 3 — pink/purple, center */}
              <div className="tsk-o3" style={{
                position: 'absolute', width: 400, height: 400, borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF84E4, #6161FF)',
                filter: 'blur(80px)',
                top: 'calc(50% - 200px)', left: 'calc(50% - 200px)',
                opacity: 0.4,
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Phase 2: center text ─────────────────────────────── */}
        <AnimatePresence>
          {phase === 'energy' && (
            <motion.div
              key="energy-text"
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 20,
              }}
            >
              <AnimatePresence>
                {showLogo && (
                  <motion.div key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* monday 3-dot mark */}
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <ellipse cx="6"  cy="8" rx="6" ry="6" fill="#FF3D57" />
                      <ellipse cx="20" cy="8" rx="6" ry="6" fill="#FFCB00" />
                      <ellipse cx="34" cy="8" rx="6" ry="6" fill="#00CA72" />
                    </svg>
                  </motion.div>
                )}
                {showL1 && (
                  <motion.p key="l1"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, fontFamily: ff, fontSize: 16, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}
                  >Reading your recruitment pipeline...</motion.p>
                )}
                {showL2 && (
                  <motion.p key="l2"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, fontFamily: ff, fontSize: 16, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}
                  >Building your Interview Scheduler agent...</motion.p>
                )}
                {showL3 && (
                  <motion.p key="l3"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, fontFamily: ff, fontSize: 22, fontWeight: 600, color: '#ffffff', textAlign: 'center' }}
                  >Your agent is ready.</motion.p>
                )}
                {showSparkle && (
                  <motion.div key="sparkle"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'backOut' }}
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 2L17.5 11.5L27 15L17.5 18.5L15 28L12.5 18.5L3 15L12.5 11.5L15 2Z"
                        fill="url(#spkG)" />
                      <path d="M25 2L26 5.5L29.5 6.5L26 7.5L25 11L24 7.5L20.5 6.5L24 5.5L25 2Z"
                        fill="url(#spkG2)" opacity="0.7" />
                      <defs>
                        <linearGradient id="spkG" x1="3" y1="2" x2="27" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%"   stopColor="#9450FD" />
                          <stop offset="100%" stopColor="#04F0FB" />
                        </linearGradient>
                        <linearGradient id="spkG2" x1="20" y1="2" x2="30" y2="11" gradientUnits="userSpaceOnUse">
                          <stop offset="0%"   stopColor="#9450FD" />
                          <stop offset="100%" stopColor="#04F0FB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Phase 3: skeleton board ──────────────────────────── */}
        <AnimatePresence>
          {phase === 'skeleton' && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: skelIn ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* ── Top nav ── */}
              <div style={{
                height: 48, flexShrink: 0,
                display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: navFilled ? 'rgba(255,255,255,0.06)' : 'transparent',
                transition: 'background 0.3s ease',
              }}>
                {navFilled ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}
                  >
                    <div style={{ width: 110, height: 24, borderRadius: 4, background: 'rgba(255,255,255,0.18)' }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ width: 180, height: 26, borderRadius: 20, background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ width: 70, height: 26, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                  </motion.div>
                ) : (
                  <>
                    <Sk h={24} w={110} />
                    <div style={{ flex: 1 }} />
                    <Sk h={26} w={180} r={20} />
                    <div style={{ flex: 1 }} />
                    <Sk h={26} w={70} />
                  </>
                )}
              </div>

              {/* ── Body ── */}
              <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

                {/* Left sidebar */}
                <div style={{
                  width: 232, flexShrink: 0,
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  padding: '20px 14px', boxSizing: 'border-box',
                  display: 'flex', flexDirection: 'column', gap: 10,
                  background: sidebarFilled ? 'rgba(255,255,255,0.04)' : 'transparent',
                  transition: 'background 0.3s ease',
                }}>
                  {SIDEBAR_PCT.map((pct, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0.35 }}
                      animate={{ opacity: sidebarFilled ? 1 : 0.35 }}
                      transition={{ duration: 0.22, delay: sidebarFilled ? i * 0.035 : 0 }}
                    >
                      {sidebarFilled
                        ? <div style={{ height: 20, width: `${pct}%`, borderRadius: 4, background: 'rgba(255,255,255,0.12)' }} />
                        : <Sk h={20} w={`${pct}%`} />
                      }
                    </motion.div>
                  ))}
                </div>

                {/* Board area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                  {/* Board header bar */}
                  <div style={{
                    height: 52, flexShrink: 0,
                    display: 'flex', alignItems: 'center',
                    padding: '0 20px', gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    background: navFilled ? 'rgba(255,255,255,0.03)' : 'transparent',
                    transition: 'background 0.3s ease',
                  }}>
                    {([160, 80, 80, 80] as const).map((w, i) =>
                      navFilled
                        ? <div key={i} style={{ height: 22, width: w, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                        : <Sk key={i} h={22} w={w} />
                    )}
                  </div>

                  {/* Board rows */}
                  <div style={{ flex: 1, overflowY: 'auto', padding: '16px 0' }}>
                    {GROUP_LABELS.map((label, gIdx) => {
                      const gFilled  = groupsFilled.includes(gIdx);
                      const color    = GROUP_COLORS[gIdx];
                      const rowCount = GROUP_COUNTS[gIdx];
                      const startRow = GROUP_COUNTS.slice(0, gIdx as 0|1|2).reduce((a: number, b: number) => a + b, 0);

                      return (
                        <div key={gIdx} style={{ marginBottom: 24 }}>

                          {/* Group header */}
                          <motion.div
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: gFilled ? 1 : 0.3 }}
                            transition={{ duration: 0.25 }}
                            style={{
                              height: 32, display: 'flex', alignItems: 'center',
                              padding: '0 16px', gap: 8, marginBottom: 2,
                            }}
                          >
                            {gFilled ? (
                              <>
                                <motion.div
                                  initial={{ scale: 0.7, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ width: 13, height: 13, borderRadius: 3, background: color, flexShrink: 0 }}
                                />
                                <motion.span
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: 0.06 }}
                                  style={{ fontFamily: ff, fontSize: 14, fontWeight: 700, color }}
                                >{label}</motion.span>
                              </>
                            ) : (
                              <>
                                <Sk h={13} w={13} r={3} />
                                <Sk h={13} w={100} />
                              </>
                            )}
                          </motion.div>

                          {/* Column header (subtle, only after nav fills) */}
                          <div style={{
                            height: 34, display: 'flex', alignItems: 'center',
                            padding: '0 16px', gap: 10,
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                            opacity: navFilled ? 0.5 : 0.15,
                            transition: 'opacity 0.3s ease',
                          }}>
                            {([44, 130, 0, 60, 90, 48] as const).map((w, i) =>
                              w === 0
                                ? <div key={i} style={{ flex: 1 }} />
                                : <div key={i} style={{ width: w, height: 9, borderRadius: 3, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                            )}
                          </div>

                          {/* Rows */}
                          {Array.from({ length: rowCount }).map((_, rIdx) => {
                            const absRow   = startRow + rIdx;
                            const nameW    = ROW_WIDTHS[absRow % ROW_WIDTHS.length];
                            const rowDelay = rIdx * 0.08;

                            return (
                              <motion.div key={rIdx}
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: rowsFilled ? 1 : 0.2 }}
                                transition={{ duration: 0.28, delay: rowsFilled ? rowDelay : 0 }}
                                style={{
                                  height: 40, display: 'flex', alignItems: 'center',
                                  borderLeft: `3px solid ${gFilled ? color : '#2A2A3A'}`,
                                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                                  padding: '0 0 0 14px', gap: 10,
                                  transition: 'border-left-color 0.3s ease',
                                }}
                              >
                                {/* Checkbox */}
                                {rowsFilled
                                  ? <div style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0, background: 'rgba(255,255,255,0.12)' }} />
                                  : <Sk h={14} w={14} r={3} />
                                }

                                {/* Name */}
                                {rowsFilled
                                  ? <div style={{ height: 10, width: nameW, borderRadius: 4, background: 'rgba(255,255,255,0.18)', flexShrink: 0 }} />
                                  : <Sk h={10} w={nameW} />
                                }

                                <div style={{ flex: 1 }} />

                                {/* Avatar */}
                                {rowsFilled
                                  ? <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, background: 'rgba(255,255,255,0.2)' }} />
                                  : <Sk h={22} w={22} r={11} />
                                }

                                {/* Status pill */}
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={pillsFilled ? { scale: 1, opacity: 1 } : {}}
                                  transition={{ duration: 0.2, delay: pillsFilled ? rowDelay + 0.08 : 0 }}
                                  className={pillsFilled ? undefined : 'tsk-sk'}
                                  style={{
                                    height: 18, width: 88, borderRadius: 2, flexShrink: 0,
                                    background: pillsFilled ? 'rgba(255,255,255,0.1)' : undefined,
                                  }}
                                />

                                {/* Date */}
                                {rowsFilled
                                  ? <div style={{ height: 10, width: 40, borderRadius: 4, background: 'rgba(255,255,255,0.1)', flexShrink: 0, marginRight: 16 }} />
                                  : <Sk h={10} w={40} />
                                }
                              </motion.div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Breathing glow — board just came alive ───────────── */}
        <AnimatePresence>
          {showGlow && (
            <motion.div
              key="glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, background: 'white', pointerEvents: 'none' }}
            />
          )}
        </AnimatePresence>

        {/* ── White-out before navigation ──────────────────────── */}
        <AnimatePresence>
          {whiteOut && (
            <motion.div
              key="whiteout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ position: 'absolute', inset: 0, background: 'white', zIndex: 50 }}
            />
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
