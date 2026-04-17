import React from 'react';
import { motion } from 'motion/react';
import svgNav from '../../imports/LeftLeftPane/svg-6cvg8mrcua';

export type IconNavVariant = 'onboarding' | 'board';

interface SharedIconNavProps {
  variant?: IconNavVariant;
  animateIn?: boolean;
}

export function SharedIconNav({ variant = 'board', animateIn = false }: SharedIconNavProps) {
  const isOnboarding = variant === 'onboarding';

  const isActive   = (i: number) => i === 2;
  const isDisabled = (i: number) => isOnboarding && i !== 2;

  const btnStyle = (i: number): React.CSSProperties => ({
    width: 32, height: 32,
    borderRadius: 'var(--border-radius-medium)',
    background: isActive(i) ? 'var(--nav-active-bg)' : 'transparent',
    border: 'none',
    cursor: isDisabled(i) ? 'default' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: isDisabled(i) ? 0.3 : 1,
    pointerEvents: isDisabled(i) ? 'none' : 'auto',
    flexShrink: 0,
  });

  const hover = (i: number) => isDisabled(i) || isActive(i) ? {} : {
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
      (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
      (e.currentTarget as HTMLElement).style.background = 'transparent';
    },
  };

  const fill = (i: number) => isActive(i) ? 'var(--primary-text-color)' : 'var(--secondary-text-color)';

  /* Staggered wrapper — only active when animateIn=true */
  const W = ({ i, children }: { i: number; children: React.ReactNode }) =>
    animateIn ? (
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    ) : <>{children}</>;

  const addBtn = (
    <button style={{
      width: 36, height: 36, borderRadius: 7.2,
      background: 'var(--primary-text-color)',
      border: 'none',
      cursor: isOnboarding ? 'default' : 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1)',
      flexShrink: 0,
      opacity: isOnboarding ? 0.3 : 1,
      pointerEvents: isOnboarding ? 'none' : 'auto',
    }}>
      <div style={{ width: 18, height: 18, position: 'relative', overflow: 'clip' }}>
        <div style={{ position: 'absolute', inset: '11.25%' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 13.95 13.95">
            <path clipRule="evenodd" d={svgNav.p85fda00} fill="white" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </button>
  );

  return (
    <div style={{
      width: 64,
      background: 'var(--primary-background-color)',
      borderRight: '1px solid var(--ui-background-color)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: 12, paddingBottom: 24, flexShrink: 0,
      justifyContent: 'space-between',
    }}>
      {/* Top icon group */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>

        {/* 0 — AI Brain */}
        <W i={0}>
          <button style={btnStyle(0)} {...hover(0)}>
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', inset: '10% 13.91% 12.5% 12.5%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 14.7188 15.5">
                  <path d={svgNav.p36729280} fill={fill(0)} />
                  <path d={svgNav.p3d4dc040} fill={fill(0)} />
                </svg>
              </div>
            </div>
          </button>
        </W>

        {/* 1 — Person */}
        <W i={1}>
          <button style={btnStyle(1)} {...hover(1)}>
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', inset: '10.25% 15% 10% 17.5%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15.9499">
                  <path clipRule="evenodd" d={svgNav.pd2b0100} fill={fill(1)} fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgNav.p10fdc80} fill={fill(1)} fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </W>

        {/* 2 — Team (active/selected on both variants) */}
        <W i={2}>
          <button style={btnStyle(2)}>
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', inset: '10% 8.15% 13.9% 10%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.37 15.22">
                  <path d={svgNav.p28539300} fill={fill(2)} />
                  <path d={svgNav.p22134480} fill={fill(2)} />
                  <path clipRule="evenodd" d={svgNav.p37e95c80} fill={fill(2)} fillRule="evenodd" />
                  <path d={svgNav.p3f2de180} fill={fill(2)} />
                  <path clipRule="evenodd" d={svgNav.p18b8ed80} fill={fill(2)} fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </W>

        {/* 3 — Agents Logo */}
        <W i={3}>
          <button style={btnStyle(3)} {...hover(3)}>
            <div style={{ width: 20, height: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '11.88% 10.02% 11.88% 10.01%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.9932 15.2479">
                  <path clipRule="evenodd" d={svgNav.p3bb01080} fill={fill(3)} fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </W>

        {/* 4 — Monday Vibe Logo */}
        <W i={4}>
          <button style={btnStyle(4)} {...hover(4)}>
            <div style={{ width: 20, height: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '15% 10.22% 13.86% 10%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.9561 14.2276">
                  <path clipRule="evenodd" d={svgNav.p27688a00} fill={fill(4)} fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </W>

        {/* 5 — Three dots / More */}
        <W i={5}>
          <button style={btnStyle(5)} {...hover(5)}>
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', inset: '45% 11.66% 40% 15%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 14.668 3">
                  <path d={svgNav.p3d92b780} fill={fill(5)} />
                  <path d={svgNav.pbf9c900}  fill={fill(5)} />
                  <path d={svgNav.p3ed9aa80} fill={fill(5)} />
                </svg>
              </div>
            </div>
          </button>
        </W>

      </div>

      {/* Add button — pinned to bottom */}
      {animateIn ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          {addBtn}
        </motion.div>
      ) : addBtn}

    </div>
  );
}
