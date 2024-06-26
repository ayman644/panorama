# input website url and returns website text

import requests 
from bs4 import BeautifulSoup

def getSiteText(url):
    # url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia" 
    try:    
        response = requests.get(url, timeout=5) # 10 seconds
    except requests.exceptions.Timeout:
        return ''
        
    soup = BeautifulSoup(response.content, 'html.parser')

    text = soup.get_text()

    # print(text)

    siteContent =''

    paragraphs = soup.find_all('p')
    for paragraph in paragraphs:
        paragraph =paragraph.get_text()
        siteContent +=paragraph
    return siteContent