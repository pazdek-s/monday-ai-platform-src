import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bell, Mail, UserPlus, HelpCircle, LayoutGrid,
  Search, ChevronDown, ChevronRight, Plus, Filter,
  ArrowUpDown, Home, Users, Building2, Zap, GitBranch,
  Bot, MoreHorizontal, PenLine, PanelRight, X,
  Paperclip, AtSign, Sparkles, Mic, ArrowUp,
  Clock, RotateCcw, Table2, Heart, Square, Columns2,
  MessageCircle,
} from 'lucide-react';
import svgPaths from '../../imports/Open/svg-rlse7p5x2l';
import svgTeamSpace from '../../imports/Frame2147240403/svg-x7qvlm4dxw';
import svgSidebar from '../../imports/Frame2147240413-3/svg-78wayi719d';
import svgTitleBar from '../../imports/Frame2147240413-2/svg-a7goxfx26f';
import svgBI from '../../imports/BoardHeaderInternal-1/svg-css67kw2yb';
import imgAvatarGroup from '../../imports/Frame2147240413-2/35d77928fe99963e4f2e2a1944102cf4e381960d.png';
import imgAvatarCount from '../../imports/Frame2147240413-2/cb74c5298fcb9d4c82f33d348fd24afba471de9d.png';
import svgNav from '../../imports/LeftLeftPane/svg-6cvg8mrcua';
import svgAH from '../../imports/AgentHeader/svg-qrznt2pdh6';
import svgIcon1 from '../../imports/Frame2147226644-1/svg-zdlujcdid6';
import svgIcon2 from '../../imports/Frame2147226644-2/svg-olelsgusj4';
import svgIcon3 from '../../imports/Frame2147226644-3/svg-0tdyyx4tda';
import svgIcon4 from '../../imports/Frame2147226644-4/svg-1a31r9q2fa';
import mondayLogo from 'figma:asset/2689620c39f4e7d81910f3ea308b6e72390f55fe.png';
import imgAgentIcon from 'figma:asset/ceff3bd674f59c25e8aefb5010123dafd9350349.png';
import imgAgentIconWelcome from 'figma:asset/509376ab3884b8cca48c540916fb36f495876907.png';
import imgOnboarding   from 'figma:asset/0615a3c31719c6364c9813b9e0fa2ac8d8dd96c1.png';
import imgScreener     from 'figma:asset/7c892bbb8b7d684fb6ed94a47907c0cda356a74d.png';
import imgAgentBuilder from 'figma:asset/1e435c025a71eaab8e6c91d9514ff0ae1a7a076f.png';
import imgSidekickStar from 'figma:asset/4c8834b6d3fa04dad27408e0b2d0096960f265fa.png';
import imgInterviews   from 'figma:asset/3f0eddcf18029b8185c98e49faa1056c5e1fd6e0.png';
import { SharedIconNav } from './SharedIconNav';
import { BOARD_GROUPS, Candidate, RecruitmentGroup, StatusKey } from '../../data/boardData';

const ff = 'Figtree, sans-serif';
const fp = 'Poppins, sans-serif';

/* ─────────────────────────────────────────────
   TYPEWRITER HOOK
───────────────────────────────────────────── */
function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    const startTime = Date.now();
    const id = setInterval(() => {
      const idx = Math.min(Math.floor((Date.now() - startTime) / speed), text.length);
      setDisplayed(text.slice(0, idx));
      if (idx >= text.length) { clearInterval(id); setDone(true); }
    }, 80); // poll every 80ms; timestamp math means tab throttling only causes a brief jump
    return () => clearInterval(id);
  }, [text]);
  return { displayed, done };
}

/* ─────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────── */
function Avatar({
  bg, initials, size = 28, fontSize = 11, overlap = false,
}: {
  bg: string; initials: string; size?: number; fontSize?: number; overlap?: boolean;
}) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: ff, fontSize, fontWeight: 700, flexShrink: 0,
      color: 'var(--text-color-on-inverted)',
      border: overlap ? '2px solid var(--primary-background-color)' : 'none',
      boxSizing: 'border-box',
    }}>
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MONDAY LOGO MARK
───────────────────────────────────────────── */
const MondayMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="6" fill="var(--primary-background-color)"/>
    <ellipse cx="7"  cy="19" rx="4" ry="4" fill="var(--brand-red)"/>
    <ellipse cx="14" cy="19" rx="4" ry="4" fill="var(--brand-yellow)"/>
    <ellipse cx="21" cy="19" rx="4" ry="4" fill="var(--brand-green)"/>
  </svg>
);

/* ─────────────────────────────────────────────
   STATUS CELL  (coloured monday pill)
───────────────────────────────────────────── */
const STATUS_MAP: Record<StatusKey, { label: string }> = {
  new:       { label: 'New Application'     },
  phone:     { label: 'Phone Screen'        },
  scheduled: { label: 'Interview Scheduled' },
  offer:     { label: 'Offer Extended'      },
  hired:     { label: 'Hired'               },
  rejected:  { label: 'Rejected'            },
};
function StatusCell({ status }: { status: StatusKey }) {
  const s = STATUS_MAP[status];
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 'var(--space-8)' }}>
      <div style={{
        height: 22, padding: '0 10px',
        background: 'var(--ui-background-color)', borderRadius: 2,
        display: 'flex', alignItems: 'center',
        fontFamily: ff, fontSize: 12, fontWeight: 500,
        color: 'var(--secondary-text-color)',
        whiteSpace: 'nowrap',
      }}>
        {s.label}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ASSIGNEE CELL
───────────────────────────────────────────── */
type AssigneeEntry = Candidate['assignee'] | null;

function AssigneeCell({ assignee }: { assignee: AssigneeEntry }) {
  if (!assignee) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          border: '1.5px dashed var(--ui-border-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.4,
        }} />
      </div>
    );
  }
  if (assignee.kind === 'person') {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: assignee.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: ff, fontSize: 10, fontWeight: 700,
          color: 'var(--text-color-on-inverted)',
          flexShrink: 0,
        }}>
          {assignee.initials}
        </div>
      </div>
    );
  }
  /* kind === 'agent' */
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 26, height: 26, borderRadius: 8,
        background: assignee.bg, overflow: 'hidden',
        flexShrink: 0, position: 'relative',
      }}>
        <img
          src={imgAgentIcon}
          alt={assignee.agentName ?? 'Agent'}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CHECKBOX
───────────────────────────────────────────── */
function Checkbox({ checked = false }: { checked?: boolean }) {
  return (
    <div style={{
      width: 16, height: 16, borderRadius: 3,
      border: `2px solid ${checked ? 'var(--primary-color)' : 'var(--ui-border-color)'}`,
      background: checked ? 'var(--primary-color)' : 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', flexShrink: 0, transition: 'border-color 150ms',
    }}>
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BOARD DATA — sourced from shared boardData.ts
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   COLUMN WIDTHS
───────────────────────────────────────────── */
const COL = {
  check:    40,
  name:     220,
  assignee: 64,
  role:     180,
  status:   172,
  date:     100,
};
const TOTAL_FIXED = COL.check + COL.name + COL.assignee + COL.role + COL.status + COL.date;

/* ─────────────────────────────────────────────
   COLUMN HEADER CELL
───────────────────────────────────────────── */
function ColHead({ label, width, center = false }: { label: string; width: number; center?: boolean }) {
  return (
    <div style={{
      width, flexShrink: 0,
      height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      padding: center ? 0 : '0 var(--space-8)',
      borderRight: '1px solid var(--layout-border-color)',
      fontFamily: ff, fontSize: 12, fontWeight: 600,
      color: 'var(--secondary-text-color)',
    }}>
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BOARD GROUP
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   OWNER DROPDOWN
───────────────────────────────────────────── */
function OwnerDropdown({
  row, anchorEl, onSelectPerson, onSelectAgent, onClose,
}: {
  row: Candidate;
  anchorEl: HTMLElement | null;
  onSelectPerson: () => void;
  onSelectAgent: () => void;
  onClose: () => void;
}) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!anchorEl) return;
    const r = anchorEl.getBoundingClientRect();
    setPos({ top: r.bottom + 4, left: r.left });
  }, [anchorEl]);

  if (!pos) return null;

  const OptionRow = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
    const [hov, setHov] = useState(false);
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '7px 12px', cursor: 'pointer',
          background: hov ? '#F5F6F8' : 'transparent',
          transition: 'background 120ms ease',
        }}
      >{children}</div>
    );
  };

  return ReactDOM.createPortal(
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 998 }} onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -4, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: pos.top, left: pos.left,
          width: 228, background: '#fff',
          borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
          border: '1px solid rgba(0,0,0,0.07)',
          zIndex: 999, overflow: 'hidden',
        }}
      >
        {/* Search bar */}
        <div style={{ padding: '8px 10px', borderBottom: '1px solid #F0F1F3' }}>
          <div style={{ height: 28, background: '#F5F6F8', borderRadius: 6, display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6 }}>
            <Search size={12} color="#676879" />
            <span style={{ fontFamily: ff, fontSize: 12, color: '#C5C7D0' }}>Search</span>
          </div>
        </div>

        {/* Person option */}
        <OptionRow onClick={() => { onSelectPerson(); onClose(); }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: row.assignee.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: ff, fontSize: 10, fontWeight: 700, color: '#fff' }}>{row.assignee.initials}</span>
          </div>
          <span style={{ fontFamily: ff, fontSize: 13, color: '#323338', flex: 1 }}>{row.assignee.initials}</span>
        </OptionRow>

        <div style={{ height: 1, background: '#F0F1F3', margin: '0 0' }} />

        {/* Agent option */}
        <OptionRow onClick={() => { onSelectAgent(); onClose(); }}>
          <CandidateAnalystIcon size={26} />
          <span style={{ fontFamily: ff, fontSize: 13, color: '#323338', flex: 1 }}>Candidate Analyst</span>
          <span style={{
            fontFamily: ff, fontSize: 10, fontWeight: 600, color: '#676879',
            background: '#F0F1F3', borderRadius: 4, padding: '2px 6px',
            flexShrink: 0,
          }}>Agent</span>
        </OptionRow>
      </motion.div>
    </>,
    document.body,
  );
}

type OwnerInteractionProps = {
  showArrow: boolean;
  activeDropdownRow: number | null;
  assignedRowIdx: number | null;
  showChatDot: boolean;
  onOwnerCellClick: (rowIdx: number, el: HTMLElement) => void;
  onSelectPerson: () => void;
  onAgentSelect: (rowIdx: number) => void;
  onDropdownClose: () => void;
  onChatDotClick: () => void;
};

function BoardGroup({ id, color, label, rows, groupIdx, agentActive = false, agentConfig, justActivated = false, ownerInteraction }: RecruitmentGroup & { groupIdx: number; agentActive?: boolean; agentConfig?: { bg: string; img?: string; icon?: React.ReactNode }; justActivated?: boolean; ownerInteraction?: OwnerInteractionProps }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ marginTop: groupIdx > 0 ? 28 : 0 }}>

      {/* ── Group label — floats above table, no left bar ── */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 0 8px 4px', cursor: 'pointer', userSelect: 'none', position: 'relative' }}
        onClick={() => setCollapsed(c => !c)}
      >
        {/* Header glow pulse on activation */}
        {justActivated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              position: 'absolute', inset: '-2px -6px',
              borderRadius: 6,
              background: 'rgba(0, 200, 117, 0.15)',
              pointerEvents: 'none',
            }}
          />
        )}
        <div style={{
          display: 'flex', alignItems: 'center',
          transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
          color: justActivated ? '#00C875' : color,
          transition: 'transform 200ms ease, color 300ms ease',
        }}>
          <ChevronDown size={15} strokeWidth={2.5} />
        </div>
        <span style={{ fontFamily: ff, fontSize: 15, fontWeight: 700, color: justActivated ? '#00C875' : color, transition: 'color 300ms ease' }}>{label}</span>
        <span style={{
          fontFamily: ff, fontSize: 11, fontWeight: 600,
          color: 'var(--secondary-text-color)',
          background: 'var(--ui-background-color)',
          borderRadius: 10, padding: '1px 6px',
          lineHeight: '18px',
        }}>
          {rows.length}
        </span>
      </div>

      {!collapsed && (
        <>
          {/* Column headers — colored left bar starts here */}
          <div style={{
            height: 36, display: 'flex', alignItems: 'center',
            borderLeft: `3px solid ${color}`,
            borderTop: '1px solid var(--layout-border-color)',
            borderBottom: '1px solid var(--layout-border-color)',
            background: 'var(--primary-surface-color)',
            position: 'sticky', top: 0, zIndex: 1,
          }}>
            <div style={{ width: COL.check, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--layout-border-color)', height: '100%' }}>
              <span style={{ color: 'var(--ui-border-color)', display: 'flex' }}><Square size={13} /></span>
            </div>
            <ColHead label="Candidate"     width={COL.name}     />
            <ColHead label="Assignee" width={COL.assignee} center />
            <ColHead label="Role"     width={COL.role}     />
            <ColHead label="Status"   width={COL.status}   />
            <ColHead label="Due date" width={COL.date}     center />
            <div style={{ flex: 1, height: '100%', borderRight: '1px solid var(--layout-border-color)' }} />
          </div>

          {/* Data rows */}
          {rows.map((row, i) => {
            const oi = ownerInteraction;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32, delay: 0.56 + groupIdx * 0.14 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
              >
                <BoardRow
                  row={row} color={color}
                  agentActive={agentActive} agentConfig={agentConfig}
                  rowIdx={i} justActivated={justActivated}
                  showOwnerArrow={oi ? oi.showArrow : false}
                  ownerDropdownOpen={oi ? oi.activeDropdownRow === i : false}
                  ownerIsAgent={oi ? oi.assignedRowIdx === i : false}
                  showChatDot={oi ? (oi.showChatDot && oi.assignedRowIdx === i) : false}
                  onOwnerCellClick={oi ? (el) => oi.onOwnerCellClick(i, el) : undefined}
                  onSelectPerson={oi ? oi.onSelectPerson : undefined}
                  onAgentSelect={oi ? () => oi.onAgentSelect(i) : undefined}
                  onDropdownClose={oi ? oi.onDropdownClose : undefined}
                  onChatDotClick={oi ? oi.onChatDotClick : undefined}
                />
              </motion.div>
            );
          })}

          {/* Add task row */}
          <div style={{
            height: 36, display: 'flex', alignItems: 'center',
            borderLeft: `3px solid ${color}`,
            borderBottom: '1px solid var(--layout-border-color)',
            paddingLeft: 'var(--space-12)', gap: 6, cursor: 'pointer',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-surface-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}><Plus size={13} /></span>
            <span style={{ fontFamily: ff, fontSize: 13, color: 'var(--secondary-text-color)' }}>+ Add Task</span>
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BOARD ROW
───��───────────────────────────────────────── */
function BoardRow({
  row, color, agentActive = false, agentConfig, rowIdx = 0, justActivated = false,
  showOwnerArrow = false, ownerDropdownOpen = false, ownerIsAgent = false,
  showChatDot = false,
  onOwnerCellClick, onSelectPerson, onAgentSelect, onDropdownClose, onChatDotClick,
}: {
  row: Candidate; color: string;
  agentActive?: boolean;
  agentConfig?: { bg: string; img?: string; icon?: React.ReactNode };
  rowIdx?: number;
  justActivated?: boolean;
  showOwnerArrow?: boolean;
  ownerDropdownOpen?: boolean;
  ownerIsAgent?: boolean;
  showChatDot?: boolean;
  onOwnerCellClick?: (el: HTMLElement) => void;
  onSelectPerson?: () => void;
  onAgentSelect?: () => void;
  onDropdownClose?: () => void;
  onChatDotClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [agentFlash, setAgentFlash] = useState(false);
  const assigneeCellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ownerIsAgent) {
      setAgentFlash(true);
      const t = setTimeout(() => setAgentFlash(false), 500);
      return () => clearTimeout(t);
    }
  }, [ownerIsAgent]);

  function handleOwnerCellClick() {
    if (!onOwnerCellClick || !assigneeCellRef.current) return;
    onOwnerCellClick(assigneeCellRef.current);
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: 44, display: 'flex', alignItems: 'center',
        borderLeft: `3px solid ${color}`,
        borderBottom: '1px solid var(--layout-border-color)',
        background: agentFlash
          ? 'rgba(0,115,234,0.08)'
          : hovered ? 'var(--primary-surface-color)' : 'var(--primary-background-color)',
        transition: 'background 400ms ease',
      }}
    >
      {/* Green activation flash overlay */}
      {justActivated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.18, 0] }}
          transition={{ duration: 0.55, delay: rowIdx * 0.08, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, background: '#00C875', pointerEvents: 'none', zIndex: 1 }}
        />
      )}

      {/* Chat update dot */}
      {showChatDot && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          onClick={e => { e.stopPropagation(); onChatDotClick?.(); }}
          style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            width: 22, height: 22, borderRadius: '50%',
            background: 'var(--primary-background-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 5,
          }}
        >
          <div style={{ position: 'relative' }}>
            <MessageCircle size={16} color="#676879" />
            <div style={{
              position: 'absolute', top: -3, right: -3,
              width: 7, height: 7, borderRadius: '50%',
              background: '#0073EA',
              border: '1.5px solid var(--primary-background-color)',
            }} />
          </div>
        </motion.div>
      )}
      {/* Checkbox */}
      <div style={{ width: COL.check, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', borderRight: '1px solid var(--layout-border-color)' }}>
        <Checkbox />
      </div>

      {/* Candidate name */}
      <div style={{
        width: COL.name, flexShrink: 0, height: '100%',
        display: 'flex', alignItems: 'center', padding: '0 var(--space-8)',
        borderRight: '1px solid var(--layout-border-color)',
      }}>
        <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {row.name}
        </span>
      </div>

      {/* Assignee/Owner cell — clickable when owner interaction enabled */}
      <div
        ref={assigneeCellRef}
        onClick={onOwnerCellClick ? handleOwnerCellClick : undefined}
        style={{
          width: COL.assignee, flexShrink: 0, height: '100%',
          borderRight: '1px solid var(--layout-border-color)',
          position: 'relative',
          cursor: onOwnerCellClick ? 'pointer' : 'default',
        }}
      >
        {ownerIsAgent ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
              <CandidateAnalystIcon size={26} />
            </motion.div>
          </div>
        ) : (agentActive && row.assignee.kind === 'person') ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.25, delay: rowIdx * 0.08, ease: 'backOut' }}>
              {agentConfig?.icon ?? (
                <div style={{ width: 26, height: 26, borderRadius: 8, background: agentConfig?.bg ?? '#8181ff', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                  <img src={agentConfig?.img ?? imgAgentIcon} alt="Agent" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          <AssigneeCell assignee={row.assignee} />
        )}

        {/* Pulsing ring when showOwnerArrow */}
        {showOwnerArrow && !ownerIsAgent && (
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.05, 0.85] }}
            transition={{ repeat: 3, duration: 1.1, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: '6px',
              borderRadius: '50%',
              border: '2px solid #0073EA',
              pointerEvents: 'none', zIndex: 4,
            }}
          />
        )}

        {/* Dropdown */}
        {ownerDropdownOpen && (
          <OwnerDropdown
            row={row}
            anchorEl={assigneeCellRef.current}
            onSelectPerson={() => onSelectPerson?.()}
            onSelectAgent={() => onAgentSelect?.()}
            onClose={() => onDropdownClose?.()}
          />
        )}
      </div>

      {/* Role */}
      <div style={{
        width: COL.role, flexShrink: 0, height: '100%',
        display: 'flex', alignItems: 'center', padding: '0 var(--space-8)',
        borderRight: '1px solid var(--layout-border-color)',
      }}>
        <span style={{ fontFamily: ff, fontSize: 13, color: 'var(--secondary-text-color)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {row.role}
        </span>
      </div>

      {/* Status */}
      <div style={{ width: COL.status, flexShrink: 0, height: '100%', borderRight: '1px solid var(--layout-border-color)' }}>
        <StatusCell status={row.status} />
      </div>

      {/* Due date */}
      <div style={{
        width: COL.date, flexShrink: 0, height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRight: '1px solid var(--layout-border-color)',
      }}>
        <span style={{ fontFamily: ff, fontSize: 13, color: 'var(--secondary-text-color)' }}>{row.date}</span>
      </div>

      {/* Flex filler */}
      <div style={{ flex: 1, height: '100%', borderRight: '1px solid var(--layout-border-color)' }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TOP BAR
───────────────────────────────────────────── */
function TopBar() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -44 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: 56, background: 'var(--primary-background-color)',
        borderBottom: '1px solid var(--ui-background-color)',
        display: 'flex', alignItems: 'center',
        padding: '0 var(--space-16)', gap: 'var(--space-8)',
        flexShrink: 0, zIndex: 20,
      }}
    >
      {/* Logo — spring scale in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 360, damping: 26, delay: 0.16 }}
        style={{ display: 'flex', alignItems: 'center', marginRight: 'var(--space-8)', flexShrink: 0 }}
      >
        <img src={mondayLogo} alt="monday AI work platform" style={{ height: 22, width: 'auto' }} />
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{
          flex: 1, maxWidth: 420, height: 32, borderRadius: 16,
          background: 'var(--ui-background-color)',
          border: '1px solid var(--layout-border-color)',
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '0 var(--space-12)', margin: '0 auto',
        }}
      >
        <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}><Search size={14} /></span>
        <span style={{ fontFamily: ff, fontSize: 13, color: 'var(--placeholder-color)' }}>Search or ask anything...</span>
      </motion.div>

      {/* Back to monday */}
      <button
        onClick={() => navigate('/old')}
        style={{
          background: 'transparent', border: '1px solid var(--layout-border-color)',
          borderRadius: 'var(--border-radius-medium)', padding: '0 10px', height: 28,
          cursor: 'pointer', fontFamily: ff, fontSize: 13,
          color: 'var(--secondary-text-color)', whiteSpace: 'nowrap', flexShrink: 0,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
      >
        ← Back to monday
      </button>

      {/* Right actions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.34, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 'var(--space-8)', flexShrink: 0 }}
      >
        {[Bell, Mail, UserPlus, HelpCircle, LayoutGrid].map((Icon, i) => (
          <button key={i} style={{
            width: 32, height: 32, borderRadius: 'var(--border-radius-medium)',
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--secondary-text-color)',
          }}>
            <Icon size={18} />
          </button>
        ))}
        <div style={{ width: 1, height: 20, background: 'var(--ui-background-color)', margin: '0 var(--space-4)' }} />
        <Avatar bg="var(--brand-red)" initials="N" size={32} fontSize={13} />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   LEFT SIDEBAR
───────────────────────────────────────────── */

/* Thin SVG icon wrapper used throughout the nav */
function NavIcon({ children, size = 16 }: { children: React.ReactNode; size?: number }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0, position: 'relative', overflow: 'clip' }}>
      {children}
    </div>
  );
}

/* My Work icon (calendar-check) */
const MyWorkIcon = () => (
  <NavIcon>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" viewBox="0 0 13.0857 13.0857" preserveAspectRatio="none">
      <path d={svgPaths.p14c49680} fill="var(--secondary-text-color)" />
      <path clipRule="evenodd" d={svgPaths.p1ac0d900} fill="var(--secondary-text-color)" fillRule="evenodd" />
    </svg>
  </NavIcon>
);

/* Recents icon (clock) */
const RecentsIcon = () => (
  <NavIcon>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" viewBox="0 0 12.799 12.7992" preserveAspectRatio="none">
      <path d={svgPaths.p12e24200} fill="var(--secondary-text-color)" />
      <path d={svgPaths.p2f65f000} fill="var(--secondary-text-color)" />
    </svg>
  </NavIcon>
);

/* Board icon */
const BoardIcon = ({ color = 'var(--secondary-text-color)' }: { color?: string }) => (
  <NavIcon>
    <svg style={{ position: 'absolute', inset: '15% 10%', width: '80%', height: '70%' }} fill="none" viewBox="0 0 12.8 11.2" preserveAspectRatio="none">
      <path clipRule="evenodd" d={svgPaths.p3a73d100} fill={color} fillRule="evenodd" />
    </svg>
  </NavIcon>
);

/* Vibe / Monday heart icon */
const VibeIcon = () => (
  <NavIcon>
    <svg style={{ position: 'absolute', inset: '15% 10% 14% 10%', width: '80%', height: '75%' }} fill="none" viewBox="0 0 12.7649 11.3821" preserveAspectRatio="none">
      <path clipRule="evenodd" d={svgPaths.p157c1800} fill="var(--secondary-text-color)" fillRule="evenodd" />
    </svg>
  </NavIcon>
);

/* Chevron right (for Recents) */
const ChevRight = () => (
  <div style={{ width: 16, height: 16, flexShrink: 0, position: 'relative', overflow: 'clip' }}>
    <svg style={{ position: 'absolute', inset: '25% 35%', width: '30%', height: '50%' }} fill="none" viewBox="0 0 4.8 8" preserveAspectRatio="none">
      <path d={svgPaths.p1361c900} fill="var(--placeholder-color)" />
    </svg>
  </div>
);

/* Down chevron (for Favorites) */
const ChevDown = () => (
  <div style={{ width: 12, height: 12, flexShrink: 0, position: 'relative' }}>
    <svg style={{ position: 'absolute', inset: '35% 25%', width: '50%', height: '30%' }} fill="none" viewBox="0 0 6 3.6" preserveAspectRatio="none">
      <path d={svgPaths.p9e9b00} fill="var(--primary-text-color)" />
    </svg>
  </div>
);

const AGENTS_LIST = [
  {
    img: imgInterviews,
    bg: '#7B5FF7',
    name: 'Candidate Analyst',
    status: 'Active',
    online: true,
  },
];

function AgentAvatar({ agent }: { agent: typeof AGENTS_LIST[0] }) {
  return (
    <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
      {/* Coloured circle + clipped image */}
      <div style={{
        width: 28, height: 28, borderRadius: 10,
        background: agent.bg, overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={agent.img}
          alt={agent.name}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Online dot */}
      {agent.online && (
        <div style={{
          position: 'absolute', right: -4, bottom: 0,
          width: 8, height: 8,
        }}>
          <svg viewBox="0 0 12 12" fill="none" style={{ width: '100%', height: '100%' }}>
            <circle cx="6" cy="6" r="5" fill="#00C875" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
}

function LeftSidebar() {
  return (
    <div style={{ width: 296, flexShrink: 0, borderRight: '0.5px solid var(--ui-background-color)' }}>
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: '100%', height: '100%',
        background: 'var(--primary-background-color)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
        padding: '12px 20px',
        boxSizing: 'border-box',
        borderColor: 'transparent',
      }}
    >

      {/* ── TEAM SPACE header ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.32, duration: 0.35 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 4px', borderColor: 'transparent' }}
      >
        <span style={{
          fontFamily: ff, fontSize: 12, fontWeight: 600,
          color: 'var(--secondary-text-color)', letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>
          Team Space
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Three-dot menu */}
          <button style={{
            width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4, padding: 4,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 16, height: 16, position: 'relative', overflow: 'clip' }}>
              <svg style={{ position: 'absolute', inset: '40% 12% 45% 15%', width: '73%', height: '15%' }} fill="none" viewBox="0 0 11.7344 2.4" preserveAspectRatio="none">
                <path d={svgPaths.p1dd07400} fill="var(--secondary-text-color)" />
                <path d={svgPaths.p3257f1c0} fill="var(--secondary-text-color)" />
                <path d={svgPaths.p2f072280} fill="var(--secondary-text-color)" />
              </svg>
            </div>
          </button>
          {/* Search */}
          <button style={{
            width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4, padding: 4,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 16, height: 16, position: 'relative', overflow: 'clip' }}>
              <svg style={{ position: 'absolute', inset: '12% 11%', width: '77%', height: '77%' }} fill="none" viewBox="0 0 12.3011 12.3016" preserveAspectRatio="none">
                <path clipRule="evenodd" d={svgPaths.p3df0e700} fill="var(--secondary-text-color)" fillRule="evenodd" />
              </svg>
            </div>
          </button>
          {/* Collapse sidebar (double-chevron rotated 90°) */}
          <button style={{
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ transform: 'rotate(90deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
                <svg style={{ position: 'absolute', inset: '21.25% 26.25%', width: '47.5%', height: '57.5%' }} fill="none" viewBox="0 0 9.5 11.5" preserveAspectRatio="none">
                  <path d={svgTeamSpace.p38c9b000} fill="var(--secondary-text-color)" />
                  <path d={svgTeamSpace.p123a6900} fill="var(--secondary-text-color)" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </motion.div>

      {/* ── Team dropdown + add button ── */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.36, duration: 0.32 }}
        style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, borderColor: 'transparent' }}
      >
        {/* Dropdown field */}
        <div style={{ flex: 1, position: 'relative', borderRadius: 4, background: 'var(--primary-background-color)' }}>
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--ui-border-color)', borderRadius: 4, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', padding: '4px 4px 4px 12px', gap: 8 }}>
            {/* Orange "M" badge */}
            <div style={{
              background: '#FDAB3D', borderRadius: 3, padding: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, width: 20, height: 20,
            }}>
              <span style={{ fontFamily: ff, fontSize: 12, fontWeight: 400, color: '#fff', lineHeight: '16px' }}>M</span>
            </div>
            {/* Label */}
            <span style={{
              flex: 1, fontFamily: ff, fontSize: 14, fontWeight: 400,
              color: 'var(--primary-text-color)', overflow: 'hidden',
              textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0,
              lineHeight: '22px',
            }}>
              Hiring team
            </span>
            {/* Chevron */}
            <button style={{
              width: 32, height: 32, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4,
            }}>
              <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
                <svg style={{ position: 'absolute', top: '35%', left: '25%', width: '50%', height: '30%' }} fill="none" viewBox="0 0 10 6" preserveAspectRatio="none">
                  <path d={svgSidebar.p13a5f900} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        {/* Add button */}
        <button style={{
          width: 40, height: 40, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4,
          position: 'relative',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--ui-border-color)', borderRadius: 4, pointerEvents: 'none' }} />
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
            <svg style={{ position: 'absolute', inset: '11.25%', width: '77.5%', height: '77.5%' }} fill="none" viewBox="0 0 15.5 15.5" preserveAspectRatio="none">
              <path clipRule="evenodd" d={svgSidebar.pfb9b280} fill="var(--primary-text-color)" fillRule="evenodd" />
            </svg>
          </div>
        </button>
      </motion.div>

      {/* ── Agents header ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.32 }}
        style={{ padding: '16px 8px 4px', borderColor: 'transparent' }}
      >
        <span style={{ fontFamily: ff, fontSize: 12, fontWeight: 600, color: 'var(--primary-text-color)' }}>
          Agents
        </span>
      </motion.div>

      {/* ── Agent list ── */}
      {AGENTS_LIST.map((agent, agentIdx) => (
        <motion.div
          key={agent.name}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.46 + agentIdx * 0.07, duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderColor: 'transparent' }}
        >
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 13, padding: '8px',
            borderRadius: 'var(--border-radius-small)', cursor: 'pointer',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-background-hover-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <AgentAvatar agent={
              agentIdx === 1 ? { ...agent, img: AGENTS_LIST[2].img } :
              agentIdx === 2 ? { ...agent, img: AGENTS_LIST[1].img } :
              agent
            } />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: ff, fontSize: 14, fontWeight: 600,
                color: 'var(--primary-text-color)',
                lineHeight: '20px',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {agent.name}
              </div>
              <div style={{
                fontFamily: ff, fontSize: 12, fontWeight: 400,
                color: 'var(--secondary-text-color)',
                lineHeight: '16px',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {agent.status}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ── Favorites header ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.34 }}
        style={{ borderColor: 'transparent' }}
      >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: '16px 8px 4px',
      }}>
        <span style={{ fontFamily: ff, fontSize: 12, fontWeight: 600, color: 'var(--primary-text-color)' }}>
          Favorites
        </span>
        <ChevDown />
        <div style={{ flex: 1 }} />
        {/* More icon */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--secondary-text-color)', display: 'flex', borderRadius: 4, lineHeight: 0 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
          <div style={{ width: 16, height: 16, position: 'relative', overflow: 'clip' }}>
            <svg style={{ position: 'absolute', inset: '40% 12% 45% 15%', width: '73%', height: '15%' }} fill="none" viewBox="0 0 11.7344 2.4" preserveAspectRatio="none">
              <path d={svgPaths.p1dd07400} fill="var(--secondary-text-color)" />
              <path d={svgPaths.p3257f1c0} fill="var(--secondary-text-color)" />
              <path d={svgPaths.p2f072280} fill="var(--secondary-text-color)" />
            </svg>
          </div>
        </button>
        {/* Search icon */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--secondary-text-color)', display: 'flex', borderRadius: 4, lineHeight: 0 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
          <div style={{ width: 16, height: 16, position: 'relative', overflow: 'clip' }}>
            <svg style={{ position: 'absolute', inset: '12% 11%', width: '77%', height: '77%' }} fill="none" viewBox="0 0 12.3011 12.3016" preserveAspectRatio="none">
              <path clipRule="evenodd" d={svgPaths.p3df0e700} fill="var(--secondary-text-color)" fillRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>

      {/* ── Favorites items ── */}
      {/* Recruitment pipeline — active */}
      <div style={{
        height: 32, padding: '0 8px',
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'rgba(194, 213, 255, 0.4)',
        borderRadius: 'var(--border-radius-small)',
        cursor: 'pointer',
      }}>
        <BoardIcon color="var(--primary-color)" />
        <span style={{
          fontFamily: ff, fontSize: 14, fontWeight: 400,
          color: 'var(--primary-text-color)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          flex: 1,
        }}>
          Recruitment pipeline
        </span>
      </div>

      {/* Executive overview */}
      <div style={{
        height: 32, padding: '0 8px',
        display: 'flex', alignItems: 'center', gap: 8,
        borderRadius: 'var(--border-radius-small)', cursor: 'pointer',
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-background-hover-color)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
      >
        <VibeIcon />
        <span style={{
          fontFamily: ff, fontSize: 14, fontWeight: 400,
          color: 'var(--secondary-text-color)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          flex: 1,
        }}>
          Executive overview
        </span>
      </div>
      </motion.div>{/* end Favorites motion.div */}

    </motion.div>
    </div>
  );
}

function SidebarItem({
  icon, label, trailingIcon,
}: { icon: React.ReactNode; label: string; trailingIcon?: React.ReactNode }) {
  return (
    <div style={{
      height: 32, padding: '0 8px',
      display: 'flex', alignItems: 'center', gap: 8,
      cursor: 'pointer', borderRadius: 'var(--border-radius-small)',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-background-hover-color)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
    >
      <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}>{icon}</span>
      <span style={{ flex: 1, fontFamily: ff, fontSize: 14, color: 'var(--secondary-text-color)' }}>{label}</span>
      {trailingIcon}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CANDIDATE ANALYST ICON
───────────────────────────────────────────── */
function CandidateAnalystIcon({ size = 32 }: { size?: number }) {
  const ic = size >= 30 ? 16 : size >= 26 ? 13 : 12;
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.28),
      flexShrink: 0,
      background: 'linear-gradient(135deg, #9450FD, #0074FD)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width={ic} height={ic} viewBox="0 0 14 14" fill="none">
        <circle cx="5.8" cy="5.8" r="4" stroke="white" strokeWidth="1.4" />
        <line x1="8.7" y1="8.7" x2="12" y2="12" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11.5 1.5L12 2.8L13.5 3.3L12 3.8L11.5 5L11 3.8L9.5 3.3L11 2.8L11.5 1.5Z" fill="white" opacity="0.85" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BOARD MAIN AREA
───────────────────────────────────────────── */
const AnalystBoardIcon = () => <CandidateAnalystIcon size={26} />;

function BoardArea({
  activatedAgents, justActivated, ownerInteraction,
}: {
  activatedAgents: string[];
  justActivated: boolean;
  ownerInteraction?: OwnerInteractionProps;
}) {
  const AGENT_CONFIGS = {
    analyst: { bg: '#7B5FF7', icon: <AnalystBoardIcon /> },
  } as const;
  const GROUP_AGENT: Record<string, keyof typeof AGENT_CONFIGS> = {
    interviews: 'analyst',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.52, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      {/* Title bar */}
      <div style={{
        height: 56, flexShrink: 0, display: 'flex', alignItems: 'center',
        padding: '0 var(--space-20)',
        borderBottom: '1px solid var(--ui-background-color)',
        gap: 'var(--space-8)', background: 'var(--primary-background-color)',
      }}>
        <span style={{ fontFamily: fp, fontSize: 16, fontWeight: 600, color: 'var(--primary-text-color)', whiteSpace: 'nowrap' }}>Recruitment pipeline</span>
        <button style={{
          width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
          border: 'none', background: 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ transform: 'scaleY(-1)', width: 10, height: 6, flexShrink: 0 }}>
                <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={svgTitleBar.p2e851900} fill="var(--secondary-text-color)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div style={{ flex: 1 }} />

        {/* Integrate button */}
        <button style={{
          height: 32, padding: '0 var(--space-8)', borderRadius: 'var(--border-radius-small)',
          border: 'none', background: 'transparent',
          fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: '10.53% 10.53% 10.54% 9.79%' }}>
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.9373 15.7858">
                <path clipRule="evenodd" d={svgTitleBar.p13fd0e00} fill="var(--secondary-text-color)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          Integrate
        </button>

        {/* Automate button */}
        <button style={{
          height: 32, padding: '0 var(--space-8)', borderRadius: 'var(--border-radius-small)',
          border: 'none', background: 'transparent',
          fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: '17.08% 9.89% 16.14% 9.88%' }}>
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.0455 13.3561">
                <path d={svgTitleBar.p9994480} fill="var(--secondary-text-color)" />
                <path d={svgTitleBar.pcba6a00} fill="var(--secondary-text-color)" />
                <path clipRule="evenodd" d={svgTitleBar.p8995100} fill="var(--secondary-text-color)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          Automate
        </button>

        {/* Message / Update icon button */}
        <button style={{
          width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
          border: 'none', background: 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '9.75% 10.17% 13.01% 12.52%' }}>
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.4615 15.4486">
                <path clipRule="evenodd" d={svgTitleBar.p203a9200} fill="var(--secondary-text-color)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </button>

        {/* Photo avatar group (overlapping faces) */}
        <div style={{ height: 32, width: 72, position: 'relative', flexShrink: 0, marginRight: -8 }}>
          <img
            alt="Team members"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
            src={imgAvatarGroup}
          />
        </div>

        {/* +N avatar count chip */}
        <div style={{ height: 28, width: 88, position: 'relative', flexShrink: 0 }}>
          <img
            alt="More team members"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
            src={imgAvatarCount}
          />
        </div>

        {/* Invite button */}
        <button style={{
          height: 32, padding: '0 var(--space-8)', borderRadius: 'var(--border-radius-small)',
          border: '1px solid var(--ui-border-color)', background: 'transparent',
          fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0,
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          Invite
        </button>

        {/* Three-dots button */}
        <button style={{
          width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
          border: 'none', background: 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '45% 11.66% 40% 15%' }}>
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 14.668 3">
                <path d={svgTitleBar.p3d92b780} fill="var(--secondary-text-color)" />
                <path d={svgTitleBar.pbf9c900} fill="var(--secondary-text-color)" />
                <path d={svgTitleBar.p3ed9aa80} fill="var(--secondary-text-color)" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Board toolbar */}
      <div style={{
        height: 40, flexShrink: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--space-16)',
        borderBottom: '1px solid var(--ui-background-color)',
        background: 'var(--primary-background-color)',
      }}>
        {/* Left tools group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)', height: 32 }}>

          {/* Main table dropdown + divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)', flexShrink: 0 }}>
            <div style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
              height: 32, width: 168, paddingLeft: 'var(--space-12)', paddingRight: 4,
              borderRadius: 'var(--border-radius-small)', border: '1px solid var(--ui-border-color)',
              background: 'var(--primary-background-color)', flexShrink: 0,
            }}>
              {/* Home icon */}
              <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: '10% 10% 12.42% 10%' }}>
                  <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.5152">
                    <path clipRule="evenodd" d={svgBI.p2f7cc000} fill="var(--secondary-text-color)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Label */}
              <span style={{
                flex: 1, fontFamily: ff, fontSize: 14,
                color: 'var(--secondary-text-color)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                Main table
              </span>
              {/* Chevron button */}
              <button style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 24, height: 24, border: 'none', background: 'transparent',
                cursor: 'pointer', flexShrink: 0, borderRadius: 'var(--border-radius-small)',
                padding: '6px 8px',
              }}>
                <div style={{ width: 16, height: 16, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%' }}>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.8">
                      <path d={svgBI.pe7b2900} fill="var(--secondary-text-color)" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            {/* Vertical divider */}
            <div style={{ width: 1, height: 32, background: 'var(--ui-border-color)', flexShrink: 0 }} />
          </div>

          {/* New Item split button */}
          <div style={{ display: 'flex', height: 32, borderRadius: 'var(--border-radius-small)', overflow: 'hidden', flexShrink: 0 }}>
            <button style={{
              background: 'var(--primary-color)', border: 'none',
              padding: '0 var(--space-8)', height: 32,
              fontFamily: ff, fontSize: 14,
              color: 'var(--text-color-on-inverted)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-hover-color)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-color)'; }}
            >
              New Item
            </button>
            <button style={{
              position: 'relative', background: 'var(--primary-color)', border: 'none',
              width: 24, height: 32, cursor: 'pointer', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-hover-color)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-color)'; }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'rgba(0,0,0,0.25)' }} />
              <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%' }}>
                  <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                    <path d={svgBI.p13a5f900} fill="var(--text-color-on-inverted)" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
            {/* Search */}
            {[
              { label: 'Search', iconW: '0 0 15.3764 15.377', iconInset: '11.86% 11.56% 11.25% 11.56%',
                paths: [{ d: svgBI.pb3aa200, rule: true }] },
              { label: 'Person', iconW: '0 0 15.9 15.9', iconInset: '10.25%',
                paths: [{ d: svgBI.p1a7d0570, rule: true }, { d: svgBI.p2d4adc00, rule: true }] },
              { label: 'Filter', iconW: '0 0 16 15.6356', iconInset: '10% 10% 11.82% 10%',
                paths: [{ d: svgBI.p8202e80, rule: true }] },
              { label: 'Sort', iconW: '0 0 13.6094 15.0507', iconInset: '12.37% 15.98%',
                paths: [{ d: svgBI.p2f9bd480, rule: false }, { d: svgBI.p1abdcf0, rule: false }] },
              { label: 'Hide', iconW: '0 0 15.88 11.7255', iconInset: '20.14% 10.55% 21.24% 10.05%',
                paths: [{ d: svgBI.p19f04c00, rule: true }] },
              { label: 'Group By', iconW: '0 0 16 14', iconInset: '15% 10%',
                paths: [{ d: 'M13 11V6L7 6V11H13Z', rule: false }, { d: svgBI.p35c68900, rule: true }] },
            ].map(({ label, iconW, iconInset, paths }) => (
              <button key={label} style={{
                height: 32, padding: '0 var(--space-8)', borderRadius: 'var(--border-radius-small)',
                border: 'none', background: 'transparent', cursor: 'pointer',
                fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexShrink: 0,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', inset: iconInset }}>
                    <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox={iconW}>
                      {paths.map((p, i) => p.rule
                        ? <path key={i} clipRule="evenodd" d={p.d} fill="var(--secondary-text-color)" fillRule="evenodd" />
                        : <path key={i} d={p.d} fill="var(--secondary-text-color)" />
                      )}
                    </svg>
                  </div>
                </div>
                {label}
              </button>
            ))}

            {/* Three dots menu */}
            <button style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, border: 'none', background: 'transparent',
              cursor: 'pointer', borderRadius: 'var(--border-radius-small)', flexShrink: 0,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <div style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '45% 11.66% 40% 15%' }}>
                  <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 14.668 3">
                    <path d={svgBI.p3d92b780} fill="var(--secondary-text-color)" />
                    <path d={svgBI.pbf9c900} fill="var(--secondary-text-color)" />
                    <path d={svgBI.p3ed9aa80} fill="var(--secondary-text-color)" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Collapse chevron — far right */}
        <button style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 24, height: 24, border: 'none',
          background: 'var(--ui-background-color)',
          borderRadius: 24, cursor: 'pointer', flexShrink: 0,
          padding: '6px 8px',
        }}>
          <div style={{ width: 16, height: 16, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%' }}>
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.8">
                <path d={svgBI.pe7b2900} fill="var(--secondary-text-color)" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Board table (scrollable) */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'auto', padding: '16px 0 32px' }}>
        {BOARD_GROUPS.map((g, groupIdx) => {
          const agentKey = GROUP_AGENT[g.id];
          const agentActive = agentKey ? activatedAgents.includes(agentKey) : false;
          const agentConfig = agentKey ? AGENT_CONFIGS[agentKey] : undefined;
          const isInterviews = g.id === 'interviews';
          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.48 + groupIdx * 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <BoardGroup
                {...g}
                groupIdx={groupIdx}
                agentActive={agentActive}
                agentConfig={agentConfig}
                justActivated={agentActive && justActivated}
                ownerInteraction={isInterviews ? ownerInteraction : undefined}
              />
            </motion.div>
          );
        })}
        {/* Add group */}
        <div style={{
          height: 36, display: 'flex', alignItems: 'center',
          paddingLeft: 'var(--space-12)', gap: 6, cursor: 'pointer',
          marginTop: 'var(--space-8)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--primary-color)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--secondary-text-color)'; }}
        >
          <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}><Plus size={13} /></span>
          <span style={{ fontFamily: ff, fontSize: 13, color: 'var(--secondary-text-color)' }}>Add new group</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SIDEKICK PANEL
───────────────────────────────────────────── */
const SUGGESTIONS = [
  {
    iconBg: 'rgba(102,204,255,0.2)',
    icon: (
      <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '10%' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.0002 16.0018">
            <path d="M7.95117 0.000977945C9.2737 -0.00532884 9.80967 1.14132 9.94922 1.48047C10.0512 1.72845 10.1184 1.97096 10.1621 2.14258C10.2233 2.38294 10.2219 2.39788 10.2432 2.47168C10.4561 3.21151 10.6718 4.00569 11.1504 4.61426L11.2412 4.71973C11.6644 5.18048 12.279 5.37979 12.9141 5.54004C13.0321 5.56983 13.1536 5.59626 13.3174 5.63281C13.4703 5.66693 13.6542 5.70872 13.8428 5.76074C14.2142 5.8632 14.6934 6.02735 15.1465 6.3457L15.1484 6.34668C15.5184 6.60737 15.7792 6.96719 15.9082 7.36524L15.9551 7.53809L15.957 7.54395C16.0502 7.97048 15.976 8.33371 15.8906 8.58008C15.8509 8.69464 15.8068 8.78882 15.7793 8.8457C15.7655 8.87421 15.7524 8.90061 15.7441 8.91699C15.7345 8.93608 15.7301 8.94484 15.7266 8.95215L15.7217 8.96094L15.7178 8.96973C15.5322 9.33815 15.2433 9.58363 14.9258 9.76172C14.6478 9.91762 14.2839 10.058 13.8076 10.2012C13.0646 10.4245 12.2198 10.6177 11.5391 11.0986L11.4023 11.2012C11.1125 11.4363 10.9183 11.7448 10.7725 12.0918L10.7119 12.2441C10.5589 12.6569 10.4619 13.1204 10.3545 13.5625C10.2341 14.0577 10.1018 14.4867 9.91797 14.8301C9.68296 15.2688 9.36813 15.5577 8.9873 15.7412C8.8604 15.8022 8.70904 15.8719 8.52637 15.9277L8.4668 15.9453L8.40723 15.959C7.57914 16.1392 6.92019 15.6953 6.83789 15.6465L6.71387 15.5732L6.60547 15.4766C6.3614 15.2591 6.20431 14.996 6.09082 14.7598C5.97244 14.5133 5.85711 14.2005 5.73828 13.7988C5.50168 12.9987 5.29533 12.0857 4.77148 11.4063L4.65527 11.2705C4.14355 10.7266 3.37102 10.5531 2.63184 10.375C2.15637 10.2604 1.76766 10.1515 1.46094 10.0264C1.13432 9.89307 0.784905 9.69476 0.503906 9.34082L0.40918 9.22461L0.37207 9.17774L0.337891 9.12891C0.0515292 8.70619 0.0147609 8.28587 0.00292969 8.1084L0 8.05859V8.00879C0.0000155873 7.32626 0.33999 6.69571 0.921875 6.32031L0.942383 6.30762L0.963867 6.29492C1.04707 6.24501 1.12121 6.20789 1.17188 6.1836C1.19715 6.17148 1.22064 6.16055 1.23633 6.15332C1.25487 6.14477 1.26249 6.14094 1.27148 6.13672C1.76621 5.9043 2.3748 5.75387 2.94141 5.5791C3.52384 5.39944 4.10309 5.18352 4.56934 4.8086C4.9015 4.54121 5.11002 4.1766 5.2627 3.76563C5.41522 3.35493 5.5135 2.89408 5.62012 2.45215C5.64603 2.34477 5.74012 1.86678 5.90625 1.46973C6.07424 1.06832 6.48749 0.312353 7.42188 0.0644545C7.64588 0.00626013 7.83933 0.00145509 7.93066 0.000977945C7.94423 0.000969711 7.94781 0 7.95117 0V0.000977945ZM7.95117 1.5C7.903 1.5 7.85346 1.50233 7.80664 1.51465C7.29542 1.65027 7.18213 2.37264 7.07812 2.80371C6.98558 3.18731 6.8615 3.76966 6.66895 4.28809C6.46568 4.83524 6.13249 5.4764 5.50977 5.97754C4.80824 6.54174 3.99477 6.82423 3.38379 7.0127C2.67221 7.23219 2.27596 7.32207 1.9082 7.49512C1.8495 7.52264 1.79126 7.54751 1.73535 7.58106C1.58214 7.67987 1.50001 7.83512 1.5 8.00879C1.5067 8.10925 1.52167 8.20088 1.58008 8.28711L1.67383 8.4043C1.80075 8.56796 2.05359 8.69292 2.9834 8.91699C3.61602 9.06942 4.88833 9.31493 5.76465 10.2598L5.93457 10.458C6.69484 11.4249 6.98227 12.7153 7.17676 13.373C7.3893 14.0916 7.531 14.2918 7.60352 14.3564C7.74948 14.443 7.91295 14.5312 8.08789 14.4932C8.17303 14.4672 8.25202 14.4325 8.33203 14.3936C8.51175 14.3088 8.66791 14.1485 8.89648 13.208C8.98856 12.829 9.1132 12.2419 9.30566 11.7227C9.50985 11.1719 9.84521 10.5272 10.4746 10.0234L10.6592 9.88379C11.5972 9.2157 12.7653 8.94823 13.376 8.76465C14.2453 8.50331 14.3485 8.35332 14.3779 8.29492C14.4451 8.15727 14.5265 8.02603 14.4912 7.86426C14.4701 7.76968 14.4082 7.66064 14.2842 7.57324C13.7843 7.22196 13.1227 7.13944 12.5469 6.99414C11.9067 6.8326 10.8802 6.55278 10.126 5.72461L9.97852 5.55078C9.27824 4.66529 8.99415 3.55516 8.80176 2.88672C8.69484 2.51526 8.55365 1.4917 7.95117 1.5Z" fill="var(--primary-text-color)" />
          </svg>
        </div>
      </div>
    ),
    label: "Walk me through what you've built",
  },
  {
    iconBg: 'rgba(102,204,255,0.2)',
    icon: (
      <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '16.25% 6.25% 15.23% 6.25%' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 13.7051">
            <path d={svgIcon1.p29165580} fill="var(--primary-text-color)" />
            <path clipRule="evenodd" d={svgIcon1.p2a135400} fill="var(--primary-text-color)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    ),
    label: 'Import real data into my board',
  },
  {
    iconBg: 'rgba(102,204,255,0.2)',
    icon: (
      <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '10% 10% 18.22% 10%' }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--primary-text-color)' }}>
            <Columns2 size={14} />
          </span>
        </div>
      </div>
    ),
    label: "Define roles I'm hiring for",
  },
  {
    iconBg: 'transparent',
    icon: (
      <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '10.26% 10.25% 10.24% 10.25%' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 15.9">
            <path clipRule="evenodd" d={svgIcon4.p3c909900} fill="var(--secondary-text-color)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgIcon4.p3c750580} fill="var(--secondary-text-color)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    ),
    label: 'Skip onboarding for now',
    skip: true,
  },
];

/* ─────────────────────────────────────────────
   AGENT CARD (transition sidekick)
───────────────────────────────────────────── */
function AgentCard({
  icon, img, bg, name, description, status, onActivate, activateLabel = 'Activate',
}: {
  icon?: React.ReactNode; img?: string; bg?: string; name: string; description: string;
  status: 'idle' | 'loading' | 'active';
  onActivate?: () => void;
  activateLabel?: string;
}) {
  return (
    <div style={{
      borderRadius: 8, border: '1px solid #E6E9EF',
      padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 8,
      background: 'var(--primary-background-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Icon — either a ReactNode or img */}
        {icon ? (
          <div style={{ flexShrink: 0 }}>{icon}</div>
        ) : (
          <div style={{ width: 24, height: 24, borderRadius: 7, background: bg, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
            <img src={img} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        )}
        <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 500, color: 'var(--primary-text-color)', flex: 1, lineHeight: '20px' }}>{name}</span>
        {status === 'active' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C875' }}
            />
            <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 600, color: '#00C875', whiteSpace: 'nowrap' }}>Active</span>
          </div>
        ) : (
          <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 600, color: '#00C875', whiteSpace: 'nowrap', flexShrink: 0 }}>Ready to activate</span>
        )}
      </div>
      <p style={{ fontFamily: ff, fontSize: 13, color: '#676879', margin: 0, lineHeight: 1.5 }}>{description}</p>
      {status !== 'active' && (
        <button
          onClick={status === 'idle' ? onActivate : undefined}
          disabled={status === 'loading'}
          style={{
            width: '100%', height: 32, borderRadius: 4, border: 'none',
            background: status === 'loading' ? 'var(--ui-background-color)' : '#0073EA',
            cursor: status === 'loading' ? 'default' : 'pointer',
            fontFamily: ff, fontSize: 13, fontWeight: 500,
            color: status === 'loading' ? 'var(--secondary-text-color)' : '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
        >
          {status === 'loading' ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                style={{ width: 12, height: 12, border: '2px solid #bbb', borderTopColor: '#555', borderRadius: '50%' }}
              />
              Activating...
            </>
          ) : activateLabel}
        </button>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TRANSITION SIDEKICK PANEL (existing user flow)
───────────────────────────────────────────── */
const T_MSG1 = "Hi, I'm Sidekick. I'm here to help you with everything you need and your access to all new monday capabilities using AI. Whatever you want to explore and do, I can do the work for you as I know your work inside out.";
const T_MSG2 = "I built you a Candidate Analyst agent — it reads a candidate's profile and instantly writes a full assessment directly on their item.";
const T_MSG3 = "To put it to work, assign it to one of the candidates in your pipeline — click the Owner column on any row and select Candidate Analyst.";
const T_MSG4 = "On it. Candidate Analyst is analyzing the candidate's profile...";
const T_MSG5 = "Done. The full assessment is now on their item — strengths, experience fit, and a hiring recommendation. That's what every agent does: real work, directly on your board.";
const T_MSG6 = "Is there anything else you want me to do for you?";

function SidekickPanelShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 420 }}
      animate={{ x: 0 }}
      exit={{ x: 420 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: 380, flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        background: 'var(--primary-background-color)',
        borderLeft: '1px solid var(--ui-background-color)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '8px var(--space-12)',
        borderBottom: '1px solid var(--ui-background-color)',
        background: 'var(--primary-background-color)', boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 8px',
            background: 'none', border: 'none', cursor: 'pointer',
            borderRadius: 'var(--border-radius-small)', flexShrink: 0,
          }}>
            <img alt="Sidekick" src={imgSidekickStar} style={{ width: 20, height: 20, objectFit: 'contain', pointerEvents: 'none' }} />
            <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 600, color: 'var(--primary-text-color)', whiteSpace: 'nowrap' }}>Sidekick</span>
            <div style={{ width: 20, height: 20, flexShrink: 0, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path d={svgAH.p13a5f900} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>
            <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 600, color: 'var(--primary-color)', border: '1px solid var(--primary-color)', borderRadius: 4, padding: '1px 6px', lineHeight: '16px', whiteSpace: 'nowrap' }}>Beta</span>
          </button>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', inset: '25.25%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 9.89922 9.89854">
                  <path d={svgAH.p10f2f000} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 8px 0' }}>
          <Table2 size={13} style={{ color: 'var(--secondary-text-color)', flexShrink: 0 }} />
          <span style={{ fontFamily: ff, fontSize: 12, color: 'var(--secondary-text-color)', whiteSpace: 'nowrap' }}>Recruitment pipeline</span>
        </div>
      </div>

      {children}

      {/* Input footer */}
      <div style={{
        padding: 'var(--space-8) var(--space-12) 0',
        borderTop: '1px solid var(--ui-background-color)',
        background: 'var(--primary-background-color)', flexShrink: 0,
      }}>
        <div style={{ border: '1px solid var(--ui-border-color)', borderRadius: 'var(--border-radius-large)', padding: 'var(--space-8) 10px' }}>
          <div style={{ minHeight: 44, display: 'flex', alignItems: 'center', fontFamily: ff, fontSize: 14, color: 'var(--placeholder-color)' }}>
            Ask Sidekick anything...
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {[Paperclip, AtSign, Sparkles].map((Icon, i) => (
              <button key={i} style={{ width: 26, height: 26, borderRadius: 'var(--border-radius-small)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-text-color)' }}>
                <Icon size={14} />
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <button style={{ width: 26, height: 26, borderRadius: 'var(--border-radius-small)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-text-color)' }}>
              <Mic size={14} />
            </button>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--disabled-background-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}><ArrowUp size={12} /></span>
            </div>
          </div>
        </div>
        <p style={{ fontFamily: ff, fontSize: 11, color: 'var(--secondary-text-color)', textAlign: 'center', margin: '6px 0 var(--space-8)' }}>
          AI may be inaccurate, make sure to review it.{' '}
          <span style={{ color: 'var(--link-color)', cursor: 'pointer', fontSize: 11, fontFamily: ff }}>Learn more</span>
        </p>
      </div>
    </motion.div>
  );
}

function TransitionSidekickPanel({
  onClose, onShowArrow, agentPhase, agentAssigned,
}: {
  onClose: () => void;
  onShowArrow: () => void;
  agentPhase: 'idle' | 'thinking' | 'done';
  agentAssigned: boolean;
}) {
  const { displayed: msg1Text, done: msg1Done } = useTypewriter(T_MSG1, 40);
  const [msg2Start,   setMsg2Start]   = useState(false);
  const { displayed: msg2Text, done: msg2Done } = useTypewriter(msg2Start ? T_MSG2 : '', 40);
  const [cardVisible, setCardVisible] = useState(false);
  const [msg3Start,   setMsg3Start]   = useState(false);
  const { displayed: msg3Text, done: msg3Done } = useTypewriter(msg3Start ? T_MSG3 : '', 40);
  const [msg4Visible, setMsg4Visible] = useState(false);
  const [msg5Visible, setMsg5Visible] = useState(false);
  const [msg6Visible, setMsg6Visible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const arrowCalledRef = useRef(false);

  useEffect(() => {
    if (!msg1Done) return;
    const t = setTimeout(() => setMsg2Start(true), 1000);
    return () => clearTimeout(t);
  }, [msg1Done]);

  useEffect(() => {
    if (!msg2Done || !msg2Start) return;
    const t = setTimeout(() => setCardVisible(true), 800);
    return () => clearTimeout(t);
  }, [msg2Done, msg2Start]);

  useEffect(() => {
    if (!cardVisible) return;
    const t = setTimeout(() => setMsg3Start(true), 1000);
    return () => clearTimeout(t);
  }, [cardVisible]);

  useEffect(() => {
    if (!msg3Done || !msg3Start || arrowCalledRef.current) return;
    arrowCalledRef.current = true;
    onShowArrow();
  }, [msg3Done, msg3Start]);

  useEffect(() => {
    if (!agentAssigned) return;
    setMsg4Visible(true);
  }, [agentAssigned]);

  useEffect(() => {
    if (agentPhase !== 'done') return;
    const t5 = setTimeout(() => setMsg5Visible(true), 1000);
    const t6 = setTimeout(() => setMsg6Visible(true), 2200);
    return () => { clearTimeout(t5); clearTimeout(t6); };
  }, [agentPhase]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [msg1Text, msg2Text, cardVisible, msg3Text, msg4Visible, msg5Visible, msg6Visible]);

  const Cursor = () => (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ repeat: Infinity, duration: 0.6, ease: 'steps(1)' }}
      style={{ display: 'inline-block', width: 2, height: 14, background: 'var(--primary-text-color)', verticalAlign: 'text-bottom', marginLeft: 1 }}
    />
  );

  const SidekickMsg = ({ text, id }: { text: string; id: string }) => (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
    >
      <img src={imgSidekickStar} alt="Sidekick" style={{ width: 20, height: 20, objectFit: 'contain' }} />
      <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </motion.div>
  );

  return (
    <SidekickPanelShell onClose={onClose}>
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '16px 20px', gap: 16 }}>

        {/* MSG 1 — typewriter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <img src={imgSidekickStar} alt="Sidekick" style={{ width: 20, height: 20, objectFit: 'contain' }} />
          <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
            {msg1Text}{!msg1Done && <Cursor />}
          </p>
        </div>

        {/* MSG 2 — typewriter */}
        <AnimatePresence>
          {msg2Start && (
            <motion.div key="msg2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <img src={imgSidekickStar} alt="Sidekick" style={{ width: 20, height: 20, objectFit: 'contain' }} />
              <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
                {msg2Text}{!msg2Done && msg2Start && <Cursor />}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Agent card — Candidate Analyst, already active */}
        <AnimatePresence>
          {cardVisible && (
            <motion.div key="analyst-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <AgentCard
                icon={<CandidateAnalystIcon size={32} />}
                name="Candidate Analyst"
                description="Reads a candidate's profile and instantly writes a full assessment — strengths, experience fit, and a hiring recommendation."
                status="active"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MSG 3 — typewriter */}
        <AnimatePresence>
          {msg3Start && (
            <motion.div key="msg3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <img src={imgSidekickStar} alt="Sidekick" style={{ width: 20, height: 20, objectFit: 'contain' }} />
              <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
                {msg3Text}{!msg3Done && <Cursor />}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MSG 4 — after assignment */}
        <AnimatePresence>
          {msg4Visible && <SidekickMsg id="msg4" text={T_MSG4} />}
        </AnimatePresence>

        {/* MSG 5 — after agent done */}
        <AnimatePresence>
          {msg5Visible && <SidekickMsg id="msg5" text={T_MSG5} />}
        </AnimatePresence>

        {/* MSG 6 */}
        <AnimatePresence>
          {msg6Visible && <SidekickMsg id="msg6" text={T_MSG6} />}
        </AnimatePresence>

      </div>
    </SidekickPanelShell>
  );
}

/* ─────────────────────────────────────────────
   AGENT ACTIVITY PILL
───────────────────────────────────────────── */
function AgentActivityPill({ phase, onClose }: { phase: 'thinking' | 'done'; onClose: () => void }) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 48, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 600,
        display: 'flex', alignItems: 'center', gap: 10,
        background: '#fff',
        borderRadius: 100,
        padding: '8px 12px 8px 10px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.14)',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <CandidateAnalystIcon size={28} />
      <span style={{
        fontFamily: ff, fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap',
        fontStyle: phase === 'thinking' ? 'italic' : 'normal',
        color: phase === 'thinking' ? '#323338' : '#323338',
      }}>
        {phase === 'thinking'
          ? 'Candidate Analyst is thinking...'
          : <span>Candidate Analyst run was completed <span style={{ color: '#00C875' }}>✓</span></span>
        }
      </span>
      {phase === 'done' && (
        <button
          onClick={onClose}
          style={{
            width: 20, height: 20, borderRadius: '50%', border: 'none',
            background: 'rgba(0,0,0,0.06)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginLeft: 2,
          }}
        >
          <X size={11} />
        </button>
      )}
    </motion.div>,
    document.body,
  );
}

/* ─────────────────────────────────────────────
   UPDATE PANEL (Tom Chen assessment)
───────────────────────────────────────────── */
function UpdatePanel({ onClose }: { onClose: () => void }) {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 800,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 12, padding: 24,
          width: 400, boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
        }}
      >
        {/* Close button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <button onClick={onClose} style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: 'rgba(0,0,0,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={13} />
          </button>
        </div>

        {/* Update message — chat bubble style */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ flexShrink: 0 }}>
            <CandidateAnalystIcon size={32} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span style={{ fontFamily: ff, fontSize: 13, fontWeight: 700, color: '#323338' }}>Candidate Analyst</span>
              <span style={{ fontFamily: ff, fontSize: 11, color: '#676879' }}>Just now</span>
            </div>
            <div style={{ background: '#F5F6F8', borderRadius: '0 8px 8px 8px', padding: '12px 14px' }}>
              <p style={{ fontFamily: ff, fontSize: 13, fontWeight: 600, color: '#323338', margin: '0 0 10px' }}>Candidate profile assessed.</p>
              <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li style={{ fontFamily: ff, fontSize: 13, color: '#323338', lineHeight: 1.55 }}>
                  <strong>Fit for role:</strong> Strong match for Engineering Manager — 8+ years in backend infrastructure and team leadership
                </li>
                <li style={{ fontFamily: ff, fontSize: 13, color: '#323338', lineHeight: 1.55 }}>
                  <strong>Experience level:</strong> Senior to Staff, aligns with role requirements
                </li>
                <li style={{ fontFamily: ff, fontSize: 13, color: '#323338', lineHeight: 1.55 }}>
                  <strong>Recommendation:</strong> Advance to contract stage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

/* ─────────────────────────────────────────────
   AGENT BUILDER MODAL (image)
───────────────────────────────────────────── */
function AgentBuilderModal({ onClose }: { onClose: () => void }) {
  return ReactDOM.createPortal(
    <motion.div
      key="agent-builder-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
        style={{
          borderRadius: 'var(--border-radius-large)',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
          maxWidth: '90vw',
          maxHeight: '90vh',
          lineHeight: 0,
        }}
      >
        <img
          src={imgAgentBuilder}
          alt="Agent Builder"
          style={{ display: 'block', maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
        />
      </motion.div>
    </motion.div>,
    document.body,
  );
}

/* ─────────────────────────────────────────────
   SIDEKICK PANEL
───────────────────────────────────────────── */
function SidekickPanel({ onClose }: { onClose: () => void }) {
  const [walkMeClicked, setWalkMeClicked] = useState(false);
  const [agentsClicked, setAgentsClicked] = useState(false);
  const [agentBuilderOpen, setAgentBuilderOpen] = useState(false);
  const [skipClicked, setSkipClicked] = useState(false);
  return (
    <motion.div
      initial={{ x: 380 }}
      animate={{ x: 0 }}
      exit={{ x: 380 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: 380, flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        background: 'var(--primary-background-color)',
        borderLeft: '1px solid var(--ui-background-color)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        flexShrink: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '8px var(--space-12)',
        borderBottom: '1px solid var(--ui-background-color)',
        background: 'var(--primary-background-color)',
        boxSizing: 'border-box',
      }}>

        {/* ── Top row: agent selector + action buttons ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Left: Sidekick selector button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: 8,
            height: 32, padding: '0 8px',
            background: 'none', border: 'none', cursor: 'pointer',
            borderRadius: 'var(--border-radius-small)',
            flexShrink: 0,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            {/* Sidekick star icon */}
            <img
              alt="Sidekick"
              src={imgSidekickStar}
              style={{ width: 20, height: 20, flexShrink: 0, objectFit: 'contain', pointerEvents: 'none' }}
            />

            {/* Label */}
            <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 600, color: 'var(--primary-text-color)', whiteSpace: 'nowrap' }}>
              Sidekick
            </span>

            {/* Down chevron */}
            <div style={{ width: 20, height: 20, flexShrink: 0, position: 'relative', overflow: 'clip' }}>
              <div style={{ position: 'absolute', bottom: '35%', left: '25%', right: '25%', top: '35%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path d={svgAH.p13a5f900} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>

            {/* Beta badge */}
            <span style={{
              fontFamily: ff, fontSize: 11, fontWeight: 600,
              color: 'var(--primary-color)',
              border: '1px solid var(--primary-color)',
              borderRadius: 4,
              padding: '1px 6px',
              lineHeight: '16px',
              whiteSpace: 'nowrap',
            }}>
              Beta
            </span>
          </button>

          {/* ── Right: icon buttons ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>

          {/* New Chat */}
          <button style={{
            width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: '6.25% 7.59% 11.25% 7.57%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.9664 16.5004">
                  <path d={svgAH.p14663440} fill="var(--primary-text-color)" />
                  <path d={svgAH.p10abea80} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>
          </button>

          {/* Sidebar / panel toggle */}
          <button style={{
            width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: '15% 10%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                  <path d={svgAH.p96f3980} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>
          </button>

          {/* Close */}
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 'var(--border-radius-small)',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ui-background-color)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <div style={{ width: 20, height: 20, position: 'relative', overflow: 'clip', flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: '25.25%' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 9.89922 9.89854">
                  <path d={svgAH.p10f2f000} fill="var(--primary-text-color)" />
                </svg>
              </div>
            </div>
          </button>

          </div>{/* end right icon buttons */}
        </div>{/* end top row */}

        {/* ── Bottom row: current board reference ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 8px 0' }}>
          <Table2 size={13} style={{ color: 'var(--secondary-text-color)', flexShrink: 0 }} />
          <span style={{ fontFamily: ff, fontSize: 12, color: 'var(--secondary-text-color)', whiteSpace: 'nowrap' }}>
            Recruitment pipeline
          </span>
        </div>

      </div>

      {/* Scrollable body — content anchored to top */}
      <div style={{
        flex: 1, overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
        padding: 'var(--space-12) var(--space-20)',
        gap: 'var(--space-16)', justifyContent: 'flex-start',
      }}>
        {/* Welcome block — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
        >
          <div style={{ width: 20, height: 20, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
            <img
              alt="Sidekick"
              src={imgSidekickStar}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
            />
          </div>
          <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
            <span style={{ fontWeight: 600 }}>Welcome Noa!</span>
            <br />
            Let me walk you through your first steps in the product and get you quick results.
          </p>
        </motion.div>

        {skipClicked ? (

          /* ── Skip phase: "get work done" ── */
          <>
            {/* User bubble — skip */}
            <motion.div
              key="user-bubble-skip"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 'var(--space-8)' }}
            >
              <div style={{
                maxWidth: '80%',
                background: 'var(--primary-color)',
                borderRadius: '12px 12px 2px 12px',
                padding: '10px var(--space-12)',
              }}>
                <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--text-color-on-inverted)', lineHeight: 1.5 }}>
                  Skip the onboarding
                </span>
              </div>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: 'var(--primary-color)',
                border: '2px solid var(--ui-border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 700, color: 'var(--text-color-on-inverted)' }}>N</span>
              </div>
            </motion.div>

            {/* Agent response */}
            <motion.div
              key="skip-ai-response"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
            >
              <div style={{ width: 28, height: 28, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
                <img
                  alt="Onboarding buddy"
                  src={imgAgentIconWelcome}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                />
              </div>
              <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
                Yes! let's get some work done. Let me know what you're trying to achieve or what you want me to build for you. You can always ask me again for the basics.
              </p>
            </motion.div>

            {/* Skip phase suggestions */}
            <motion.div
              key="skip-suggestions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
            >
              <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 600, color: 'var(--secondary-text-color)' }}>
                Here are some ideas
              </span>
              {([
                { icon: <Mail size={15} />,     label: 'Create automated candidate email response' },
                { icon: <PenLine size={15} />,  label: 'Write job descriptions based on industry' },
                { icon: <UserPlus size={15} />, label: 'Invite members to collaborate' },
              ] as { icon: React.ReactNode; label: string }[]).map(({ icon, label }, i) => (
                <button
                  key={i}
                  style={{
                    width: '100%', minHeight: 48,
                    padding: 'var(--space-8)',
                    background: 'var(--primary-background-color)',
                    border: '0.5px solid var(--ui-border-color)',
                    borderRadius: 'var(--border-radius-medium)',
                    display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--primary-surface-color)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--primary-background-color)';
                    e.currentTarget.style.borderColor = 'var(--ui-border-color)';
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 'var(--border-radius-small)',
                    background: 'rgba(102,204,255,0.2)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ display: 'flex', color: 'var(--primary-color)' }}>{icon}</span>
                  </div>
                  <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)' }}>{label}</span>
                </button>
              ))}
            </motion.div>
          </>

        ) : !walkMeClicked ? (

          /* ── Phase 1: initial suggestions ── */
          <motion.div
            key="suggestions-initial"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
          >
            <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 600, color: 'var(--secondary-text-color)' }}>
              Choose how to start or write me anything
            </span>
            {SUGGESTIONS.map(({ iconBg, icon, label, skip }, i) => (
              <button
                key={i}
                onClick={i === 0 ? () => setWalkMeClicked(true) : skip ? () => setSkipClicked(true) : undefined}
                style={{
                  width: '100%', minHeight: 48,
                  padding: 'var(--space-8)',
                  background: 'var(--primary-background-color)',
                  border: '0.5px solid var(--ui-border-color)',
                  borderRadius: 'var(--border-radius-medium)',
                  display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
                  cursor: 'pointer', textAlign: 'left',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--primary-surface-color)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--primary-background-color)';
                  e.currentTarget.style.borderColor = 'var(--ui-border-color)';
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 'var(--border-radius-small)',
                  background: iconBg, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {icon}
                </div>
                <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)' }}>{label}</span>
              </button>
            ))}
          </motion.div>

        ) : (

          /* ── Phase 2: conversation view ── */
          <>
            {/* User message bubble */}
            <motion.div
              key="user-bubble"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 'var(--space-8)' }}
            >
              <div style={{
                maxWidth: '80%',
                background: 'var(--primary-color)',
                borderRadius: '12px 12px 2px 12px',
                padding: '10px var(--space-12)',
              }}>
                <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--text-color-on-inverted)', lineHeight: 1.5 }}>
                  Walk me through what you've built
                </span>
              </div>
              {/* User avatar */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: 'var(--primary-color)',
                border: '2px solid var(--ui-border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 700, color: 'var(--text-color-on-inverted)' }}>N</span>
              </div>
            </motion.div>

            {/* Agent response */}
            <motion.div
              key="ai-response"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
            >
              <div style={{ width: 28, height: 28, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
                <img
                  alt="Onboarding buddy"
                  src={imgAgentIconWelcome}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                />
              </div>
              <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>
                You've mentioned how challenging it can be to track each candidate's status in the pipeline. From now on all your candidates will be managed under one board, letting team members and agents collaborate.
              </p>
            </motion.div>

            {/* Follow-up suggestions */}
            <AnimatePresence>
            {!agentsClicked && (
            <motion.div
              key="suggestions-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' } }}
              transition={{ delay: 1.1, duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
            >
              <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 600, color: 'var(--secondary-text-color)' }}>
                What should we do next?
              </span>
              {([
                {
                  iconBg: 'rgba(102,204,255,0.2)',
                  iconColor: '#0073ea',
                  icon: <Table2 size={15} />,
                  label: 'Guide me on how to work with this board',
                },
                {
                  iconBg: 'rgba(102,204,255,0.2)',
                  iconColor: '#0073ea',
                  icon: <UserPlus size={15} />,
                  label: 'Invite team members to collaborate',
                },
                {
                  iconBg: 'rgba(102,204,255,0.2)',
                  iconColor: '#0073ea',
                  icon: <ChevronRight size={15} />,
                  label: 'Continue to set up my agents',
                },
              ] as { iconBg: string; iconColor: string; icon: React.ReactNode; label: string }[]).map(({ iconBg, iconColor, icon, label }, i) => (
                <button
                  key={i}
                  onClick={i === 2 ? () => setAgentsClicked(true) : undefined}
                  style={{
                    width: '100%', minHeight: 48,
                    padding: 'var(--space-8)',
                    background: 'var(--primary-background-color)',
                    border: '0.5px solid var(--ui-border-color)',
                    borderRadius: 'var(--border-radius-medium)',
                    display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--primary-surface-color)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--primary-background-color)';
                    e.currentTarget.style.borderColor = 'var(--ui-border-color)';
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 'var(--border-radius-small)',
                    background: iconBg, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ display: 'flex', color: iconColor }}>{icon}</span>
                  </div>
                  <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)' }}>{label}</span>
                </button>
              ))}
            </motion.div>
            )}
            </AnimatePresence>

            {/* ── Phase 3: agents conversation ── */}
            {agentsClicked && (
              <>
                {/* User bubble — agents */}
                <motion.div
                  key="user-bubble-agents"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.25 }}
                  style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 'var(--space-8)' }}
                >
                  <div style={{
                    maxWidth: '80%',
                    background: 'var(--primary-color)',
                    borderRadius: '12px 12px 2px 12px',
                    padding: '10px var(--space-12)',
                  }}>
                    <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--text-color-on-inverted)', lineHeight: 1.5 }}>
                      Help me set up agents to work on this board
                    </span>
                  </div>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--primary-color)',
                    border: '2px solid var(--ui-border-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: ff, fontSize: 11, fontWeight: 700, color: 'var(--text-color-on-inverted)' }}>N</span>
                  </div>
                </motion.div>

                {/* Agent response — agents */}
                <motion.div
                  key="ai-response-agents"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
                >
                  <div style={{ width: 28, height: 28, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
                    <img
                      alt="Onboarding buddy"
                      src={imgAgentIconWelcome}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                    />
                  </div>
                  <p style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)', lineHeight: 1.6, margin: 0 }}>Sure thing. Agents can be assigned to jobs you want them to perform. For example, I've already created agents to help you find or screen candidates. Want them to start working for you?</p>
                </motion.div>

                {/* Follow-up suggestions — agents */}
                <motion.div
                  key="agents-suggestions"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
                >
                  {([
                    {
                      iconBg: 'rgba(102,204,255,0.2)',
                      iconColor: '#0073ea',
                      icon: <Bot size={15} />,
                      label: 'Yes, give my Talent Sourcer instructions',
                    },
                    {
                      iconBg: 'rgba(102,204,255,0.2)',
                      iconColor: '#0073ea',
                      icon: <Bot size={15} />,
                      label: 'Yes, give my Candidate Screener instructions',
                    },
                    {
                      iconBg: 'rgba(102,204,255,0.2)',
                      iconColor: '#0073ea',
                      icon: <ChevronRight size={15} />,
                      label: "Continue to the Vibe APP you've created",
                    },
                  ] as { iconBg: string; iconColor: string; icon: React.ReactNode; label: string }[]).map(({ iconBg, iconColor, icon, label }, i) => (
                    <button
                      key={i}
                      onClick={i === 0 || i === 1 ? () => setAgentBuilderOpen(true) : undefined}
                      style={{
                        width: '100%', minHeight: 48,
                        padding: 'var(--space-8)',
                        background: 'var(--primary-background-color)',
                        border: '0.5px solid var(--ui-border-color)',
                        borderRadius: 'var(--border-radius-medium)',
                        display: 'flex', alignItems: 'center', gap: 'var(--space-8)',
                        cursor: 'pointer', textAlign: 'left',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--primary-surface-color)';
                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'var(--primary-background-color)';
                        e.currentTarget.style.borderColor = 'var(--ui-border-color)';
                      }}
                    >
                      <div style={{
                        width: 28, height: 28, borderRadius: 'var(--border-radius-small)',
                        background: iconBg, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ display: 'flex', color: iconColor }}>{icon}</span>
                      </div>
                      <span style={{ fontFamily: ff, fontSize: 14, color: 'var(--primary-text-color)' }}>{label}</span>
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </>
        )}
      </div>

      {/* Prompt input (sticky footer) */}
      <div style={{
        padding: 'var(--space-8) var(--space-12) 0',
        borderTop: '1px solid var(--ui-background-color)',
        background: 'var(--primary-background-color)',
        flexShrink: 0,
      }}>
        <div style={{
          border: '1px solid var(--ui-border-color)',
          borderRadius: 'var(--border-radius-large)',
          padding: 'var(--space-8) 10px',
        }}>
          {/* Input area */}
          <div style={{
            minHeight: 44, display: 'flex', alignItems: 'center',
            fontFamily: ff, fontSize: 14, color: 'var(--placeholder-color)',
          }}>
            Tell Sidekick what you want to do...
          </div>
          {/* Action row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {[Paperclip, AtSign, Sparkles].map((Icon, i) => (
              <button key={i} style={{
                width: 26, height: 26, borderRadius: 'var(--border-radius-small)',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--secondary-text-color)',
              }}>
                <Icon size={14} />
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <button style={{
              width: 26, height: 26, borderRadius: 'var(--border-radius-small)',
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--secondary-text-color)',
            }}>
              <Mic size={14} />
            </button>
            {/* Send button — disabled state */}
            <div style={{
              width: 24, height: 24, borderRadius: 6,
              background: 'var(--disabled-background-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: 'var(--secondary-text-color)', display: 'flex' }}><ArrowUp size={12} /></span>
            </div>
          </div>
        </div>
        <p style={{
          fontFamily: ff, fontSize: 11, color: 'var(--secondary-text-color)',
          textAlign: 'center', margin: '6px 0 var(--space-8)',
        }}>
          AI may be inaccurate, make sure to review it.{' '}
          <span style={{ color: 'var(--link-color)', cursor: 'pointer', fontSize: 11, fontFamily: ff }}>Learn more</span>
        </p>
      </div>

      {/* Agent Builder Modal — portal */}
      <AnimatePresence>
        {agentBuilderOpen && (
          <AgentBuilderModal onClose={() => setAgentBuilderOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────── */
export function RecruitmentBoardPage() {
  const [searchParams] = useSearchParams();
  const fromTransition = searchParams.get('sidekick') === 'open';
  const [sidekickOpen, setSidekickOpen] = useState(false);
  const [activatedAgents] = useState<string[]>([]);
  const [justActivated] = useState(false);

  const [showArrow, setShowArrow] = useState(false);
  const [activeDropdownRow, setActiveDropdownRow] = useState<number | null>(null);
  const [activeDropdownAnchor, setActiveDropdownAnchor] = useState<HTMLElement | null>(null);
  const [assignedRowIdx, setAssignedRowIdx] = useState<number | null>(null);
  const [agentAssigned, setAgentAssigned] = useState(false);
  const [agentPhase, setAgentPhase] = useState<'idle' | 'thinking' | 'done'>('idle');
  const [pillVisible, setPillVisible] = useState(false);
  const [showChatDot, setShowChatDot] = useState(false);
  const [updatePanelOpen, setUpdatePanelOpen] = useState(false);

  useEffect(() => {
    const delay = fromTransition ? 600 : 800;
    const t = setTimeout(() => setSidekickOpen(true), delay);
    return () => clearTimeout(t);
  }, [fromTransition]);

  const ownerInteraction: OwnerInteractionProps = {
    showArrow,
    activeDropdownRow,
    assignedRowIdx,
    showChatDot,
    onOwnerCellClick: (rowIdx, el) => {
      if (agentPhase !== 'idle') return;
      setActiveDropdownRow(rowIdx);
      setActiveDropdownAnchor(el);
    },
    onSelectPerson: () => {
      setActiveDropdownRow(null);
      setActiveDropdownAnchor(null);
    },
    onAgentSelect: (rowIdx) => {
      setActiveDropdownRow(null);
      setActiveDropdownAnchor(null);
      setShowArrow(false);
      setAssignedRowIdx(rowIdx);
      setAgentAssigned(true);
      setAgentPhase('thinking');
      setPillVisible(true);
      setTimeout(() => {
        setAgentPhase('done');
        setShowChatDot(true);
      }, 2500);
    },
    onDropdownClose: () => {
      setActiveDropdownRow(null);
      setActiveDropdownAnchor(null);
    },
    onChatDotClick: () => setUpdatePanelOpen(true),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
      style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        background: 'var(--primary-background-color)', overflow: 'hidden',
      }}
    >
      <TopBar />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SharedIconNav variant="board" animateIn />
        <LeftSidebar />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', overflow: 'hidden' }}>
          <BoardArea
            activatedAgents={activatedAgents}
            justActivated={justActivated}
            ownerInteraction={ownerInteraction}
          />
          <AnimatePresence>
            {sidekickOpen && (
              fromTransition
                ? <TransitionSidekickPanel
                    key="transition-panel"
                    onClose={() => setSidekickOpen(false)}
                    onShowArrow={() => setShowArrow(true)}
                    agentPhase={agentPhase}
                    agentAssigned={agentAssigned}
                  />
                : <SidekickPanel
                    key="onboarding-panel"
                    onClose={() => setSidekickOpen(false)}
                  />
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {pillVisible && (
          <AgentActivityPill
            key="agent-pill"
            phase={agentPhase === 'thinking' ? 'thinking' : 'done'}
            onClose={() => setPillVisible(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {updatePanelOpen && (
          <UpdatePanel key="update-panel" onClose={() => setUpdatePanelOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}