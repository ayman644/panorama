import scrape
import contradiction
import search
import summaries

from revChatGPT.V3 import Chatbot
chat =Chatbot("sk-proj-0ZOlZD009QUlSG6oKG5XT3BlbkFJFxTfKXrtGP1d36gJ9iQ0")

def runmain(url):
    text = scrape.getSiteText(url)
    summary = summaries.summariseGPT(chat, text)
    prompts_contradiction = contradiction.generate_contradiction(chat, summary)
    prompts_similar = contradiction.generate_similarsearch(chat, summary)

    # search_result =search.start_search(Prompts_Contradiction)
    # search.start_search(Prompts_Similar)
    
    against =[]
    support =[]
    
    for url in search.start_search(prompts_contradiction):
        a =scrape.getSiteText(url)
        against.append([url, summaries.summariseGPT(chat,a)])
        
    for url in search.start_search(prompts_similar):
        a =scrape.getSiteText(url)
        support.append([url, summaries.summariseGPT(chat,a)])
        
        
    print(against)
    print(support)
        

    



test_url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia"

runmain(test_url)

