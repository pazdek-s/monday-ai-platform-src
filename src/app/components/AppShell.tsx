import type { ReactNode } from 'react';
import { SharedIconNav } from './SharedIconNav';
import mondayLogo from 'figma:asset/2689620c39f4e7d81910f3ea308b6e72390f55fe.png';

/* ── Nav icon primitives ── */
export const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
export const PersonIcon = ({ active = false }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--primary-color)' : 'var(--secondary-text-color)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
export const WorkspaceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
export const VibeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
);
export const WorkflowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
export const AgentsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="var(--secondary-text-color)"/>
  </svg>
);

/* ── Shared AI sparkle icon (gradient star) ── */
export const AiColorIcon = ({ id = 'aiGrad' }: { id?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <path d="M10 1 L11.8 8.2 L19 10 L11.8 11.8 L10 19 L8.2 11.8 L1 10 L8.2 8.2 Z" fill={`url(#${id})`}/>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="var(--brand-red)"/>
        <stop offset="33%"  stopColor="var(--brand-yellow)"/>
        <stop offset="66%"  stopColor="var(--brand-green)"/>
        <stop offset="100%" stopColor="var(--ai-purple)"/>
      </linearGradient>
    </defs>
  </svg>
);

interface NavButtonProps {
  active?: boolean;
  children: ReactNode;
}
const NavButton = ({ active, children }: NavButtonProps) => (
  <div
    style={{
      width: 32, height: 32, borderRadius: 'var(--border-radius-medium)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: active ? 'var(--nav-active-bg)' : 'transparent',
      cursor: 'pointer', transition: 'background 150ms',
    }}
    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'var(--primary-background-hover-color)'; }}
    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
  >
    {children}
  </div>
);

const NavDivider = () => (
  <div style={{ width: 20, height: 1, background: 'var(--primary-background-hover-color)', margin: 'var(--space-4) 0' }} />
);

interface AppShellProps {
  children: ReactNode;
  /** scroll: main area scrolls its content; flex: main area is a flex column (caller manages layout) */
  mainScroll?: boolean;
}

export function AppShell({ children, mainScroll = true }: AppShellProps) {
  return (
    <div
      style={{
        width: '100vw', height: '100vh',
        background: 'var(--primary-background-color)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'Figtree, sans-serif',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: 56, flexShrink: 0,
          display: 'flex', alignItems: 'center',
          padding: '0 18px', gap: 'var(--space-8)',
          borderBottom: '1px solid var(--ui-background-color)',
          background: 'var(--primary-background-color)',
        }}
      >
        <img src={mondayLogo} alt="monday AI work platform" style={{ height: 22, width: 'auto' }} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SharedIconNav variant="onboarding" />

        {/* Main area */}
        <div
          style={{
            flex: 1,
            background: 'var(--primary-background-color)',
            borderTopLeftRadius: 'var(--border-radius-xl)',
            border: '0.5px solid var(--layout-border-color)',
            boxShadow: '0px 4px 32px 0px rgba(0,19,85,0.08)',
            overflow: mainScroll ? 'auto' : 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}