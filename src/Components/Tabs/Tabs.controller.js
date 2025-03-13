import {useState} from "react";

export const useTabs = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabChangeHandler = (index) => {
        setActiveTab(index);
        props.onTabChange(index)
    }

    return {
        ...props, activeTab, tabChangeHandler
    }
}