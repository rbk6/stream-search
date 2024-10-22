'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'

export default function Search() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const initialQuery = searchParams.get('q') || ''
	const [query, setQuery] = useState(initialQuery)

	useEffect(() => {
		const q = searchParams.get('q') || ''
		setQuery(q)
	}, [searchParams, pathname])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (query.replace(/ /g, '').length === 0) {
			router.push(`/`)
		} else {
			router.push(`/movies?q=${encodeURIComponent(query)}`)
		}
	}

	return (
		<div className={styles.wrap}>
			<form className={styles.container} onSubmit={handleSubmit}>
				<input
					className={styles.search}
					placeholder="Search for movies..."
					type="text"
					value={query}
					defaultValue={query}
					onChange={e => setQuery(e.target.value)}
				></input>
				<button className={styles.btn} type="submit">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
		</div>
	)
}
