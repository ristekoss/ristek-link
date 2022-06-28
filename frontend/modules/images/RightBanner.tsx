import { SVGProps } from 'react';

function RightBanner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={268}
      height={672}
      viewBox="0 0 268 672"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M268 0L134 134h134V0z" fill="#C424A3" />
      <path d="M268 404H134v134h134V404z" fill="#64E6FB" />
      <path
        d="M201 385c27.062 0 49-21.938 49-49s-21.938-49-49-49-49 21.938-49 49 21.938 49 49 49z"
        stroke="#FFD668"
        strokeWidth={36}
      />
      <path d="M268 134L134 0v134h134z" fill="#FFD668" />
      <path d="M134 134A134 134 0 010 0h134v134z" fill="#5038BC" />
      <g clipPath="url(#prefix__clip0)">
        <path fill="#5038BC" d="M134 268V134h134v134z" />
        <path fill="#64E6FB" d="M201 268V134h67v134z" />
      </g>
      <g clipPath="url(#prefix__clip1)">
        <path fill="#5038BC" d="M134 672V538h134v134z" />
        <path d="M134 672l134-134H134v134z" fill="#C424A3" />
        <circle
          cx={201.5}
          cy={604.5}
          r={45.5}
          transform="rotate(-90 201.5 604.5)"
          fill="#FFD668"
        />
      </g>
      <path d="M134 538L0 672h134V538z" fill="#64E6FB" />
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="rotate(-90 201 67)"
            d="M0 0h134v134H0z"
          />
        </clipPath>
        <clipPath id="prefix__clip1">
          <path
            fill="#fff"
            transform="rotate(-90 403 269)"
            d="M0 0h134v134H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RightBanner;
