import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: {tabsItems: Array<{title: string, status: "all" | "landing" | "react" | "spa"}>}) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item.title}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
ul {
  display: flex;
  //gap: 20px;
  justify-content: space-between;
  max-width: 352px;
  width: 100%;
  border: 1px solid red;
  margin: 0 auto 40px;
}
`

const ListItem = styled.li`
`