export interface IDescriptionList {
    id: number;
    description: string;
    icon: string;
}

export type InputType = {
    readonly name: string;
    type: 'input';
    title: string;
    placeholder: string;
};

export type AnswerTypeSelect = {
    label: string;
    value: string;
};

export type SelectsTypeSelect = {
    title: string;
    type: 'select';
    readonly name: string;
    answers: AnswerTypeSelect[];
};

export type AnswerTypeCheckmark = {
    label: string;
    value: string;
};

interface ICheckmark {
    id: number;
    readonly name: string;
    title: string;
    type: 'checkmark';
    answers: AnswerTypeCheckmark[];
}

export type AnswerTypeRadioButtons = {
    answer: string;
    key: string;
};

interface IRadioButtons {
    id: number;
    readonly name: string;
    title: string;
    type: 'radio';
    answers: AnswerTypeRadioButtons[];
}

export type AnswerTypeIPicture = {
    answer: string;
    key: string;
    image: string;
};

interface IPicture {
    id: number;
    readonly name: string;
    title: string;
    type: 'picture';
    answers: AnswerTypeIPicture[];
}

export type GeneralShapeType = InputType | SelectsTypeSelect;

interface IInputFields {
    id: number;
    title: string;
    type: 'generalShape';
    inputs: GeneralShapeType[];
}
export type IQuizList = ICheckmark | IRadioButtons | IPicture | IInputFields;
