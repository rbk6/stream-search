import MovieCarousel from './components/MovieCarousel'
import { getMovieLists } from './lib/api'
import styles from './page.module.css'
import { MOVIE_LISTS } from './lib/constants'

export default async function Home() {
	const nowPlaying = await getMovieLists(MOVIE_LISTS.NOW_PLAYING)
	const upcoming = await getMovieLists(MOVIE_LISTS.UPCOMING)
	const popular = await getMovieLists(MOVIE_LISTS.POPULAR)
	const topRated = await getMovieLists(MOVIE_LISTS.TOP_RATED)

	return (
		<div className={styles.page}>
			<header></header>
			<main className={styles.main}>
				<MovieCarousel label={'Now Playing'} movies={nowPlaying.results} />
				<MovieCarousel label={'Upcoming'} movies={upcoming.results} />
				<MovieCarousel label={'Popular'} movies={popular.results} />
				<MovieCarousel label={'Top Rated'} movies={topRated.results} />
			</main>
			<footer></footer>
		</div>
	)
}
