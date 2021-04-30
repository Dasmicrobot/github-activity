import React from 'react'
import Page from '../../src/layout/Page'
import Section from '../../src/layout/Section'
import Link from 'next/link'

const Cookies = () => {
  return (
    <Page>
      <Section>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/content">Content</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Cookie policy</li>
          </ol>
        </nav>
        <h1 className="h2">Cookie policy</h1>
      </Section>
    </Page>
  )
}

export default Cookies
