import React from 'react';
import { Root, Logo, ManagersPhoneWrapper, LogoManagersPhoneWrapper } from './styles';
import logo from '../../assets/images/logo.png';
import { Link, Typography } from '../../components';

const Header = () => {
    return (
        <Root>
            <LogoManagersPhoneWrapper>
                <Logo src={logo} />
                <ManagersPhoneWrapper>
                    <Typography
                        tag="p"
                        weight="regular"
                        size="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Менеджер по персоналу Виктория:&nbsp;
                        <Link
                            color="orange"
                            variant="base"
                            href="tel:+79222144787"
                            display="nonFlex"
                            fontSize="subtext"
                            linkSize="base"
                        >
                            +7 (922) 214-47-87
                        </Link>
                    </Typography>
                </ManagersPhoneWrapper>
            </LogoManagersPhoneWrapper>
        </Root>
    );
};

export default Header;
