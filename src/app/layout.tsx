import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: '',
	description: ''
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
