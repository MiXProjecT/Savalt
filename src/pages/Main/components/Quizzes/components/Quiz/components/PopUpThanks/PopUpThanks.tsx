import React from 'react';
import { Root, RootContent, TextWrapper, CloseWrapper, ContentCloseWrapper, Scrollbar } from './styles';
import { IPopUpThanks } from './types';
import { Button, Typography } from '@mainComponents/index';

const PopUpThanks: React.FC<IPopUpThanks> = ({ setActivePopUpThanks }) => {
    return (
        <Root onClick={() => setActivePopUpThanks(false)}>
            <Scrollbar />
            <ContentCloseWrapper>
                <CloseWrapper>
                    <Button onClick={() => setActivePopUpThanks(false)} variant="close" type="button"></Button>
                </CloseWrapper>
                <RootContent onClick={(e) => e.stopPropagation()}>
                    <TextWrapper>
                        <Typography tag="h3" variant="smallTitle1bold1center" color="orange">
                            Спасибо!
                        </Typography>
                        <Typography tag="p" variant="body1regular1center" color="black">
                            Вы в 1 шаге от приглашения на работу! В течении часа (в рабочее время) вам позвонит наш
                            менеджер или напишут в WhatsApp. Пожалуйста, будьте готовы ответить на сообщение/звонок.
                            Спасибо!
                        </Typography>
                    </TextWrapper>
                    <Button onClick={() => setActivePopUpThanks(false)} variant="control" type="button">
                        Все понятно
                    </Button>
                </RootContent>
            </ContentCloseWrapper>
        </Root>
    );
};

export default PopUpThanks;
