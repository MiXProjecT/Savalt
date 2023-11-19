import { AnswerTypeIPicture } from '../../../../types';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../types';

export interface IPictureQuestion {
    name: string;
    title: string;
    answer: AnswerTypeIPicture[];
    onClick: () => void;
    register: UseFormRegister<IForm>;
}
