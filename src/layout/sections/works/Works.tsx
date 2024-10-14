import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import counterImg from "../../../assets/images/counter.webp";
import capybaraChat from "../../../assets/images/capybara-chat.webp";
import gameImg from "../../../assets/images/game-catch-the-orange.webp";
import socialImg from "../../../assets/images/social-network.webp";
import todolistImg from "../../../assets/images/todoList.webp";
import weatherImg from "../../../assets/images/weather-app.webp";
import shopyImg from "../../../assets/images/shopy.webp";
import realEstate from "../../../assets/images/real-estate-nextjs.png";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "JavaScript",
        status: "js"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "full-stack",
        status: "full-stack"
    }
]

const worksData = [
    {
        title: "Task manager",
        text: `It is a sleek and user-friendly app designed to help you efficiently manage your time and tasks. It empowers you to effortlessly create, track, and complete your to-do list, significantly enhancing your organization and productivity.`,
        src: todolistImg,
        link: "https://mariyan23.github.io/TodoList",
        code: "https://github.com/MariyaN23/TodoList",
        type: "react",
        id: 1
    },
    {
        title: "ConnectSphere",
        text: `This is a social platform that helps users find others with similar interests. It allows users to create profiles, add information, search for contacts, and communicate through messaging tools, aiming to expand social networks and facilitate interactions.`,
        link: "https://mariyan23.github.io/social-network",
        code: "https://github.com/MariyaN23/social-network",
        src: socialImg,
        type: "react",
        id: 2
    },
    {
        title: "CountUP",
        text: `CountUP is a thoughtfully designed and easy-to-navigate mobile application that provides a seamless experience for counting and incrementing numbers.`,
        link: "https://mariyan23.github.io/counter/",
        code: "https://github.com/MariyaN23/counter",
        src: counterImg,
        type: "react",
        id: 3
    },
    {
        title: "Game: Catch the orange",
        text: `Creating a game in native JavaScript with utilizing classes, object-oriented programming (OOP) principles, and design patterns to develop an engaging and interactive gaming experience`,
        link: "https://mariyan23.github.io/Game-Catch-the-orange/",
        code: "https://github.com/MariyaN23/Game-Catch-the-orange",
        src: gameImg,
        type: "js",
        id: 4
    },
    {
        title: "WeatherWise",
        text: `It is an intuitive app that helps you quickly and easily find and view the weather forecast for any city around the world. You can access up-to-date information about temperature, humidity, wind speed, and other weather conditions for the city you select. It helps you stay informed about current and upcoming weather conditions, making your life more comfortable and predictable.`,
        link: "https://mariyan23.github.io/weather-app/",
        code: "https://github.com/MariyaN23/weather-app",
        src: weatherImg,
        type: "react",
        id: 5
    },
    {
        title: "CapyСhat",
        text: `Online platform provides a welcoming environment for interacting with friends, and colleagues. It features an intuitive interface for exchanging messages, engaging in diverse discussions, organizing gatherings, and simply enjoying leisurely conversations`,
        link: "https://mariyan23.github.io/capybara-chat-front/",
        code: "https://github.com/MariyaN23/chat",
        src: capybaraChat,
        type: "react",
        id: 6
    },
    {
        title: "Shopy",
        text: `Allows you to access information about products available in the store, view the contents of your cart, and check your purchase history. You can conveniently track products you're interested in, add them to your cart for future checkout, and review your past orders.`,
        link: "https://shopy-test-task.onrender.com/",
        code: "https://github.com/MariyaN23/shopy-test-task",
        src: shopyImg,
        type: "full-stack",
        id: 7
    },
    {
        title: "FindRealty",
        text: `You can quickly and easily find your perfect home by filtering based on your preferences such as area, price, and more. It also provides detailed property descriptions, photos, and the ability to contact agents and schedule viewings. Whether you're looking to rent an apartment, buy a home, or invest in commercial real estate, FindRealty can help you find the ideal property that suits your needs and budget.`,
        link: "https://real-estate-nextjs-rho.vercel.app/",
        code: "https://github.com/MariyaN23/real-estate-nextjs",
        src: realEstate,
        type: "full-stack",
        id: 8
    },
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "js") {
        filteredWorks = worksData.filter(work => work.type === "js")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "full-stack") {
        filteredWorks = worksData.filter(work => work.type === "full-stack")
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px",
                                    flexGrow: 1, maxWidth: "540px"}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          key={w.id}
                                          text={w.text}
                                          src={w.src}
                                          link={w.link}
                                          code={w.code}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

