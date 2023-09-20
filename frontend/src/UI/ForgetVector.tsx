import React from 'react'
import styled from 'styled-components'

// <-- styled -->
type StylesProps = {
    width?: string,
    height?: string,
    $mb?: string
}
const MySvg = styled.svg<StylesProps>`
    width: ${props => props.width || '181px'};
    height: ${props => props.height || '162px'};
    margin: 0 0 ${props => props.$mb || '0'} 0;
    viewBox=0 0 181 162;
    fill=none;
`
// </-- styled --/>

type Props = {
    width?: string,
    height?: string,
    mb?: string
}
const ForgetVector: React.FC<Props> = ({ width, height, mb }) => {
    return (
        <MySvg width={width} height={height} $mb={mb} >
            <g id="exept-vector 1" clip-path="url(#clip0_213_254)">
                <g id="OBJECTS">
                    <g id="Group">
                        <g id="Group_2">
                            <g id="Group_3">
                                <path id="Vector" d="M175.758 117.175C172.798 110.428 167.113 104.797 160.284 102.026C153.171 99.1399 145.004 100.19 137.512 99.2236C131.005 98.3842 126.31 95.4732 122.424 90.2976C118.702 85.3385 115.363 79.8466 109.277 77.5523C104.468 75.7393 98.9997 76.2427 94.2195 78.1308C85.4119 81.6116 78.7587 89.0114 73.1555 96.3841C68.04 103.115 63.8678 110.486 54.4056 110.726C44.9372 110.966 35.9234 105.554 26.3912 106.988C13.7921 108.883 3.2982 119.394 1.09969 131.907C-0.961255 143.635 4.20954 155.01 13.0932 161.692H165.788C176.982 149.791 182.855 133.352 175.758 117.175Z" fill="#F7F0E3" />
                                <g id="Group_4">
                                    <path id="Vector_2" d="M37.7253 161.692H38.1453C41.0623 158.478 43.348 154.58 44.7998 150.253C47.1506 143.248 47.0523 135.896 44.521 129.552C43.2424 126.346 41.3952 123.359 39.6081 120.469C37.7965 117.538 35.9235 114.508 34.6523 111.261C34.1266 109.918 33.7385 108.477 33.5051 107.006C33.3995 106.992 33.2939 106.981 33.1895 106.968C33.424 108.492 33.8232 109.985 34.3673 111.373C35.6483 114.646 37.53 117.688 39.349 120.63C41.1287 123.508 42.9685 126.485 44.2373 129.666C46.7416 135.942 46.8386 143.218 44.5099 150.154C43.0398 154.536 40.7061 158.471 37.7265 161.692H37.7253Z" fill="white" />
                                    <path id="Vector_3" d="M165.049 148.347C168.196 149.019 171.227 149.621 174.159 150C174.21 149.903 174.259 149.806 174.308 149.709C171.351 149.332 168.291 148.725 165.113 148.046C160.274 147.013 155.037 145.894 149.842 145.894C146.625 145.894 143.425 146.322 140.348 147.466C139.182 147.899 138.058 148.448 136.987 149.103C134.208 147.916 131.413 146.62 128.646 145.198C130.654 143.681 132.685 142.197 134.736 140.762C149.963 130.106 164.017 124.065 177.593 122.351C177.566 122.251 177.538 122.151 177.51 122.052C163.896 123.78 149.813 129.837 134.561 140.509C132.466 141.975 130.394 143.493 128.344 145.041C125.232 143.43 122.156 141.659 119.179 139.704C113.78 136.16 107.359 131.1 101.751 124.375C123.484 121.932 145.61 118.854 163.68 106.751C164.367 106.292 165.127 105.749 165.914 105.135C165.827 105.074 165.738 105.012 165.651 104.95C164.897 105.536 164.169 106.053 163.511 106.495C145.446 118.594 123.278 121.649 101.517 124.092C97.554 119.288 94.013 113.646 91.5529 107.114C87.7196 96.939 87.9223 86.9544 92.1081 79.7183C92.2898 79.4045 92.4815 79.0943 92.6792 78.7891C92.5048 78.8691 92.3316 78.9528 92.1584 79.0365C92.0503 79.2112 91.9447 79.3872 91.8428 79.5645C87.6103 86.8806 87.4003 96.9611 91.2655 107.223C93.7134 113.719 97.2224 119.339 101.153 124.133C99.8925 124.275 98.6324 124.414 97.3771 124.553C92.8462 125.054 88.1594 125.572 83.61 126.159C81.9495 126.373 80.2607 126.623 78.5793 126.937C74.9769 119.317 71.0196 111.884 65.904 105.508C65.8304 105.581 65.7567 105.652 65.683 105.725C70.7543 112.051 74.687 119.43 78.2685 126.996C70.9385 128.397 63.821 131.031 60.0209 137.16C56.4713 142.885 56.475 150.798 60.0307 160.679C60.1535 161.021 60.28 161.357 60.409 161.692H60.7382C60.5969 161.326 60.4569 160.956 60.3206 160.574C56.798 150.785 56.7858 142.962 60.2825 137.321C64.0372 131.264 71.1166 128.666 78.4061 127.283C79.6785 129.978 80.9067 132.697 82.1276 135.399L82.2602 135.693C86.5013 145.074 90.8872 154.127 96.6291 161.693H97.0123C91.2176 154.114 86.8071 145.007 82.539 135.566L82.4064 135.272C81.1954 132.594 79.977 129.898 78.7168 127.225C80.3651 126.92 82.0219 126.675 83.6506 126.465C88.1974 125.878 92.8818 125.36 97.4127 124.859C98.7355 124.713 100.062 124.566 101.388 124.417C107.051 131.246 113.554 136.376 119.015 139.962C121.959 141.895 125 143.649 128.076 145.247C122.853 149.206 117.773 153.371 112.812 157.438C111.094 158.846 109.357 160.269 107.606 161.692H108.092C109.744 160.349 111.384 159.006 113.006 157.677C118.001 153.582 123.118 149.386 128.379 145.404C131.131 146.823 133.909 148.117 136.674 149.302C132.892 151.712 129.809 155.445 127.946 159.977C127.713 160.545 127.509 161.118 127.321 161.693H127.644C127.822 161.158 128.013 160.624 128.23 160.094C130.098 155.55 133.207 151.821 137.018 149.449C144.746 152.739 152.34 155.181 158.867 157.116L159.112 157.188C161.862 158.003 164.675 158.839 167.163 160.179C167.233 160.099 167.303 160.02 167.372 159.94C164.843 158.566 161.99 157.719 159.199 156.893L158.954 156.82C152.495 154.905 144.987 152.493 137.342 149.252C138.338 148.657 139.381 148.156 140.459 147.755C148.426 144.796 157.26 146.683 165.054 148.347H165.049Z" fill="white" />
                                    <path id="Vector_4" d="M13.863 128.415C15.2189 133.978 14.6146 139.986 12.2024 144.898C10.6229 148.116 8.34214 151.029 5.5332 153.53C5.58847 153.617 5.6462 153.704 5.7027 153.79C8.55708 151.255 10.8747 148.3 12.4775 145.034C14.9205 140.057 15.5334 133.973 14.1602 128.341C13.088 123.941 10.9312 120.214 7.95034 117.517C7.88401 117.596 7.81769 117.675 7.75259 117.753C10.6831 120.408 12.8043 124.08 13.8617 128.415H13.863Z" fill="white" />
                                </g>
                            </g>
                            <path id="Vector_5" d="M83.3587 57.9425C86.0338 60.6811 87.2325 65.2968 85.7574 69.5505C84.329 73.6701 81.1983 77.082 77.4375 79.2766C74.4112 81.0416 70.4637 82.0152 67.4877 80.1665C65.2634 78.7855 64.1101 76.0752 64.0462 73.4547C63.9824 70.8331 64.8618 68.2791 65.9487 65.8937C67.4816 62.5323 69.5437 59.2718 72.6167 57.2274C76.8516 54.4088 80.7868 55.3098 83.3587 57.9425Z" fill="#F7F0E3" />
                        </g>
                        <g id="Group_5">
                            <path id="Vector_6" d="M47.9016 9.9156H25.752V0H47.9016V9.9156ZM26.2125 9.45404H47.4411V0.461563H26.2125V9.45404Z" fill="#E9DDCA" />
                            <path id="Vector_7" d="M33.4915 19.3993H11.3418V9.48242H33.4915V19.398V19.3993ZM11.8024 18.9377H33.0309V9.94398H11.8024V18.9365V18.9377Z" fill="#E9DDCA" />
                        </g>
                        <g id="Group_6">
                            <g id="Group_7">
                                <path id="Vector_8" d="M173.927 29.9646C172.492 25.1853 169.97 20.7973 166.359 16.7861C162.74 12.7748 157.805 9.46259 151.554 6.84338C145.302 4.22416 137.359 2.91455 127.725 2.91455C120.039 2.91455 112.207 3.95338 104.227 6.03102C96.2397 8.11606 89.3113 11.0811 83.4355 14.9349L91.0849 35.9797L86.9851 39.3079L92.9309 41.0594C98.7993 37.981 104.147 35.7458 108.971 34.3538C113.788 32.9691 118.908 32.2761 124.335 32.2761C129.763 32.2761 133.86 33.5857 136.647 36.2049C139.434 38.8315 140.824 41.9849 140.824 45.6885C140.824 50.1589 139.389 54.1259 136.536 57.5956C133.668 61.0653 130.506 64.572 127.041 68.1168C124.636 70.5785 122.298 73.1214 120.039 75.7406C117.781 78.3672 115.781 81.1747 114.053 84.1853C112.317 87.1886 110.927 90.4244 109.875 93.8942C108.817 97.3639 108.295 101.255 108.295 105.567C108.295 106.959 108.324 108.615 108.405 110.542C108.419 110.898 108.437 111.244 108.458 111.586H102.838L108.971 115.743H138.795C138.64 114.817 138.567 113.74 138.567 112.507V109.73C138.567 107.111 139.096 104.53 140.147 101.986C141.199 99.4415 142.523 97.018 144.105 94.7004C145.685 92.3901 147.451 90.1918 149.414 88.1154C151.371 86.0304 153.254 84.066 155.063 82.2148C157.468 79.7531 159.954 77.1351 162.513 74.3571C165.073 71.5804 167.338 68.6596 169.294 65.5739C171.251 62.4882 172.868 59.1391 174.148 55.5118C175.428 51.8919 176.075 47.9249 176.075 43.6047C176.075 39.2845 175.354 34.7464 173.927 29.9671V29.9646Z" fill="#E49B31" />
                                <path id="Vector_9" d="M118.021 30.8076C112.657 30.8076 107.598 31.4772 102.838 32.8176C98.0698 34.1653 92.786 36.3279 86.9851 39.3078L77.6016 14.0252C83.4086 10.2958 90.2559 7.42546 98.1496 5.40812C106.036 3.39817 113.776 2.39258 121.372 2.39258C130.893 2.39258 138.743 3.66034 144.921 6.19463C151.099 8.72891 155.977 11.934 159.553 15.8161C163.122 19.6981 165.614 23.9445 167.032 28.57C168.442 33.1954 169.154 37.5944 169.154 41.7682C169.154 45.942 168.514 49.7883 167.25 53.2913C165.985 56.8016 164.386 60.0436 162.453 63.0296C160.52 66.0156 158.281 68.8416 155.752 71.5298C153.223 74.2179 150.765 76.7522 148.389 79.1339C146.6 80.926 144.74 82.8264 142.806 84.845C140.866 86.8549 139.122 88.9818 137.558 91.2182C135.996 93.462 134.687 95.8068 133.648 98.2684C132.609 100.73 132.085 103.229 132.085 105.763V108.451C132.085 109.646 132.158 110.688 132.31 111.584H102.837C102.531 110.091 102.35 108.415 102.276 106.551C102.197 104.686 102.167 103.083 102.167 101.736C102.167 97.5619 102.683 93.7968 103.729 90.4379C104.769 87.0801 106.143 83.9477 107.857 81.0417C109.566 78.1283 111.542 75.4118 113.774 72.8689C116.005 70.3346 118.317 67.8717 120.694 65.4901C124.117 62.0597 127.242 58.6651 130.077 55.3074C132.897 51.9497 134.315 48.1107 134.315 43.7843C134.315 40.2001 132.941 37.1489 130.186 34.6072C127.432 32.0729 123.376 30.8052 118.02 30.8052L118.021 30.8076Z" fill="#FBC343" />
                            </g>
                            <g id="Group_8">
                                <path id="Vector_10" d="M140.836 144.752C140.836 150.141 139.095 154.298 135.613 157.232C132.132 160.171 128.197 161.634 123.804 161.634C119.411 161.634 115.47 160.171 111.99 157.232C108.514 154.298 106.773 150.141 106.773 144.752C106.773 139.364 108.514 135.212 111.99 132.273C117.348 127.741 125.277 126.731 131.55 129.912C137.118 132.734 140.836 138.466 140.836 144.752Z" fill="#E49B31" />
                                <path id="Vector_11" d="M135.002 144.752C135.002 150.141 133.261 154.299 129.779 157.232C126.298 160.171 122.363 161.634 117.97 161.634C113.577 161.634 109.636 160.171 106.156 157.232C102.68 154.299 100.939 150.141 100.939 144.752C100.939 139.364 102.68 135.212 106.156 132.273C109.636 129.34 113.572 127.87 117.97 127.87C122.368 127.87 126.297 129.34 129.779 132.273C133.26 135.212 135.002 139.37 135.002 144.752Z" fill="#FBC343" />
                            </g>
                        </g>
                        <g id="Group_9">
                            <g id="Group_10">
                                <path id="Vector_12" d="M46.7141 68.37C47.041 66.6229 45.8926 64.9409 44.1492 64.6133C42.4058 64.2857 40.7274 65.4365 40.4005 67.1837C40.0736 68.9308 41.2219 70.6127 42.9654 70.9403C44.7088 71.2679 46.3872 70.1172 46.7141 68.37Z" fill="#D3DFFF" />
                                <path id="Vector_13" d="M48.2444 74.4044C48.4281 73.4215 47.7766 72.4745 46.7891 72.2891C45.8017 72.1038 44.8523 72.7502 44.6686 73.7331C44.4849 74.7159 45.1364 75.663 46.1238 75.8483C47.1113 76.0337 48.0607 75.3872 48.2444 74.4044Z" fill="#D3DFFF" />
                                <g id="Group_11">
                                    <path id="Vector_14" d="M44.5737 60.5264C49.5122 55.5774 49.5122 47.5535 44.5737 42.6045C39.6352 37.6555 31.6284 37.6555 26.6899 42.6045C21.7515 47.5535 21.7515 55.5774 26.6899 60.5264C31.6284 65.4754 39.6352 65.4753 44.5737 60.5264Z" fill="#D3DFFF" />
                                    <g id="Group_12">
                                        <path id="Vector_15" d="M30.7766 53.162C31.6564 53.162 32.3696 52.4473 32.3696 51.5656C32.3696 50.684 31.6564 49.9692 30.7766 49.9692C29.8968 49.9692 29.1836 50.684 29.1836 51.5656C29.1836 52.4473 29.8968 53.162 30.7766 53.162Z" fill="white" />
                                        <path id="Vector_16" d="M35.6321 53.162C36.5118 53.162 37.2251 52.4473 37.2251 51.5656C37.2251 50.684 36.5118 49.9692 35.6321 49.9692C34.7523 49.9692 34.0391 50.684 34.0391 51.5656C34.0391 52.4473 34.7523 53.162 35.6321 53.162Z" fill="white" />
                                        <path id="Vector_17" d="M40.4875 53.162C41.3673 53.162 42.0805 52.4473 42.0805 51.5656C42.0805 50.684 41.3673 49.9692 40.4875 49.9692C39.6077 49.9692 38.8945 50.684 38.8945 51.5656C38.8945 52.4473 39.6077 53.162 40.4875 53.162Z" fill="white" />
                                    </g>
                                </g>
                            </g>
                            <g id="Group_13">
                                <g id="Group_14">
                                    <g id="Group_15">
                                        <path id="Vector_18" d="M26.5692 155.29L27.7507 159.855C28.059 161.045 29.2074 161.85 30.4786 161.763C34.3524 161.5 42.4021 160.548 47.0227 157.135L45.7097 150.556C39.3574 150.197 33.4177 150.551 28.2727 152.286C26.9843 152.72 26.24 154.014 26.5704 155.289L26.5692 155.29Z" fill="#102048" />
                                        <path id="Vector_19" d="M33.9726 158.923C33.905 158.923 33.8436 158.879 33.8252 158.811L32.2383 153.119C32.215 153.038 32.2629 152.953 32.3452 152.929C32.4275 152.907 32.5122 152.954 32.5343 153.036L34.1212 158.729C34.1445 158.811 34.0966 158.895 34.0143 158.919C34.0008 158.922 33.9861 158.925 33.9726 158.925V158.923Z" fill="white" />
                                        <path id="Vector_20" d="M37.4023 158.154C37.3347 158.154 37.2733 158.11 37.2549 158.042L35.668 152.35C35.6447 152.269 35.6926 152.184 35.7749 152.16C35.8572 152.137 35.9419 152.185 35.964 152.267L37.5509 157.96C37.5742 158.042 37.5263 158.126 37.444 158.149C37.4305 158.153 37.4158 158.156 37.4023 158.156V158.154Z" fill="white" />
                                    </g>
                                    <path id="Vector_21" d="M41.3843 130.614L26.6211 135.005L37.5854 150.06L53.3262 151.315L75.0362 142.114L66.7863 129.673L41.3843 130.614Z" fill="#FBC343" />
                                    <path id="Vector_22" d="M59.5858 132.706C92.0083 123.088 97.2184 151.803 46.6318 157.031C44.8448 155.016 42.7568 151.52 41.9277 148.597L68.6415 136.226L59.5858 132.706Z" fill="#FBC343" />
                                    <path id="Vector_23" d="M60.9631 153.285C59.4463 152.799 57.9933 151.838 57.9933 151.838L52.7832 153.476L53.977 159.156L59.3898 160.258C61.0393 157.235 61.1351 154.754 60.9631 153.285Z" fill="#F9B384" />
                                    <path id="Vector_24" d="M42.0434 148.796L41.8125 148.398C47.3862 145.152 61.6605 137.355 73.8235 135.054L73.9095 135.508C61.8177 137.795 47.5974 145.563 42.0446 148.796H42.0434Z" fill="#E49B31" />
                                    <path id="Vector_25" d="M41.3847 130.615C11.2062 124.864 3.3898 153.929 53.9776 159.156C55.7647 157.142 57.1649 154.761 57.9939 151.838C50.223 146.628 41.5346 141.675 32.0134 136.957L41.3859 130.615H41.3847Z" fill="#FBC343" />
                                    <path id="Vector_26" d="M57.8692 152.032C56.4334 151.117 54.9374 150.149 53.3542 149.124C45.404 143.98 36.3938 138.15 28.7383 134.825L28.9213 134.402C36.6112 137.741 45.6386 143.583 53.6035 148.736C55.1867 149.76 56.6815 150.728 58.116 151.643L57.8692 152.032Z" fill="#E49B31" />
                                    <path id="Vector_27" d="M19.2427 145.025L18.8398 144.802C19.9723 142.747 21.7876 141.361 24.2329 140.683L24.3558 141.127C22.0013 141.781 20.3284 143.056 19.2427 145.025Z" fill="#E49B31" />
                                    <path id="Vector_28" d="M82.2303 143.275C81.1445 141.306 79.4717 140.031 77.1172 139.377L77.24 138.933C79.6854 139.611 81.5007 140.998 82.6331 143.052L82.2303 143.275Z" fill="#E49B31" />
                                    <path id="Vector_29" d="M51.151 158.9L50.8145 158.585C53.2291 155.994 54.7116 153.259 55.3478 150.223L55.7986 150.317C55.1451 153.438 53.6246 156.245 51.1522 158.9H51.151Z" fill="#E49B31" />
                                    <g id="Group_16">
                                        <path id="Vector_30" d="M76.0146 151.594C72.1481 149.2 64.6523 153.337 62.7707 153.546C62.2217 153.607 61.5879 153.487 60.964 153.286C61.1359 154.755 61.0401 157.236 59.3906 160.259L60.3106 160.446C60.3106 160.446 66.6666 162.781 73.4095 161.422C79.6329 160.168 79.0544 153.477 76.0146 151.595V151.594Z" fill="#102048" />
                                        <path id="Vector_31" d="M70.7435 159.423C70.7288 159.423 70.7128 159.421 70.6968 159.416C70.6158 159.39 70.5716 159.304 70.5961 159.223C71.0555 157.765 71.2557 154.898 69.9255 152.971C69.8776 152.901 69.8948 152.805 69.9648 152.757C70.0348 152.709 70.1306 152.726 70.1785 152.797C71.5713 154.814 71.3674 157.8 70.8897 159.315C70.8688 159.38 70.8086 159.422 70.7435 159.422V159.423Z" fill="white" />
                                        <path id="Vector_32" d="M67.7123 160C67.6975 160 67.6816 159.998 67.6656 159.993C67.5845 159.967 67.5403 159.881 67.5649 159.8C68.0242 158.343 68.2244 155.475 66.8943 153.548C66.8464 153.478 66.8636 153.382 66.9336 153.334C67.0036 153.286 67.0994 153.303 67.1473 153.374C68.5401 155.391 68.3362 158.377 67.8584 159.892C67.8375 159.957 67.7774 159.999 67.7123 159.999V160Z" fill="white" />
                                    </g>
                                </g>
                                <g id="Group_17">
                                    <g id="Group_18">
                                        <path id="Vector_33" d="M36.0469 93.1408C36.0469 93.1408 43.6471 86.6641 43.3658 85.4333C43.1644 84.5532 41.0113 85.8431 41.0113 85.8431C41.0113 85.8431 44.0303 82.2528 43.8767 81.8171C43.6028 81.038 41.5136 82.4903 41.5136 82.4903C41.5136 82.4903 42.9249 80.4545 42.2506 80.1222C41.5763 79.7899 40.1049 81.0453 40.1049 81.0453C40.1049 81.0453 40.9646 79.9154 40.5606 79.6188C40.1565 79.3222 38.4149 80.5419 38.4149 80.5419C38.4149 80.5419 39.04 79.1166 37.7123 79.657C36.3846 80.1973 27.0723 88.7614 27.0723 88.7614L36.0469 93.1408Z" fill="#F9B384" />
                                        <g id="Group_19">
                                            <path id="Vector_34" d="M39.1574 85.4577C39.1205 85.4577 39.0837 85.4441 39.0542 85.4171C37.7498 84.2232 37.1738 83.9327 35.7356 83.4883C35.6545 83.4637 35.6091 83.3776 35.6336 83.2963C35.6582 83.2151 35.7442 83.1696 35.8252 83.1942C37.3163 83.6533 37.912 83.9536 39.2618 85.1894C39.3244 85.2472 39.3293 85.3445 39.2716 85.4072C39.2409 85.4405 39.2004 85.4577 39.1586 85.4577H39.1574Z" fill="#E28B6D" />
                                            <path id="Vector_35" d="M36.8675 88.972C36.8602 88.972 36.8528 88.972 36.8467 88.9708C36.7631 88.9584 36.7042 88.8809 36.7165 88.7972C36.8663 87.7264 37.2028 87.0568 37.7445 86.7516C38.2087 86.4906 38.8118 86.5165 39.5389 86.8316C39.6163 86.8648 39.6531 86.9559 39.6187 87.0334C39.5856 87.111 39.4947 87.1479 39.4173 87.1134C38.7836 86.839 38.2714 86.807 37.8956 87.0199C37.4485 87.2722 37.1537 87.8839 37.0211 88.8403C37.01 88.9166 36.9449 88.9732 36.8688 88.9732L36.8675 88.972Z" fill="#E28B6D" />
                                            <path id="Vector_36" d="M36.5089 82.4965C36.4684 82.4965 36.4278 82.4805 36.3971 82.4485C36.3394 82.3869 36.3419 82.2897 36.4033 82.2306L38.3107 80.4299C38.3721 80.3708 38.4691 80.3745 38.5281 80.4361C38.5858 80.4976 38.5834 80.5949 38.522 80.6539L36.6145 82.4546C36.5851 82.483 36.547 82.4965 36.5089 82.4965Z" fill="#E28B6D" />
                                            <path id="Vector_37" d="M38.2751 83.112C38.237 83.112 38.199 83.0972 38.1683 83.0689C38.1068 83.0099 38.1056 82.9126 38.1633 82.8511L39.9958 80.9384C40.0548 80.8768 40.1518 80.8744 40.2132 80.9334C40.2747 80.9925 40.2759 81.0898 40.2182 81.1513L38.3857 83.064C38.3549 83.096 38.3156 83.1108 38.2751 83.1108V83.112Z" fill="#E28B6D" />
                                            <path id="Vector_38" d="M40.0786 84.1889C40.0406 84.1889 40.0037 84.1754 39.9742 84.147C39.9128 84.0892 39.9091 83.992 39.9669 83.9292L41.4039 82.3845C41.4616 82.323 41.5586 82.3193 41.6213 82.3771C41.6827 82.435 41.6864 82.5322 41.6286 82.595L40.1916 84.1397C40.1609 84.1717 40.1204 84.1889 40.0786 84.1889Z" fill="#E28B6D" />
                                        </g>
                                    </g>
                                    <g id="Group_20">
                                        <path id="Vector_39" d="M64.7574 136.46L36.969 137.537L33.8984 112.151C33.8984 112.151 43.201 103.309 46.78 100.052L52.8228 99.7417C71.5691 108.281 68.4998 118.946 64.7574 136.46Z" fill="#3A6BEA" />
                                        <path id="Vector_40" d="M52.8223 99.7417C52.8223 99.7417 74.2694 101.579 81.0307 116.305C87.6472 130.714 60.4581 135.845 60.4581 135.845L52.8223 99.7417Z" fill="#3A6BEA" />
                                        <path id="Vector_41" d="M28.3062 102.897L37.169 92.0895L28.881 87.0566C25.4236 89.4654 18.7384 94.9217 13.0726 101.1C11.8223 102.464 10.8446 104.057 10.3533 105.811C9.93329 107.308 9.85714 108.786 10.093 110.233C10.7083 114.007 13.6695 116.918 17.6232 117.382C20.9995 117.778 33.897 116.767 44.3369 113.689L47.4074 101.813C45.8292 100.916 34.1034 100.76 28.3062 102.897Z" fill="#3A6BEA" />
                                    </g>
                                    <g id="Group_21" opacity="0.8">
                                        <path id="Vector_42" d="M70.7194 105.585C70.7661 105.574 70.8116 105.565 70.8582 105.553C70.7612 105.496 70.6642 105.44 70.5671 105.384C68.995 105.747 67.3738 106.117 65.7746 106.31C64.8142 106.426 61.6036 106.639 60.6665 104.496C60.1998 103.43 60.5535 102.244 61.0804 101.412C61.003 101.39 60.9269 101.367 60.8507 101.345C60.3103 102.226 59.9627 103.463 60.4552 104.588C61.4562 106.878 64.8019 106.661 65.8029 106.539C67.4475 106.341 69.1117 105.957 70.7194 105.585Z" fill="white" />
                                        <path id="Vector_43" d="M80.73 122.193C79.7057 121.797 78.647 121.386 77.5342 121.491C75.5826 121.676 73.9122 123.611 73.8103 125.803C73.7415 127.299 74.3114 128.865 75.3971 130.243C75.4622 130.202 75.5273 130.16 75.5924 130.12C74.53 128.78 73.9724 127.26 74.0399 125.814C74.1357 123.732 75.7128 121.895 77.5551 121.722C78.6126 121.623 79.6013 122.005 80.6465 122.408C81.0199 122.552 81.3994 122.699 81.7851 122.822C81.8047 122.748 81.8244 122.673 81.8416 122.598C81.4657 122.477 81.0948 122.335 80.7288 122.193H80.73Z" fill="white" />
                                        <path id="Vector_44" d="M26.595 114.854C25.2562 113.744 23.1756 113.447 20.8875 114.04C18.8486 114.568 17.0996 115.616 15.8984 117C15.977 117.026 16.0544 117.055 16.1343 117.078C17.3035 115.763 18.9874 114.77 20.9452 114.263C23.1597 113.688 25.1666 113.969 26.4476 115.031C27.0568 115.536 27.4879 116.192 27.8011 116.898C27.8797 116.89 27.9595 116.88 28.0394 116.871C27.7114 116.111 27.2545 115.4 26.595 114.853V114.854Z" fill="white" />
                                        <path id="Vector_45" d="M14.4902 99.5901C16.9995 98.9648 19.4473 98.0873 21.706 96.7838C22.5596 96.2915 23.5225 95.6637 24.2005 94.7418C24.9215 93.7609 25.161 92.5928 24.8417 91.618C24.7164 91.2352 24.4941 90.8992 24.2165 90.6309C24.1575 90.6789 24.0986 90.7281 24.0396 90.7761C24.2988 91.0235 24.5063 91.3349 24.623 91.6906C24.919 92.5953 24.693 93.6846 24.0163 94.6052C23.3641 95.4927 22.4245 96.1044 21.5918 96.5844C19.4621 97.814 17.1579 98.6645 14.7911 99.2787C14.6904 99.3821 14.5909 99.4867 14.4915 99.5901H14.4902Z" fill="white" />
                                    </g>
                                    <g id="Group_22">
                                        <path id="Vector_46" d="M54.7862 94.0982L54.7825 94.492L54.7199 100.613L54.7125 101.276C54.7015 102.314 54.2765 103.254 53.5912 103.937C52.9095 104.616 51.9711 105.042 50.9321 105.049C48.838 105.06 47.1246 103.375 47.1049 101.273L47.0312 93.708L54.7862 94.0982Z" fill="#F9B384" />
                                        <path id="Vector_47" d="M54.7829 94.4922L54.7202 100.613C51.3254 99.2284 49.9277 95.5458 49.9277 95.5458L54.7817 94.4922H54.7829Z" fill="#102048" />
                                        <path id="Vector_48" d="M56.1247 83.8111C57.3406 85.2745 60.8938 93.5642 57.2927 96.3927C53.2408 99.5756 47.0739 94.3445 47.0739 94.3445L46.2461 84.6886L51.5987 83.2744L56.1247 83.8111Z" fill="#F9B384" />
                                        <path id="Vector_49" d="M43.5192 83.2793C43.5192 83.2793 31.646 89.4852 41.3268 107.373C42.5698 109.671 45.3247 110.673 47.6804 109.553C50.2081 108.35 51.1649 105.256 49.7917 102.813C48.2085 99.994 46.6794 96.3631 47.3328 93.6626L43.5192 83.2805V83.2793Z" fill="#102048" />
                                        <path id="Vector_50" d="M46.9109 88.4917C48.1652 87.2348 48.1652 85.1969 46.9109 83.9399C45.6566 82.6829 43.623 82.6829 42.3687 83.9399C41.1145 85.1969 41.1144 87.2348 42.3687 88.4917C43.623 89.7487 45.6566 89.7487 46.9109 88.4917Z" fill="#FBC343" />
                                        <path id="Vector_51" d="M48.5927 90.0832C48.2451 88.0757 48.0338 86.6984 50.0592 85.6633C50.0592 85.6633 57.1963 86.9643 58.5584 84.2651C59.9205 81.5671 57.8448 77.3084 53.4982 80.2661C42.3705 78.0875 40.8782 88.5238 44.2522 92.0021L47.5819 91.4901C48.2525 91.3867 48.7081 90.7516 48.5927 90.082V90.0832Z" fill="#102048" />
                                        <g id="Group_23">
                                            <path id="Vector_52" d="M54.1167 90.5645C54.3785 90.5645 54.5908 90.3517 54.5908 90.0894C54.5908 89.827 54.3785 89.6143 54.1167 89.6143C53.8548 89.6143 53.6426 89.827 53.6426 90.0894C53.6426 90.3517 53.8548 90.5645 54.1167 90.5645Z" fill="#102048" />
                                            <path id="Vector_53" d="M57.3296 88.979C57.5914 88.979 57.8037 88.7663 57.8037 88.5039C57.8037 88.2415 57.5914 88.0288 57.3296 88.0288C57.0677 88.0288 56.8555 88.2415 56.8555 88.5039C56.8555 88.7663 57.0677 88.979 57.3296 88.979Z" fill="#102048" />
                                            <path id="Vector_54" d="M57.0003 91.5527C56.9671 91.5527 56.9339 91.5404 56.9081 91.5158C56.8541 91.4641 56.8516 91.3791 56.9032 91.325C57.0936 91.1243 57.3024 90.8425 57.214 90.6369C57.1231 90.424 56.7386 90.3329 56.5618 90.3329C56.1835 90.3329 56.0017 89.6584 55.9686 89.523C55.9514 89.4504 55.9956 89.3778 56.068 89.3606C56.1405 89.3421 56.213 89.3876 56.2302 89.4603C56.2989 89.7458 56.4562 90.0646 56.5618 90.0646C56.7436 90.0646 57.2975 90.1507 57.4608 90.5323C57.5775 90.8043 57.4559 91.1342 57.0973 91.5121C57.0715 91.5404 57.0359 91.5539 57.0003 91.5539V91.5527Z" fill="#102048" />
                                            <path id="Vector_55" d="M57.0253 93.3558C56.9995 93.3558 56.9737 93.3484 56.9504 93.3324C56.0575 92.7281 55.1548 93.2352 55.1462 93.2401C55.0823 93.277 55 93.2549 54.9631 93.1908C54.9263 93.1268 54.9484 93.0444 55.0123 93.0075C55.0553 92.9828 56.0698 92.413 57.1015 93.1096C57.1629 93.1515 57.1789 93.2352 57.1371 93.2967C57.1113 93.3349 57.0683 93.3558 57.0253 93.3558Z" fill="#102048" />
                                            <path id="Vector_56" d="M53.9097 88.0288C54.1799 88.5384 53.7095 88.6405 53.1581 88.9335C52.6066 89.2264 52.0428 89.3347 51.9139 89.091C51.7849 88.8485 52.1276 88.414 52.6791 88.1199C53.2305 87.8257 53.7009 87.6337 53.9097 88.0276V88.0288Z" fill="#102048" />
                                            <path id="Vector_57" d="M55.9191 87.1106C56.0383 87.5648 56.376 87.3666 56.8673 87.2374C57.3586 87.1081 57.7565 86.8607 57.7 86.6441C57.6435 86.4275 57.1989 86.3561 56.7064 86.4853C56.2139 86.6146 55.8258 86.7598 55.9179 87.1118L55.9191 87.1106Z" fill="#102048" />
                                        </g>
                                        <path id="Vector_58" opacity="0.4" d="M52.8784 93.3301C53.4463 92.8051 53.482 91.9182 52.9582 91.3491C52.4343 90.78 51.5493 90.7442 50.9814 91.2692C50.4135 91.7942 50.3778 92.6811 50.9017 93.2502C51.4255 93.8193 52.3105 93.8551 52.8784 93.3301Z" fill="#EB5D60" />
                                        <path id="Vector_59" d="M48.3188 93.636C48.9583 92.8056 48.7136 91.5423 47.7722 90.8142C46.8308 90.0862 45.5493 90.1691 44.9098 90.9994C44.2704 91.8298 44.5151 93.0931 45.4564 93.8212C46.3978 94.5493 47.6793 94.4663 48.3188 93.636Z" fill="#F9B384" />
                                        <path id="Vector_60" d="M47.4463 93.0163C47.3726 93.0163 47.3124 92.956 47.3124 92.8821C47.3124 92.4846 47.1196 92.1178 46.7954 91.8987C46.519 91.7116 46.1886 91.6685 45.9123 91.7805C45.8435 91.8076 45.7649 91.7756 45.7366 91.7067C45.7084 91.6377 45.7416 91.559 45.8103 91.5307C46.169 91.3842 46.5927 91.4371 46.944 91.6747C47.3419 91.943 47.5802 92.3935 47.5802 92.8809C47.5802 92.9547 47.52 93.015 47.4463 93.015V93.0163Z" fill="#102048" />
                                    </g>
                                    <g id="Group_24">
                                        <path id="Vector_61" d="M28.1949 102.789L23.3477 108.044L23.5731 108.253L28.4204 102.998L28.1949 102.789Z" fill="#102048" />
                                        <path id="Vector_62" d="M62.3455 125.376L62.2559 125.082C65.7845 124.003 69.21 122.715 72.3137 118.825L72.5532 119.017C69.3943 122.976 65.9221 124.284 62.3455 125.377V125.376Z" fill="#102048" />
                                    </g>
                                </g>
                                <g id="Group_25">
                                    <path id="Vector_63" d="M64.491 113.46H34.4709C33.3913 113.46 32.5156 114.409 32.5156 115.58V137.059C32.5156 138.23 33.3913 139.179 34.4709 139.179H64.491C65.5707 139.179 66.4464 138.23 66.4464 137.059V115.58C66.4464 114.409 65.5707 113.46 64.491 113.46Z" fill="#D3DFFF" />
                                    <path id="Vector_64" d="M51.0666 124.962C51.1809 124.962 51.273 125.061 51.273 125.186V127.453C51.273 127.576 51.1809 127.677 51.0666 127.677H47.8966C47.7824 127.677 47.6903 127.577 47.6903 127.453V125.186C47.6903 125.063 47.7824 124.962 47.8966 124.962H51.0666ZM51.0666 124.346H47.8966C47.4446 124.346 47.0762 124.723 47.0762 125.186V127.453C47.0762 127.916 47.4446 128.292 47.8966 128.292H51.0666C51.5186 128.292 51.8871 127.916 51.8871 127.453V125.186C51.8871 124.723 51.5186 124.346 51.0666 124.346Z" fill="#1F3C88" />
                                </g>
                            </g>
                        </g>
                        <path id="Vector_65" d="M181 161.385H0V162H181V161.385Z" fill="#102048" />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_213_254">
                    <rect width="181" height="162" fill="white" />
                </clipPath>
            </defs>
        </MySvg>
    )
}

export { ForgetVector }