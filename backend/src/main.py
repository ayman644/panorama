import scrape
import contradiction
import search
import summaries

import time
start =time.time()

from revChatGPT.V3 import Chatbot
chat =Chatbot("sk-proj-0ZOlZD009QUlSG6oKG5XT3BlbkFJFxTfKXrtGP1d36gJ9iQ0")

def process_urls(urls, collection):
    for url in urls:
        # print(category)
        icon, site_text =scrape.get_website_info(url)
        summary =summaries.summarise_gpt(chat, site_text)
        
        if site_text:
            collection.append({'url': url, 'summary': summary, 'website_icon':icon})
        else:
            collection.append({'url': url, 'summary': 'error getting website content', 'website_icon':icon})
            continue
    
def runmain(url):
    # print('1')
    icon, site_text =scrape.get_website_info(url)
    
    if site_text =='':
        print('error accessing website')
        return 'an error with getting website content' # HANDLE ERROR PROPERLY
    # print('2')
    summary = summaries.summarise_gpt(chat, site_text)
    # print('3')
    prompts_contradiction = contradiction.generate_contradiction(chat, summary)
    print(prompts_contradiction)
    # print('4')
    prompts_similar = contradiction.generate_similar(chat, summary)
    print(prompts_similar)
    # print('5')

    # search_result =search.start_search(Prompts_Contradiction)
    # search.start_search(Prompts_Similar)
    
    con =[]
    sim =[]

    process_urls(search.start_search(prompts_contradiction), con)

    process_urls(search.start_search(prompts_similar), sim)
    
    # print(support)
        
        
    data =[sim, con] 
    data =[{'website_name':None, 'page_name':None, 'website_icon':icon}, data]
    print(data)   
    # print(against)
    # print(support)
        

test_url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia"

runmain(test_url)

print(f'script took {round(time.time()-start,2)} seconds to complete')