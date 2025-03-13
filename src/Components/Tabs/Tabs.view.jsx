import './Tabs.styles.css'
import {useTabs} from "./Tabs.controller";

export const Tabs = (props) => {
    const {tabs, children, activeTab, tabChangeHandler} = useTabs(props)
    return (
        <>
            <nav className={'tabContainer'}>
                {tabs.map((item, index) => (
                    <div
                        className={`tabButton ${index === activeTab ? 'activeTabButton' : undefined}`}
                        key={item}
                        onClick={() => tabChangeHandler(index)}
                    >
                        <div className={'tabButtonText'}>
                            {item}
                        </div>
                    </div>
                ))}
            </nav>
            <div>{children[activeTab]}</div>
        </>
    )
}