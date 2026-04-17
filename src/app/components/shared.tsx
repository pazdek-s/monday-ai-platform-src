/* Shared primitive components used across signup screens */
import logoImg from 'figma:asset/8e0ce1fa1aa12cce9f99b9e486f702cf893e753f.png';

export const MondayBrandMark = () => (
  <img src={logoImg} alt="monday.com logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
}

export const InputField = ({ label, type = 'text', placeholder, value, onChange, autoComplete }: InputFieldProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: '100%' }}>
    <label
      style={{
        fontFamily: 'Figtree, sans-serif',
        fontSize: 14, fontWeight: 400,
        lineHeight: '20px', color: 'var(--primary-text-color)',
      }}
    >
      {label}
    </label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%', height: 48, boxSizing: 'border-box',
        border: '1px solid var(--ui-border-color)',
        borderRadius: 'var(--border-radius-small)',
        padding: '4px 4px 4px 16px',
        fontFamily: 'Figtree, sans-serif',
        fontSize: 16, fontWeight: 400,
        color: 'var(--primary-text-color)',
        outline: 'none',
        background: 'var(--primary-background-color)',
        transition: 'border-color 150ms ease, box-shadow 150ms ease',
      }}
      onFocus={e => {
        e.target.style.borderColor = 'var(--primary-color)';
        e.target.style.boxShadow = '0 0 0 3px rgba(0,115,234,0.15)';
      }}
      onBlur={e => {
        e.target.style.borderColor = 'var(--ui-border-color)';
        e.target.style.boxShadow = 'none';
      }}
    />
  </div>
);

interface ContinueButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const ContinueButton = ({ onClick, disabled }: ContinueButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: '100%', height: 48,
      background: 'var(--primary-color)',
      border: 'none', borderRadius: 'var(--border-radius-small)',
      color: 'var(--text-color-on-inverted)',
      fontFamily: 'Figtree, sans-serif',
      fontSize: 16, fontWeight: 400,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background 150ms ease, transform 150ms ease',
    }}
    onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'var(--primary-hover-color)'; }}
    onMouseLeave={e => { if (!disabled) e.currentTarget.style.background = 'var(--primary-color)'; }}
    onMouseDown={e => { if (!disabled) { e.currentTarget.style.background = 'var(--primary-active-color)'; e.currentTarget.style.transform = 'scale(0.99)'; } }}
    onMouseUp={e => { if (!disabled) { e.currentTarget.style.background = 'var(--primary-hover-color)'; e.currentTarget.style.transform = 'scale(1)'; } }}
  >
    Continue
  </button>
);