const MAP = 'quizzMap';

export class Quizz {

    constructor(private name: string) { }

    save() {
        try {
            console.log('save');
            if (!localStorage.getItem(MAP)) {
                localStorage.setItem(MAP, JSON.stringify({}));
            }
            const quizzMap = JSON.parse(localStorage.getItem(MAP));
            quizzMap[this.name] = this;
            localStorage.setItem(MAP, JSON.stringify(quizzMap));
        } catch (e) {
            console.error(e);
        }

    }
}
