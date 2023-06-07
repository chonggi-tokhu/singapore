/* here is source of this code. `https://github.com/victorteokw/kroman-js/` */

function kroman() {
  `use strict`;
}
var thislastisn;
kroman.prototype = {
  kromanData: {
    ga: 0xac00,
    hih: 0xd7a3,
    headi: 588,
    bodyi: 28,
    taili: 1,
    headj: {
      0: `g`,
      1: `kk`,
      2: `n`,
      3: `d`,
      4: `tt`,
      5: `r`,
      6: `m`,
      7: `b`,
      8: `pp`,
      9: `s`,
      10: `ss`,
      11: ``,
      12: `j`,
      13: `tch`,
      14: `ch'`,
      15: `k'`,
      16: `t'`,
      17: `p'`,
      18: `h`,
    },
    bodyj: {
      0: `a`,
      1: `ae`,
      2: `ya`,
      3: `yae`,
      4: `ŏ`,
      5: `e`,
      6: `yŏ`,
      7: `ye`,
      8: `o`,
      9: `wa`,
      10: `wae`,
      11: `oe`,
      12: `yo`,
      13: `u`,
      14: `wŏ`,
      15: `we`,
      16: `wi`,
      17: `yu`,
      18: `ŭ`,
      19: `ŭi`,
      20: `i`,
    },
    tailj: {
      0: ``,
      1: `k`,
      2: `kk`,
      3: `ks`,
      4: `n`,
      5: `nj`,
      6: `nh`,
      7: `t`,
      8: `l`,
      9: `rk`,
      10: `rm`,
      11: `rb`,
      12: `rs`,
      13: `rt`,
      14: `rp`,
      15: `rh`,
      16: `m`,
      17: `p`,
      18: `bs`,
      19: `s`,
      20: `ss`,
      21: `ng`,
      22: `t`,
      23: `t`,
      24: `k`,
      25: `t`,
      26: `p`,
      27: `h`,
    },
  },
  kroman2(text) {
    thislastisn = false;
    var kromanData = this.kromanData;
    var retval = ``;
    var lastCharIsHangul = false;
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      var charCode2 = text[i].charCodeAt(0);
      var charCode3 = Math.floor((charCode2 - kromanData.ga) % kromanData.headi);
      console.log((Math.floor(headl % kromanData.bodyi)));
      var headl = Math.floor((charCode - kromanData.ga) % kromanData.headi);
      if ((Math.floor(headl % kromanData.bodyi)) == "n") {
        thislastisn = true;
        console.log("hellosss");
      }
      if (Math.floor((charCode - kromanData.ga) / kromanData.headi) == "g" && thislastisn == true) {
        retval[i] = `'g`;
        thislastisn = false;
      }
      if (charCode >= kromanData.ga && charCode <= kromanData.hih) {
        var head = Math.floor((charCode - kromanData.ga) / kromanData.headi);
        var headl = Math.floor((charCode - kromanData.ga) % kromanData.headi);
        var body = Math.floor(headl / kromanData.bodyi);
        var tail = Math.floor(headl % kromanData.bodyi);
        if (lastCharIsHangul) {
          retval += ``;
        }
        retval +=
          kromanData.headj[head] +
          kromanData.bodyj[body] +
          kromanData.tailj[tail];
        retval = retval.replace(` b`, ` p`);
        retval = retval.replace(` g`, ` k`);
        retval = retval.replace(` d`, ` t`);
        retval = retval.replace(` j`, ` ch`);
        retval = retval.replace(`lr`, `ll`);
        lastCharIsHangul = true;
      } else {
        lastCharIsHangul = false;
        retval += text[i];
      }
    }
    return retval;
  },
};
