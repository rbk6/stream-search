'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './Search.module.css'

export default function Search() {
	const [query, setQuery] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<div className={styles.wrap}>
			<form className={styles.container} onSubmit={handleSubmit}>
				<input
					className={styles.search}
					placeholder="Search for movies..."
					type="text"
					onChange={e => setQuery(e.target.value)}
				></input>
				<button className={styles.btn} type="submit">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
		</div>
	)
}
