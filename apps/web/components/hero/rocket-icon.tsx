type RocketIconProps = React.ComponentProps<"svg">

export function RocketIcon({ className, ...props }: RocketIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="rocket-body"
          x1="12"
          y1="22"
          x2="12"
          y2="1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#883F2E" />
          <stop offset="0.55" stopColor="#C86D36" />
          <stop offset="1" stopColor="#E2935A" />
        </linearGradient>
        <linearGradient
          id="rocket-window"
          x1="10"
          y1="10.8"
          x2="14"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC8FA" />
          <stop offset="1" stopColor="#E6EDFF" />
        </linearGradient>
        <linearGradient
          id="rocket-flame"
          x1="12"
          y1="18.5"
          x2="12"
          y2="23.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6EDFF" />
          <stop offset="1" stopColor="#8FA6F5" />
        </linearGradient>
      </defs>

      <path
        d="M7.4 12.5 4.5 16.1v3.2l2.9-1.5 1.5-3.5-.4-1.8a9.6 9.6 0 0 1-1.1 0Z"
        fill="#883F2E"
      />
      <path
        d="M16.6 12.5 19.5 16.1v3.2l-2.9-1.5-1.5-3.5.4-1.8c.37.02.73.02 1.1 0Z"
        fill="#883F2E"
      />
      <path
        d="M12 1.6c2.85 2.55 4.35 5.92 4.35 9.5 0 2.1-.45 4.2-1.32 6.12l-3.03 1.48-3.03-1.48A16.2 16.2 0 0 1 7.65 11.1c0-3.58 1.5-6.95 4.35-9.5Z"
        fill="url(#rocket-body)"
      />
      <circle cx="12" cy="8.5" r="2.35" fill="#883F2E" />
      <circle cx="12" cy="8.5" r="1.85" fill="url(#rocket-window)" />
      <path d="M9.85 19.1h4.3L12 23.4l-2.15-4.3Z" fill="url(#rocket-flame)" />
      <path
        d="M10.75 3.3c.42-.5.83-.95 1.25-1.35.42.4.83.85 1.25 1.35-.41-.12-.83-.18-1.25-.18s-.84.06-1.25.18Z"
        fill="#E6EDFF"
      />
    </svg>
  )
}
