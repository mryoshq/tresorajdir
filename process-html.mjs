import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier-terser'

// Get all HTML files from the output directory
const path = './.vercel/output/static'
const files = await globby(`${path}/**/*.html`)

await Promise.all(
    files.map(async (file) => {
   	 //console.log('Processing file:', file)
   	 let html = await fs.readFile(file, 'utf-8')

	 // Minify the HTML
	 html = await minify(html, {
		 removeComments: true,
		 removeCommentsFromCDATA: true,
		 removeCDATASectionsFromCDATA: true,
		 collapseWhitespace: true,
		 collapseBooleanAttributes: true,
		 removeAttributeQuotes: true,
		 removeEmptyAttributes: true,
		 removeOptionalTags: true,
		 removeRedundantAttributes: true,
		 removeScriptTypeAttributes: true,
		 removeStyleLinkTypeAttributes: true,
		 useShortDoctype: true,
		 minifyCSS: true,
		 minifyJS: true,
		 minifyURLs: true,
		 sortAttributes: true,
		 sortClassName: true
	 })
   	 await fs.writeFile(file, html)
    })
)