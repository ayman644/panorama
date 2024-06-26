# input website url and returns website text

import requests 
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://www.abc.net.au/news/2024-06-26/greg-lynn-murder-verdict-russell-hill-carol-clay-campers/103960524"

def get_web_icon(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        favicon_tag = soup.find('link', rel='icon') or soup.find('link', rel='shortcut icon')
        if favicon_tag:
            favicon_url = favicon_tag.get('href')
            if favicon_url and not favicon_url.startswith('http'):
                favicon_url = urljoin(url, favicon_url)
            return favicon_url
    except requests.exceptions.RequestException as e:
        print(f"error getting {url}: {e}")
    return None


def get_site_text(url):
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

print(get_web_icon(url))