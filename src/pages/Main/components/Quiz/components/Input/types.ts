import { InputType } from '../../../../types';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../types';

export interface IInput {
    title: string;
    inputs: InputType[];
    register: UseFormRegister<IForm>;
}
