import { IQuizList } from '../../types';

export interface IQuiz {
    quiz: IQuizList[];
}

export interface IForm {
    [key: string]: string;
}

export interface IFiller {
    completed: number;
}

export interface ICloudWrapper {
    completed: number;
}
