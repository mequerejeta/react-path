import './App.css'
import TwitterFollowCard from './TwitterFollowCard';
export default function App(){
	const formatUserName = (userName) => '@'+userName
	return(
		<section className='App'>
			<TwitterFollowCard formatUserName={formatUserName} isFollowing={true} network="github" userName="mequerejeta" name="Matias Ezequiel Querejeta"/>
			<TwitterFollowCard formatUserName={formatUserName} isFollowing={false}  network="youtube" userName="nojsnogain" name="Mati Youtube"/>
			<TwitterFollowCard formatUserName={formatUserName} isFollowing={true} network="twitter" userName="mati_querejeta" name="Mati Twitter"/>
		</section>
	);
}