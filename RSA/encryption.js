var p = 2, q = 11;
var N = p * q;
var P = (p-1)*(q-1);

var num = 2;
var e = 0;
while(num < P) {
    if(GCD(P, num) == 1) {
        e = num;
        break;
    }
    num++;
}

var d = 1 / (e % P);

var M = parseInt(5);

console.log(encryption(M, e, N));

function encryption(m, e, N) {
    c = (m**e) % N;
    return c;
}

function decryption(c, d, N) {
    m = (c**d) % N;
}


function GCD(a, b) {
    var tmp;

    while(true) {
        if (a < b) swap(a, b);
        if (a%b == 0) return b;
        else {
            tmp = a%b;
            a = b;
            b = tmp;
        }
    }
    return -1;
}

function swap(x, y) {
    var t = x;
    x = y;
    y = t;
}