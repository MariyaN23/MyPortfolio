import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_styles"
import { Fade } from "react-awesome-reveal";


const skillData = [
    {
        iconId: "code",
        title: "html"
    },
    {
        iconId: "css",
        title: "css"
    },
    {
        iconId: "javascript",
        title: "JavaScript"
    },
    {
        iconId: "react",
        title: "React"
    },
    {
        iconId: "redux",
        title: "redux"
    },
    {
        iconId: "typeScript",
        title: "typescript"
    },
    {
        iconId: "react-router",
        title: "react router"
    },
    {
        iconId: "axios",
        title: "axios"
    },
    {
        iconId: "postman",
        title: "postman"
    },
    {
        iconId: "storybook",
        title: "storybook"
    },
    {
        iconId: "mui",
        title: "material ui"
    },
    {
        iconId: "sass",
        title: "Preprocessor (SASS)"
    },
    {
        iconId: "styled-components",
        title: "styled components"
    },
    {
        iconId: "figma",
        title: "WEB DESIgN"
    },
    {
        iconId: "mantine",
        title: "mantine"
    },
    {
        iconId: "express",
        title: "express"
    },
    {
        iconId: "mongodb",
        title: "mongodb"
    },
    {
        iconId: "git",
        title: "version control (git)"
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.15}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          //description={s.description}
                            />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
        ;
};