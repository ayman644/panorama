# input website url and returns website text

import requests 
from bs4 import BeautifulSoup
from urllib.parse import urljoin

import eventlet
eventlet.monkey_patch()

url = "https://www.abc.net.au/news/2024-06-26/greg-lynn-murder-verdict-russell-hill-carol-clay-campers/103960524"
# url ="https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf"

def get_website_info(url):
    print(f'getting info for: {url}')
    
    try:   
        with eventlet.Timeout(4): 
            response = requests.get(url, verify=False)
    except eventlet.timeout.Timeout:
        return ''
        
    soup = BeautifulSoup(response.content, 'html.parser')
    
    icon =get_web_icon(soup, url)
    site_text =get_website_text(soup, url)
    
    print('')
    
    return icon, site_text
    
def get_web_icon(soup, url):
    try:
        # response = requests.get(url)
        # soup = BeautifulSoup(response.text, 'html.parser')
        favicon_tag = soup.find('link', rel='icon') or soup.find('link', rel='shortcut icon')
        if favicon_tag:
            favicon_url = favicon_tag.get('href')
            if favicon_url and not favicon_url.startswith('http'):
                favicon_url = urljoin(url, favicon_url)
            print(f'webicons: {favicon_url}')
            return favicon_url
    except requests.exceptions.RequestException as e:
        print(f"error getting {url}: {e}")
        return 'https://cdn-icons-png.flaticon.com/512/4778/4778498.png'


def get_website_text(soup, url):
    # try:    
    #     response = requests.get(url, timeout=5) # 10 seconds
    # except requests.exceptions.Timeout:
    #     return ''
        
    # soup = BeautifulSoup(response.content, 'html.parser')

    site_content =''

    paragraphs = soup.find_all('p')
    for paragraph in paragraphs:
        paragraph =paragraph.get_text()
        site_content +=paragraph
    
    print(f'site text trimmed: {site_content[:500]}')
    return site_content

# print(get_website_info(url))