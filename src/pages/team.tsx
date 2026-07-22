import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/sections/Navbar/Navbar'
import Footer from '@/components/sections/Footer/Footer'

export default function Team() {
  const location = useLocation()

  useEffect(() => {
    if (
      location.hash === '#origin-story' ||
      window.location.hash === '#origin-story'
    ) {
      const timer = setTimeout(() => {
        const el = document.getElementById('origin-story')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#fbfaf4',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <main
        className="kore-main-content"
        style={{
          paddingTop: '70px',
          paddingBottom: '96px',
          width: '100%',
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '96px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            position: 'relative',
            margin: '0px auto'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '0px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              position: 'relative',
              flexShrink: '0'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '96px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                position: 'relative',
                flexShrink: '0'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '0px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  position: 'relative',
                  flexShrink: '0'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#194332',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    minHeight: '583px',
                    position: 'relative',
                    flexShrink: '0',
                    padding: '40px 10px'
                  }}
                >
                  <div
                    style={{
                      overflow: 'hidden',
                      transformOrigin: '0 0',
                      transform: 'rotate(4.8deg)',
                      left: '103.1px',
                      top: '14.1px',
                      aspectRatio: '1',
                      width: 'auto',
                      height: '320px',
                      opacity: '0.3',
                      position: 'absolute'
                    }}
                  >
                    <svg
                      width="293.3332824707031"
                      height="280"
                      viewBox="0 0 293.3332824707031 280"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="none"
                      style={{
                        transformOrigin: '0 0',
                        left: '4.2%',
                        top: '6.3%',
                        right: '4.2%',
                        bottom: '6.2%',
                        width: '91.7%',
                        height: '87.5%',
                        position: 'absolute'
                      }}
                    >
                      <path
                        d="M101.3333 280L76 237.3333 28 226.6667 32.6667 177.3333 0 140 32.6667 102.6667 28 53.3333 76 42.6667 101.3333 0 146.6666 19.3333 192 0 217.3333 42.6667 265.3333 53.3333 260.6666 102.6667 293.3333 140 260.6666 177.3333 265.3333 226.6667 217.3333 237.3333 192 280 146.6666 260.6667 101.3333 280ZM112.6666 246L146.6666 231.3333 181.3333 246 200 214 236.6666 205.3333 233.3333 168 258 140 233.3333 111.3333 236.6666 74 200 66 180.6666 34 146.6666 48.6667 112 34 93.3333 66 56.6667 74 60 111.3333 35.3333 140 60 168 56.6667 206 93.3333 214 112.6666 246ZM132.6666 187.3333L208 112 189.3333 92.6667 132.6666 149.3333 104 121.3333 85.3333 140 132.6666 187.3333Z"
                        style={{ fillRule: 'nonzero', fill: '#3fa97e' }}
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      overflow: 'hidden',
                      transformOrigin: '0 0',
                      transform: 'rotate(4.8deg)',
                      left: '1045px',
                      top: '189px',
                      aspectRatio: '1',
                      width: 'auto',
                      height: '320px',
                      opacity: '0.3',
                      position: 'absolute'
                    }}
                  >
                    <svg
                      width="266.6666582750196"
                      height="253.3333282470703"
                      viewBox="0 0 266.6666582750196 253.3333282470703"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="none"
                      style={{
                        transformOrigin: '0 0',
                        left: '8.3%',
                        top: '10.4%',
                        right: '8.3%',
                        bottom: '10.4%',
                        width: '83.3%',
                        height: '79.2%',
                        position: 'absolute'
                      }}
                    >
                      <path
                        d="M93.3333 40C93.3333 29.3913 97.5476 19.2172 105.0491 11.7157 112.5505 4.2143 122.7247 0 133.3333 0 143.942 0 154.1161 4.2143 161.6176 11.7157 169.1191 19.2172 173.3333 29.3913 173.3333 40 173.3333 50.6087 169.1191 60.7828 161.6176 68.2843 154.1161 75.7857 143.942 80 133.3333 80 122.7247 80 112.5505 75.7857 105.0491 68.2843 97.5476 60.7828 93.3333 50.6087 93.3333 40ZM220 13.3333C211.1594 13.3333 202.681 16.8452 196.4298 23.0964 190.1786 29.3477 186.6667 37.8261 186.6667 46.6667 186.6667 55.5072 190.1786 63.9857 196.4298 70.2369 202.681 76.4881 211.1594 80 220 80 228.8405 80 237.319 76.4881 243.5702 70.2369 249.8214 63.9857 253.3333 55.5072 253.3333 46.6667 253.3333 37.8261 249.8214 29.3477 243.5702 23.0964 237.319 16.8452 228.8405 13.3333 220 13.3333ZM46.6667 13.3333C37.8261 13.3333 29.3477 16.8452 23.0964 23.0964 16.8452 29.3477 13.3333 37.8261 13.3333 46.6667 13.3333 55.5072 16.8452 63.9857 23.0964 70.2369 29.3477 76.4881 37.8261 80 46.6667 80 55.5072 80 63.9857 76.4881 70.2369 70.2369 76.4881 63.9857 80 55.5072 80 46.6667 80 37.8261 76.4881 29.3477 70.2369 23.0964 63.9857 16.8452 55.5072 13.3333 46.6667 13.3333ZM101.6667 93.3333C94.1522 93.3333 86.9455 96.3184 81.632 101.632 76.3184 106.9455 73.3333 114.1522 73.3333 121.6667V193.3333C73.3333 209.2463 79.6547 224.5075 90.9069 235.7597 102.1591 247.0119 117.4203 253.3333 133.3333 253.3333 149.2463 253.3333 164.5075 247.0119 175.7597 235.7597 187.0119 224.5075 193.3333 209.2463 193.3333 193.3333V121.6667C193.3333 114.1522 190.3482 106.9455 185.0347 101.632 179.7212 96.3184 172.5145 93.3333 165 93.3333H101.6667ZM60 121.6667C60 111 64.0133 101.26 70.6133 93.8867 68.765 93.5181 66.8847 93.3328 65 93.3333H28.3333C20.8189 93.3333 13.6122 96.3184 8.2986 101.632 2.9851 106.9455 0 114.1522 0 121.6667V186.6667C-0.0022 194.7257 2.0826 202.6479 6.0515 209.6619 10.0204 216.6759 15.7381 222.5425 22.6477 226.6904 29.5573 230.8383 37.4234 233.1262 45.4798 233.3311 53.5362 233.5361 61.5084 231.6512 68.62 227.86 62.9425 217.2384 59.9812 205.3771 60 193.3333V121.6667ZM206.6667 193.3333C206.6667 205.8133 203.5467 217.5667 198.0467 227.86 205.1583 231.6512 213.1304 233.5361 221.1869 233.3311 229.2433 233.1262 237.1093 230.8383 244.019 226.6904 250.9286 222.5425 256.6462 216.6759 260.6151 209.6619 264.584 202.6479 266.6689 194.7257 266.6667 186.6667V121.6667C266.6667 114.1522 263.6815 106.9455 258.368 101.632 253.0545 96.3184 245.8478 93.3333 238.3333 93.3333H201.6667C199.7422 93.3378 197.8711 93.5222 196.0533 93.8867 202.8986 101.5193 206.6789 111.4141 206.6667 121.6667V193.3333Z"
                        transform=" translate(2.2317465267420626e-13 0)"
                        style={{ fillRule: 'nonzero', fill: '#3fa97e' }}
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '48px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    <div
                      className="kore-hero-title-wrapper"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '24px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      <span
                        className="text"
                        style={{
                          display: 'inline',
                          textAlign: 'center',
                          lineHeight: '20px',
                          fontSize: '12px',
                          fontFamily:
                            "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontWeight: '500',
                          fontStretch: '100%',
                          textTransform: 'uppercase',
                          letterSpacing: '6px',
                          color: '#d3a014',
                          width: '100%',
                          position: 'relative',
                          flexShrink: '0'
                        }}
                      >
                        The People Behind Korè
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: '12px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          position: 'relative',
                          flexShrink: '0'
                        }}
                      >
                        <span
                          className="kore-hero-heading text"
                          style={{
                            display: 'inline',
                            textAlign: 'center',
                            fontFamily: 'Montserrat, system-ui, sans-serif',
                            fontWeight: '700',
                            fontStretch: '100%',
                            color: '#fff',
                            position: 'relative',
                            flexShrink: '0'
                          }}
                        >
                          Two Founders.
                          <br />
                          <span style={{ color: '#d3a014' }}>One Mission.</span>
                        </span>
                        <span
                          className="kore-hero-subtitle text"
                          style={{
                            display: 'inline',
                            textAlign: 'center',
                            fontFamily: 'Outfit, system-ui, sans-serif',
                            fontWeight: '300',
                            fontStretch: '100%',
                            color: '#fff',
                            position: 'relative',
                            flexShrink: '0'
                          }}
                        >
                          Korè was built by two Nigerian engineers who saw a
                          broken market and decided to fix it, not from a
                          Silicon Valley office, but from Lagos, where the
                          problem lives.
                        </span>
                      </div>
                    </div>
                    <div className="kore-team-pills-container">
                      <div className="kore-team-pill">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '6px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                          }}
                        >
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '22px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '600',
                              color: '#d3a014',
                              width: '100%'
                            }}
                          >
                            2026
                          </span>
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '13px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '400',
                              letterSpacing: '1px',
                              color: '#7b6f65',
                              width: '100%'
                            }}
                          >
                            FOUNDED
                          </span>
                        </div>
                      </div>
                      <div className="kore-team-pill">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '6px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                          }}
                        >
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '22px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '600',
                              color: '#d3a014',
                              width: '100%'
                            }}
                          >
                            Lagos
                          </span>
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '13px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '400',
                              letterSpacing: '1px',
                              color: '#7b6f65',
                              width: '100%'
                            }}
                          >
                            HEADQUATERED
                          </span>
                        </div>
                      </div>
                      <div className="kore-team-pill">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '6px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                          }}
                        >
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '22px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '600',
                              color: '#d3a014',
                              width: '100%'
                            }}
                          >
                            CAMA 2020
                          </span>
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '13px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '400',
                              letterSpacing: '1px',
                              color: '#7b6f65',
                              width: '100%'
                            }}
                          >
                            INCORPORATED UNDER
                          </span>
                        </div>
                      </div>
                      <div className="kore-team-pill">
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '6px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                          }}
                        >
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '22px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '600',
                              color: '#d3a014',
                              width: '100%'
                            }}
                          >
                            2026
                          </span>
                          <span
                            className="text"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              fontSize: '13px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '400',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              color: '#7b6f65',
                              width: '100%'
                            }}
                          >
                            PRE-MONEY VALUATION
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Infinite Flowing Marquee Ticker */}
                <div className="kore-ticker-container">
                  <div className="kore-ticker-track">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="kore-ticker-item">
                        Korè connects farmers directly to restaurants,
                        wholesalers, and households
                        <span className="kore-ticker-dot" />
                        No middlemen
                        <span className="kore-ticker-dot" />
                        Real-time freshness labeling
                        <span className="kore-ticker-dot" />
                        Transparent pricing
                        <span className="kore-ticker-dot" />
                        Building West Africa's most trusted agricultural
                        marketplace
                        <span className="kore-ticker-dot" />
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '0px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0',
                    pointerEvents: 'none'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0',
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <svg
                      width="3286.435546875"
                      height="1515.9890181956325"
                      viewBox="0 0 3286.435546875 1515.9890181956325"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="none"
                      style={{
                        transformOrigin: '0 0',
                        transform: 'rotate(-107.9deg) translateZ(0)',
                        willChange: 'transform',
                        pointerEvents: 'none',
                        left: '417.6px',
                        top: '3320.8px',
                        width: '3286.4px',
                        height: '1516px',
                        position: 'absolute'
                      }}
                    >
                      <path
                        d="M0 664.1113C3119.2419-1754.3921 249.807 3420.3074 3267.4355 664.1113"
                        transform=" translate(9.555242099625387 9.620540398810846)"
                        style={{
                          stroke: '#3fa97e',
                          strokeWidth: '19',
                          strokeDasharray: '38 38'
                        }}
                      />
                    </svg>
                    <div
                      style={{
                        overflow: 'hidden',
                        left: '1071px',
                        top: '13px',
                        aspectRatio: '1',
                        width: 'auto',
                        height: '200px',
                        position: 'absolute',
                        pointerEvents: 'none',
                        willChange: 'transform',
                        transform: 'translateZ(0)'
                      }}
                    >
                      <svg
                        width="182.68966674804688"
                        height="182.68203746668587"
                        viewBox="0 0 182.68966674804688 182.68203746668587"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="none"
                        style={{
                          left: '4.6%',
                          top: '4.1%',
                          right: '4.1%',
                          bottom: '4.6%',
                          width: '91.3%',
                          height: '91.3%',
                          position: 'absolute',
                          pointerEvents: 'none'
                        }}
                      >
                        <path
                          d="M128.5811 26.0638L136.7395 34.2305 154.1228 16.8555C151.0395 16.3388 147.5811 16.8055 143.6478 18.1221 138.5645 19.8305 133.3811 22.7805 128.5811 26.0638ZM165.8561 28.6971L148.5228 46.0138 156.6228 54.1138C159.9061 49.3221 162.8478 44.1638 164.5478 39.0971 165.8645 35.1888 166.3395 31.7638 165.8561 28.6971ZM146.3895 67.4472L136.7311 57.7888 123.6228 70.8972 134.7728 82.0472 146.3895 67.4472ZM124.3061 95.1638L111.8311 82.6722 94.6645 99.8222C102.9645 99.3805 111.2811 100.1555 118.8478 102.0138L124.3061 95.1638ZM135.2228 108.2138C138.1375 109.7331 140.9491 111.4423 143.6395 113.3305 150.6395 118.2471 156.3562 124.6805 162.3895 130.7055L146.5145 133.3471C146.0652 133.4509 145.6203 133.5732 145.1811 133.7138 143.1175 134.3792 141.0994 135.1781 139.1395 136.1055 133.4895 138.6888 124.6228 143.5805 112.5395 152.6471 111.2895 153.5805 109.8311 154.7305 108.1811 156.0138 99.8145 162.5638 86.7145 172.8222 72.7061 178.4055 64.1311 181.8222 54.4061 183.8721 44.5311 181.9305 34.7561 180.0138 25.8061 174.3888 18.2478 164.4305 8.2978 156.8805 2.6728 147.9305 0.7478 138.1555-1.1855 128.2722 0.8561 118.5555 4.2811 109.9805 9.8645 95.9805 20.1145 82.8638 26.6645 74.5055 27.9561 72.8555 29.1061 71.3971 30.0395 70.1471 39.1061 58.0638 43.9895 49.1888 46.5811 43.5471 47.8728 40.7305 48.5811 38.7138 48.9645 37.5055 49.2061 36.7388 49.3061 36.2888 49.3395 36.1721L51.9811 20.3055C57.9811 26.3055 64.4061 32.0055 69.3145 38.9805 70.8978 41.2471 72.6728 44.0388 74.3978 47.3138L110.6895 18.6221C117.5645 13.1221 127.5728 5.9305 138.3561 2.3221 149.4228-1.3862 162.7978-1.6779 173.6061 9.1971 184.3728 20.0305 184.0645 33.3638 180.3562 44.4055 176.7312 55.1638 169.5478 65.1471 164.0561 72.0138H164.0395L164.0228 72.0555 135.2228 108.2138ZM115.2228 36.2805L100.5811 47.8388 111.8311 59.1055 124.9478 46.0055 115.2228 36.2805ZM100.0395 70.8888L87.4145 58.2471 80.6145 63.6305C82.5061 71.2721 83.3061 79.6722 82.8478 88.0638L100.0395 70.8888Z"
                          transform=" translate(0 1.1317025205848097e-7)"
                          style={{
                            fillRule: 'nonzero',
                            fill: 'rgba(63,169,126,0.3)'
                          }}
                        />
                      </svg>
                    </div>
                    <div
                      style={{
                        overflow: 'hidden',
                        left: '7px',
                        top: '999px',
                        aspectRatio: '1',
                        width: 'auto',
                        height: '200px',
                        opacity: '0.3',
                        position: 'absolute',
                        pointerEvents: 'none',
                        willChange: 'transform',
                        transform: 'translateZ(0)'
                      }}
                    >
                      <svg
                        width="146.25173950195312"
                        height="142.07351684570312"
                        viewBox="0 0 146.25173950195312 142.07351684570312"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="none"
                        style={{
                          left: '14.6%',
                          top: '16.7%',
                          right: '12.3%',
                          bottom: '12.3%',
                          width: '73.1%',
                          height: '71%',
                          position: 'absolute',
                          pointerEvents: 'none'
                        }}
                      >
                        <defs>
                          <clipPath id="def_0">
                            <rect
                              x="0"
                              y="0"
                              width="146.25173950195312"
                              height="142.07351684570312"
                            ></rect>
                          </clipPath>
                        </defs>
                        <g style={{ clipPath: 'url(#def_0)' }}>
                          <path
                            d="M10.8927 35.9542C17.3761 29.2542 23.8594 27.0208 32.5011 31.4875 40.2844 35.5083 44.5636 35.9083 48.4927 35.95 52.5886 35.9083 57.0427 35.5083 65.1511 31.4875 74.1511 27.0208 80.9011 29.2542 87.6552 35.9542 95.6136 43.8542 98.0719 52.0792 98.9094 58.2917 99.0066 58.7917 99.0941 59.2917 99.1719 59.7917 96.4855 60.5757 94.0812 62.1159 92.246 64.2286 90.4108 66.3413 89.222 68.9373 88.8214 71.707 88.4208 74.4767 88.8254 77.3032 89.9869 79.8493 91.1483 82.3954 93.0177 84.5536 95.3719 86.0667L95.0427 86.9125C93.3926 85.7443 91.5175 84.932 89.5366 84.5272 87.5558 84.1224 85.5124 84.1339 83.5362 84.5609 81.56 84.988 79.6942 85.8213 78.0572 87.008 76.4203 88.1947 75.048 89.7087 74.0274 91.4541 73.0069 93.1994 72.3604 95.1379 72.1291 97.1464 71.8977 99.155 72.0866 101.1897 72.6836 103.1214 73.2806 105.053 74.2727 106.8394 75.597 108.3672 76.9212 109.8949 78.5487 111.1306 80.3761 111.9958 79.9816 112.4847 79.5969 112.9444 79.2219 113.375 75.7427 116.9958 71.7844 119.3167 67.4927 118.6083 53.9927 116.3708 51.7427 116.3708 49.4927 116.3708H47.5344C45.3761 116.3708 43.2136 116.3708 30.2511 118.6083 19.8761 120.3917 11.5427 102.9708 7.4094 94.0417 0.9094 80.0292-0.3864 65.7083 0.0886 58.2917 0.8927 52.075 3.2552 43.8542 10.8927 35.9583"
                            style={{ fillRule: 'evenodd', fill: '#3fa97e' }}
                          />
                          <path
                            d="M128.5219 42.0375C133.2023 43.7168 137.0239 47.1865 139.1462 51.6835 141.2684 56.1804 141.5175 61.3361 139.8386 66.0167 139.7025 66.3861 139.5261 66.7236 139.3094 67.0292 142.7107 69.9534 144.951 74 145.6237 78.4348 146.2965 82.8696 145.3571 87.3986 142.9761 91.2 141.8073 93.0649 140.3193 94.7094 138.5802 96.0583 138.6386 96.6694 138.6677 97.2875 138.6677 97.9125 138.6695 101.0254 137.8963 104.0898 136.4177 106.8292 138.7398 108.0844 140.7707 109.8158 142.3775 111.9101 143.9843 114.0043 145.1308 116.4143 145.742 118.9822 146.3532 121.5501 146.3532 121.5501 146.4153 124.2182 145.9242 126.8117 145.4331 129.4053 144.4 131.866 142.8923 141.3846 136.1994 139.4365 138.0234 137.1753 139.3853 134.9141 140.7472 132.3908 141.6163 129.7705 141.9357 127.1503 142.2552 124.4921 142.0177 121.9699 141.239 119.4478 140.4602 117.1184 139.1577 115.1344 137.4167 111.9658 140.0148 108.0333 141.5034 103.9384 141.6548 99.8436 141.8062 95.8119 140.612 92.4601 138.2549 89.1083 135.8978 86.6209 132.5076 85.3784 128.6029 84.136 124.6982 84.2069 120.494 85.5802 116.6333 80.7887 116.3755 76.2785 114.2905 72.9779 110.8076 69.6773 107.3246 67.8376 102.7088 67.8376 97.9104 67.8376 93.112 69.6773 88.4962 72.9779 85.0133 76.2785 81.5303 80.7887 79.4453 85.5802 79.1875 84.5444 76.272 84.2461 73.1456 84.712 70.0868 85.1779 67.0281 86.3935 64.1322 88.2503 61.6574 90.1072 59.1825 92.5476 57.2056 95.354 55.903 98.1604 54.6003 101.2456 54.0124 104.3344 54.1917 104.3733 53.9111 104.4427 53.6306 104.5427 53.35 106.2229 48.6704 109.693 44.8497 114.1898 42.7283 118.6866 40.6068 123.8419 40.3584 128.5219 42.0375ZM120.2594 130.8167C121.3777 131.8957 122.7233 132.7108 124.1974 133.2023 125.6716 133.6938 127.2371 133.8492 128.7792 133.6572 130.3212 133.4652 131.8008 132.9306 133.1095 132.0926 134.4181 131.2546 135.5227 130.1344 136.3423 128.8142 137.1619 127.4939 137.6757 126.007 137.846 124.4624 138.0164 122.9178 137.839 121.3546 137.3269 119.8874 136.8147 118.4203 135.9808 117.0863 134.8863 115.9832 133.7917 114.8802 132.4642 114.036 131.0011 113.5125 130.8591 113.4617 130.72 113.4033 130.5844 113.3375 127.8136 115.2542 124.5011 116.4458 120.9261 116.6375 121.6219 118.5958 122.0011 120.7125 122.0011 122.9125 122.0011 125.7375 121.3761 128.4125 120.2594 130.8167ZM120.9261 79.1917C123.8219 79.3467 126.6422 80.1713 129.1655 81.6006 131.6887 83.0299 133.846 85.0251 135.4677 87.4292 136.4569 86.088 137.11 84.5291 137.3719 82.8833 137.6792 80.9507 137.4359 78.9705 136.6698 77.1697 135.9037 75.369 134.6458 133.0403 72.7015 131.4348 71.5826 129.5465 70.9386 127.5919 70.8433 125.6373 70.7479 123.6953 71.2051 121.9886 72.1625 122.0853 74.5505 121.7247 76.9391 120.9261 79.1917ZM119.7469 63.9875C123.6247 62.3399 127.9444 62.0463 132.0094 63.1542 132.9271 60.554 132.7765 57.696 131.5905 55.2068 130.4045 52.7175 128.2799 50.8 125.6825 49.8746 123.085 48.9493 120.2266 49.0915 117.7339 50.2702 115.2411 51.4488 113.3174 53.5678 112.3844 56.1625L112.2636 56.4625C115.4306 58.1978 118.0292 60.8108 119.7469 63.9875ZM103.2511 62.4958C100.4884 62.4958 97.8389 63.5933 95.8854 65.5468 93.9319 67.5003 92.8344 70.1498 92.8344 72.9125 92.8344 75.6752 93.9319 78.3247 95.8854 80.2782 97.8389 82.2317 100.4884 83.3292 103.2511 83.3292 106.0137 83.3292 108.6633 82.2317 110.6168 80.2782 112.5703 78.3247 113.6677 75.6752 113.6677 72.9125 113.6677 70.1498 112.5703 67.5003 110.6168 65.5468 108.6633 63.5933 106.0137 62.4958 103.2511 62.4958ZM86.5844 87.4958C83.8217 87.4958 81.1722 88.5933 79.2187 90.5468 77.2652 92.5003 76.1677 95.1498 76.1677 97.9125 76.1677 100.6752 77.2652 103.3247 79.2187 105.2782 81.1722 107.2317 83.8217 108.3292 86.5844 86.5844 89.3471 108.3292 91.9966 107.2317 93.9501 105.2782 95.9036 103.3247 97.0011 100.6752 97.0011 97.9125 97.0011 95.1498 95.9036 92.5003 93.9501 90.5468 91.9966 88.5933 89.3471 87.4958 86.5844 87.4958ZM109.5011 97.9125C109.5011 95.1498 110.5985 92.5003 112.552 90.5468 114.5055 88.5933 117.155 87.4958 119.9177 87.4958 122.6804 87.4958 125.3299 88.5933 127.2834 90.5468 129.2369 92.5003 130.3344 95.1498 130.3344 97.9125 130.3344 100.6752 129.2369 103.3247 127.2834 105.2782 125.3299 107.2317 122.6804 108.3292 119.9177 108.3292 117.155 108.3292 114.5055 107.2317 112.552 105.2782 110.5985 103.3247 109.5011 100.6752 109.5011 97.9125ZM103.2511 112.4958C100.4884 112.4958 97.8389 113.5933 95.8854 115.5468 93.9319 117.5003 92.8344 120.1498 92.8344 122.9125 92.8344 125.6752 93.9319 128.3247 95.8854 130.2782 97.8389 132.2317 100.4884 133.3292 103.2511 133.3292 106.0137 133.3292 108.6633 132.2317 110.6168 130.2782 112.5703 128.3247 113.6677 125.6752 113.6677 122.9125 113.6677 120.1498 112.5703 117.5003 110.6168 115.5468 108.6633 113.5933 106.0137 112.4958 103.2511 112.4958ZM2.3552 0H7.0761C18.9094 0 30.0511 5.3208 38.1844 12.3833 40.828 14.6708 43.2245 17.2293 45.3344 20.0167V10.6875C45.3344 9.5824 45.7734 8.5226 46.5548 7.7412 47.3362 6.9598 48.396 6.5208 49.5011 6.5208 50.6061 6.5208 51.6659 6.9598 52.4473 7.7412 53.2287 8.5226 53.6677 9.5824 53.6677 10.6875V38.1875C53.668 38.8169 53.5256 39.4381 53.2514 40.0046 52.9772 40.5711 52.5782 41.0681 52.0844 41.4583V41.6625H51.8011C51.1183 42.1172 50.316 42.3591 49.4956 42.3576 48.6753 42.3561 47.8739 42.1113 47.1927 41.6542 37.0261 41.4708 26.8094 37.5167 18.7677 31.1708 10.5344 24.6708 4.2844 15.4208 2.9427 4.6792L2.3552 0ZM42.9636 32.9583C41.4886 28.4125 37.9802 23.2417 32.7219 18.675 27.0552 13.7583 19.8886 10.0125 12.3719 8.775 14.3844 14.8667 18.5094 20.3542 23.9302 24.6333 29.4844 29.0125 36.2094 31.9625 42.9636 32.9583Z"
                            style={{ fillRule: 'evenodd', fill: '#3fa97e' }}
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Founder Cards Section */}
                    <div
                      style={{
                        backgroundColor: '#194332',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '64px',
                        alignItems: 'center',
                        padding: '64px 20px',
                        boxSizing: 'border-box'
                      }}
                    >
                      {/* Card 1: Toluwanimi Durojaiye Timothy */}
                      <div
                        className="kore-founder-card"
                        style={{
                          borderWidth: '5px',
                          borderStyle: 'solid',
                          borderColor: '#d3a014',
                          borderRadius: '30px',
                          backgroundColor: '#f6f4e5',
                          overflow: 'hidden',
                          position: 'relative',
                          margin: '0 auto',
                          flexShrink: '0'
                        }}
                      >
                        {/* Left Column: Photo, Info, Skills, Links */}
                        <div
                          className="kore-founder-left"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '24px',
                            position: 'relative'
                          }}
                        >
                          <div
                            className="kore-founder-img-wrapper"
                            style={{
                              overflow: 'hidden',
                              borderRadius: '10px',
                              position: 'relative'
                            }}
                          >
                            <img
                              src="/images/toluwanimi.jpg"
                              alt="Toluwanimi Durojaiye Timothy"
                              style={{
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '8px',
                              width: '100%'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '24px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Toluwanimi Durojaiye Timothy
                            </span>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '12px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '600',
                                  color: '#d3a014'
                                }}
                              >
                                Co-Founder & Chief Executive Officer
                              </span>
                              <div
                                style={{
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: '#d3a014',
                                  borderRadius: '200px',
                                  backgroundColor: '#fff',
                                  padding: '4px 12px'
                                }}
                              >
                                <span
                                  className="text"
                                  style={{
                                    fontSize: '14px',
                                    fontFamily:
                                      'Montserrat, system-ui, sans-serif',
                                    fontWeight: '600',
                                    letterSpacing: '1.9px',
                                    color: '#d3a014'
                                  }}
                                >
                                  CEO
                                </span>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '6px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                📍 Lagos, Nigeria
                              </span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '8px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '12px',
                                  fontFamily:
                                    "'Plus Jakarta Sans', system-ui, sans-serif",
                                  fontWeight: '500',
                                  textTransform: 'uppercase',
                                  letterSpacing: '3px',
                                  color: '#194332'
                                }}
                              >
                                | VISION. STRATEGY. GROWTH
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              rowGap: '10px',
                              columnGap: '10px',
                              width: '100%'
                            }}
                          >
                            {['Everything'].map((skill) => (
                              <div
                                key={skill}
                                style={{
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: '#d3a014',
                                  borderRadius: '200px',
                                  backgroundColor: '#f9fdfc',
                                  padding: '6px 16px'
                                }}
                              >
                                <span
                                  className="text"
                                  style={{
                                    fontSize: '14px',
                                    fontFamily: 'Outfit, system-ui, sans-serif',
                                    fontWeight: '500',
                                    color: '#d3a014'
                                  }}
                                >
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gridColumnGap: '16px',
                              alignItems: 'center'
                            }}
                          >
                            <a
                              href="mailto:tolui@kore.ng"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                Email
                              </span>
                            </a>
                            <a
                              href="https://linkedin.com/in/toluwanimi-d-9272b3294"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                LinkedIn
                              </span>
                            </a>
                            <a
                              href="https://github.com/davistolu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                GitHub
                              </span>
                            </a>
                          </div>
                        </div>

                        {/* Right Column: Bio, Quote, Responsibilities */}
                        <div className="kore-founder-right">
                          <span
                            className="text"
                            style={{
                              fontSize: '20px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '300',
                              lineHeight: '32px',
                              color: '#7b6f65'
                            }}
                          >
                            Tolu leads the team at Korè, shaping the product,
                            driving the business and turning ideas into reality.
                            As a full-stack developer with a strong
                            understanding of how trade works in Nigeria, he's
                            passionate about using technology to solve everyday
                            challenges for farmers and traders. His goal is
                            simple: build Korè into Africa's most trusted
                            digital marketplace where buying and selling is
                            easier, fairer and more rewarding for everyone,
                          </span>
                          <div
                            style={{
                              borderRadius: '16px',
                              backgroundColor: '#f9fdfc',
                              border: '1px solid #d3a014',
                              padding: '24px 32px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '18px',
                                fontFamily:
                                  "'Plus Jakarta Sans', system-ui, sans-serif",
                                fontWeight: '500',
                                fontStyle: 'italic',
                                color: '#d3a014',
                                lineHeight: '28px'
                              }}
                            >
                              "I grew up watching brilliant Nigerian
                              entrepreneurs run incredible businesses from
                              physical stalls with no digital tools, no trust
                              infrastructure, and no way to scale. Korè exists
                              to change that, permanently."
                            </span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '16px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '28px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Responsibilities at Korè
                            </span>
                            <ul
                              style={{
                                margin: '0',
                                paddingLeft: '24px',
                                fontSize: '20px',
                                fontFamily: 'Outfit, system-ui, sans-serif',
                                fontWeight: '300',
                                color: '#7b6f65',
                                lineHeight: '36px'
                              }}
                            >
                              <li>Overall company direction and vision</li>
                              <li>
                                Investor outreach and pre-seed fundraising
                              </li>
                              <li>
                                Brand, marketing, and public representation
                              </li>
                              <li>
                                Strategic partnerships and merchant relations
                              </li>
                              <li>Legal and regulatory compliance oversight</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: Samuel Ayomide Adeyemi */}
                      <div
                        className="kore-founder-card kore-founder-card--reverse"
                        style={{
                          borderWidth: '5px',
                          borderStyle: 'solid',
                          borderColor: '#d3a014',
                          borderRadius: '30px',
                          backgroundColor: '#f6f4e5',
                          overflow: 'hidden',
                          position: 'relative',
                          margin: '0 auto',
                          flexShrink: '0'
                        }}
                      >
                        {/* Left Column: Bio, Quote, Responsibilities */}
                        <div className="kore-founder-right">
                          <span
                            className="text"
                            style={{
                              fontSize: '20px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '300',
                              lineHeight: '32px',
                              color: '#7b6f65'
                            }}
                          >
                            Samuel leads Korè's entire technology stack, from
                            platform architecture and backend systems to DevOps
                            infrastructure and product engineering. He built the
                            core platform using Laravel, TypeScript, and
                            Supabase, with a focus on performance at scale
                            across Nigeria's varied network conditions. His
                            engineering decisions underpin the trust, security,
                            and reliability that Korè's marketplace is built on.
                          </span>
                          <div
                            style={{
                              borderRadius: '16px',
                              backgroundColor: '#f9fdfc',
                              border: '1px solid #d3a014',
                              padding: '24px 32px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '18px',
                                fontFamily:
                                  "'Plus Jakarta Sans', system-ui, sans-serif",
                                fontWeight: '500',
                                fontStyle: 'italic',
                                color: '#d3a014',
                                lineHeight: '28px'
                              }}
                            >
                              "The best technology is invisible, it just works.
                              My job is to build the infrastructure that makes
                              every farmer, trader, and buyer on Korè feel like
                              the platform was designed specifically for them
                              and enjoy myself doing it."
                            </span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '16px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '28px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Responsibilities at Korè
                            </span>
                            <ul
                              style={{
                                margin: '0',
                                paddingLeft: '24px',
                                fontSize: '20px',
                                fontFamily: 'Outfit, system-ui, sans-serif',
                                fontWeight: '300',
                                color: '#7b6f65',
                                lineHeight: '36px'
                              }}
                            >
                              <li>
                                Platform architecture and technical direction
                              </li>
                              <li>Backend and frontend development</li>
                              <li>
                                Cloud infrastructure and DevOps (Google Cloud
                                Run)
                              </li>
                              <li>
                                Payment gateway integration (Paystack /
                                Flutterwave)
                              </li>
                              <li>Data security and NDPA 2023 compliance</li>
                            </ul>
                          </div>
                        </div>

                        {/* Right Column: Photo, Info, Skills, Links */}
                        <div className="kore-founder-left">
                          <div
                            style={{
                              overflow: 'hidden',
                              borderRadius: '10px',
                              width: '100%',
                              height: '525px',
                              position: 'relative',
                              flexShrink: '0'
                            }}
                          >
                            <img
                              src="/images/samuel.jpg"
                              alt="Samuel Ayomide Adeyemi"
                              style={{
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '8px',
                              width: '100%'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '24px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Samuel Ayomide Adeyemi
                            </span>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '12px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '600',
                                  color: '#d3a014'
                                }}
                              >
                                Co-Founder & Chief Technology Officer
                              </span>
                              <div
                                style={{
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: '#d3a014',
                                  borderRadius: '200px',
                                  backgroundColor: '#fff',
                                  padding: '4px 12px'
                                }}
                              >
                                <span
                                  className="text"
                                  style={{
                                    fontSize: '14px',
                                    fontFamily:
                                      'Montserrat, system-ui, sans-serif',
                                    fontWeight: '600',
                                    letterSpacing: '1.9px',
                                    color: '#d3a014'
                                  }}
                                >
                                  CTO
                                </span>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '6px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                📍 Ibadan, Nigeria
                              </span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '8px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '12px',
                                  fontFamily:
                                    "'Plus Jakarta Sans', system-ui, sans-serif",
                                  fontWeight: '500',
                                  textTransform: 'uppercase',
                                  letterSpacing: '3px',
                                  color: '#194332'
                                }}
                              >
                                | ARCHITECTURE. ENGINEERING. SCALE.
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              rowGap: '10px',
                              columnGap: '10px',
                              width: '100%'
                            }}
                          >
                            {['Engineering', 'Operations'].map((skill) => (
                              <div
                                key={skill}
                                style={{
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: '#d3a014',
                                  borderRadius: '200px',
                                  backgroundColor: '#f9fdfc',
                                  padding: '6px 16px'
                                }}
                              >
                                <span
                                  className="text"
                                  style={{
                                    fontSize: '14px',
                                    fontFamily: 'Outfit, system-ui, sans-serif',
                                    fontWeight: '500',
                                    color: '#d3a014'
                                  }}
                                >
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gridColumnGap: '16px',
                              alignItems: 'center'
                            }}
                          >
                            <a
                              href="mailto:samuel@kore.ng"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                ✉ Email
                              </span>
                            </a>
                            <a
                              href="https://linkedin.com/in/samuelayo0507"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                LinkedIn
                              </span>
                            </a>
                            <a
                              href="https://github.com/sam-uel-ayo"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                GitHub
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Card 3: Opeyemi Adebayo Ososanya */}
                      <div
                        className="kore-founder-card"
                        style={{
                          borderWidth: '5px',
                          borderStyle: 'solid',
                          borderColor: '#d3a014',
                          borderRadius: '30px',
                          backgroundColor: '#f6f4e5',
                          overflow: 'hidden',
                          position: 'relative',
                          margin: '0 auto',
                          flexShrink: '0'
                        }}
                      >
                        {/* Left Column: Photo, Info, Skills, Links */}
                        <div
                          className="kore-founder-left"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '24px',
                            position: 'relative'
                          }}
                        >
                          <div
                            className="kore-founder-img-wrapper"
                            style={{
                              overflow: 'hidden',
                              borderRadius: '10px',
                              position: 'relative'
                            }}
                          >
                            <img
                              src="/images/benjamin.jpg"
                              alt="Opeyemi Adebayo Ososanya"
                              style={{
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '8px',
                              width: '100%'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '24px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Opeyemi Adebayo Ososanya
                            </span>
                            <span
                              className="text"
                              style={{
                                fontSize: '16px',
                                fontFamily: 'Outfit, system-ui, sans-serif',
                                fontWeight: '600',
                                color: '#d3a014'
                              }}
                            >
                              Founding Product Designer
                            </span>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '6px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                📍 Abuja, Nigeria
                              </span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gridColumnGap: '8px',
                                alignItems: 'center',
                                marginTop: '4px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '12px',
                                  fontFamily:
                                    "'Plus Jakarta Sans', system-ui, sans-serif",
                                  fontWeight: '500',
                                  textTransform: 'uppercase',
                                  letterSpacing: '3px',
                                  color: '#194332'
                                }}
                              >
                                | BRANDING. UI/UX. EXPERIENCE
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              flexWrap: 'wrap',
                              rowGap: '10px',
                              columnGap: '10px',
                              width: '100%'
                            }}
                          >
                            {['Product', 'Design', 'Brand'].map((skill) => (
                              <div
                                key={skill}
                                style={{
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: '#d3a014',
                                  borderRadius: '200px',
                                  backgroundColor: '#f9fdfc',
                                  padding: '6px 16px'
                                }}
                              >
                                <span
                                  className="text"
                                  style={{
                                    fontSize: '14px',
                                    fontFamily: 'Outfit, system-ui, sans-serif',
                                    fontWeight: '500',
                                    color: '#d3a014'
                                  }}
                                >
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gridColumnGap: '16px',
                              alignItems: 'center'
                            }}
                          >
                            <a
                              href="mailto:opeyemi@kore.ng"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                ✉ Email
                              </span>
                            </a>
                            <a
                              href="https://linkedin.com/in/opeyemiadebayo"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                LinkedIn
                              </span>
                            </a>
                            <a
                              href="https://github.com/opeyemi"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-contact-btn"
                              style={{
                                borderWidth: '0.5px',
                                borderStyle: 'solid',
                                borderColor: '#7b6f65',
                                backgroundColor: '#f9fdfc',
                                borderRadius: '8px',
                                padding: '8px 16px',
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <span
                                className="text"
                                style={{
                                  fontSize: '16px',
                                  fontFamily: 'Outfit, system-ui, sans-serif',
                                  fontWeight: '300',
                                  color: '#7b6f65'
                                }}
                              >
                                Behance
                              </span>
                            </a>
                          </div>
                        </div>

                        {/* Right Column: Bio, Quote, Responsibilities */}
                        <div className="kore-founder-right">
                          <span
                            className="text"
                            style={{
                              fontSize: '20px',
                              fontFamily: 'Outfit, system-ui, sans-serif',
                              fontWeight: '300',
                              lineHeight: '32px',
                              color: '#7b6f65'
                            }}
                          >
                            As Korè’s Founding Product Designer, Opeyemi is the
                            sole creative force behind the brand's entire visual
                            and digital experience. He built Korè’s identity
                            from the ground up, crafting everything from the
                            original logo, typography, and promotional flyers to
                            the comprehensive brand guidelines that define the
                            company's voice today.
                            <br />
                            <br />
                            Bridging the gap between brand storytelling and
                            software functionality, He leads the end-to-end
                            UI/UX design for Korè’s digital ecosystem. From
                            designing the landing page to architecting intuitive
                            desktop and mobile applications, his focus is on
                            transforming complex agricultural trade workflows
                            into clean, accessible, and empowering digital
                            interfaces for farmers, traders, and partners.
                          </span>
                          <div
                            style={{
                              borderRadius: '16px',
                              backgroundColor: '#f9fdfc',
                              border: '1px solid #d3a014',
                              padding: '24px 32px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '18px',
                                fontFamily:
                                  "'Plus Jakarta Sans', system-ui, sans-serif",
                                fontWeight: '500',
                                fontStyle: 'italic',
                                color: '#d3a014',
                                lineHeight: '28px'
                              }}
                            >
                              "Good design is the bridge between a powerful idea
                              and the people who need it most. From the first
                              glance at our logo to the daily use of our mobile
                              and desktop apps, my goal is to make Korè feel
                              immediately trustworthy, intuitive, and built for
                              growth."
                            </span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '16px'
                            }}
                          >
                            <span
                              className="text"
                              style={{
                                fontSize: '28px',
                                fontFamily: 'Montserrat, system-ui, sans-serif',
                                fontWeight: '700',
                                color: '#252323'
                              }}
                            >
                              Responsibilities at Korè
                            </span>
                            <ul
                              style={{
                                margin: '0',
                                paddingLeft: '24px',
                                fontSize: '20px',
                                fontFamily: 'Outfit, system-ui, sans-serif',
                                fontWeight: '300',
                                color: '#7b6f65',
                                lineHeight: '36px'
                              }}
                            >
                              <li>
                                UI/UX architecture for mobile and desktop apps
                              </li>
                              <li>
                                Brand identity and design system management
                              </li>
                              <li>Landing page and website interface design</li>
                              <li>
                                Marketing collateral and visual asset creation
                              </li>
                              <li>
                                User flow mapping and experience optimization
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="origin-story"
            style={{
              backgroundColor: '#fbfaf4',
              width: '100%',
              maxWidth: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '96px 20px 48px 20px',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '51px',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '1120px',
                width: '100%',
                position: 'relative',
                flexShrink: '0',
                margin: '0 auto'
              }}
            >
              <span
                className="text"
                style={{
                  display: 'inline',
                  textAlign: 'center',
                  lineHeight: '20px',
                  fontSize: '12px',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: '500',
                  fontStretch: '100%',
                  textTransform: 'uppercase',
                  letterSpacing: '6px',
                  color: '#7b6f65',
                  width: '100%',
                  position: 'relative',
                  flexShrink: '0'
                }}
              >
                Origin Story
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  position: 'relative',
                  flexShrink: '0'
                }}
              >
                <span className="kore-origin-title text">
                  How Korè Was Born
                </span>
                <span className="kore-origin-subtitle text">
                  Not from a whiteboard session. From a real problem, in a real
                  country, affecting real people.
                </span>
              </div>
            </div>
            <div
              className="kore-origin-stats-grid"
              style={{ position: 'relative', marginTop: '48px' }}
            >
              <div
                className="kore-origin-stat-card"
                style={{ borderColor: '#d3a014' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gridColumnGap: '24px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '3px',
                      alignItems: 'start',
                      justifyContent: 'flex-start',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '40px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#d3a014',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      38M Tonnes
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '20px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '400',
                        fontStretch: '100%',
                        color: '#252323',
                        width: '100%',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      Food wasted in Nigeria yearly
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '16px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#7b6f65',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      #1 in Africa — EU & FAO
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="kore-origin-stat-card"
                style={{ borderColor: '#d3a014' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gridColumnGap: '24px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '3px',
                      alignItems: 'start',
                      justifyContent: 'flex-start',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '40px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#d3a014',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      140M
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '20px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '400',
                        fontStretch: '100%',
                        color: '#252323',
                        width: '100%',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      Nigerians living in poverty
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '16px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#7b6f65',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      63% rate — World Bank 2025
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="kore-origin-stat-card"
                style={{ borderColor: '#d3a014' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gridColumnGap: '24px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '3px',
                      alignItems: 'start',
                      justifyContent: 'flex-start',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '40px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#d3a014',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      40M+
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '20px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '400',
                        fontStretch: '100%',
                        color: '#252323',
                        width: '100%',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      MSMEs with no digital storefront
                    </span>
                    <span
                      className="text"
                      style={{
                        display: 'inline',
                        textAlign: 'left',
                        fontSize: '16px',
                        fontFamily: 'Outfit, system-ui, sans-serif',
                        fontWeight: '300',
                        fontStretch: '100%',
                        color: '#7b6f65',
                        width: 'max-content',
                        position: 'relative',
                        flexShrink: '0'
                      }}
                    >
                      eCommerce penetration &lt;3%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kore-story-box">
            <svg
              width="1045"
              height="954"
              viewBox="0 0 1045 954"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="none"
              style={{
                left: '187px',
                top: '-34px',
                width: '1045px',
                height: '954px',
                position: 'absolute',
                pointerEvents: 'none',
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            >
              <g>
                <path
                  d="M1045 0L594.1864 1.5769 208 950.8463 644.6271 954 1045 0Z"
                  style={{ fillRule: 'nonzero', fill: '#164d37' }}
                />
                <path
                  d="M948 0L497.1864 1.5769 111 950.8463 547.6271 954 948 0Z"
                  style={{ fillRule: 'nonzero', fill: '#1a6044' }}
                />
                <path
                  d="M837 0L386.1864 1.5769 0 950.8463 436.6271 954 837 0Z"
                  style={{ fillRule: 'nonzero', fill: '#217b57' }}
                />
              </g>
            </svg>
            <span
              className="text"
              style={{
                display: 'block',
                textAlign: 'left',
                fontSize: '20px',
                lineHeight: '32px',
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontWeight: '300',
                color: '#fff',
                width: '100%',
                position: 'relative',
                zIndex: 2
              }}
            >
              Korè didn't start with a pitch deck. It started with a question
              Toluwanimi and Samuel couldn't stop asking:
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: '500',
                  fontStyle: 'italic',
                  color: '#d3a014'
                }}
              >
                "Why does Nigeria produce enough food to feed itself, yet 38
                million tonnes rot every year while 140 million people live in
                poverty?"
                <br />
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: '500',
                  fontStyle: 'italic'
                }}
              >
                <br />
              </span>
              The answer wasn't a lack of farmers, goods, or buyers. It was the
              complete absence of trusted, efficient digital infrastructure
              connecting the two ends of the market. Farmers couldn't reach
              buyers at scale. Traders had no digital presence beyond a WhatsApp
              status. Buyers had no reliable platform to source local produce.
              And nobody trusted anyone they hadn't met face-to-face.
              <br />
              <br />
              Toluwanimi and Samuel — both engineers, both Nigerians, both
              deeply familiar with how commerce actually works on Lagos streets
              — decided to build the missing layer. Not a clone of Amazon. Not a
              copy of Jumia. Something built from scratch for how Nigerians
              actually buy, sell, negotiate, and transact.
              <br />
              <br />
              In early 2026, they incorporated Ikore Labs Limited in Lagos under
              CAMA 2020, built the platform architecture, and began working
              toward the launch of Korè — with food and agricultural goods as
              the first vertical, because that's where the waste crisis is most
              urgent, and where the impact will be most immediate.
              <br />
              <br />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: '600',
                  fontStyle: 'italic',
                  color: '#d3a014'
                }}
              >
                "Oja ti wa ni tiwa." The market has always been ours.
                <br />
              </span>
              <span style={{ fontWeight: '400' }}>Now we're building it.</span>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: '12px',
              marginTop: '96px'
            }}
          >
            <span
              className="text"
              style={{
                fontSize: '12px',
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '6px',
                color: '#7b6f65',
                textAlign: 'center'
              }}
            >
              COMPANY TIMELINE
            </span>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#d3a014'
              }}
            />
          </div>
          <div
            className="kore-timeline-container"
            style={{
              maxWidth: '1026px',
              width: '100%',
              height: '1341px',
              position: 'relative',
              margin: '32px auto 0 auto'
            }}
          >
            <div
              className="kore-timeline-card kore-timeline-card-1"
              style={{
                borderRadius: '16px',
                backgroundColor: '#f6f4e5',
                overflow: 'hidden',
                left: '514px',
                top: '7px',
                width: '512px',
                height: '310px',
                position: 'absolute'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  left: '25px',
                  top: 'calc(-111px + 50%)',
                  width: '462px',
                  height: '223px',
                  position: 'absolute'
                }}
              >
                <span
                  className="text"
                  style={{
                    display: 'inline',
                    textAlign: 'left',
                    fontSize: '20px',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: '400',
                    fontStretch: '100%',
                    color: '#d3a014',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  Early 2026
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '8px',
                    alignItems: 'start',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontFamily: 'Montserrat, system-ui, sans-serif',
                      fontWeight: '700',
                      fontStretch: '100%',
                      color: '#252323',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    The Problem Became Personal
                  </span>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      lineHeight: '32px',
                      fontSize: '20px',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                      fontWeight: '300',
                      fontStretch: '100%',
                      color: '#7b6f65',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Toluwanimi and Samuel identified a painful gap in Nigerian
                    commerce: 40M+ MSMEs with no trusted digital marketplace,
                    and 38M tonnes of food wasted every year because farmers
                    couldn't reach buyers fast enough.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="kore-timeline-card kore-timeline-card-2"
              style={{
                borderRadius: '16px',
                backgroundColor: '#f6f4e5',
                overflow: 'hidden',
                left: '0px',
                top: '362px',
                width: '512px',
                height: '298px',
                position: 'absolute'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  left: '25px',
                  top: 'calc(-112px + 50%)',
                  width: '461px',
                  height: '223px',
                  position: 'absolute'
                }}
              >
                <span
                  className="text"
                  style={{
                    display: 'inline',
                    textAlign: 'left',
                    fontSize: '20px',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: '400',
                    fontStretch: '100%',
                    color: '#d3a014',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  March 2026
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '8px',
                    alignItems: 'start',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontFamily: 'Montserrat, system-ui, sans-serif',
                      fontWeight: '700',
                      fontStretch: '100%',
                      color: '#252323',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Company Incorporated
                  </span>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      lineHeight: '32px',
                      fontSize: '20px',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                      fontWeight: '300',
                      fontStretch: '100%',
                      color: '#7b6f65',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Kore Technology Limited was formally incorporated in Lagos,
                    Nigeria, under CAMA 2020. The Founders' Agreement and
                    Articles of Association were executed, establishing the
                    company's dual-class share structure and governance
                    framework.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="kore-timeline-card kore-timeline-card-3"
              style={{
                borderRadius: '16px',
                backgroundColor: '#f6f4e5',
                overflow: 'hidden',
                left: '514px',
                top: '727px',
                width: '512px',
                height: '305px',
                position: 'absolute'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  left: '25px',
                  top: 'calc(-116.5px + 50%)',
                  width: '461px',
                  height: '234px',
                  position: 'absolute'
                }}
              >
                <span
                  className="text"
                  style={{
                    display: 'inline',
                    textAlign: 'left',
                    fontSize: '20px',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: '400',
                    fontStretch: '100%',
                    color: '#d3a014',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  April 2026
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '8px',
                    alignItems: 'start',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontFamily: 'Montserrat, system-ui, sans-serif',
                      fontWeight: '700',
                      fontStretch: '100%',
                      color: '#252323',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Platform Architecture Built
                  </span>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      lineHeight: '32px',
                      fontSize: '20px',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                      fontWeight: '300',
                      fontStretch: '100%',
                      color: '#7b6f65',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Samuel completed the core platform architecture — Laravel
                    backend, TypeScript API, Supabase database, Google Cloud Run
                    infrastructure. Toluwanimi defined the product roadmap,
                    brand identity, and go-to-market strategy.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="kore-timeline-card kore-timeline-card-4"
              style={{
                borderRadius: '16px',
                backgroundColor: '#f6f4e5',
                overflow: 'hidden',
                left: '0px',
                top: '1072px',
                width: '512px',
                height: '269px',
                position: 'absolute'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  left: '25px',
                  top: 'calc(-100.5px + 50%)',
                  width: '461px',
                  height: '202px',
                  position: 'absolute'
                }}
              >
                <span
                  className="text"
                  style={{
                    display: 'inline',
                    textAlign: 'left',
                    fontSize: '20px',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: '400',
                    fontStretch: '100%',
                    color: '#d3a014',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  Q3 2026
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '8px',
                    alignItems: 'start',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontFamily: 'Montserrat, system-ui, sans-serif',
                      fontWeight: '700',
                      fontStretch: '100%',
                      color: '#252323',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    MVP Launch — Target
                  </span>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      lineHeight: '32px',
                      fontSize: '20px',
                      fontFamily: 'Outfit, system-ui, sans-serif',
                      fontWeight: '300',
                      fontStretch: '100%',
                      color: '#7b6f65',
                      width: '100%',
                      position: 'relative',
                      flexShrink: '0'
                    }}
                  >
                    Korè platform goes live. First 500 verified sellers
                    onboarded in Lagos. Food and agricultural goods as the
                    anchor category. Escrow payments via Paystack. Logistics
                    integration active.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="kore-timeline-center-line"
              style={{
                left: '506px',
                top: '0px',
                width: '16px',
                height: '1339px',
                position: 'absolute'
              }}
            >
              <div
                style={{
                  borderWidth: '2px 0px 0px',
                  borderStyle: 'solid',
                  borderColor: '#7b6f65',
                  transformOrigin: '0 0',
                  transform: 'rotate(-89.9deg)',
                  left: '4px',
                  top: '1339px',
                  width: '1332px',
                  height: '2px',
                  position: 'absolute'
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '340px',
                  alignItems: 'start',
                  justifyContent: 'flex-start',
                  left: '0px',
                  top: '0px',
                  width: '16px',
                  position: 'absolute'
                }}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#d3a014',
                    aspectRatio: '1',
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                />
                <div
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#d3a014',
                    aspectRatio: '1',
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                />
                <div
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#d3a014',
                    aspectRatio: '1',
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                />
                <div
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#d3a014',
                    aspectRatio: '1',
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="kore-cta-box"
            style={{
              borderRadius: '20px',
              backgroundColor: '#194332',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <svg
              width="756"
              height="828"
              viewBox="0 0 756 828"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="none"
              style={{
                transformOrigin: '0 0',
                transform: 'rotate(90deg) translateZ(0)',
                willChange: 'transform',
                pointerEvents: 'none',
                top: '-85px',
                right: '-807px',
                width: '756px',
                height: '828px',
                position: 'absolute'
              }}
            >
              <g>
                <path
                  d="M756 0L754.7504 357.096 2.4992 663 0 317.1412 756 0Z"
                  style={{ fillRule: 'nonzero', fill: '#164d37' }}
                />
                <path
                  d="M756 77L754.7504 434.096 2.4992 740 0 394.1412 756 77Z"
                  style={{ fillRule: 'nonzero', fill: '#1a6044' }}
                />
                <path
                  d="M756 165L754.7504 522.096 2.4992 828 0 482.1412 756 165Z"
                  style={{ fillRule: 'nonzero', fill: '#217b57' }}
                />
              </g>
            </svg>
            <div className="kore-cta-content">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  position: 'relative',
                  flexShrink: '0'
                }}
              >
                <span
                  className="kore-cta-heading text"
                  style={{
                    display: 'inline',
                    textAlign: 'center',
                    fontSize: '48px',
                    fontFamily: 'Montserrat, system-ui, sans-serif',
                    fontWeight: '700',
                    fontStretch: '100%',
                    color: '#fff',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  Want to Build With Us?
                </span>
                <span
                  className="kore-cta-text text"
                  style={{
                    display: 'inline',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontWeight: '300',
                    fontStretch: '100%',
                    color: '#fff',
                    width: '100%',
                    position: 'relative',
                    flexShrink: '0'
                  }}
                >
                  Korè is a pre-seed startup building something that matters.
                  We're looking for engineers, designers, and operations leads
                  who believe the Nigerian market deserves world-class
                  infrastructure.
                  <br />
                </span>
              </div>
              <div
                className="kore-cta-buttons"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: '20px',
                  marginTop: '48px',
                  position: 'relative',
                  pointerEvents: 'auto',
                  zIndex: 5
                }}
              >
                <a
                  href="mailto:careers@kore.ng"
                  style={{
                    borderRadius: '10px',
                    backgroundColor: '#d3a014',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gridColumnGap: '8px',
                    width: '259px',
                    height: '65px',
                    position: 'relative',
                    flexShrink: '0',
                    padding: '10px 16px',
                    textDecoration: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M19.5 0H1.5C1.1022 0 0.7206 0.158 0.4393 0.4393 0.158 0.7206 0 1.1022 0 1.5V13.5C0 13.8978 0.158 14.2794 0.4393 14.5607 0.7206 14.842 1.1022 15 1.5 15H19.5C19.8978 15 20.2794 14.842 20.5607 14.5607 20.842 14.2794 21 13.8978 21 13.5V1.5C21 1.1022 20.842 0.7206 20.5607 0.4393 20.2794 0.158 19.8978 0 19.5 0ZM17.85 1.5L10.5 6.585 3.15 1.5H17.85ZM1.5 13.5V2.1825L10.0725 8.115C10.198 8.2021 10.3472 8.2488 10.5 8.2488 10.6528 8.2488 10.802 8.2021 10.9275 8.115L19.5 2.1825V13.5H1.5Z"
                      fill="#fff"
                    />
                  </svg>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '18px',
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontWeight: '600',
                      color: '#fff',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    careers@kore.ng
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/koreagric"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#7b6f65',
                    borderRadius: '10px',
                    backgroundColor: '#f9fdfc',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gridColumnGap: '8px',
                    width: '259px',
                    height: '65px',
                    position: 'relative',
                    flexShrink: '0',
                    padding: '10px 16px',
                    textDecoration: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <svg
                    width="20.5"
                    height="20.5"
                    viewBox="0 0 20.5 20.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2.75 0C2.0207 0 1.3212 0.2897 0.8055 0.8055 0.2897 1.3212 0 2.0207 0 2.75 0 3.4793 0.2897 4.1788 0.8055 4.6945 1.3212 5.2103 2.0207 5.5 2.75 5.5 3.4793 5.5 4.1788 5.2103 4.6945 4.6945 5.2103 4.1788 5.5 3.4793 5.5 2.75 5.5 2.0207 5.2103 1.3212 4.6945 0.8055 4.1788 0.2897 3.4793 0 2.75 0ZM1.5 2.75C1.5 2.4185 1.6317 2.1005 1.8661 1.8661 2.1005 1.6317 2.4185 1.5 2.75 1.5 3.0815 1.5 3.3995 1.6317 3.6339 1.8661 3.8683 2.1005 4 2.4185 4 2.75 4 3.0815 3.8683 3.6339 3.6339 3.3995 3.8683 3.0815 4 2.75 4 2.4185 4 2.1005 3.8683 1.8661 3.6339 1.5 3.0815 1.5 2.75ZM0 6.75C0 6.5511 0.079 6.3603 0.2197 6.2197 0.3603 6.079 0.5511 6 0.75 6H4.75C4.9489 6 5.1397 6.079 5.2803 6.2197 5.421 6.3603 5.5 6.5511 5.5 6.75V19.75C5.5 19.9489 5.421 20.1397 5.2803 20.2803 5.1397 20.421 4.9489 20.5 4.75 20.5H0.75C0.5511 20.5 0.3603 20.421 0.2197 20.2803 0.079 20.1397 0 19.9489 0 19.75V6.75ZM1.5 7.5V19H4V7.5H1.5ZM7 6.75C7 6.5511 7.079 6.3603 7.2197 6.2197 7.3603 6.079 7.5511 6 7.75 6H11.75C11.9489 6 12.1397 6.079 12.2803 6.2197 12.421 6.3603 12.5 6.5511 12.5 6.75V7.184L12.935 6.997C13.6851 6.6766 14.4807 6.4758 15.293 6.402 18.068 6.15 20.5 8.33 20.5 11.13V19.75C20.5 19.9489 20.421 20.1397 20.2803 20.2803 20.1397 20.421 19.9489 20.5 19.75 20.5H15.75C15.5511 20.5 15.3603 20.421 15.2197 20.2803 15.079 20.1397 15 19.9489 15 19.75V12.75C15 12.4185 14.8683 12.1005 14.6339 11.8661 14.3995 11.6317 14.0815 11.5 13.75 11.5 13.4185 11.5 13.1005 11.6317 12.8661 11.8661 12.6317 12.1005 12.5 12.4185 12.5 12.75V19.75C12.5 19.9489 12.421 20.1397 12.2803 20.2803 12.1397 20.421 11.9489 20.5 11.75 20.5H7.75C7.5511 20.5 7.3603 20.421 7.2197 20.2803 7.079 20.1397 7 19.9489 7 19.75V6.75ZM8.5 7.5V19H11V12.75C11 12.0207 11.2897 11.3212 11.8055 10.8055 12.3212 10.2897 13.0207 10 13.75 10 14.4793 10 15.1788 10.2897 15.6945 10.8055 16.2103 11.3212 16.5 12.0207 16.5 12.75V19H19V11.13C19 9.226 17.339 7.722 15.43 7.896 14.7741 7.9555 14.1317 8.1175 13.526 8.376L12.046 9.011C11.9318 9.06 11.8073 9.0799 11.6836 9.0689 11.5598 9.0579 11.4407 9.0163 11.337 8.9479 11.2333 8.8795 11.1482 8.7864 11.0894 8.677 11.0306 8.5676 10.9999 8.4452 11 8.321V7.5H8.5Z"
                      fill="#7b6f65"
                    />
                  </svg>
                  <span
                    className="text"
                    style={{
                      display: 'inline',
                      textAlign: 'left',
                      fontSize: '18px',
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontWeight: '600',
                      color: '#7b6f65',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Follow on LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
