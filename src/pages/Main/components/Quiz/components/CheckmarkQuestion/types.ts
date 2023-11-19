import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../types';
import { AnswerTypeCheckmark } from '../../../../types';

export interface ICheckmarkQuestion {
    name: string;
    title: string;
    answers: AnswerTypeCheckmark[];
    register: UseFormRegister<IForm>;
}
