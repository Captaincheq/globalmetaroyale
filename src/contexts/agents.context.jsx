import { createContext,useState } from "react";
import AGENT_DATA from '../database/shop-data.json';

export const AgentsContext = createContext({
    agents: [],
});

export const AgentProvider = ({children}) => {
    const [agents,setAgents] = useState(AGENT_DATA);
    const value = {agents};
    return (
        <AgentsContext.Provider value={value}>
            {children}
        </AgentsContext.Provider>
    )
}