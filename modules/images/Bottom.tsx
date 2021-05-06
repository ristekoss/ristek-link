import * as React from "react"

function Bottom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={376}
      height={75}
      viewBox="0 0 376 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path fill="#FFD668" d="M150 0h75v75h-75z" />
        <path fill="#5038BC" d="M150 37.5h75V75h-75z" />
      </g>
      <g clipPath="url(#prefix__clip1)">
        <circle
          cx={112.5}
          cy={37.5}
          r={27.5}
          transform="rotate(90 112.5 37.5)"
          stroke="#C424A3"
          strokeWidth={20}
        />
      </g>
      <g clipPath="url(#prefix__clip2)">
        <path d="M301 0l75 75V0h-75z" fill="#5038BC" />
        <circle cx={338.78} cy={37.78} r={25.466} fill="#64E6FB" />
      </g>
      <path fill="#C424A3" d="M225 0h75v75h-75z" />
      <circle
        cx={262.78}
        cy={37.22}
        r={25.466}
        transform="rotate(-90 262.78 37.22)"
        fill="#FFD668"
      />
      <g clipPath="url(#prefix__clip3)">
        <path d="M75 75L0 0v75h75z" fill="#5038BC" />
        <path d="M0 75L75 0H0v75z" fill="#64E6FB" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(150)" d="M0 0h75v75H0z" />
        </clipPath>
        <clipPath id="prefix__clip1">
          <path fill="#fff" transform="rotate(90 75 75)" d="M0 0h75v75H0z" />
        </clipPath>
        <clipPath id="prefix__clip2">
          <path fill="#fff" transform="rotate(90 188 188)" d="M0 0h75v75H0z" />
        </clipPath>
        <clipPath id="prefix__clip3">
          <path
            fill="#fff"
            transform="rotate(-90 37.5 37.5)"
            d="M0 0h75v75H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Bottom
