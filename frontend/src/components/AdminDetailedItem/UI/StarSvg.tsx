import React from 'react'

interface IStarSvg {
    $active?: boolean
}

const StarSvg: React.FC<IStarSvg> = ({ $active }) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g id="star 3" clip-path="url(#clip0_240_3460)">
                <path style={{
                    fill: '#FFC05C',
                    fillOpacity: $active ? '1' : '0.3'
                }} id="Vector" d="M24.9346 9.58886C24.77 9.08264 24.321 8.72424 23.7919 8.67637L16.5752 8.02118L13.723 1.34382C13.5125 0.853246 13.0333 0.536621 12.5 0.536621C11.9667 0.536621 11.4874 0.853246 11.2782 1.34382L8.42606 8.02118L1.20815 8.67637C0.679043 8.7252 0.230999 9.08359 0.0654383 9.58886C-0.0991687 10.0951 0.0528495 10.6503 0.453018 11.0013L5.90832 15.7848L4.29982 22.8692C4.18214 23.3901 4.38432 23.9287 4.81653 24.2412C5.04885 24.41 5.3218 24.4943 5.5957 24.4943C5.83107 24.4943 6.06663 24.4317 6.27701 24.3058L12.5 20.5849L18.7219 24.3058C19.1783 24.5786 19.7523 24.5536 20.1835 24.2412C20.6157 23.9287 20.8179 23.3901 20.7002 22.8692L19.0918 15.7848L24.5471 11.0013C24.947 10.6503 25.0992 10.0962 24.9346 9.58886Z" />
            </g>
            <defs>
                <clipPath id="clip0_240_3460">
                    <rect width="25" height="25" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export { StarSvg }