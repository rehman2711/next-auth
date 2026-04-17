const Spinner = ({ className = "" }) => (
  <svg
    className={`w-10 h-10 ${className}`}
    fill="currentColor"
    viewBox="0 0 24 24"
    role="status"
    aria-label="Loading"
  >
    <path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".25"
    />
    <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.75s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default function LoadingScreen() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <Spinner className="text-primary" />
      <p>Loading session...</p>
    </div>
  );
}