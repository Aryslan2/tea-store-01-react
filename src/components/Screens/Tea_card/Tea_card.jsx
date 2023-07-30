import React from 'react'
import styles from './Tea_card.module.css'

const Tea_card = (props) => {
	return (
		<div className={styles.Tea_card}>
			<div className={styles.Tea_card__container}>
				<div className={styles.Tea_card__inner}>
					<div className={styles.Tea_card__poster}>
						<img className={styles.imagecard} src={props.image ? props.image : "no_img.jpg"}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null; 
							currentTarget.src="no_img.jpg";
						}}/>
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{props.name}</div>
						<div className={styles.country}>Origin: {props.origin}</div>
						<div className={styles.type_of_tea}>Type: {props.type}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tea_card