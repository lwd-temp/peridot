/*
 * Copyright (c) All respective contributors to the Peridot Project. All rights reserved.
 * Copyright (c) 2021-2022 Rocky Enterprise Software Foundation, Inc. All rights reserved.
 * Copyright (c) 2021-2022 Ctrl IQ, Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React from 'react';
import classnames from 'classnames';

export interface RESFLogoProps {
  className?: string;
}

export const RESFLogo = (props: RESFLogoProps) => {
  return (
    <svg
      width="1224"
      height="256"
      viewBox="0 0 1224 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames('h-8 w-auto sm:h-10', props.className)}
    >
      <path
        d="M275.048 110V42.8H307.88C311.272 42.8 314.376 43.312 317.192 44.336C320.072 45.36 322.536 46.8 324.584 48.656C326.632 50.448 328.232 52.624 329.384 55.184C330.536 57.744 331.112 60.56 331.112 63.632C331.112 67.856 329.896 71.632 327.464 74.96C325.096 78.288 321.928 80.752 317.96 82.352L332.84 110H317.288L304.136 84.272H288.968V110H275.048ZM306.632 54.8H288.968V72.848H306.632C309.768 72.848 312.264 72.016 314.12 70.352C316.04 68.688 317 66.512 317 63.824C317 61.136 316.04 58.96 314.12 57.296C312.264 55.632 309.768 54.8 306.632 54.8ZM334.13 85.04C334.13 81.392 334.802 78 336.146 74.864C337.554 71.664 339.442 68.912 341.81 66.608C344.242 64.24 347.09 62.384 350.354 61.04C353.618 59.696 357.106 59.024 360.818 59.024C364.53 59.024 368.018 59.696 371.282 61.04C374.546 62.384 377.362 64.24 379.73 66.608C382.162 68.912 384.05 71.664 385.394 74.864C386.802 78 387.506 81.392 387.506 85.04C387.506 88.688 386.802 92.112 385.394 95.312C384.05 98.448 382.162 101.168 379.73 103.472C377.362 105.776 374.546 107.6 371.282 108.944C368.018 110.288 364.53 110.96 360.818 110.96C357.106 110.96 353.618 110.288 350.354 108.944C347.09 107.6 344.242 105.776 341.81 103.472C339.442 101.168 337.554 98.448 336.146 95.312C334.802 92.112 334.13 88.688 334.13 85.04ZM360.818 99.536C364.658 99.536 367.922 98.128 370.61 95.312C373.298 92.496 374.642 89.072 374.642 85.04C374.642 80.944 373.298 77.488 370.61 74.672C367.922 71.856 364.658 70.448 360.818 70.448C356.978 70.448 353.714 71.856 351.026 74.672C348.338 77.488 346.994 80.944 346.994 85.04C346.994 89.072 348.338 92.496 351.026 95.312C353.714 98.128 356.978 99.536 360.818 99.536ZM420.445 99.44C422.685 99.44 424.765 98.992 426.685 98.096C428.669 97.2 430.557 95.792 432.349 93.872L440.221 102.032C437.661 104.848 434.589 107.056 431.005 108.656C427.421 110.192 423.709 110.96 419.869 110.96C416.221 110.96 412.765 110.288 409.501 108.944C406.301 107.6 403.517 105.776 401.149 103.472C398.845 101.168 397.021 98.448 395.677 95.312C394.333 92.112 393.661 88.688 393.661 85.04C393.661 81.392 394.333 78 395.677 74.864C397.021 71.664 398.845 68.912 401.149 66.608C403.517 64.24 406.301 62.384 409.501 61.04C412.765 59.696 416.221 59.024 419.869 59.024C423.837 59.024 427.645 59.824 431.293 61.424C434.941 62.96 438.045 65.136 440.605 67.952L432.541 76.496C430.749 74.512 428.829 73.008 426.781 71.984C424.733 70.96 422.525 70.448 420.157 70.448C416.381 70.448 413.181 71.856 410.557 74.672C407.997 77.488 406.717 80.944 406.717 85.04C406.717 89.136 408.029 92.56 410.653 95.312C413.341 98.064 416.605 99.44 420.445 99.44ZM447.059 110V42.8L460.211 39.92V81.104L481.811 59.984H496.691L473.267 82.928L498.131 110H481.331L460.211 87.152V110H447.059ZM516.095 112.304L516.863 110.48L497.375 59.984H511.871L524.255 94.064L538.463 59.984H552.671L529.631 113.936C527.071 119.952 524.095 124.24 520.703 126.8C517.311 129.36 512.895 130.64 507.455 130.64C506.303 130.64 505.183 130.576 504.095 130.448C503.071 130.384 502.239 130.256 501.599 130.064V118.736C502.239 118.864 502.911 118.96 503.615 119.024C504.319 119.088 505.183 119.12 506.207 119.12C508.575 119.12 510.559 118.544 512.159 117.392C513.823 116.24 515.135 114.544 516.095 112.304ZM577.486 110V42.8H629.134V54.896H591.406V70.256H616.27V81.968H591.406V97.904H629.518V110H577.486ZM638.497 110V59.984H651.649V63.92C653.569 62.32 655.681 61.104 657.984 60.272C660.352 59.44 662.913 59.024 665.665 59.024C671.425 59.024 676.161 60.88 679.873 64.592C683.585 68.304 685.441 73.072 685.441 78.896V110H672.289V80.816C672.289 77.68 671.329 75.152 669.409 73.232C667.553 71.312 665.057 70.352 661.921 70.352C659.745 70.352 657.761 70.8 655.969 71.696C654.241 72.528 652.801 73.744 651.649 75.344V110H638.497ZM700.344 95.888V71.024H690.072V59.984H700.344V47.216L713.496 44.24V59.984H727.704V71.024H713.496V93.2C713.496 95.568 714.008 97.232 715.032 98.192C716.056 99.152 717.848 99.632 720.408 99.632C721.624 99.632 722.776 99.568 723.864 99.44C724.952 99.248 726.136 98.928 727.416 98.48V109.232C726.008 109.68 724.312 110.032 722.328 110.288C720.344 110.608 718.648 110.768 717.24 110.768C711.672 110.768 707.448 109.52 704.568 107.024C701.752 104.464 700.344 100.752 700.344 95.888ZM778.579 103.76C775.507 106.256 772.339 108.08 769.075 109.232C765.875 110.384 762.291 110.96 758.323 110.96C754.547 110.96 750.995 110.288 747.667 108.944C744.403 107.6 741.555 105.776 739.123 103.472C736.755 101.168 734.867 98.448 733.459 95.312C732.115 92.112 731.443 88.688 731.443 85.04C731.443 81.456 732.083 78.096 733.363 74.96C734.707 71.76 736.531 69.008 738.835 66.704C741.139 64.336 743.859 62.48 746.995 61.136C750.195 59.792 753.587 59.12 757.171 59.12C760.691 59.12 763.955 59.824 766.963 61.232C770.035 62.576 772.659 64.432 774.835 66.8C777.075 69.168 778.803 72.016 780.019 75.344C781.299 78.608 781.939 82.16 781.939 86V89.456H744.691C745.587 92.592 747.315 95.12 749.875 97.04C752.435 98.96 755.443 99.92 758.899 99.92C761.075 99.92 763.123 99.568 765.043 98.864C766.963 98.16 768.595 97.168 769.939 95.888L778.579 103.76ZM756.883 69.968C753.875 69.968 751.283 70.896 749.107 72.752C746.931 74.544 745.427 76.976 744.595 80.048H769.075C768.243 77.104 766.707 74.704 764.467 72.848C762.291 70.928 759.763 69.968 756.883 69.968ZM789.997 110V59.984H803.149V65.456C804.749 63.28 806.669 61.648 808.909 60.56C811.213 59.408 813.741 58.832 816.493 58.832C817.773 58.896 818.829 59.024 819.661 59.216C820.557 59.344 821.325 59.6 821.965 59.984V71.504C821.005 71.056 819.949 70.736 818.797 70.544C817.645 70.288 816.461 70.16 815.245 70.16C812.685 70.16 810.317 70.8 808.141 72.08C806.029 73.36 804.365 75.216 803.149 77.648V110H789.997ZM829.09 130.064V59.984H842.05V64.112C844.034 62.512 846.242 61.328 848.674 60.56C851.106 59.728 853.634 59.312 856.258 59.312C859.778 59.312 863.074 59.984 866.146 61.328C869.282 62.672 872.002 64.496 874.306 66.8C876.61 69.104 878.402 71.824 879.682 74.96C881.026 78.096 881.698 81.456 881.698 85.04C881.698 88.624 881.026 91.984 879.682 95.12C878.338 98.256 876.514 100.976 874.21 103.28C871.906 105.584 869.154 107.408 865.954 108.752C862.818 110.032 859.458 110.672 855.874 110.672C853.442 110.672 851.042 110.352 848.674 109.712C846.37 109.008 844.226 108.016 842.242 106.736V130.064H829.09ZM854.146 70.544C851.778 70.544 849.57 70.96 847.522 71.792C845.474 72.56 843.714 73.712 842.242 75.248V94.928C843.65 96.336 845.378 97.456 847.426 98.288C849.538 99.12 851.778 99.536 854.146 99.536C858.242 99.536 861.698 98.16 864.514 95.408C867.33 92.592 868.738 89.136 868.738 85.04C868.738 80.944 867.298 77.52 864.418 74.768C861.602 71.952 858.178 70.544 854.146 70.544ZM889.747 110V59.984H902.899V65.456C904.499 63.28 906.419 61.648 908.659 60.56C910.963 59.408 913.491 58.832 916.243 58.832C917.523 58.896 918.579 59.024 919.411 59.216C920.307 59.344 921.075 59.6 921.715 59.984V71.504C920.755 71.056 919.699 70.736 918.547 70.544C917.395 70.288 916.211 70.16 914.995 70.16C912.435 70.16 910.067 70.8 907.891 72.08C905.779 73.36 904.115 75.216 902.899 77.648V110H889.747ZM935.368 54.032C933.32 54.032 931.56 53.296 930.088 51.824C928.616 50.352 927.88 48.592 927.88 46.544C927.88 44.496 928.616 42.736 930.088 41.264C931.56 39.792 933.32 39.056 935.368 39.056C937.416 39.056 939.176 39.792 940.648 41.264C942.12 42.736 942.856 44.496 942.856 46.544C942.856 48.592 942.12 50.352 940.648 51.824C939.176 53.296 937.416 54.032 935.368 54.032ZM941.992 59.984V110H928.84V59.984H941.992ZM948.054 104.048L954.582 95.312C957.526 97.232 960.31 98.672 962.934 99.632C965.558 100.528 968.182 100.976 970.806 100.976C973.75 100.976 976.086 100.496 977.814 99.536C979.606 98.576 980.502 97.296 980.502 95.696C980.502 94.416 979.99 93.392 978.966 92.624C978.006 91.856 976.438 91.312 974.262 90.992L964.662 89.552C959.734 88.784 955.958 87.184 953.334 84.752C950.774 82.32 949.494 79.088 949.494 75.056C949.494 70.256 951.382 66.416 955.158 63.536C958.934 60.656 963.99 59.216 970.326 59.216C973.974 59.216 977.526 59.76 980.982 60.848C984.438 61.872 987.734 63.408 990.87 65.456L984.534 73.904C981.782 72.304 979.158 71.12 976.662 70.352C974.166 69.52 971.638 69.104 969.078 69.104C966.71 69.104 964.79 69.552 963.318 70.448C961.91 71.344 961.206 72.528 961.206 74C961.206 75.344 961.718 76.4 962.742 77.168C963.83 77.872 965.59 78.384 968.022 78.704L977.622 80.144C982.486 80.848 986.23 82.448 988.854 84.944C991.542 87.44 992.886 90.608 992.886 94.448C992.886 96.816 992.31 99.024 991.158 101.072C990.07 103.056 988.566 104.784 986.646 106.256C984.726 107.728 982.422 108.88 979.734 109.712C977.046 110.544 974.134 110.96 970.998 110.96C966.454 110.96 962.198 110.384 958.23 109.232C954.262 108.016 950.87 106.288 948.054 104.048ZM1044.73 103.76C1041.66 106.256 1038.49 108.08 1035.23 109.232C1032.03 110.384 1028.45 110.96 1024.48 110.96C1020.7 110.96 1017.15 110.288 1013.82 108.944C1010.56 107.6 1007.71 105.776 1005.28 103.472C1002.91 101.168 1001.02 98.448 999.615 95.312C998.271 92.112 997.599 88.688 997.599 85.04C997.599 81.456 998.239 78.096 999.519 74.96C1000.86 71.76 1002.69 69.008 1004.99 66.704C1007.29 64.336 1010.01 62.48 1013.15 61.136C1016.35 59.792 1019.74 59.12 1023.33 59.12C1026.85 59.12 1030.11 59.824 1033.12 61.232C1036.19 62.576 1038.81 64.432 1040.99 66.8C1043.23 69.168 1044.96 72.016 1046.17 75.344C1047.45 78.608 1048.09 82.16 1048.09 86V89.456H1010.85C1011.74 92.592 1013.47 95.12 1016.03 97.04C1018.59 98.96 1021.6 99.92 1025.05 99.92C1027.23 99.92 1029.28 99.568 1031.2 98.864C1033.12 98.16 1034.75 97.168 1036.09 95.888L1044.73 103.76ZM1023.04 69.968C1020.03 69.968 1017.44 70.896 1015.26 72.752C1013.09 74.544 1011.58 76.976 1010.75 80.048H1035.23C1034.4 77.104 1032.86 74.704 1030.62 72.848C1028.45 70.928 1025.92 69.968 1023.04 69.968ZM270.056 198.48L274.952 193.392C278.408 197.04 282.088 199.824 285.992 201.744C289.96 203.6 294.12 204.528 298.472 204.528C303.72 204.528 308.04 203.28 311.432 200.784C314.824 198.288 316.52 195.12 316.52 191.28C316.52 187.824 315.304 185.168 312.872 183.312C310.504 181.456 306.568 180.08 301.064 179.184L291.368 177.648C284.904 176.624 280.136 174.736 277.064 171.984C273.992 169.168 272.456 165.392 272.456 160.656C272.456 155.088 274.632 150.576 278.984 147.12C283.336 143.664 289.032 141.936 296.072 141.936C300.744 141.936 305.384 142.704 309.992 144.24C314.6 145.776 318.792 147.984 322.568 150.864L318.344 156.624C314.696 153.872 310.984 151.792 307.208 150.384C303.432 148.976 299.624 148.272 295.784 148.272C290.984 148.272 287.08 149.392 284.072 151.632C281.128 153.808 279.656 156.624 279.656 160.08C279.656 163.216 280.712 165.616 282.824 167.28C284.936 168.944 288.424 170.16 293.288 170.928L302.888 172.464C310.184 173.68 315.496 175.76 318.824 178.704C322.216 181.648 323.912 185.712 323.912 190.896C323.912 193.84 323.272 196.56 321.992 199.056C320.776 201.488 319.016 203.6 316.712 205.392C314.472 207.12 311.752 208.496 308.552 209.52C305.416 210.48 301.96 210.96 298.184 210.96C292.872 210.96 287.752 209.904 282.824 207.792C277.96 205.616 273.704 202.512 270.056 198.48ZM331.34 185.904C331.34 182.448 331.98 179.184 333.26 176.112C334.54 173.04 336.268 170.384 338.444 168.144C340.684 165.904 343.308 164.144 346.316 162.864C349.324 161.584 352.524 160.944 355.916 160.944C359.308 160.944 362.476 161.584 365.42 162.864C368.428 164.144 371.02 165.904 373.196 168.144C375.436 170.384 377.196 173.04 378.476 176.112C379.756 179.184 380.396 182.448 380.396 185.904C380.396 189.424 379.756 192.72 378.476 195.792C377.196 198.864 375.436 201.52 373.196 203.76C371.02 206 368.428 207.76 365.42 209.04C362.476 210.32 359.308 210.96 355.916 210.96C352.524 210.96 349.324 210.32 346.316 209.04C343.308 207.76 340.684 206 338.444 203.76C336.268 201.52 334.54 198.864 333.26 195.792C331.98 192.72 331.34 189.424 331.34 185.904ZM355.916 204.624C358.348 204.624 360.62 204.144 362.732 203.184C364.908 202.224 366.764 200.912 368.3 199.248C369.9 197.52 371.148 195.536 372.044 193.296C372.94 190.992 373.388 188.528 373.388 185.904C373.388 183.28 372.94 180.848 372.044 178.608C371.148 176.304 369.9 174.32 368.3 172.656C366.764 170.992 364.908 169.68 362.732 168.72C360.62 167.76 358.348 167.28 355.916 167.28C353.484 167.28 351.18 167.76 349.004 168.72C346.892 169.68 345.036 170.992 343.436 172.656C341.9 174.32 340.652 176.304 339.692 178.608C338.796 180.848 338.348 183.28 338.348 185.904C338.348 188.528 338.796 190.992 339.692 193.296C340.588 195.536 341.804 197.52 343.34 199.248C344.94 200.912 346.828 202.224 349.004 203.184C351.18 204.144 353.484 204.624 355.916 204.624ZM382.382 161.904H393.71V152.784C393.71 148.112 394.99 144.528 397.55 142.032C400.11 139.472 403.79 138.192 408.59 138.192C409.87 138.192 411.022 138.256 412.046 138.384C413.07 138.512 414.062 138.736 415.022 139.056V145.392C413.934 145.072 412.942 144.848 412.046 144.72C411.15 144.528 410.158 144.432 409.07 144.432C406.254 144.432 404.142 145.136 402.734 146.544C401.39 147.888 400.718 150.032 400.718 152.976V161.904H415.022V167.952H400.718V210H393.71V167.952H382.382V161.904ZM429.594 199.248V167.952H419.226V161.904H429.594V149.712L436.602 147.888V161.904H451.098V167.952H436.602V197.424C436.602 199.984 437.178 201.84 438.33 202.992C439.482 204.08 441.37 204.624 443.994 204.624C445.338 204.624 446.522 204.528 447.546 204.336C448.634 204.144 449.786 203.824 451.002 203.376V209.616C449.786 210.064 448.41 210.384 446.874 210.576C445.402 210.768 443.962 210.864 442.554 210.864C438.394 210.864 435.194 209.872 432.954 207.888C430.714 205.904 429.594 203.024 429.594 199.248ZM475.386 210H468.474L454.938 161.904H461.946L472.314 200.304L484.314 161.904H490.65L502.554 200.304L513.018 161.904H519.738L506.106 210H499.29L487.386 171.504L475.386 210ZM542.122 210.864C536.874 210.864 532.586 209.52 529.258 206.832C525.994 204.144 524.362 200.656 524.362 196.368C524.362 191.888 526.09 188.336 529.546 185.712C533.002 183.024 537.674 181.68 543.562 181.68C546.122 181.68 548.586 181.968 550.954 182.544C553.386 183.12 555.626 183.92 557.674 184.944V178.608C557.674 174.768 556.586 171.888 554.41 169.968C552.234 167.984 549.066 166.992 544.906 166.992C542.538 166.992 540.138 167.344 537.706 168.048C535.338 168.688 532.714 169.744 529.834 171.216L527.146 165.744C530.602 164.08 533.802 162.864 536.746 162.096C539.69 161.328 542.634 160.944 545.578 160.944C551.658 160.944 556.33 162.384 559.594 165.264C562.922 168.144 564.586 172.272 564.586 177.648V210H557.674V205.296C555.498 207.152 553.098 208.56 550.474 209.52C547.914 210.416 545.13 210.864 542.122 210.864ZM531.178 196.176C531.178 198.864 532.298 201.072 534.538 202.8C536.842 204.464 539.786 205.296 543.37 205.296C546.25 205.296 548.874 204.848 551.242 203.952C553.61 203.056 555.754 201.648 557.674 199.728V190.704C555.69 189.36 553.546 188.4 551.242 187.824C549.002 187.184 546.506 186.864 543.754 186.864C539.914 186.864 536.842 187.728 534.538 189.456C532.298 191.12 531.178 193.36 531.178 196.176ZM576.454 210V161.904H583.558V168.72C584.966 166.224 586.822 164.304 589.126 162.96C591.43 161.552 594.054 160.848 596.998 160.848C597.894 160.848 598.694 160.912 599.398 161.04C600.102 161.104 600.806 161.264 601.51 161.52V168.048C600.678 167.792 599.846 167.6 599.014 167.472C598.182 167.28 597.35 167.184 596.518 167.184C593.574 167.184 590.982 168.048 588.742 169.776C586.502 171.44 584.774 173.872 583.558 177.072V210H576.454ZM646.685 204.912C643.997 206.896 641.181 208.4 638.237 209.424C635.357 210.384 632.189 210.864 628.733 210.864C625.277 210.864 622.013 210.224 618.941 208.944C615.933 207.664 613.309 205.904 611.069 203.664C608.893 201.424 607.165 198.8 605.885 195.792C604.605 192.72 603.965 189.424 603.965 185.904C603.965 182.448 604.573 179.216 605.789 176.208C607.069 173.2 608.765 170.576 610.877 168.336C612.989 166.096 615.485 164.336 618.365 163.056C621.309 161.776 624.413 161.136 627.677 161.136C630.877 161.136 633.853 161.776 636.605 163.056C639.421 164.336 641.821 166.096 643.805 168.336C645.853 170.576 647.453 173.2 648.605 176.208C649.821 179.216 650.429 182.448 650.429 185.904V188.112H610.973C611.485 192.848 613.437 196.784 616.829 199.92C620.221 203.056 624.285 204.624 629.021 204.624C631.517 204.624 633.949 204.24 636.317 203.472C638.685 202.704 640.669 201.616 642.269 200.208L646.685 204.912ZM627.485 167.376C623.325 167.376 619.709 168.784 616.637 171.6C613.629 174.416 611.805 178.032 611.165 182.448H643.325C642.685 178.224 640.861 174.672 637.853 171.792C634.909 168.848 631.453 167.376 627.485 167.376ZM682.33 210V142.8H730.426V149.328H689.722V173.328H716.41V179.76H689.722V210H682.33ZM729.215 185.904C729.215 182.448 729.855 179.184 731.135 176.112C732.415 173.04 734.143 170.384 736.319 168.144C738.559 165.904 741.183 164.144 744.191 162.864C747.199 161.584 750.399 160.944 753.791 160.944C757.183 160.944 760.351 161.584 763.295 162.864C766.303 164.144 768.895 165.904 771.071 168.144C773.311 170.384 775.071 173.04 776.351 176.112C777.631 179.184 778.271 182.448 778.271 185.904C778.271 189.424 777.631 192.72 776.351 195.792C775.071 198.864 773.311 201.52 771.071 203.76C768.895 206 766.303 207.76 763.295 209.04C760.351 210.32 757.183 210.96 753.791 210.96C750.399 210.96 747.199 210.32 744.191 209.04C741.183 207.76 738.559 206 736.319 203.76C734.143 201.52 732.415 198.864 731.135 195.792C729.855 192.72 729.215 189.424 729.215 185.904ZM753.791 204.624C756.223 204.624 758.495 204.144 760.607 203.184C762.783 202.224 764.639 200.912 766.175 199.248C767.775 197.52 769.023 195.536 769.919 193.296C770.815 190.992 771.263 188.528 771.263 185.904C771.263 183.28 770.815 180.848 769.919 178.608C769.023 176.304 767.775 174.32 766.175 172.656C764.639 170.992 762.783 169.68 760.607 168.72C758.495 167.76 756.223 167.28 753.791 167.28C751.359 167.28 749.055 167.76 746.879 168.72C744.767 169.68 742.911 170.992 741.311 172.656C739.775 174.32 738.527 176.304 737.567 178.608C736.671 180.848 736.223 183.28 736.223 185.904C736.223 188.528 736.671 190.992 737.567 193.296C738.463 195.536 739.679 197.52 741.215 199.248C742.815 200.912 744.703 202.224 746.879 203.184C749.055 204.144 751.359 204.624 753.791 204.624ZM794.958 161.904V190.896C794.958 195.12 796.174 198.48 798.606 200.976C801.038 203.472 804.302 204.72 808.398 204.72C811.278 204.72 813.838 204.08 816.078 202.8C818.382 201.456 820.238 199.6 821.646 197.232V161.904H828.75V210H821.646V204.432C819.79 206.608 817.582 208.24 815.022 209.328C812.526 210.416 809.71 210.96 806.574 210.96C801.07 210.96 796.59 209.232 793.134 205.776C789.678 202.32 787.95 197.84 787.95 192.336V161.904H794.958ZM840.829 210V161.904H847.933V167.568C849.789 165.392 851.997 163.76 854.557 162.672C857.117 161.52 859.965 160.944 863.101 160.944C868.541 160.944 872.989 162.672 876.445 166.128C879.901 169.584 881.629 174.064 881.629 179.568V210H874.621V181.008C874.621 176.784 873.405 173.424 870.973 170.928C868.541 168.432 865.277 167.184 861.181 167.184C858.301 167.184 855.709 167.824 853.405 169.104C851.165 170.384 849.341 172.208 847.933 174.576V210H840.829ZM931.053 210V204.912C929.005 206.832 926.637 208.304 923.949 209.328C921.325 210.288 918.509 210.768 915.501 210.768C912.109 210.768 908.941 210.128 905.997 208.848C903.053 207.568 900.493 205.84 898.317 203.664C896.141 201.424 894.413 198.768 893.133 195.696C891.917 192.624 891.309 189.36 891.309 185.904C891.309 182.448 891.917 179.216 893.133 176.208C894.413 173.136 896.141 170.512 898.317 168.336C900.493 166.096 903.053 164.336 905.997 163.056C909.005 161.776 912.205 161.136 915.597 161.136C918.349 161.136 921.037 161.616 923.661 162.576C926.349 163.472 928.781 164.816 930.957 166.608V142.8L938.061 141.168V210H931.053ZM898.317 185.808C898.317 188.432 898.765 190.896 899.661 193.2C900.621 195.504 901.901 197.488 903.501 199.152C905.101 200.816 906.989 202.128 909.165 203.088C911.341 204.048 913.677 204.528 916.173 204.528C919.181 204.528 921.965 203.952 924.525 202.8C927.149 201.584 929.293 199.92 930.957 197.808V174C929.293 171.952 927.149 170.352 924.525 169.2C921.901 167.984 919.117 167.376 916.173 167.376C911.181 167.376 906.957 169.136 903.501 172.656C900.045 176.176 898.317 180.56 898.317 185.808ZM965.31 210.864C960.062 210.864 955.774 209.52 952.446 206.832C949.182 204.144 947.55 200.656 947.55 196.368C947.55 191.888 949.278 188.336 952.734 185.712C956.19 183.024 960.862 181.68 966.75 181.68C969.31 181.68 971.774 181.968 974.142 182.544C976.574 183.12 978.814 183.92 980.862 184.944V178.608C980.862 174.768 979.774 171.888 977.598 169.968C975.422 167.984 972.254 166.992 968.094 166.992C965.726 166.992 963.326 167.344 960.894 168.048C958.526 168.688 955.902 169.744 953.022 171.216L950.334 165.744C953.79 164.08 956.99 162.864 959.934 162.096C962.878 161.328 965.822 160.944 968.766 160.944C974.846 160.944 979.518 162.384 982.782 165.264C986.11 168.144 987.774 172.272 987.774 177.648V210H980.862V205.296C978.686 207.152 976.286 208.56 973.662 209.52C971.102 210.416 968.318 210.864 965.31 210.864ZM954.366 196.176C954.366 198.864 955.486 201.072 957.726 202.8C960.03 204.464 962.974 205.296 966.558 205.296C969.438 205.296 972.062 204.848 974.43 203.952C976.798 203.056 978.942 201.648 980.862 199.728V190.704C978.878 189.36 976.734 188.4 974.43 187.824C972.19 187.184 969.694 186.864 966.942 186.864C963.102 186.864 960.03 187.728 957.726 189.456C955.486 191.12 954.366 193.36 954.366 196.176ZM1003.72 199.248V167.952H993.351V161.904H1003.72V149.712L1010.73 147.888V161.904H1025.22V167.952H1010.73V197.424C1010.73 199.984 1011.3 201.84 1012.45 202.992C1013.61 204.08 1015.49 204.624 1018.12 204.624C1019.46 204.624 1020.65 204.528 1021.67 204.336C1022.76 204.144 1023.91 203.824 1025.13 203.376V209.616C1023.91 210.064 1022.53 210.384 1021 210.576C1019.53 210.768 1018.09 210.864 1016.68 210.864C1012.52 210.864 1009.32 209.872 1007.08 207.888C1004.84 205.904 1003.72 203.024 1003.72 199.248ZM1036.38 152.688C1035.1 152.688 1033.98 152.208 1033.02 151.248C1032.06 150.288 1031.58 149.168 1031.58 147.888C1031.58 146.544 1032.06 145.424 1033.02 144.528C1033.98 143.568 1035.1 143.088 1036.38 143.088C1037.73 143.088 1038.85 143.568 1039.74 144.528C1040.7 145.424 1041.18 146.544 1041.18 147.888C1041.18 149.168 1040.7 150.288 1039.74 151.248C1038.85 152.208 1037.73 152.688 1036.38 152.688ZM1039.93 161.904V210H1032.83V161.904H1039.93ZM1049.84 185.904C1049.84 182.448 1050.48 179.184 1051.76 176.112C1053.04 173.04 1054.77 170.384 1056.94 168.144C1059.18 165.904 1061.81 164.144 1064.82 162.864C1067.82 161.584 1071.02 160.944 1074.42 160.944C1077.81 160.944 1080.98 161.584 1083.92 162.864C1086.93 164.144 1089.52 165.904 1091.7 168.144C1093.94 170.384 1095.7 173.04 1096.98 176.112C1098.26 179.184 1098.9 182.448 1098.9 185.904C1098.9 189.424 1098.26 192.72 1096.98 195.792C1095.7 198.864 1093.94 201.52 1091.7 203.76C1089.52 206 1086.93 207.76 1083.92 209.04C1080.98 210.32 1077.81 210.96 1074.42 210.96C1071.02 210.96 1067.82 210.32 1064.82 209.04C1061.81 207.76 1059.18 206 1056.94 203.76C1054.77 201.52 1053.04 198.864 1051.76 195.792C1050.48 192.72 1049.84 189.424 1049.84 185.904ZM1074.42 204.624C1076.85 204.624 1079.12 204.144 1081.23 203.184C1083.41 202.224 1085.26 200.912 1086.8 199.248C1088.4 197.52 1089.65 195.536 1090.54 193.296C1091.44 190.992 1091.89 188.528 1091.89 185.904C1091.89 183.28 1091.44 180.848 1090.54 178.608C1089.65 176.304 1088.4 174.32 1086.8 172.656C1085.26 170.992 1083.41 169.68 1081.23 168.72C1079.12 167.76 1076.85 167.28 1074.42 167.28C1071.98 167.28 1069.68 167.76 1067.5 168.72C1065.39 169.68 1063.54 170.992 1061.94 172.656C1060.4 174.32 1059.15 176.304 1058.19 178.608C1057.3 180.848 1056.85 183.28 1056.85 185.904C1056.85 188.528 1057.3 190.992 1058.19 193.296C1059.09 195.536 1060.3 197.52 1061.84 199.248C1063.44 200.912 1065.33 202.224 1067.5 203.184C1069.68 204.144 1071.98 204.624 1074.42 204.624ZM1108.77 210V161.904H1115.87V167.568C1117.73 165.392 1119.93 163.76 1122.49 162.672C1125.05 161.52 1127.9 160.944 1131.04 160.944C1136.48 160.944 1140.93 162.672 1144.38 166.128C1147.84 169.584 1149.57 174.064 1149.57 179.568V210H1142.56V181.008C1142.56 176.784 1141.34 173.424 1138.91 170.928C1136.48 168.432 1133.21 167.184 1129.12 167.184C1126.24 167.184 1123.65 167.824 1121.34 169.104C1119.1 170.384 1117.28 172.208 1115.87 174.576V210H1108.77Z"
        fill="white"
      />
      <path
        d="M1159.5 158.968V147.232H1155.61V144.964H1159.5V140.392L1162.13 139.708V144.964H1167.56V147.232H1162.13V158.284C1162.13 159.244 1162.34 159.94 1162.78 160.372C1163.21 160.78 1163.92 160.984 1164.9 160.984C1165.4 160.984 1165.85 160.948 1166.23 160.876C1166.64 160.804 1167.07 160.684 1167.53 160.516V162.856C1167.07 163.024 1166.56 163.144 1165.98 163.216C1165.43 163.288 1164.89 163.324 1164.36 163.324C1162.8 163.324 1161.6 162.952 1160.76 162.208C1159.92 161.464 1159.5 160.384 1159.5 158.968ZM1170.42 163V144.964H1173.08V146.944C1173.75 146.176 1174.53 145.6 1175.42 145.216C1176.31 144.808 1177.29 144.604 1178.37 144.604C1179.62 144.604 1180.74 144.904 1181.72 145.504C1182.73 146.08 1183.51 146.872 1184.06 147.88C1184.8 146.776 1185.69 145.96 1186.72 145.432C1187.78 144.88 1188.96 144.604 1190.25 144.604C1192.2 144.604 1193.78 145.252 1195 146.548C1196.25 147.844 1196.88 149.524 1196.88 151.588V163H1194.25V152.128C1194.25 150.544 1193.83 149.284 1192.99 148.348C1192.15 147.412 1191.01 146.944 1189.57 146.944C1188.58 146.944 1187.68 147.196 1186.87 147.7C1186.05 148.204 1185.36 148.936 1184.78 149.896C1184.83 150.16 1184.86 150.436 1184.89 150.724C1184.94 150.988 1184.96 151.276 1184.96 151.588V163H1182.33V152.128C1182.33 150.544 1181.91 149.284 1181.07 148.348C1180.23 147.412 1179.1 146.944 1177.69 146.944C1176.73 146.944 1175.85 147.172 1175.06 147.628C1174.29 148.06 1173.63 148.708 1173.08 149.572V163H1170.42Z"
        fill="white"
      />
      <path
        d="M46 43H214V147.009L188.011 121.02L168.601 140.43L129.781 101.61L110.371 121.019L71.5511 82.1993L46 107.75V43Z"
        fill="white"
      />
      <path
        d="M188.011 150.135L127.146 211H214V176.124L188.011 150.135Z"
        fill="white"
      />
      <path
        d="M129.781 130.725L154.043 154.988L98.0312 211H49.5058L129.781 130.725Z"
        fill="white"
      />
      <path
        d="M71.5511 111.314L46 136.866V185.391L95.8137 135.577L71.5511 111.314Z"
        fill="white"
      />
    </svg>
  );
};
