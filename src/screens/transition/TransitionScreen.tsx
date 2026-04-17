import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import OldPlatformBoard from "../old-platform/OldPlatformBoard";

const ff = "Figtree, sans-serif";

const KEYFRAMES = `
  @media (prefers-reduced-motion: no-preference) {
    @keyframes tsk-float-a {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-20px); }
    }
    @keyframes tsk-float-b {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(20px); }
    }
    @keyframes tsk-float-c {
      0%, 100% { transform: translateY(0px) scale(1); }
      50%       { transform: translateY(-12px) scale(1.12); }
    }
    .tsk-o1 { animation: tsk-float-a 3s   ease-in-out infinite; }
    .tsk-o2 { animation: tsk-float-b 3.5s ease-in-out infinite; }
    .tsk-o3 { animation: tsk-float-c 4s   ease-in-out infinite; }
  }
`;

export default function TransitionScreen() {
  const navigate = useNavigate();

  type Phase = 'dissolve' | 'energy' | 'done';
  const [phase,       setPhase]      = useState<Phase>('dissolve');
  const [showLogo,    setShowLogo]   = useState(false);
  const [showL1,      setShowL1]     = useState(false);
  const [showL2,      setShowL2]     = useState(false);
  const [showL3,      setShowL3]     = useState(false);
  const [showSparkle, setShowSparkle]= useState(false);
  const [orbsOut,     setOrbsOut]    = useState(false);

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => ts.push(setTimeout(fn, ms));

    at(600,  () => setPhase('energy'));
    at(700,  () => setShowLogo(true));
    at(1000, () => setShowL1(true));
    at(1600, () => setShowL2(true));
    at(2200, () => setShowL3(true));
    at(2600, () => setShowSparkle(true));

    // Fade orbs, then hand off to the real platform page
    at(3200, () => setOrbsOut(true));
    at(3600, () => navigate('/new?fromTransition=true'));

    return () => ts.forEach(clearTimeout);
  }, [navigate]);

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div style={{ position: 'fixed', inset: 0, background: '#fff', overflow: 'hidden' }}>

        {/* ── Phase 1: old platform dissolves ─────────────────── */}
        <AnimatePresence>
          {phase === 'dissolve' && (
            <motion.div
              key="old"
              initial={{ opacity: 1, filter: 'blur(0px)' }}
              animate={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <OldPlatformBoard />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Orbs — pastel on white, fade out before hand-off ── */}
        <AnimatePresence>
          {phase === 'energy' && !orbsOut && (
            <motion.div
              key="orbs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
            >
              <div className="tsk-o1" style={{
                position: 'absolute', width: 500, height: 500, borderRadius: '50%',
                background: 'conic-gradient(from 210deg, #C4A0FE, #7EC8FD, #C4A0FE)',
                filter: 'blur(100px)', top: -160, left: -160, opacity: 0.45,
              }} />
              <div className="tsk-o2" style={{
                position: 'absolute', width: 500, height: 500, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #A0F4FB, #80DFFF, #A0F4FB)',
                filter: 'blur(100px)', bottom: -160, right: -160, opacity: 0.35,
              }} />
              <div className="tsk-o3" style={{
                position: 'absolute', width: 500, height: 500, borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFCCF5, #BCBCFF)',
                filter: 'blur(100px)',
                top: 'calc(50% - 250px)', left: 'calc(50% - 250px)',
                opacity: 0.18,
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Phase 2: center text ──────────────────────────── */}
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
                    style={{ margin: 0, fontFamily: ff, fontSize: 16, color: 'rgba(0,0,0,0.45)', textAlign: 'center' }}
                  >Reading your recruitment pipeline...</motion.p>
                )}
                {showL2 && (
                  <motion.p key="l2"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, fontFamily: ff, fontSize: 16, color: 'rgba(0,0,0,0.45)', textAlign: 'center' }}
                  >Building your Candidate Analyst agent...</motion.p>
                )}
                {showL3 && (
                  <motion.p key="l3"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, fontFamily: ff, fontSize: 22, fontWeight: 700, color: '#1A1D21', textAlign: 'center' }}
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
                          <stop offset="0%" stopColor="#9450FD" />
                          <stop offset="100%" stopColor="#04C8D4" />
                        </linearGradient>
                        <linearGradient id="spkG2" x1="20" y1="2" x2="30" y2="11" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#9450FD" />
                          <stop offset="100%" stopColor="#04C8D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
