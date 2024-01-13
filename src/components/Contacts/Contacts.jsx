import s from "./Contacts.module.scss";

export const Contacts = () => (
  <div className={s.contacts}>
    <a className={`${s.phone} ${s.link}`} href="tel:+7 (939) 839 12 97">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.48578 1.54445L5.59264 1.21074C5.95794 1.10078 6.35076 1.12746 6.69784 1.2858C7.04492 1.44415 7.32254 1.72334 7.47892 2.07131L8.25492 3.79703C8.38961 4.09641 8.42715 4.43046 8.36227 4.75227C8.2974 5.07408 8.13336 5.36749 7.89321 5.59131L6.71206 6.69188C6.55378 6.84217 6.67378 7.42788 7.25206 8.43017C7.83092 9.43303 8.27835 9.8296 8.48464 9.76788L10.0321 9.29474C10.3457 9.1988 10.6816 9.20341 10.9925 9.30794C11.3034 9.41246 11.5738 9.61166 11.7658 9.8776L12.8686 11.4062C13.0914 11.7148 13.1945 12.0939 13.1589 12.4728C13.1233 12.8518 12.9513 13.205 12.6749 13.4667L11.8223 14.2742C11.5471 14.5348 11.2077 14.7178 10.8387 14.8044C10.4696 14.891 10.0842 14.8782 9.72178 14.7673C7.93549 14.2205 6.28121 12.5976 4.73664 9.9216C3.18864 7.2416 2.60406 4.98103 3.01149 3.13417C3.09367 2.76203 3.2736 2.41853 3.53275 2.1391C3.79189 1.85966 4.12088 1.65439 4.48578 1.54445Z"
          fill="currentColor"
        />
      </svg>

      <span>+7 (939) 839 12 97</span>
    </a>

    <ul className={s.list}>
      <li>
        <a className={s.link} href="#" aria-label="ссылка на группу в VK">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99982 0.320068C3.75822 0.320068 0.319824 3.75847 0.319824 8.00007C0.319824 12.2417 3.75822 15.6801 7.99982 15.6801C12.2414 15.6801 15.6798 12.2417 15.6798 8.00007C15.6798 3.75847 12.2414 0.320068 7.99982 0.320068ZM10.9534 8.98487C10.9534 8.98487 11.6326 9.65527 11.7998 9.96647C11.8046 9.97287 11.807 9.97927 11.8086 9.98247C11.8766 10.0969 11.8926 10.1857 11.859 10.2521C11.803 10.3625 11.611 10.4169 11.5454 10.4217H10.3454C10.2622 10.4217 10.0878 10.4001 9.87662 10.2545C9.71422 10.1409 9.55422 9.95447 9.39822 9.77287C9.16542 9.50247 8.96383 9.26887 8.76062 9.26887C8.73482 9.26882 8.70916 9.27287 8.68462 9.28087C8.53102 9.33047 8.33422 9.54967 8.33422 10.1337C8.33422 10.3161 8.19022 10.4209 8.08862 10.4209H7.53902C7.35182 10.4209 6.37662 10.3553 5.51262 9.44407C4.45502 8.32807 3.50302 6.08967 3.49502 6.06887C3.43502 5.92407 3.55902 5.84647 3.69422 5.84647H4.90622C5.06782 5.84647 5.12062 5.94487 5.15742 6.03207C5.20062 6.13367 5.35902 6.53767 5.61902 6.99207C6.04062 7.73287 6.29902 8.03367 6.50622 8.03367C6.54508 8.03321 6.58324 8.02333 6.61742 8.00487C6.88782 7.85447 6.83742 6.89047 6.82542 6.69047C6.82542 6.65287 6.82462 6.25927 6.68622 6.07047C6.58702 5.93367 6.41822 5.88167 6.31582 5.86247C6.35727 5.80528 6.41188 5.7589 6.47502 5.72727C6.66062 5.63447 6.99503 5.62087 7.32702 5.62087H7.51183C7.87182 5.62567 7.96462 5.64887 8.09503 5.68167C8.35903 5.74487 8.36462 5.91527 8.34142 6.49847C8.33422 6.66407 8.32703 6.85127 8.32703 7.07207C8.32703 7.12007 8.32463 7.17127 8.32463 7.22567C8.31662 7.52247 8.30702 7.85927 8.51662 7.99767C8.54396 8.01481 8.57556 8.02396 8.60783 8.02407C8.68062 8.02407 8.89982 8.02407 9.49342 7.00567C9.67649 6.67788 9.83558 6.33725 9.96942 5.98647C9.98142 5.96567 10.0166 5.90167 10.0582 5.87687C10.0889 5.86122 10.123 5.85326 10.1574 5.85367H11.5822C11.7374 5.85367 11.8438 5.87687 11.8638 5.93687C11.899 6.03207 11.8574 6.32247 11.207 7.20327L10.9166 7.58647C10.327 8.35927 10.327 8.39847 10.9534 8.98487Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </li>
      <li>
        <a className={s.link} href="#" aria-label="ссылка на канал YouTube">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.66683 9.99992L10.1268 7.99992L6.66683 5.99992V9.99992ZM14.3735 4.77992C14.4602 5.09325 14.5202 5.51325 14.5602 6.04658C14.6068 6.57992 14.6268 7.03992 14.6268 7.43992L14.6668 7.99992C14.6668 9.45992 14.5602 10.5333 14.3735 11.2199C14.2068 11.8199 13.8202 12.2066 13.2202 12.3733C12.9068 12.4599 12.3335 12.5199 11.4535 12.5599C10.5868 12.6066 9.7935 12.6266 9.06016 12.6266L8.00016 12.6666C5.20683 12.6666 3.46683 12.5599 2.78016 12.3733C2.18016 12.2066 1.7935 11.8199 1.62683 11.2199C1.54016 10.9066 1.48016 10.4866 1.44016 9.95325C1.3935 9.41992 1.3735 8.95992 1.3735 8.55992L1.3335 7.99992C1.3335 6.53992 1.44016 5.46659 1.62683 4.77992C1.7935 4.17992 2.18016 3.79325 2.78016 3.62659C3.0935 3.53992 3.66683 3.47992 4.54683 3.43992C5.4135 3.39325 6.20683 3.37325 6.94016 3.37325L8.00016 3.33325C10.7935 3.33325 12.5335 3.43992 13.2202 3.62659C13.8202 3.79325 14.2068 4.17992 14.3735 4.77992Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </li>
      <li>
        <a className={s.link} href="#" aria-label="ссылка на чат в Telegram">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
);
