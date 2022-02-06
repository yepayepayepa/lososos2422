/**
 * Default pseudorandom provider, it uses a ArtBlocks
 * inspired seed generation and generation algorithm
 */
 class DefaultPseudorandomProvider {
    // Takes a string seed
    constructor(seed) {
        this.useA = false;
        let sfc32 = function (uint128Hex) {
            let a = parseInt(uint128Hex.substr(0, 8), 16);
            let b = parseInt(uint128Hex.substr(8, 8), 16);
            let c = parseInt(uint128Hex.substr(16, 8), 16);
            let d = parseInt(uint128Hex.substr(24, 8), 16);
            return function () {
                a |= 0; b |= 0; c |= 0; d |= 0;
                let t = (((a + b) | 0) + d) | 0;
                d = (d + 1) | 0;
                a = b ^ (b >>> 9);
                b = (c + (c << 3)) | 0;
                c = (c << 21) | (c >>> 11);
                c = (c + t) | 0;
                return (t >>> 0) / 4294967296;
            };
        };
        // seed prngA with first half of tokenData.hash
        this.prngA = new sfc32(seed.substr(2, 32));
        // seed prngB with second half of tokenData.hash
        this.prngB = new sfc32(seed.substr(34, 32));
        for (let i = 0; i < 1e6; i += 2) {
            this.prngA();
            this.prngB();
        }
    }
    // random number between 0 (inclusive) and 1 (exclusive)
    random() {
        this.useA = !this.useA;
        return this.useA ? this.prngA() : this.prngB();
    }
}

/**
 * An fxhash pseudorandom provider, it's just a facade
 * for the global objects available in the HTML
 */
class FxhashPseudorandomProvider {
    constructor() {
        // console.log("Using fxhash: " + fxhash + " as seed");
    }
    // Retrieves a pseudorandom decimal using the default global function fxrand()
    random() {
        return fxrand();
    }
}


pseudorandom = {
    pseudorandomProvider: new DefaultPseudorandomProvider("1234123412341234123412341234123412341234123412341234123412341234"),
    fxhash() {
        this.pseudorandomProvider = new FxhashPseudorandomProvider();
    },
    seed(seed) {
        this.pseudorandomProvider = new DefaultPseudorandomProvider(seed);
    },
    boolean() {
        return this.decimal(0, 1) < 0.5;
    },
    decimal(min = 0, max = 1) {
        return min + (this.pseudorandomProvider.random() * (max - min));
    },
    decimals(n, min, max) {
        const result = new Array(n);
        for (let i = 0; i < n; i++) {
            result[i] = this.decimal(min, max);
        }
        return result;
    },
    integer(min = 0, max = 1) {
        return Math.floor(this.decimal(min, max + 1));
    },
    integers(n, min, max) {
        const result = new Array(n);
        for (let i = 0; i < n; i++) {
            result[i] = this.integer(min, max);
        }
        return result;
    },
    selectIntegersFromRange(n, min, max) {
        const result = [];
      
        let tmp, a;
        for (let i = 0; i <= (max - min); i++) {
          result.push(i + min);
      
          a = this.integer(0, i);
      
          tmp = result[i];
          result[i] = result[a];
          result[a] = tmp;
        }
      
        return result.slice(0, n);
    },
    pick(list) {
        return list[this.integer(0, list.length - 1)];
    },
    weightedPick(list, weights) {
        let totalWeight = weights.reduce((a, b) => a + b);
        let index = this.decimal(0, totalWeight);
        let pick = 0, sum = 0;
        
        while (pick < weights.length && (sum += weights[pick]) < index) {
            pick++;
        }
        return list[min(list.length - 1, pick)];
    },
    pickButNot(list, exceptions) {
        const cleanList = list.filter(element => !exceptions.includes(element));
        return this.pick(cleanList);
    },
}