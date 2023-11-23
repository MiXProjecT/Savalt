import React from 'react';
import { Root, ListWrapper, ListItem, ListIcon } from './styles';
import { Typography } from '../../../../components';
import { DESCRIPTION_LIST } from './constants';

const Description = () => {
    return (
        <Root>
            <Typography tag="h2" weight="bold" size="title" textDecoration="none" textAlign="center" color="orange">
                УСЛОВИЯ
            </Typography>
            <ListWrapper>
                {DESCRIPTION_LIST.map((description) => (
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
