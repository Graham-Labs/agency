import React from "react";
import { AnnotationIcon, PaperAirplaneIcon } from "@heroicons/react/solid";


function DynamicIconTag({ currentTag }) {
    const DynamicTag = `${currentTag}`;

	return <DynamicTag className="h-5 w-5" />;
}

export default DynamicIconTag;
