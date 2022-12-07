import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { LeadershipTable } from '../../components/user/picks/LeadershipTable'
import { NewsContainer } from '../../components/user/picks/NewsContainer'
import { StatsTable } from '../../components/user/picks/StatsTable'

export const NCAAB = () => {
  return (
    <div>
        <BreadcrumbTop title="Find your tipster"/>
        <NewsContainer categorry="NCAAB" rssLINK='https://rss.app/feeds/tws8VcDCf1Mkp5or.xml'/>
        <StatsTable/>
        <LeadershipTable/>

        <div style={{height: "60px"}}></div>
    </div>
  )
}
