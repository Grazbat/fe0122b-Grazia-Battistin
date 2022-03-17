fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (abiti) {
    console.log(abiti);
    abiti.forEach(function (e) {
        var abiti = new Abiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.table(abiti);
        console.log('Sconto: ' + abiti.getSaldoCapo());
        console.log('Prezzo finale: ' + abiti.getAcquistoCapo());
    });
});
var Abiti = /** @class */ (function () {
    function Abiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abiti.prototype.getSaldoCapo = function () {
        return this.prezzoivaesclusa * this.saldo / 100;
    };
    Abiti.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Abiti;
}());
var corsetto = new Abiti(8, 2837, 'Estate', 'corsetto', 6124, 3, 'gialloPaglierino', 32.5, 39.65, 'megazzino', 32);
var miniGonna = new Abiti(9, 5438, 'Primavera', 'miniGonna', 5896, 15, 'Rosso', 54.9, 66.98, 'Negozio', 20);
var stivali = new Abiti(10, 3874, 'Autunno', 'stivali', 36732, 2, 'Vinaccia', 147, 179.34, 'Negozio', 45);
console.table('Lo sconto relativo a questo corsetto è di euro: ' + corsetto.getSaldoCapo());
console.table('Lo sconto relativo a questa mini gonna è di euro: ' + miniGonna.getSaldoCapo());
console.table('Lo sconto relativo a questi stivali è di euro: ' + stivali.getSaldoCapo());
console.table('Il prezzo finale di questo corsetto è di euro: ' + corsetto.getAcquistoCapo());
console.table('Il prezzo finale di questa mini gonna è di euro: ' + miniGonna.getAcquistoCapo());
console.table('Il prezzo finale di questi stivali è di euro: ' + stivali.getAcquistoCapo());
