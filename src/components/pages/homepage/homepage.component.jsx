import React from "react";

import { HomepageLanding } from "./homepage-landing.component"
import { HomepageSegmentLight } from "./homepage-segment-light";
import { HomepageSegmentDark } from "./homepage-segment-dark";
import { ProposalTypes } from "../PageElements/ProposalTypes.component";

import { ContentTexts } from "../../contents/content_texts";

import icAboutUs from "../../../assets/bg-svg/section-icon-about-us.svg";
import icPrposal from "../../../assets/bg-svg/section-icon-proposal.svg";
import icSponsor from "../../../assets/bg-svg/section-icon-sponsor.svg";
import icSpeaker from "../../../assets/bg-svg/ic_proposal_card_3.svg";
import icProgramSchedule from "../../../assets/bg-svg/section-icon-program-schedule.svg";
import icNews from "../../../assets/bg-svg/section-icon-news.svg";
import { SpeakersList } from "../PageElements/SpekersList.component";
import { ScheduleTab } from "../PageElements/ScheduleTab.component"
import { EventsCounter } from "../PageElements/EventsCouter.component";
import { VenueMap } from "../PageElements/VenueMap.component";

export const HomepageComponent = () => {
    return (
        <div>
            <HomepageLanding contents={ContentTexts.homepage.landing} />

            <HomepageSegmentLight contents={ContentTexts.homepage.about} headerImage={icAboutUs} elements={<EventsCounter />} />
            <HomepageSegmentDark contents={ContentTexts.homepage.proposal} headerImage={icPrposal} elements={<ProposalTypes />} />
            <HomepageSegmentLight contents={ContentTexts.homepage.sponsor} headerImage={icSponsor} topDivider={true}/>
            <HomepageSegmentDark contents={ContentTexts.homepage.speaker} headerImage={icSpeaker} elements= {<SpeakersList />} />
            <HomepageSegmentLight contents={ContentTexts.homepage.schedule} headerImage={icProgramSchedule} elements={<ScheduleTab />}  topDivider={true} />
            <HomepageSegmentDark contents={ContentTexts.homepage.news} headerImage={icNews} />
            <HomepageSegmentLight contents={ContentTexts.homepage.venue} elements={<VenueMap />}  topDivider={true} />


        </div>
    );
};
