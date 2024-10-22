'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import styles from './MovieCarousel.module.css'

export default function MovieCarousel({ movies, label, speed }) {
	return (
		<div className={styles.carousel}>
			<h1 className={styles.title}>{label}</h1>
			<div style={{ position: 'relative' }}>
				<Splide
					options={{
						type: 'loop',
						autoScroll: {
							pauseOnHover: true,
							pauseOnFocus: false,
							speed: speed,
							rewind: true
						},
						pagination: false,
						fixedWidth: '300px',
						gap: '12px'
					}}
					extensions={{ AutoScroll }}
				>
					{movies.map((movie, index) => (
						<SplideSlide key={`${label}-${index}`}>
							<img
								className={styles.poster}
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt={movie.title}
							/>
						</SplideSlide>
					))}
				</Splide>
				<div className={styles.vignette} />
			</div>
		</div>
	)
}
