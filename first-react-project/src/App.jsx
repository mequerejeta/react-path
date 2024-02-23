import './App.css'

import TwitterFollowCard from './TwitterFollowCard';

export default function App(){
	const formatUserName = (userName) => '@'+userName
	return(
		<section className='App'>
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={true} 
			network="github" 
			userName="mequerejeta" >
			Matias Querejeta
		</TwitterFollowCard>
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={false}  
			network="youtube" 
			userName="nojsnogain">
			Matias Querejeta
		</TwitterFollowCard>
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={true} network="twitter" 
			userName="mati_querejeta" >
				Matias Querejeta
			</TwitterFollowCard>
		</section>
	);
}