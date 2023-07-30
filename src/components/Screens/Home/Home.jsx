import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../../styles/Reset/Reset.css'
import Tea_card from '../Tea_card/Tea_card'

function Home() {

	const api_url = "https://boonakitea.cyclic.app/api/all";

	const [teas, setTeas] = useState([]);


	useEffect(() => {
		fetch(api_url)
		.then(res => res.json())
		.then(data => setTeas(data))
	}, [])

	console.log(teas);

	return (
		<div className={styles.Home}>
			<Header />
			<div className={styles.teas}>
				{teas.map((tea) => 
					<Tea_card {...tea} />
				)}	
			</div>
		</div>
	);
}

export default Home