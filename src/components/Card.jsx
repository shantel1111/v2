export default function Card({ children, gridArea, className = "" }) {
  return (
    <div className={`grid-item ${className}`} style={{ gridArea: gridArea }}>
      {children}
    </div>
  );
}
