import WebSummaryCard from "../../components/WebSummaryCard";
import React from "react";
import WebInfoCard from "../../components/WebInfoCard";

export class FetchSearch {
    constructor(url) {
        this.url = url;
        this.fetchResult();
    }

    fetchResult() {
        // TODO: make API call and change string below

        this.result = JSON.parse('{' +
            '"current_doc":{\"icon\":\"https://pbs.twimg.com/profile_images/1296825168308793344/MK8N42Su_400x400.jpg\",\"website_name\":\"Whirlpool\",\"article_name\":\"Whats the main differences between ANU and UC?\",\"url\":\"https://forums.whirlpool.net.au/archive/2513359\",\"summary\":\"ANU is often highlighted for its strong research focus and international reputation, while UC is praised for practical, industry-linked courses and a more intimate campus environment. Prospective students weigh these factors based on their personal preferences and career goals.\"},' +
            '"similar":[{"icon":"https://www.reddit.com/favicon.ico","website_name":"Reddit","article_name":"ANU vs UC","url":"https://www.reddit.com/r/canberra/comments/syckkm/anu_vs_uc/","summary":"ANU is often highlighted for its strong research focus and international reputation, while UC is praised for practical, industry-linked courses and a more intimate campus environment. Prospective students weigh these factors based on their personal preferences and career goals."},{"icon":"https://www.quora.com/favicon.ico","website_name":"Quora","article_name":"What is the best University in Canberra?","url":"https://www.quora.com/What-is-the-best-University-in-Canberra","summary":"ANU is frequently highlighted for its global reputation, research output, and comprehensive programs. UC, on the other hand, is praised for its practical, industry-focused courses and supportive environment. The choice between the two often depends on the specific field of study, career goals, and personal preferences."}],' +
            '"cont":[{"icon":"https://anuobserver.org/wp-content/uploads/2017/04/cropped-fbprofile-32x32.png","website_name":"ANU Observer","article_name":"How ANU’s Health Services Stack Up Against UC","url":"https://anuobserver.org/2024/03/19/how-anus-health-services-stack-up-against-uc/","summary":"While ANU has its health services, UC offers a wider range of specialist services at subsidized rates. Interestingly, UC\'s health services are available to students from both universities, indicating a collaborative approach in providing healthcare services to the student community. This perspective suggests that UC may have an advantage in terms of healthcare offerings compared to ANU."},{"icon":"https://biology.anu.edu.au/favicon.ico","website_name":"ANU Research School of Biology","article_name":"ANU-UC agreement to open doors for health students","url":"https://biology.anu.edu.au/news-events/news/anu-uc-agreement-open-doors-health-students","summary":"The joint initiative between ANU and UC allows students to benefit from the strengths of both institutions. The program includes courses and research opportunities from both universities, providing a comprehensive and enriched educational experience. This joint degree program exemplifies the cooperative efforts between ANU and UC to leverage their respective strengths and offer students a broader range of academic and research opportunities."}]}');
    }

    getCurrentDoc() {
        if (!this.result.current_doc) {
            return null;
        }

        return this.itemToResult(0, this.result.current_doc, true);
    }

    getSimilarDocs() {
        if (!this.result.similar) {
            return null;
        }

        return this.listToResultsList(this.result.similar);
    }

    getDiffDocs() {
        if (!this.result.cont) {
            return null;
        }

        return this.listToResultsList(this.result.cont);
    }

    listToResultsList(jsonList) {
        const results = [];
        for (let i = 0; i < jsonList.length; i++) {
            const result = jsonList[i];
            results.push(this.itemToResult(i, result, false));
        }

        return results;
    }

    itemToResult(index, item, isCurrentDoc) {
        const icon = item.icon;
        const url = item.url;
        const websiteName = item.website_name;
        const pageName = item.article_name;
        const summary = item.summary;

        if (!isCurrentDoc) {
            return (<WebSummaryCard websiteIcon={icon}
                                    websiteName={websiteName}
                                    pageName={pageName}
                                    pageSummary={summary}
                                    pageUrl={url}
                                    key={index} />);
        } else {
            return (<WebInfoCard websiteIcon={icon}
                                 websiteName={websiteName}
                                 pageName={pageName}
                                 pageUrl={url}
                                 key={index} />);
        }
    }
}