class formulas {
    constructor() { }

    primo(numero) {
        for (var i = 1; i <= numero; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    return i;
                }
            }
        }
    }
}

var primo1 = new formulas()