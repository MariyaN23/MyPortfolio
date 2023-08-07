import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.webp";
import timerImg from "../../../assets/images/proj-2.webp"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

//const tabsItems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{title: string, status: "all" | "landing" | "react" | "spa"}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]

const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa"
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "React"
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    const filteredWorks = worksData

    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {filteredWorks.map((w, index) => {
                        return <Work title={w.title} key={index}
                                     text={w.text}
                                     src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

