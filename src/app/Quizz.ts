export const MAP = 'quizzMap';

export interface Question {
    text: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    goodAnswer: string;
}

export class Quizz {
    questions: Question[] = [];



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
