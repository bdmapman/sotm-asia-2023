import React from "react";
import { DetailsSegment } from "./DetailsSegment/DetailsSegment.components";
import { TitleSegment } from "./TitleSegment/TitleSegment.component";

export const ChildMasterPage = props => {
    const contents = props.contents
    return (
        <div>
            <TitleSegment titleContents={contents} />
            <DetailsSegment detailsContent={contents} />
        </div>
    )
}