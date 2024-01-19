export default function TwitterFollowCard( { network, userName, name, isFollowing}) {
    const imageSrc =  'https://unavatar.io/'+network+'/'+userName;
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar' 
                alt="El avatar de matias_querejeta" 
                src={imageSrc}/>	
            <div className='tw-followCard-info'>
                <strong>{name}-{network}</strong>
                <span 
                className='tw-followCard-infoUserName'>
                    @{userName}
                </span>
            </div>
        </header>	
        <aside>
            <button className='tw-followCard-button'>
                Seguir	
            </button>	
        </aside>	
    </article>      
    )
}