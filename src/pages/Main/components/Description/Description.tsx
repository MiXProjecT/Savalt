import React from 'react';
import { Root, ListWrapper, ListItem, ListIcon } from './styles';
import { Typography } from '../../../../components';
import { IDescription } from './types';

const Description: React.FC<IDescription> = ({ descriptions }) => {
    return (
        <Root>
            <Typography tag="h2" weight="bold" size="title" textDecoration="none" textAlign="center" color="orange">
                УСЛОВИЯ
            </Typography>
            <ListWrapper>
                {descriptions.map((description) => (
                    <ListItem key={description.id}>
                        <ListIcon src={description.icon} />
                        <Typography
                            tag="p"
                            weight="regular"
                            size="bigDescription"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            {description.description}
                        </Typography>
                    </ListItem>
                ))}
            </ListWrapper>
        </Root>
    );
};

export default Description;
