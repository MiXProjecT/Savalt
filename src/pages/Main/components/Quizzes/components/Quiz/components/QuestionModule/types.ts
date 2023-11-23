import { AnswerTypeCheckmark, IForm } from '../../types';
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IQuestionModule {
    counter: number;
    next: () => void;
    control: Control<IForm>;
    register: UseFormRegister<IForm>;
    errors: FieldErrors<IForm>;
}
