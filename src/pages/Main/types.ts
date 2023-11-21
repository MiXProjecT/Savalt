export interface IDescriptionList {
    id: number;
    description: string;
    icon: string;
}

export type AnswerTypeSelect = {
    label: string;
    value: string;
};

export type AnswerTypeCheckmark = {
    label: string;
    value: string;
};

interface ICheckmark {
    readonly name: string;
    title: string;
    readonly type: 'checkmark';
    answers: AnswerTypeCheckmark[];
}

export type AnswerTypeRadioButtons = {
    answer: string;
    key: string;
};

interface IRadioButtons {
    readonly name: string;
    title: string;
    readonly type: 'radio';
    answers: AnswerTypeRadioButtons[];
}

export type AnswerTypeIPicture = {
    answer: string;
    key: string;
    image: string;
};

interface IPicture {
    readonly name: string;
    title: string;
    readonly type: 'picture';
    answers: AnswerTypeIPicture[];
}

export type SelectsType = {
    title: string;
    readonly type: 'select';
    readonly name: string;
    answers: AnswerTypeSelect[];
};

export type InputType = {
    readonly name: string;
    readonly type: 'input';
    title: string;
    placeholder: string;
};

export type GeneralShapeType = InputType | SelectsType;

interface IInputFields {
    title: string;
    readonly type: 'generalShape';
    inputs: GeneralShapeType[];
}

export type IQuizList = ICheckmark | IRadioButtons | IPicture | IInputFields;
