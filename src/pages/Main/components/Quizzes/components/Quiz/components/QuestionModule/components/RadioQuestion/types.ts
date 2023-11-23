import { AnswerTypeRadioButtons } from '../../../../types';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../../types';

export interface IRadioQuestion {
    name: string;
    title: string;
    radio: AnswerTypeRadioButtons[];
    onClick: () => void;
    register: UseFormRegister<IForm>;
}
