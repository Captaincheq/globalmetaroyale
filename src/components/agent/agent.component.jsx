import { useContext } from "react";
import { AgentsContext } from "../../contexts/agents.context";
import AgentCard from "../agent-card/agent-card.component";
import './agent.styles.scss';

export default function Agent() {
    const {agents} = useContext(AgentsContext);
return (
    <div className="agent">
        <h1>Images</h1>
        <div className="agent-container">
        
        {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent}/>
        ))}
        </div>
    </div>
   
)}