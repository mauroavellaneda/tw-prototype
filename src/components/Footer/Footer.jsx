import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <div class="logo">
          <img src={logo} />
          <h4>TravelWiser</h4>
        </div>
        <div class="links">
          <ul>
            <li>Home</li>
            <li>Find your destination</li>
            <li>Plan your trip</li>
            <li>Blog</li>
            <li>Community</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Privay</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="social">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#38559B" />
              <path
                d="M22.6662 7.56366H9.91558C8.61666 7.56366 7.5636 8.61663 7.5636 9.91558V22.6659C7.5636 23.9649 8.6166 25.0179 9.91558 25.0179H16.204L16.2149 18.7809H14.5943C14.3837 18.7809 14.2128 18.6105 14.2121 18.4L14.2042 16.3894C14.2033 16.1777 14.3749 16.0056 14.5865 16.0056H16.2043V14.0629C16.2043 11.8086 17.5812 10.581 19.5922 10.581H21.2426C21.4536 10.581 21.625 10.7522 21.625 10.9634V12.6586C21.625 12.8697 21.4538 13.0409 21.2428 13.0409L20.23 13.0415C19.1363 13.0415 18.9244 13.5611 18.9244 14.324V16.0058H21.3276C21.5568 16.0058 21.7344 16.2058 21.7073 16.433L21.469 18.4436C21.4463 18.6361 21.2831 18.781 21.0893 18.781H18.9352L18.9243 25.0182H22.6662C23.9651 25.0182 25.0181 23.9651 25.0181 22.6662V9.91558C25.0182 8.61669 23.9651 7.56366 22.6662 7.56366Z"
                fill="white"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#02A1F8" />
              <path
                d="M25.0181 11.0128C24.3757 11.3019 23.6864 11.498 22.9622 11.5856C23.7017 11.1358 24.2677 10.4224 24.536 9.57494C23.8424 9.99146 23.0767 10.2939 22.2608 10.4579C21.6075 9.74999 20.6782 9.30908 19.6475 9.30908C17.67 9.30908 16.0667 10.9375 16.0667 12.9448C16.0667 13.2295 16.0983 13.5075 16.1594 13.7734C13.184 13.6216 10.5456 12.1738 8.77971 9.97373C8.47104 10.5099 8.29544 11.1347 8.29544 11.8016C8.29544 13.0633 8.92805 14.1767 9.88788 14.828C9.30107 14.8081 8.74917 14.6441 8.266 14.3716V14.417C8.266 16.1784 9.50069 17.6484 11.1378 17.983C10.8379 18.0649 10.5216 18.1104 10.1944 18.1104C9.96315 18.1104 9.73955 18.0871 9.52031 18.0428C9.97621 19.4884 11.2982 20.5397 12.8644 20.5685C11.6396 21.5434 10.0951 22.1227 8.41762 22.1227C8.12859 22.1227 7.8439 22.105 7.5636 22.0729C9.1484 23.1065 11.0299 23.7091 13.052 23.7091C19.6388 23.7091 23.2392 18.168 23.2392 13.3625L23.2272 12.8917C23.9307 12.382 24.5393 11.7418 25.0181 11.0128Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#F2C94C" />
              <path
                d="M19.8183 7.56366H12.7634C9.89622 7.56366 7.5636 9.89628 7.5636 12.7635V19.8184C7.5636 22.6856 9.89622 25.0182 12.7634 25.0182H19.8183C22.6855 25.0182 25.0181 22.6856 25.0181 19.8184V12.7635C25.0181 9.89628 22.6855 7.56366 19.8183 7.56366ZM23.2622 19.8184C23.2622 21.7204 21.7203 23.2623 19.8183 23.2623H12.7634C10.8614 23.2623 9.31953 21.7204 9.31953 19.8184V12.7635C9.31953 10.8614 10.8614 9.31959 12.7634 9.31959H19.8183C21.7203 9.31959 23.2622 10.8614 23.2622 12.7635V19.8184Z"
                fill="white"
              />
              <path
                d="M16.291 11.7766C13.8018 11.7766 11.7766 13.8017 11.7766 16.2909C11.7766 18.7801 13.8018 20.8053 16.291 20.8053C18.7802 20.8053 20.8053 18.7801 20.8053 16.2909C20.8053 13.8017 18.7802 11.7766 16.291 11.7766ZM16.291 19.0494C14.7675 19.0494 13.5325 17.8144 13.5325 16.2909C13.5325 14.7675 14.7676 13.5325 16.291 13.5325C17.8144 13.5325 19.0494 14.7675 19.0494 16.2909C19.0494 17.8143 17.8144 19.0494 16.291 19.0494Z"
                fill="white"
              />
              <path
                d="M20.814 12.8921C21.4115 12.8921 21.8958 12.4078 21.8958 11.8104C21.8958 11.2129 21.4115 10.7286 20.814 10.7286C20.2166 10.7286 19.7323 11.2129 19.7323 11.8104C19.7323 12.4078 20.2166 12.8921 20.814 12.8921Z"
                fill="white"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#CF142B" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1043 17.5753H13.0181V15.4017H18.4727V16.4885C18.4727 19.4848 16.0258 21.9225 13.0181 21.9225C10.0105 21.9225 7.5636 19.4848 7.5636 16.4885C7.5636 13.4922 10.0105 11.0546 13.0181 11.0546C14.3283 11.0546 15.5894 11.5241 16.5712 12.3761L15.1378 14.015C14.5531 13.5075 13.8003 13.2282 13.0181 13.2282C11.2138 13.2282 9.74542 14.691 9.74542 16.4885C9.74542 18.2861 11.2138 19.7489 13.0181 19.7489C14.4407 19.7489 15.6538 18.8403 16.1043 17.5753ZM22.8364 13.2281V15.4017H25.0182V16.4885H22.8364V18.6621H21.7455V16.4885H19.5636V15.4017H21.7455V13.2281H22.8364Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="copyright">
          <p>TravelWiser {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;