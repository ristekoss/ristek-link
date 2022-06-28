import { SVGProps } from 'react';

function LeftBanner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={268}
      height={672}
      viewBox="0 0 268 672"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M134 0H0v134h134V0zM0 268v134h134V268H0z" fill="#64E6FB" />
      <path d="M67 268v134h67V268H67z" fill="#FFD668" />
      <g clipPath="url(#prefix__clip0)">
        <path d="M134 268L0 134v134h134z" fill="#5038BC" />
      </g>
      <g clipPath="url(#prefix__clip1)">
        <path d="M134 538l134 134V538H134z" fill="#FFD668" />
        <g clipPath="url(#prefix__clip2)">
          <path
            d="M200.5 650c25.129 0 45.5-20.371 45.5-45.5S225.629 559 200.5 559 155 579.371 155 604.5s20.371 45.5 45.5 45.5z"
            fill="#C424A3"
          />
        </g>
      </g>
      <path d="M134 538L0 672h134V538z" fill="#5038BC" />
      <path d="M134 672L0 538v134h134z" fill="#C424A3" />
      <g clipPath="url(#prefix__clip3)">
        <path
          d="M134-134C59.994-134 0-74.006 0 0s59.994 134 134 134S268 74.006 268 0s-59.994-134-134-134z"
          fill="#C424A3"
        />
      </g>
      <g clipPath="url(#prefix__clip4)">
        <path
          d="M0 538c0 74.006 59.994 134 134 134s134-59.994 134-134-59.994-134-134-134S0 463.994 0 538z"
          fill="#64E6FB"
        />
      </g>
      <path
        d="M67 520c27.062 0 49-21.938 49-49s-21.938-49-49-49-49 21.938-49 49 21.938 49 49 49z"
        stroke="#FFD668"
        strokeWidth={36}
      />
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(0 134)" d="M0 0h134v134H0z" />
        </clipPath>
        <clipPath id="prefix__clip1">
          <path
            fill="#fff"
            transform="translate(134 538)"
            d="M0 0h134v134H0z"
          />
        </clipPath>
        <clipPath id="prefix__clip2">
          <path fill="#fff" transform="translate(155 559)" d="M0 0h91v91H0z" />
        </clipPath>
        <clipPath id="prefix__clip3">
          <path fill="#fff" transform="translate(134)" d="M0 0h134v134H0z" />
        </clipPath>
        <clipPath id="prefix__clip4">
          <path
            fill="#fff"
            transform="translate(134 404)"
            d="M0 0h134v134H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LeftBanner;
