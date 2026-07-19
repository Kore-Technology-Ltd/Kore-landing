import './WhyDifferent.css'

export default function WhyDifferent() {
  return (
    <section id="section-why-kore" className="why-different">
      <div className="why-different__header">
        <span className="why-different__title">Why Korè is Different</span>
        <span className="why-different__subtitle">
          We{"'"}re not another marketplace. We{"'"}re rebuilding trust in
          agricultural trade from the ground up.
        </span>
      </div>

      <div className="why-different__grid">
        <div className="why-different__mockup-wrapper">
          <img
            alt="Free_Iphone_15_Mockup_4 4"
            loading="lazy"
            decoding="async"
            src="/images/hero-phone-mockup.png"
            className="why-different__mockup"
          />
        </div>

        {/* Card 1 (Instant Connection) */}
        <div className="why-different__card why-different__card--instant">
          <div className="why-different__card-header why-different__card-header--mirrored why-different__card-header--instant">
            <div className="why-different__icon-container why-different__icon-container--mirrored">
              <div className="why-different__icon-wrapper">
                <svg
                  width="22.00079917907715"
                  height="32.00182055671021"
                  viewBox="0 0 22.00079917907715 32.00182055671021"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="none"
                  className="why-different__svg-instant"
                >
                  <path
                    d="M17.5024 0.1369C17.6981 0.2504 17.8496 0.4269 17.9321 0.6376 18.0145 0.8483 18.0231 1.0807 17.9564 1.2969L14.3544 13.0009H21.0004C21.1957 13.0008 21.3868 13.0579 21.55 13.1652 21.7132 13.2724 21.8414 13.4252 21.9189 13.6045 21.9963 13.7838 22.0195 13.9818 21.9857 14.1742 21.9518 14.3665 21.8624 14.5448 21.7284 14.6869L5.7284 31.6869C5.5736 31.8515 5.3676 31.9588 5.1439 31.9914 4.9203 32.0239 4.6923 31.9798 4.4969 31.8661 4.3016 31.7525 4.1506 31.576 4.0684 31.3655 3.9862 31.155 3.9777 30.9228 4.0444 30.7069L7.6464 19.0009H1.0004C0.8051 19.001 0.614 18.9438 0.4508 18.8366 0.2876 18.7293 0.1594 18.5766 0.0819 18.3973 0.0045 18.218-0.0187 18.0199 0.0151 17.8276 0.049 17.6352 0.1384 17.457 0.2724 17.3149L16.2724 0.3149C16.427 0.1505 16.6327 0.0432 16.856 0.0105 17.0793-0.0221 17.3071 0.0217 17.5024 0.1349V0.1369ZM3.3144 17.0009H9.0004C9.1569 17.0009 9.3112 17.0376 9.4509 17.108 9.5907 17.1785 9.7119 17.2808 9.8049 17.4067 9.8979 17.5325 9.96 17.6785 9.9864 17.8327 10.0127 17.987 10.0024 18.1453 9.9564 18.2949L7.2204 27.1809 18.6844 15.0009H13.0004C12.8439 15.0009 12.6896 14.9642 12.5499 14.8937 12.4101 14.8233 12.2889 14.721 12.1959 14.5951 12.1029 14.4692 12.0408 14.3233 12.0144 14.169 11.9881 14.0148 11.9984 13.8565 12.0444 13.7069L14.7804 4.8209 3.3144 17.0009Z"
                    transform=" translate(0 1.357705464982012e-10)"
                    className="why-different__path-instant"
                  />
                </svg>
              </div>
            </div>
            <div className="why-different__card-titles why-different__card-titles--mirrored">
              <span className="why-different__card-title">
                Instant Connection
              </span>
              <span className="why-different__card-subtitle">For Buyers</span>
            </div>
          </div>
          <span className="why-different__card-body">
            Real-time discovery of suppliers within your radius. No middlemen.
            No delays. Direct access to fresh sources within hours, not weeks.
            <br />
          </span>
        </div>

        {/* Card 2 (Trust Escrow) */}
        <div className="why-different__card why-different__card--escrow">
          <div className="why-different__card-header why-different__card-header--mirrored why-different__card-header--escrow">
            <div className="why-different__icon-container why-different__icon-container--mirrored">
              <div className="why-different__icon-wrapper">
                <svg
                  width="21.33333396911621"
                  height="26.666667938232422"
                  viewBox="0 0 21.33333396911621 26.666667938232422"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="none"
                  className="why-different__svg-escrow"
                >
                  <path
                    d="M10.6667 26.6667C7.5778 25.8889 5.0276 24.1164 3.016 21.3493 1.0044 18.5822-0.0009 15.5102 0 12.1333V4L10.6667 0 21.3333 4V12.1333C21.3333 15.5111 20.328 18.5836 18.3173 21.3507 16.3067 24.1178 13.7564 25.8898 10.6667 26.6667ZM10.6667 23.8667C12.9778 23.1333 14.8889 21.6667 16.4 19.4667 17.9111 17.2667 18.6667 14.8222 18.6667 12.1333V5.8333L10.6667 2.8333 2.6667 5.8333V12.1333C2.6667 14.8222 3.4222 17.2667 4.9333 19.4667 6.4444 21.6667 8.3556 23.1333 10.6667 23.8667Z"
                    className="why-different__path-escrow"
                  />
                </svg>
              </div>
            </div>
            <div className="why-different__card-titles why-different__card-titles--mirrored">
              <span className="why-different__card-title">Trust Escrow</span>
              <span className="why-different__card-subtitle">For Both</span>
            </div>
          </div>
          <span className="why-different__card-body">
            Secure transactions with payment held until delivery confirmed. Both
            parties protected. Building an economy on trust, not fear.
            <br />
          </span>
        </div>

        {/* Card 3 (Fair Pricing) */}
        <div className="why-different__card why-different__card--pricing">
          <div className="why-different__card-header why-different__card-header--pricing">
            <div className="why-different__icon-container">
              <div className="why-different__icon-wrapper">
                <svg
                  width="28.641712188720707"
                  height="16.640472412109375"
                  viewBox="0 0 28.641712188720707 16.640472412109375"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="none"
                  className="why-different__svg-pricing"
                >
                  <path
                    d="M19.199 1C19.199 0.7348 19.3044 0.4804 19.4919 0.2929 19.6795 0.1054 19.9338 0 20.199 0H27.6417C27.9069 0 28.1613 0.1054 28.3488 0.2929 28.5364 0.4804 28.6417 0.7348 28.6417 1V8.3947C28.6417 8.6599 28.5364 8.9142 28.3488 9.1018 28.1613 9.2893 27.9069 9.3947 27.6417 9.3947 27.3765 9.3947 27.1221 9.2893 26.9346 9.1018 26.7471 8.9142 26.6417 8.6599 26.6417 8.3947V3.404L18.4604 11.5333C17.835 12.1547 17.2964 12.6907 16.807 13.0627 16.2817 13.46 15.7004 13.7613 14.9817 13.7613 14.2644 13.7613 13.6817 13.46 13.1564 13.0613 12.667 12.6907 12.1297 12.1547 11.503 11.5333L11.1377 11.1693C10.4524 10.488 10.0084 10.0493 9.6377 9.768 9.291 9.504 9.1284 9.4747 9.0204 9.4747 8.9137 9.4747 8.751 9.5053 8.4044 9.768 8.035 10.0493 7.591 10.488 6.9057 11.1707L1.6804 16.3733C1.4905 16.5496 1.2396 16.6453 0.9805 16.6403 0.7214 16.6352 0.4744 16.5298 0.2916 16.3462 0.1087 16.1627 0.0042 15.9153 0.0001 15.6562-0.004 15.3971 0.0927 15.1466 0.2697 14.9573L5.5404 9.7067C6.167 9.0853 6.7044 8.548 7.1937 8.176 7.719 7.776 8.3017 7.476 9.0204 7.4747 9.739 7.4747 10.3217 7.776 10.847 8.1747 11.3364 8.5467 11.875 9.0827 12.5004 9.7053L12.867 10.068C13.5524 10.7493 13.9964 11.188 14.3657 11.468 14.7124 11.732 14.875 11.7613 14.9817 11.7613 15.0884 11.7613 15.251 11.732 15.5977 11.468 15.9684 11.188 16.411 10.7493 17.0977 10.068L25.2177 1.9987H20.199C19.9338 1.9987 19.6795 1.8933 19.4919 1.7058 19.3044 1.5182 19.199 1.2652 19.199 1Z"
                    className="why-different__path-pricing"
                  />
                </svg>
              </div>
            </div>
            <div className="why-different__card-titles">
              <span className="why-different__card-title">Fair Pricing</span>
              <span className="why-different__card-subtitle">For Everyone</span>
            </div>
          </div>
          <span className="why-different__card-body why-different__card-body--right">
            Dynamic pricing based on freshness status. Farmers earn more. Buyers
            pay less. Transparency ensures everyone wins.
            <br />
          </span>
        </div>

        {/* Card 4 (Dual-Segment Flexibility) */}
        <div className="why-different__card why-different__card--flexibility">
          <div className="why-different__card-header why-different__card-header--flexibility">
            <div className="why-different__icon-container">
              <div className="why-different__icon-wrapper why-different__icon-wrapper--flexibility">
                <svg
                  width="28.1875"
                  height="18.333332061767578"
                  viewBox="0 0 28.1875 18.333332061767578"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="none"
                  className="why-different__svg-flexibility"
                >
                  <path
                    d="M20.0729 5.8333C20.526 5.8333 20.9605 5.6577 21.2809 5.3452 21.6013 5.0326 21.7813 4.6087 21.7813 4.1667 21.7813 3.7246 21.6013 3.3007 21.2809 2.9882 20.9605 2.6756 20.526 2.5 20.0729 2.5 19.6198 2.5 19.1853 2.6756 18.8649 2.9882 18.5446 3.3007 18.3646 3.7246 18.3646 4.1667 18.3646 4.6087 18.5446 5.0326 18.8649 5.3452 19.1853 5.6577 19.6198 5.8333 20.0729 5.8333ZM20.0729 8.3333C21.2056 8.3333 22.2919 7.8943 23.0929 7.1129 23.8938 6.3315 24.3438 5.2717 24.3438 4.1667 24.3438 3.0616 23.8938 2.0018 23.0929 1.2204 22.2919 0.439 21.2056 0 20.0729 0 18.9402 0 17.8539 0.439 17.053 1.2204 16.252 2.0018 15.8021 3.0616 15.8021 4.1667 15.8021 5.2717 16.252 6.3315 17.053 7.1129 17.8539 7.8943 18.9402 8.3333 20.0729 8.3333ZM16.2292 18.3333V15C16.2292 13.7844 15.7342 12.6186 14.8532 11.7591 13.9721 10.8996 12.7772 10.4167 11.5313 10.4167H4.6979C3.452 10.4167 2.257 10.8996 1.376 11.7591 0.495 12.6186 0 13.7844 0 15V18.3333H2.5625V15C2.5625 13.85 3.5192 12.9167 4.6979 12.9167H11.5313C12.71 12.9167 13.6667 13.85 13.6667 15V18.3333H16.2292ZM28.1875 15V18.3333H25.625V15C25.625 13.85 24.6683 12.9167 23.4896 12.9167H19.2188V10.4167H23.4896C24.7355 10.4167 25.9305 10.8996 26.8115 11.7591 27.6925 12.6186 28.1875 13.7844 28.1875 15ZM9.8229 4.1667C9.8229 4.6087 9.6429 5.0326 9.3226 5.3452 9.0022 5.6577 8.5677 5.8333 8.1146 5.8333 7.6615 5.8333 7.227 5.6577 6.9066 5.3452 6.5862 5.0326 6.4063 4.6087 6.4063 4.1667 6.4063 3.7246 6.5862 3.3007 6.9066 2.9882 7.227 2.6756 7.6615 2.5 8.1146 2.5 8.5677 2.5 9.0022 2.6756 9.3226 2.9882 9.6429 3.3007 9.8229 3.7246 9.8229 4.1667ZM12.3854 4.1667C12.3854 5.2717 11.9355 6.3315 11.1345 7.1129 10.3336 7.8943 9.2473 8.3333 8.1146 8.3333 6.9819 8.3333 5.8956 7.8943 5.0946 7.1129 4.2937 6.3315 3.8438 5.2717 3.8438 4.1667 3.8438 3.0616 4.2937 2.0018 5.0946 1.2204 5.8956 0.439 6.9819 0 8.1146 0 9.2473 0 10.3336 0.439 11.1345 1.2204 11.9355 2.0018 12.3854 3.0616 12.3854 4.1667Z"
                    className="why-different__path-flexibility"
                  />
                </svg>
              </div>
            </div>
            <div className="why-different__card-titles why-different__card-titles--flexibility">
              <span className="why-different__card-title">
                Dual-Segment Flexibility
              </span>
              <span className="why-different__card-subtitle">For Farmers</span>
            </div>
          </div>
          <span className="why-different__card-body why-different__card-body--right">
            Dynamic pricing based on freshness status. Farmers earn more. Buyers
            pay less. Transparency ensures everyone wins.
            <br />
          </span>
        </div>
      </div>
    </section>
  )
}
