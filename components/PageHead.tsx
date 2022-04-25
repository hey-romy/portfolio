import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'

// TODO: remove duplication between PageHead and NotionPage Head

export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#879ea8' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='https://romyvonerlea.com/social.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content='https://romyvonerlea.com/social.png' />

    </Head>
  )
}
