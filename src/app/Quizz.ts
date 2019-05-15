const MAP = 'quizzMap';

export class Quizz {

    static list(): Quizz[] {
        if (!localStorage.getItem(MAP)) {
            return [];
        }
        const quizzMap = JSON.parse(localStorage.getItem(MAP));
        return Object.values(quizzMap);
    }

    constructor(public name: string) { }

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
