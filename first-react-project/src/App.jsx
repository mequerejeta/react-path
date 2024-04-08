import './App.css'
import TwitterFollowCard from './TwitterFollowCard';
import "./Styles.css";
import { Fragment } from 'react';

export default function App(){
	const formatUserName = (userName) => '@'+userName
	
	return(
		<Fragment>

		<section className='App'>
			
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={true} 
			network="github" 
			userName="mequerejeta" >
			Matias Querejeta
		</TwitterFollowCard>
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={false}  
			network="github" 
			userName="MarceloDanielToledo">
			Marcelo Toledo
		</TwitterFollowCard>
			<TwitterFollowCard formatUserName={formatUserName} 
			isFollowing={true} network="twitter" 
			userName="mati_querejeta" >
				Matias Querejeta
			</TwitterFollowCard>
		</section>
		
		</Fragment>
	);
}