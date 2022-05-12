export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    //Pega a data atual
    get _actualDate() {
        return new Date();
    }
    //pega a data alvo
    get _futureDate() {
        return new Date(this.futureDate);
    }
    //Verifica a diferença entre a data alvo e a data atual.
    get _timeStampDiff() {
        //A função getTime retorna o tempo em milisegundos
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
    //Transforma o tempo de milisegundos para dias
    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    /*     get month() {
      return Math.floor(this.days / 30);
    } */
    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get seconds() {
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total() {
        /*         const month = this.month;
         */ const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;

        return {
            /*             month,
             */ days,
            hours,
            minutes,
            seconds,
        };
    }
}
