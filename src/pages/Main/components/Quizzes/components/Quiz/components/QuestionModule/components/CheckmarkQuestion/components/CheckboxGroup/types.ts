import { AnswerTypeCheckmark, IForm } from '../../../../../../types';

export interface ICheckboxGroup {
    answers: AnswerTypeCheckmark[];
    errors: boolean;
    onCheckChange: (value: string[]) => void;
    defaultValue: string;
}

export interface IErrors {
    errors: boolean;
}
