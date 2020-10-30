/* Tailwind - The Utility-First CSS Framework */

/* Config */

const colors = {
  black: '#000',
  blackOverlay: 'rgba(0, 0, 0, 0.393)',
  white: '#fff',
  offWhite: 'rgba(255, 255, 255, 0.884)',
  primary: '#FD5D5A',
  primaryTransparent: 'rgba(253, 93, 90, 0.452)',
  secondary: '#57B8E8',
  secondaryTransparent: 'rgba(122, 199, 195, 0.863)',
  secondaryMoreTransparent: 'rgba(122, 199, 195, 0.463)',
  disabled: '#E5E5E5',
  terciary: '#131313',
  background: '#f8f9fd',
  defaultButtonHover: '#D64D4A',
  grey: {
    10: '#E6E7E8',
    40: '#A7A9AC',
    70: '#484848',
    80: '#B8D2DF',
    90: '#BCBEC0',
    400: '#6D6E71',
    500: '#A3A3A5',
    700: '#F8F7F7',
    750: '#faf9f9',
    800: '#E5E5E5',
    1100: '#D1D1D3'
  },
  blue: {
    100: '#8CC3DE',
    200: '#29BAED'
  },
  modal: 'rgba(0, 0, 0, .5)'
}

const spacing = {
  px: '1px',
  auto: 'auto',
  0: '0',
  4: '4px',
  5: '5px',
  6: '6px',
  8: '8px',
  10: '10px',
  11: '11px',
  12: '12px',
  13: '13px',
  14: '14px',
  15: '15px',
  16: '16px',
  17: '17px',
  18: '18px',
  20: '20px',
  21: '21px',
  22: '22px',
  24: '24px',
  26: '26px',
  27: '27px',
  29: '29px',
  31: '31px',
  32: '32px',
  33: '33px',
  37: '37px',
  40: '40px',
  41: '41px',
  45: '45px',
  48: '48px',
  50: '50px',
  55: '55px',
  56: '56px',
  58: '58px',
  60: '60px',
  64: '64px',
  72: '72px',
  75: '75px',
  91: '91px',
  98: '98px',
  120: '120px',
  144: '144px',
  156: '156px',
  '-16': '-16px'
}
const sizing = {
  auto: 'auto',
  px: '1px'
}

module.exports = {
  theme: {
    colors,

    screens: {
      xsm: '400px',
      sm: '577px',
      midsm: '625px',
      md: '769px',
      lg: '993px',
      '2lg': '1200px',
      xl: '1440px'
    },

    fontSize: {
      // Desktop font size
      'desktop-error': '19.375rem', // 310px
      'desktop-hero': '4rem', // 64px
      'desktop-hero-smaller': '2.75rem',
      'desktop-32': '2rem', // 32px
      'desktop-h1': '2.5rem', // 40px
      'desktop-h2': '1.875rem', // 30px
      'desktop-h3': '1.5rem', // 20px
      'desktop-h4': '1.1rem', // 17px
      'desktop-h5': '0.9375rem', // 15px
      'desktop-h6': '0.8125rem', // 13px
      'desktop-body': '1rem', // 16px
      'desktop-note': '0.6875rem', // 11px
      // Mobile font size
      'mobile-error': '10.4rem', // 156px
      'mobile-hero': '2.4rem', // 36px
      'mobile-h1': '2.133rem', // 32px
      'mobile-h2': '1.6rem', // 24px
      'mobile-h3': '1.133rem', // 17px
      'mobile-h5': '0.866rem', // 13px
      'mobile-h6': '0.733rem', // 11px
      'mobile-body': '1rem', // 15px
      'mobile-note': '0.533rem' // 8px
    },

    fontWeights: {},

    lineHeight: {
      default: 'normal',
      normal: '1', // 16px (font-size: 16px)
      sm: '0.9', // 16px (font-size: 15px)
      0: '0',
      '1sm': '1.06', // 16px (font-size: 15px)
      '2sm': '1.16', // 28px (font-size: 24px)
      '3sm': '1.17', // 20px (font-size: 17px)
      '4sm': '1.18', // 38px (font-size: 32px)
      '5sm': '1.2', // 24px (font-size: 20px)
      '6sm': '1.23', // 16px (font-size: 13px)
      '7sm': '1.25', // 80px (font-size: 64px)
      '8sm': '1.66', // 30px (font-size: 18px)
      '9sm': '1.5' // 30px (font-size: 20px)
    },

    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2
    },

    tracking: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em'
    },

    textColors: colors,

    backgroundColors: colors,

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    boxShadow: {
      100: '0 24px 35px 0 rgba(0, 0, 0, 0.2)',
      200: '-2px 4px 8px 0 rgba(0,0,0,0.13)',
      300: '0 2px 8px 0 rgba(0,0,0,0.19)',
      default: '-4px 4px 16px 0 rgba(0,0,0,0.13)',
      modal: '8px 8px 16px 0 rgba(0,0,0,0.5)',
      dropdown: '2px 2px 8px 0 rgba(0,0,0,0.5)',
      notification: '4px 4px 8px 0 rgba(0,0,0,0.26)',
      none: 'none'
    },

    borderWidths: {
      default: '1px',
      0: '0',
      1: '1px'
    },

    borderColor: global.Object.assign({}, colors),

    borderRadius: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      default: '0.25rem',
      full: '9999px'
    },

    width: global.Object.assign(
      {
        0: '0px',
        2: '2px',
        10: '10px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        72: '72px',
        80: '80px',
        88: '88px',
        100: '100px',
        105: '105px',
        120: '120px',
        128: '128px',
        132: '132px',
        140: '140px',
        160: '160px',
        168: '168px',
        176: '176px',
        200: '200px',
        220: '220px',
        225: '225px',
        272: '272px',
        300: '300px',
        328: '328px',
        336: '336px',
        352: '352px',
        384: '384px',
        520: '520px',
        544: '544px',
        576: '576px',
        650: '650px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
        1120: '1120px',
        1180: '1180px',
        auto: 'auto',
        '1/2': '50%',
        '3/10': '30%',
        '31/100': '31%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '7/25': '28%',
        '1/4': '25%',
        '12/50': '24%',
        '23/100': '23%',
        '11/50': '22%',
        '1/5': '20%',
        '2/5': '40%',
        '9/20': '45%',
        '24/50': '48%',
        '49/100': '49%',
        '3/4': '75%',
        '3/5': '60%',
        '5/6': '83.33333%',
        '95/100': '95%',
        full: '100%',
        screen: '100vw'
      },
      sizing
    ),

    height: global.Object.assign(
      {
        1: '1px',
        3: '3px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        29: '29px',
        32: '32px',
        42: '42px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
        74: '74px',
        80: '80px',
        87: '87%',
        88: '88px',
        89: '89px',
        96: '96px',
        104: '104px',
        128: '128px',
        136: '136px',
        140: '140px',
        144: '144px',
        152: '152px',
        160: '160px',
        162: '162px',
        168: '168px',
        176: '176px',
        177: '177px',
        180: '180px',
        184: '184px',
        193: '193px',
        200: '200px',
        208: '208px',
        230: '230px',
        240: '240px',
        248: '248px',
        280: '280px',
        288: '288px',
        312: '312px',
        336: '336px',
        344: '344px',
        361: '361px',
        392: '392px',
        408: '408px',
        450: '450px',
        465: '465px',
        470: '470px',
        500: '500px',
        510: '510px',
        520: '520px',
        530: '530px',
        560: '560px',
        570: '570px',
        full: '100%',
        screen40: '40vh',
        screen70: '70vh',
        screen90: '90vh',
        screen: '100vh'
      },
      sizing
    ),

    minWidth: {
      0: '0',
      16: '16px',
      56: '56px',
      88: '88px',
      120: '120px',
      130: '130px',
      136: '136px',
      140: '140px',
      144: '144px',
      150: '150px',
      152: '152px',
      168: '168px',
      184: '184px',
      200: '200px',
      230: '230px',
      232: '232px',
      240: '240px',
      248: '248px',
      260: '260px',
      480: '480px',
      full: '100%'
    },

    minHeight: {
      0: '0',
      full: '100%',
      32: '32px',
      48: '48px',
      56: '56px',
      88: '88px',
      144: '144px',
      184: '184px',
      368: '368px',
      408: '408px',
      416: '416px',
      776: '776px',
      screen: '100vh',
      screen120: '120vh'
    },

    maxWidth: {
      37: '37px',
      48: '48px',
      88: '88px',
      94: '94px',
      112: '112px',
      113: '113px',
      116: '116px',
      136: '136px',
      140: '140px',
      144: '144px',
      150: '150px',
      152: '152px',
      160: '160px',
      168: '168px',
      175: '175px',
      184: '184px',
      195: '195px',
      200: '200px',
      216: '216px',
      220: '220px',
      232: '232px',
      240: '240px',
      248: '248px',
      256: '256px',
      260: '260px',
      264: '264px',
      272: '272px',
      277: '277px',
      280: '280px',
      288: '288px',
      290: '290px',
      300: '300px',
      304: '304px',
      320: '320px',
      328: '328px',
      336: '336px',
      350: '350px',
      352: '352px',
      384: '384px',
      399: '399px',
      400: '400px',
      416: '416px',
      440: '440px',
      480: '480px',
      496: '496px',
      512: '512px',
      520: '520px',
      552: '552px',
      560: '560px',
      568: '568px',
      591: '591px',
      592: '592px',
      600: '600px',
      624: '624px',
      640: '640px',
      664: '664px',
      696: '696px',
      737: '737px',
      738: '738px',
      792: '792px',
      800: '800px',
      832: '832px',
      880: '880px',
      1000: '1000px',
      1120: '1120px',
      1152: '1152px',
      1160: '1160px',
      1180: '1180px',
      1220: '1220px',
      1240: '1240px',
      1250: '1250px',
      1440: '1440px',
      '1/44': '21.4%',
      '3/48': '57.2%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '2/5': '40%',
      '3/5': '60%',
      '1/2': '50%',
      '1/4': '25%',
      full: '100%'
    },

    maxHeight: {
      full: '100%',
      56: '56px',
      72: '72px',
      90: '90px',
      96: '96px',
      100: '100px',
      118: '118px',
      120: '120px',
      145: '145px',
      160: '160px',
      168: '168px',
      170: '170px',
      176: '176px',
      186: '186px',
      188: '188px',
      190: '190px',
      200: '200px',
      210: '210px',
      240: '240px',
      252: '252px',
      320: '320px',
      336: '336px',
      380: '380px',
      408: '408px',
      426: '426px',
      screen: '100vh'
    },

    padding: global.Object.assign(
      {
        0: '0',
        2: '2px',
        5: '5px',
        7: '7px',
        750: '7.5px',
        8: '8px',
        9: '9px',
        950: '9.5px',
        1050: '10.5px',
        1150: '11.5px',
        12: '12px',
        15: '15px',
        1550: '15.5px',
        16: '16px',
        19: '19px',
        20: '20px',
        24: '24px',
        25: '25px',
        26: '26px',
        28: '28px',
        30: '30px',
        31: '31px',
        32: '32px',
        34: '34px',
        35: '35px',
        36: '36px',
        37: '37px',
        39: '39px',
        40: '40px',
        42: '42px',
        43: '43px',
        44: '44px',
        46: '46px',
        47: '47px',
        48: '48px',
        50: '50px',
        51: '51px',
        52: '52px',
        55: '55px',
        56: '56px',
        57: '57px',
        62: '62px',
        64: '64px',
        65: '65px',
        66: '66px',
        70: '70px',
        72: '72px',
        80: '80px',
        88: '88px',
        96: '96px',
        104: '104px',
        110: '110px',
        112: '112px',
        128: '128px',
        160: '160px',
        224: '224px'
      },
      spacing
    ),

    margin: global.Object.assign(
      {
        0: '0',
        6: '6px',
        7: '7px',
        8: '8px',
        13: '13px',
        14: '14px',
        16: '16px',
        17: '17px',
        23: '23px',
        24: '24px',
        25: '25px',
        28: '28px',
        30: '30px',
        31: '31px',
        32: '32px',
        34: '34px',
        35: '35px',
        36: '36px',
        38: '38px',
        39: '39px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        66: '66px',
        72: '72px',
        74: '74px',
        80: '80px',
        87: '87px',
        88: '88px',
        90: '90px',
        100: '100px',
        105: '105px',
        128: '128px',
        135: '135px',
        160: '160px',
        auto: 'auto',
        unset: 'unset',

        // negative
        '-4': '-4px',
        '-12': '-12px',
        '-15': '-15px',
        '-25': '-25px',
        '-30': '-30px',
        '-120': '-120px'
      },
      spacing
    ),

    inset: {
      0: 0,
      7: '7px',
      8: '8px',
      10: '10px',
      16: '16px',
      17: '17px',
      20: '20px',
      24: '24px',
      35: '35px',
      40: '40px',
      45: '45px',
      49: '49px',
      48: '48px',
      55: '55px',
      65: '65px',
      74: '74px',
      76: '76px',
      80: '80px',
      auto: 'auto',
      '1/2': '50%'
    },

    negativeMargin: global.Object.assign({}, spacing),

    zIndex: {
      auto: 'auto',
      0: 0,
      10: 10,
      11: 11,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      1000: 1000,
      1001: 1001
    },

    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1'
    },

    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'last']
  }
}
