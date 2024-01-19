import './App.css'
import TwitterFollowCard from './TwitterFollowCard';
export default function App(){
	return(
		<>
			<TwitterFollowCard network="github" userName="mequerejeta" name="Matias Ezequiel Querejeta"/>
			<TwitterFollowCard network="youtube" userName="nojsnogain" name="Mati Youtube"/>
			<TwitterFollowCard network="twitter" userName="mati_querejeta" name="Mati Twitter"/>
		</>
	);
}