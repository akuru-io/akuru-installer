export default function AllFontsIcon (props){
    return(
        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d)">
                <path d="M28.3334 8.33329H17.6667L15.7867 6.45329C15.28 5.94663 14.6 5.66663 13.8934 5.66663H7.00004C5.53337 5.66663 4.34671 6.86663 4.34671 8.33329L4.33337 24.3333C4.33337 25.8 5.53337 27 7.00004 27H28.3334C29.8 27 31 25.8 31 24.3333V11C31 9.53329 29.8 8.33329 28.3334 8.33329ZM27 24.3333H8.33337C7.60004 24.3333 7.00004 23.7333 7.00004 23V12.3333C7.00004 11.6 7.60004 11 8.33337 11H27C27.7334 11 28.3334 11.6 28.3334 12.3333V23C28.3334 23.7333 27.7334 24.3333 27 24.3333Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_d" x="-2.33331" y="0.333313" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}