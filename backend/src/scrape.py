import requests 
from bs4 import BeautifulSoup

def getSiteContent():
    url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia" 
    response = requests.get(url)

    soup = BeautifulSoup(response.content, 'html.parser')

    text = soup.get_text()

    print(text)

    siteContent =''

    paragraphs = soup.find_all('p')
    for paragraph in paragraphs:
        paraText =paragraph.get_text()
        siteContent +=paragraph
    return siteContent