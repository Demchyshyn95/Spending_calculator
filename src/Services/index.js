export class currencyService {
    key = 'ef1c3fb249c5328dbbdc5cfaa92fc8b6';
    pln;
    euro;
    USD = 'USD';
    EUR = 'EUR';

    async getEUR(money, valuta) {


        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${this.key}&symbols=USD,AUD,CAD,PLN,MXN&format=1`)
        const {rates} = await response.json();
        if (rates) {
            if (valuta === this.EUR) {
                this.pln = rates.PLN * money;
                return this.pln;
            }
            this.euro = rates.USD * money;
            this.pln = rates.PLN * money;
        }

        return this.pln
    }
}

