import scrape
import contradiction
import search
import summaries


def runmain(url):
    text = scrape.getSiteText(url)
    summary = summaries.summariseGPT(text)
    Prompts_Contradiction = contradiction.generate_contradiction(summary)
    Prompts_Similar = contradiction.generate_similarsearch(summary)

    search.start_search(Prompts_Contradiction)
    search.start_search(Prompts_Similar)

    



test_url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia"

runmain(test_url)

