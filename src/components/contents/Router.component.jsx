import React from "react";
import { Routes, Route, } from 'react-router-dom'
import { ChildMasterPage } from "../pages/ChildPages/ChildMasterPage.component";
import { HomepageComponent } from "../pages/Homepage/homepage.component";
import { ContentTexts } from './content_texts'

export const ContentComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomepageComponent />} ></Route>
                <Route path="/sotm-asia-2023" element={<HomepageComponent />} ></Route>
                {/* <Route path="/about" element={<ChildMasterPage />} ></Route> */}
                <Route path="/about/sotm-asia" element={<ChildMasterPage contents={ContentTexts.about.sotmAsia} />} ></Route>
                <Route path="/about/sotm-asia-history" element={<ChildMasterPage contents={ContentTexts.about.sotmAsiaHistory} />} ></Route>
                <Route path="/about/code-of-conduct" element={<ChildMasterPage contents={ContentTexts.about.codeOfConduct} />} ></Route>
                <Route path="/about/committee" element={<ChildMasterPage contents={ContentTexts.about.committee} />} ></Route>

                <Route path="/proposals/call-for-proposals" element={<ChildMasterPage contents={ContentTexts.proposals.callProposal} />} ></Route>
                <Route path="/proposals/submit-proposal" element={<ChildMasterPage contents={ContentTexts.proposals.submitProposal} />} ></Route>
                
                <Route path="/attending/registration" element={<ChildMasterPage contents={ContentTexts.attending.registration} />} ></Route>
                <Route path="/attending/travel-grant" element={<ChildMasterPage contents={ContentTexts.attending.travelGrant} />} ></Route>
                <Route path="/attending/studentship-grant" element={<ChildMasterPage contents={ContentTexts.attending.studentshipGrant} />} ></Route>
                <Route path="/attending/accomodation" element={<ChildMasterPage contents={ContentTexts.attending.accomodation} />} ></Route>
                <Route path="/attending/attending-guidelines" element={<ChildMasterPage contents={ContentTexts.attending.attendingGuidelines} />} ></Route>
                <Route path="/attending/visa-info" element={<ChildMasterPage contents={ContentTexts.attending.visaInfo} />} ></Route>
                <Route path="/attending/getting-to-bangkok" element={<ChildMasterPage contents={ContentTexts.attending.gettingBangkok} />} ></Route>
                <Route path="/attending/venue" element={<ChildMasterPage contents={ContentTexts.attending.venue} />} ></Route>

                <Route path="/schedule/keynote" element={<ChildMasterPage contents={ContentTexts.schedule.keynote} />} ></Route>
                <Route path="/schedule/program-schedule" element={<ChildMasterPage contents={ContentTexts.schedule.programSchedule} />} ></Route>
                <Route path="/schedule/social-events" element={<ChildMasterPage contents={ContentTexts.schedule.socialEvents} />} ></Route>
               
                <Route path="/sponsors/call-for-sponsors" element={<ChildMasterPage contents={ContentTexts.sponsors.callSponsors} />} ></Route>
                <Route path="/sponsors/sponsors-and-partners" element={<ChildMasterPage contents={ContentTexts.sponsors.sponsorsPartners} />} ></Route>
                
                <Route path="/news/conference-news" element={<ChildMasterPage contents={ContentTexts.news.confNews} />} ></Route>
                <Route path="/news/announcement" element={<ChildMasterPage contents={ContentTexts.news.confAnnounement} />} ></Route>
                <Route path="/news/faqs" element={<ChildMasterPage contents={ContentTexts.news.faqs} />} ></Route>
            </Routes>
        </div>
    );
};