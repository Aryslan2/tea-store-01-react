import styles from './Header.module.css'

const Header = () => {

	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__inner}>
					<div className={styles.logo}>
						<a href="../Home">Tea<span className={styles.span_logo}>PoP</span></a>
					</div>
					<div className={styles.header__menu}>
						<ul className={styles.header__list}>
							<li className={styles.header__item}><a href="../Home" className={styles.header__link}>Home</a></li>
							<li className={styles.header__item}><a href="#" className={styles.header__link}>Filter</a></li>
							<li className={styles.header__item}><a href="#" className={styles.header__link}>Contacts</a></li>
							<form className={styles.search}>
								<input className={styles.search_bar} type="text" />
								<button className={styles.search_button}><img src="loop.png" /></button>
							</form>
						</ul>
					</div>
					<div className={styles.cart}>
						<button>Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header