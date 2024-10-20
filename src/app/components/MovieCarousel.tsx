import { Movie } from '../lib/types'
import styles from './MovieCarousel.module.css'

export default function MovieCarousel({ movies, label }: { movies: Movie[]; label: string }) {
	return (
		<div className={styles.carousel}>
			<h1>{label}</h1>
			<div className={styles.slides}>
				{movies.map(movie => (
					<div className={styles.card} key={movie.id}>
						<img className={styles.poster} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
					</div>
				))}
			</div>
		</div>
	)
}
