import React from 'react';
import styles from './FooterItem.module.scss';

const FooterItem = ({ href, name, children }) => {
	return(
		<div className={styles.footerItem}>
			<p>{children}</p>
			<a href={href}>{name}</a>
		</div>
	)
}

export default FooterItem;