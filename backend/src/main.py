import scrape
import contradiction
import search
import summaries

import time
start =time.time()

from revChatGPT.V3 import Chatbot
chat =Chatbot("sk-proj-0ZOlZD009QUlSG6oKG5XT3BlbkFJFxTfKXrtGP1d36gJ9iQ0")

def process_urls(urls, category, collection):
    for url in urls:
        # print(category)
        a = scrape.getSiteText(url)
        if a == '':
            collection.append({'url': url, 'summary': 'error getting website content'})
            continue
        print(f'\n\n{url}\n{a[:500]}\n\n')
        collection.append({'url': url, 'summary': summaries.summariseGPT(chat, a)})

def runmain(url):
    # print('1')
    text = scrape.getSiteText(url)
    if text =='':
        print('error accessing website')
        return 'an error with getting website content'
        # NEEDS A RETURN
    # print('2')
    summary = summaries.summariseGPT(chat, text)
    # print('3')
    prompts_contradiction = contradiction.generate_contradiction(chat, summary)
    print(prompts_contradiction)
    # print('4')
    prompts_similar = contradiction.generate_similarsearch(chat, summary)
    print(prompts_similar)
    # print('5')

    # search_result =search.start_search(Prompts_Contradiction)
    # search.start_search(Prompts_Similar)
    
    against =[]
    support =[]

    process_urls(search.start_search(prompts_contradiction), 'con', against)

    process_urls(search.start_search(prompts_similar), 'sim', support)

        # print(support)
        
        
    data =[support, against] 
    print(data)   
    # print(against)
    # print(support)
        

    



test_url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia"

runmain(test_url)

print(f'\n\ntook {time.time()-start} seconds to complete')