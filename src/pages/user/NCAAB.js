import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { LeadershipTable } from '../../components/user/picks/LeadershipTable'
import { NewsContainer } from '../../components/user/picks/NewsContainer'
import { StatsTable } from '../../components/user/picks/StatsTable'

export const NCAAB = () => {
  return (
    <div>
        <BreadcrumbTop title="Find your tipster"/>
        <NewsContainer categorry="NCAAB" rssLINK='https://rss.app/feeds/7V0qurGEk8FrWCPQ.xml'/>
        <StatsTable/>
        <LeadershipTable/>
        <div style={{height: "60px"}}></div>
    </div>
  )
}
