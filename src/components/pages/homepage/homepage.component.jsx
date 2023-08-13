import React from "react";

import { HomepageBannerPanel } from "./homepage-banner.component";
import { HomepageAboutPanel } from "./homepage-about.component";
import { HomepageProposalPanel } from "./homepage-proposal.component";
import { HomepageSponsorsPanel } from "./homepage-sponsors.component";
import { HomepageVenuePanel } from "./homepage-venue.component";
import { HomepageSpeakersPanel } from "./homepage-speakers.component";
import { HomepageSchedulePanel } from "./homepage-schedule.component";

export const HomepageComponent = () => {
    return (
        <div>
            <HomepageBannerPanel />
            <HomepageAboutPanel />
            <HomepageProposalPanel />
            <HomepageSponsorsPanel />
            <HomepageSpeakersPanel />
            <HomepageSchedulePanel />
            <HomepageVenuePanel />
        </div>
    );
};
