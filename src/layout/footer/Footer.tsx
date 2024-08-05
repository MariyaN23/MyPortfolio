import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialItemsData = [
    {
        iconId: "github",
        link: "https://github.com/MariyaN23",
    },
    {
        iconId: "telegram",
        link: "https://t.me/maryiaN2023",
    },
    {
        iconId: "linkedin",
        link: "https://www.linkedin.com/in/maryianikitenko",
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Maria Nikitenko</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index)=>{
                        return (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <a href={s.link} target="_blank" rel="noopener noreferrer">
                                    <Icon height={"25px"} width={"25px"} viewBox={"1 0 22 20"} iconId={s.iconId}/>
                                </a>
                            </S.SocialLink>
                        </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Maria Nikitenko, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};