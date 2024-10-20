import { ACCESS_TOKEN } from './constants'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${ACCESS_TOKEN}`
	}
}

async function get(route: string) {
	try {
		const res = await fetch(route, options)
		return res.json()
	} catch (err) {
		console.log(err)
		return []
	}
}

export async function getMovieLists(type: string) {
	return await get(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`)
}
