import "./HeroLogo.css";

const HeroLogo = () => {
  return (
    <div className="logo-container">
      <svg
        className="svg-logo"
        width="164"
        height="149"
        viewBox="0 0 164 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.896397 63.2484C0.142609 63.5998 0 64.3026 0 67.4445C0 70.4624 0.162981 71.2892 0.794534 71.6199C0.977888 71.7026 5.33764 71.8266 10.4716 71.8886L19.8226 71.992L10.2067 81.0663C4.90981 86.0478 0.448199 90.3473 0.285217 90.5953C0.0203727 90.9881 -0.0203727 91.7942 0.0407453 95.1221C0.101863 98.6774 0.142609 99.1942 0.468571 99.5249C0.814907 99.8763 1.75205 99.897 15.9518 99.959C27.116 100 31.1906 99.9383 31.5165 99.773C32.2907 99.3596 32.4333 98.6154 32.3518 95.2668C32.2907 92.3523 32.2703 92.1249 31.8221 91.6908L31.3535 91.2154L12.3866 91.0087L18.8651 84.911C30.4775 73.997 31.8425 72.6948 32.1277 72.1987C32.2907 71.9093 32.3722 70.5864 32.3925 68.0026V64.1992L31.2109 63.0003L16.2574 63.021C6.41739 63.021 1.18161 63.1037 0.896397 63.2484Z"
          fill="#A2562C"
        />
        <path
          d="M49.5464 63.3305C48.9759 63.7439 49.3426 62.7517 45.1866 74.7819C43.292 80.3009 40.725 87.7009 39.5026 91.2562C38.2803 94.7908 37.282 98.0154 37.282 98.4081C37.282 98.9456 37.4246 99.2556 37.8117 99.5657C38.3007 99.9584 38.6266 99.9998 41.5603 99.9998C44.331 99.9998 44.8403 99.9584 45.207 99.6277C45.4718 99.421 46.083 97.9327 46.8368 95.6796C47.5091 93.6953 48.0999 92.0623 48.1203 92.021C48.161 92.0003 51.0947 91.9383 54.6395 91.897L61.0977 91.835L62.4626 95.5556C63.2164 97.602 64.011 99.4417 64.2147 99.6277C64.561 99.9584 65.0703 99.9998 67.678 99.9998C71.4674 99.9998 72.1193 99.7517 72.1193 98.2428C72.1193 97.9741 70.6932 94.0053 68.9411 89.4165C62.9108 73.6037 61.8922 70.9372 60.568 67.4439C59.7123 65.1908 59.0604 63.7646 58.7344 63.4545C58.2659 63.0204 58.1029 62.9998 54.1302 62.9998C50.6669 62.9998 49.9334 63.0618 49.5464 63.3305ZM55.7193 77.469C56.2897 78.9986 57.0028 80.9417 57.3083 81.7478L57.8584 83.2567H51.1151L51.2373 82.7813C51.3188 82.5333 51.9911 80.5696 52.7041 78.4405C53.7024 75.526 54.1302 74.5752 54.3543 74.6165C54.5377 74.6579 55.0674 75.7741 55.7193 77.469Z"
          fill="#A2562C"
        />
        <path
          d="M78.231 63.1445C78.068 63.2065 77.7624 63.3925 77.5791 63.5785C77.2327 63.8679 77.2124 64.9841 77.2124 81.5204V99.1523L77.7421 99.5657C78.231 99.9584 78.557 99.9998 81.4906 99.9998C84.3428 99.9998 84.7503 99.9584 85.1781 99.607L85.667 99.2143L85.7282 81.8718C85.7689 69.7796 85.7078 64.3847 85.5448 64.0126C85.4429 63.7026 85.0966 63.3718 84.8318 63.2271C84.3224 62.9998 78.8218 62.9171 78.231 63.1445Z"
          fill="#A2562C"
        />
        <path
          d="M92.8179 63.4338L92.2882 63.8472V99.1523L92.8179 99.5657C93.3068 99.9584 93.6328 99.9998 96.3831 99.9998C99.6224 99.9998 100.254 99.8551 100.621 99.0282C100.763 98.6975 100.845 96.4031 100.845 92.2484V85.9439H107.527L110.074 89.9126C111.479 92.1037 113.415 95.1009 114.352 96.5891C116.593 100.103 116.45 100.041 120.749 99.9584C123.886 99.8964 124.07 99.8757 124.538 99.421C125.231 98.7595 125.373 98.0567 124.966 97.2919C124.803 96.9405 123.173 94.4601 121.38 91.7729C115.35 82.6986 114.657 81.6031 114.759 81.3551C114.8 81.2104 117.245 77.5931 120.178 73.335C125.944 64.9221 125.985 64.8394 125.007 63.6819L124.518 63.1031H117.347L116.735 63.7232C116.165 64.302 114.902 66.121 109.605 74.0584L107.466 77.2623H100.845V70.8545C100.845 66.6171 100.763 64.302 100.621 63.9713C100.254 63.1445 99.6224 62.9998 96.3831 62.9998C93.6328 62.9998 93.3068 63.0411 92.8179 63.4338Z"
          fill="#A2562C"
        />
        <path
          d="M137.312 63.1445C136.864 63.3305 132.035 67.7333 131.811 68.1674C131.485 68.7668 131.546 94.6461 131.872 95.0389C132.117 95.3489 135.01 97.9947 136.558 99.3383L137.332 99.9998H158.235L160.985 97.54C162.513 96.1757 163.796 94.8528 163.878 94.5841C164.041 93.964 164.041 69.4489 163.878 68.6221C163.776 68.126 163.185 67.4646 161.494 65.9556C160.251 64.8394 158.968 63.7232 158.622 63.4545L158.01 62.9998L147.824 63.0204C142.201 63.0204 137.475 63.0824 137.312 63.1445ZM155.199 81.3757C155.219 88.1349 155.179 90.8428 155.016 91.0288C154.832 91.2562 153.467 91.3182 147.844 91.3182C141.672 91.3182 140.877 91.2769 140.531 90.9668C140.184 90.6567 140.164 90.078 140.164 81.4998C140.164 74.6372 140.225 72.3221 140.408 72.1361C140.592 71.95 142.446 71.888 147.906 71.9294L155.138 71.9914L155.199 81.3757Z"
          fill="#A2562C"
        />
        <path
          d="M59.5236 47.8799C59.5236 45.1185 61.7621 42.8799 64.5236 42.8799H100.524C103.285 42.8799 105.524 45.1185 105.524 47.8799C105.524 50.6413 103.285 52.8799 100.524 52.8799H64.5236C61.7621 52.8799 59.5236 50.6413 59.5236 47.8799Z"
          fill="#A2562C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H164V36H154.524V52.501H144.524V36H19.5236V52.501H9.52356V36H0V0ZM10 10H154V26H10V10Z"
          fill="#A2562C"
        />
        <path
          d="M19.5236 110.769H9.52356V148.12H154.524V110.769H144.524V138.12H19.5236V110.769Z"
          fill="#A2562C"
        />
      </svg>
    </div>
  );
};

export default HeroLogo;
