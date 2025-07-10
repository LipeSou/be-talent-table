type ChevronDownProps = {
  width?: string | number;
  height?: string | number;
};

export function ChevronUp({ width = 32, height = 33 }: ChevronDownProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 21L16 12L7.5 21"
        stroke="#0500FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
