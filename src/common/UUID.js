function UUID() {
    this.id = this.createUUID();
}
UUID.prototype.createUUID = function () {
    var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
    var dc = new Date();
    var t = dc.getTime() - dg.getTime();
    var h = '';
    var tl = UUID.getIntegerBits(t, 0, 31);
    var tm = UUID.getIntegerBits(t, 32, 47);
    var thv = UUID.getIntegerBits(t, 48, 59) + '1';
    var csar = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var csl = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var n = UUID.getIntegerBits(UUID.rand(8191), 0, 7)
        + UUID.getIntegerBits(UUID.rand(8191), 8, 15)
        + UUID.getIntegerBits(UUID.rand(8191), 0, 7)
        + UUID.getIntegerBits(UUID.rand(8191), 8, 15)
        + UUID.getIntegerBits(UUID.rand(8191), 0, 15); // this last number is two octets long
    return tl + h + tm + h + thv + h + csar + csl + h + n;
};
UUID.getIntegerBits = function (val, start, end) {
    var base16 = UUID.returnBase(val, 16);
    var quadArray = [];
    var quadString = '';
    var i = 0;
    for (i = 0; i < base16.length; i++) {
        quadArray.push(base16.substring(i, i + 1));
    };

    for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
        if (!quadArray[i] || quadArray[i] === '') {
            quadString += '0';
        } else {
            quadString += quadArray[i];
        };

    };

    return quadString;
};
UUID.returnBase = function (number, base) {
    var convert = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
    if (number < base) {
        var output = convert[number];
    } else {
        var MSD = '' + Math.floor(number / base);
        var LSD = number - MSD * base;
        var output;
        if (MSD >= base) {
            output = this.returnBase(MSD, base) + convert[LSD];
        } else {
            output = convert[MSD] + convert[LSD];
        };
    };
    return output;
};
UUID.rand = function (max) {
    return Math.floor(Math.random() * max);
};

export default () => {
    var storage = window.localStorage;
    var createdID = storage.getItem('UUID');
    if (!createdID) {
        createdID = new UUID().createUUID();
        storage.setItem('UUID', createdID);
    };
    return createdID;
};
