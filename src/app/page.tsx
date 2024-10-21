import MovieCarousel from './components/MovieCarousel'
import { getMovieLists } from './lib/api'
import { MOVIE_LISTS } from './lib/constants'
import styles from './page.module.css'

export default async function Home() {
	const nowPlaying = await getMovieLists(MOVIE_LISTS.NOW_PLAYING)
	const upcoming = await getMovieLists(MOVIE_LISTS.UPCOMING)
	const popular = await getMovieLists(MOVIE_LISTS.POPULAR)
	const topRated = await getMovieLists(MOVIE_LISTS.TOP_RATED)

	return (
		<div className={styles.page}>
			<header></header>
			<main className={styles.main}>
				<MovieCarousel movies={nowPlaying.results} label={'Now Playing'} speed={0.1} />
				<MovieCarousel movies={upcoming.results} label={'Upcoming'} speed={-0.1} />
				<MovieCarousel movies={popular.results} label={'Popular'} speed={0.1} />
				<MovieCarousel movies={topRated.results} label={'Top Rated'} speed={-0.1} />
			</main>
			<footer></footer>
		</div>
	)
}
