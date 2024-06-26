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
        
        if not site_text:
            summary ='error with website'
        collection.append({'article_name': None, 'website_name':None, 'summary': summary, 'url': url, 'website_icon':icon})
    
def runmain(orig_url):
    # print('1')
    orig_icon, orig_site_text =scrape.get_website_info(orig_url)
    
    if orig_site_text =='':
        print('error accessing website')
        return 'an error with getting website content' # HANDLE ERROR PROPERLY
    # print('2')
    orig_summary = summaries.summarise_gpt(chat, orig_site_text)
    # print('3')
    prompt_contradiction = contradiction.generate_contradiction(chat, orig_summary)
    print(prompt_contradiction)
    # print('4')
    prompt_similar = contradiction.generate_similar(chat, orig_summary)
    print(prompt_similar)
    # print('5')

    # search_result =search.start_search(Prompts_Contradiction)
    # search.start_search(Prompts_Similar)
    
    con =[]
    sim =[]

    process_urls(search.start_search(prompt_contradiction), con)

    process_urls(search.start_search(prompt_similar), sim)
    
    # print(support)
        
    data =[sim, con] 
    
    orig_website_info ={"article_name":None, "website_name":None, "summary": orig_summary, 'url': orig_url, 'website_icon':orig_icon}

    data ={'original_article':orig_website_info,
           "similar":sim,
           'contradiction': con}
    print(data)   
    # print(against)
    # print(support)
        

test_url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia"

runmain(test_url)

print(f'script took {round(time.time()-start,2)} seconds to complete')