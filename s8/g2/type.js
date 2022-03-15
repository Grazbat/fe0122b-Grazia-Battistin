var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(nome, cognome, balanceInit) {
        this.balanceTot = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.balanceInit = balanceInit;
    }
    ;
    SonAccount.prototype.oneDeposit = function (versamento) {
        return this.balanceTot += versamento;
    };
    ;
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        return this.balanceTot -= prelievo;
    };
    return SonAccount;
}());
;
var figlio = new SonAccount('Giovangiorgio', 'Cuppitiello', 1800);
console.log(figlio.oneDeposit(1800));
console.log(figlio.oneWithDraw(300));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(nome, cognome, balanceInit, addInterest) {
        var _this = _super.call(this, nome, cognome, balanceInit) || this;
        _this.addInterest = addInterest;
        return _this;
    }
    MotherAccount.prototype.oneDeposit = function (versamento) {
        return this.balanceTot += versamento;
    };
    ;
    MotherAccount.prototype.oneWithDraw = function (prelievo) {
        return this.balanceTot -= prelievo;
    };
    return MotherAccount;
}(SonAccount));
var mother = new MotherAccount('Filomena', 'Spippitiella', 700, 10);
console.log(mother);
console.log(mother.oneDeposit(700));
console.log(mother.oneWithDraw(300));
