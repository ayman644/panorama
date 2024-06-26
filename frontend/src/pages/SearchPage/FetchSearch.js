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
            '"current_doc":{\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png\",\"website_name\":\"TechCrunch\",\"article_name\":\"New Tech Innovations in 2024\",\"url\":\"https://techcrunch.com/article/new-tech-innovations-2024\",\"summary\":\"An in-depth look at the latest technology innovations expected to make waves in 2024.\"},' +
            '"similar":[{"icon":"https://via.placeholder.com/50","website_name":"BBC News","article_name":"Global Economic Outlook","url":"https://bbc.com/news/global-economic-outlook","summary":"A comprehensive analysis of the global economic forecast for the coming year."},{"icon":"https://via.placeholder.com/50","website_name":"Medium","article_name":"Understanding Artificial Intelligence","url":"https://medium.com/article/understanding-artificial-intelligence","summary":"An introductory article on the basics and advancements in artificial intelligence."},{"icon":"https://via.placeholder.com/50","website_name":"Wired","article_name":"The Future of Space Exploration","url":"https://wired.com/article/future-space-exploration","summary":"Exploring the potential and challenges of future space missions and technologies."}],' +
            '"cont":[{"icon":"https://via.placeholder.com/50","website_name":"NY Times","article_name":"Climate Change and Its Impacts","url":"https://nytimes.com/article/climate-change-impacts","summary":"An article discussing the ongoing impacts of climate change and efforts to mitigate them."}]}');
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