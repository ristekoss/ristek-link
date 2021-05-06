import * as React from "react"

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={48}
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#5038BC"
        d="M0 7.438h7.438V48H0zM23.71 0l7.438 7.438H0L7.44 0h16.27z"
      />
      <path
        d="M6.393 25.802l3.719-7.439h21.036l-7.438 7.439H6.393z"
        fill="#5038BC"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={7}
        width={8}
        height={31}
      >
        <path opacity={0.45} fill="#B9B9B9" d="M0 7.438h7.438v29.753H0z" />
      </mask>
      <g mask="url(#prefix__a)">
        <ellipse
          opacity={0.5}
          cx={6.449}
          cy={7.455}
          rx={8.224}
          ry={4.733}
          fill="url(#prefix__paint0_radial)"
        />
        <ellipse
          opacity={0.5}
          cx={10.809}
          cy={25.801}
          rx={7.671}
          ry={5.114}
          fill="url(#prefix__paint1_radial)"
        />
      </g>
      <mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={7}
        y={0}
        width={17}
        height={8}
      >
        <path
          opacity={0.45}
          transform="rotate(90 23.71 0)"
          fill="#5038BC"
          d="M23.709 0h7.438v16.271h-7.438z"
        />
      </mask>
      <g mask="url(#prefix__b)">
        <ellipse
          opacity={0.5}
          cx={24.059}
          cy={6.16}
          rx={7.322}
          ry={4.765}
          transform="rotate(90 24.059 6.16)"
          fill="#5038BC"
        />
      </g>
      <mask
        id="prefix__c"
        maskUnits="userSpaceOnUse"
        x={15}
        y={0}
        width={10}
        height={8}
      >
        <path
          opacity={0.45}
          transform="rotate(90 25 0)"
          fill="#B9B9B9"
          d="M25 0h7.273v10H25z"
        />
      </mask>
      <g mask="url(#prefix__c)">
        <ellipse
          opacity={0.5}
          cx={25.682}
          cy={6.022}
          rx={7.159}
          ry={4.659}
          transform="rotate(90 25.682 6.022)"
          fill="url(#prefix__paint2_radial)"
        />
      </g>
      <path d="M23.71 0l7.438 7.438v10.925h-7.439V0z" fill="#5038BC" />
      <mask
        id="prefix__d"
        maskUnits="userSpaceOnUse"
        x={23}
        y={8}
        width={9}
        height={11}
      >
        <path
          opacity={0.45}
          transform="rotate(-180 31.148 18.363)"
          fill="#B9B9B9"
          d="M31.148 18.363h7.438v10.228h-7.438z"
        />
      </mask>
      <g mask="url(#prefix__d)">
        <ellipse
          opacity={0.5}
          cx={24.988}
          cy={19.061}
          rx={7.322}
          ry={4.765}
          transform="rotate(-180 24.988 19.061)"
          fill="url(#prefix__paint3_radial)"
        />
      </g>
      <mask
        id="prefix__e"
        maskUnits="userSpaceOnUse"
        x={10}
        y={18}
        width={11}
        height={8}
      >
        <path
          opacity={0.45}
          transform="matrix(0 1 1 0 10.228 18.363)"
          fill="#B9B9B9"
          d="M0 0h7.438v10.228H0z"
        />
      </mask>
      <g mask="url(#prefix__e)">
        <ellipse
          opacity={0.7}
          rx={13.383}
          ry={4.765}
          transform="scale(1 -1) rotate(-50.227 -20.107 -24.547)"
          fill="url(#prefix__paint4_radial)"
        />
      </g>
      <path
        d="M6.392 25.802l3.72-7.439L31.09 43.061l-5.637 4.881-19.06-22.14z"
        fill="#5038BC"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 4.73299 -8.22357 0 6.449 7.455)"
        >
          <stop />
          <stop offset={0.917} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint1_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 5.1138 -7.6707 0 10.809 25.801)"
        >
          <stop />
          <stop offset={0.917} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint2_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 4.65911 -7.15912 0 25.682 6.022)"
        >
          <stop />
          <stop offset={0.917} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint3_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 4.76513 -7.32203 0 24.988 19.061)"
        >
          <stop />
          <stop offset={0.917} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint4_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 4.76513 -13.3832 0 13.383 4.765)"
        >
          <stop />
          <stop offset={0.917} stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default Logo
