export class currencyService {
    key = 'ef1c3fb249c5328dbbdc5cfaa92fc8b6';
    pln;
    euro;
    EUR = 'EUR';

    async getEUR(money, valuta) {
        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${this.key}&symbols=USD,AUD,CAD,PLN,MXN&format=1`);
        const { rates:{ USD,PLN } } = await response.json();

        if (response.status === 200) {

            if (valuta === this.EUR) {
                this.pln = PLN * money;
                return this.pln;
            }
            this.euro = money / USD;
            this.pln = PLN * this.euro;
        }

        return this.pln
    }
}

