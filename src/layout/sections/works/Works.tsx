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
        title: "TodoList",
        text: `List of todo lists and tasks made with TS, MUI, React, Redux Toolkit, Saga, Storybook, Axios, Formik`,
        src: todolistImg,
        link: "https://mariyan23.github.io/TodoList",
        code: "https://github.com/MariyaN23/TodoList",
        type: "react",
        id: 1
    },
    {
        title: "Social Network",
        text: `Web app containing information about users using TS, React, Redux, React Router DOM, Formik, Axios`,
        link: "https://mariyan23.github.io/social-network",
        code: "https://github.com/MariyaN23/social-network",
        src: socialImg,
        type: "react",
        id: 2
    },
    {
        title: "Counter",
        text: `The counter was created using TS, React, Redux, Local Storage`,
        link: "https://mariyan23.github.io/counter/",
        code: "https://github.com/MariyaN23/counter",
        src: counterImg,
        type: "react",
        id: 3
    },
    {
        title: "Game: Catch the orange",
        text: `It’s a game created by using classes. The game is about capybaras trying to catch orange`,
        link: "https://mariyan23.github.io/Game-Catch-the-orange/",
        code: "https://github.com/MariyaN23/Game-Catch-the-orange",
        src: gameImg,
        type: "js",
        id: 4
    },
    {
        title: "Weather App",
        text: `Weather app on React and with Local Storage`,
        link: "https://mariyan23.github.io/weather-app/",
        code: "https://github.com/MariyaN23/weather-app",
        src: weatherImg,
        type: "react",
        id: 5
    },
    {
        title: "Capybara chat",
        text: `A project where I use scss, RTK, websocket library - Socket.io`,
        link: "https://mariyan23.github.io/capybara-chat-front/",
        code: "https://github.com/MariyaN23/chat",
        src: capybaraChat,
        type: "react",
        id: 6
    },
    {
        title: "Shopy",
        text: `Online shope, created with Mantine, Express, MongoDB, JWT, also connected payments in Stripe`,
        link: "https://shopy-test-task.onrender.com/",
        code: "https://github.com/MariyaN23/shopy-test-task",
        src: shopyImg,
        type: "full-stack",
        id: 7
    },
    {
        title: "Find Real Estate",
        text: `Accommodation search app, made with Next.js, Tailwind CSS, Google maps API, Clerk, supabase`,
        link: "https://real-estate-nextjs-rho.vercel.app/",
        code: "https://github.com/MariyaN23/real-estate-nextjs",
        src: realEstate,
        type: "full-stack",
        id: 7
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

