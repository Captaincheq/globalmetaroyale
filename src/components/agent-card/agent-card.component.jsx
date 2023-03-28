import './agent-card.styles.scss';

const AgentCard = ({agent}) => {
    const { name, price, imageUrl} = agent;
    return (<div className='agent-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='agent-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
    );
}

export default AgentCard;