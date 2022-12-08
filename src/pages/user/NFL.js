import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { LeadershipTable } from '../../components/user/picks/LeadershipTable'
import { NewsContainer } from '../../components/user/picks/NewsContainer'
import { StatsTable } from '../../components/user/picks/StatsTable'

export const NFL = () => {
  return (
    <div>
        <BreadcrumbTop title="Find your tipster"/>
        <NewsContainer categorry="NFL" rssLINK='https://rss.app/feeds/lFD67n3EUXLSQlIn.xml'/>
        <StatsTable/>
        <LeadershipTable/>

        <div style={{height: "60px"}}></div>
    </div>
  )
}
