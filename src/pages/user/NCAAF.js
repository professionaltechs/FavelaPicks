import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { LeadershipTable } from '../../components/user/picks/LeadershipTable'
import { NewsContainer } from '../../components/user/picks/NewsContainer'
import { StatsTable } from '../../components/user/picks/StatsTable'

export const NCAAF = () => {
  return (
    <div>
        <BreadcrumbTop title="Find your tipster"/>
        <NewsContainer  categorry="NCAAF" rssLINK='https://rss.app/feeds/v2xjjJ8dzo9aLoZY.xml'/>
        <StatsTable/>
        <LeadershipTable/>
        <div style={{height: "60px"}}></div>
    </div>
  )
}
