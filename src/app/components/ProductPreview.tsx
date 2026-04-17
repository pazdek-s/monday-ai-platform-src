import previewImage from 'figma:asset/d47efe86ded7bee4170684fd3d3091d5aa04d2d1.png';

export function ProductPreview() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-40) var(--space-32) var(--space-40) var(--space-24)',
        boxSizing: 'border-box',
        background: 'var(--preview-background-color)',
      }}
    >
      <img
        src={previewImage}
        alt="monday.com product preview"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          borderRadius: 'var(--border-radius-xl)',
        }}
      />
    </div>
  );
}
