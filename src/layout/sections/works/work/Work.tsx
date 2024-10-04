import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from "../Works_Styles";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    link: string;
    code: string;
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>
                    <Link href={props.link} target="_blank" rel="noopener noreferrer">
                        view project
                    </Link>
                </Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={props.link} target="_blank" rel="noopener noreferrer">demo</Link>
                <Link href={props.code} target="_blank" rel="noopener noreferrer">code</Link>
            </S.Description>
        </S.Work>
    );
};



