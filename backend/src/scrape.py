# input website url and returns website text

import requests 
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# import eventlet
# eventlet.monkey_patch()

url = "https://www.abc.net.au/news/2024-06-26/greg-lynn-murder-verdict-russell-hill-carol-clay-campers/103960524"
# url ="https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf"

def get_website_info(url):
    print(f'getting info for: {url}')
    
    # try:   
    #     with eventlet.Timeout(4): 
    response = requests.get(url)
    # except eventlet.timeout.Timeout:
    #     return ''
        
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

print(get_website_info(url))

# import requests
# from bs4 import BeautifulSoup
# from urllib.parse import urljoin
# import threading

# urls = [
#     "https://www.abc.net.au/news/2024-06-26/greg-lynn-murder-verdict-russell-hill-carol-clay-campers/103960524",
#     "https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf"
# ]

# def get_website_info(url):
#     print(f'Getting info for: {url}')
#     try:
#         response = requests.get(url)
#         soup = BeautifulSoup(response.content, 'html.parser')
#         icon = get_web_icon(soup, url)
#         site_text = get_website_text(soup, url)
#         print('')
#         return icon, site_text
#     except requests.exceptions.RequestException as e:
#         print(f"Error getting {url}: {e}")
#         return None, ''

# def get_web_icon(soup, url):
#     try:
#         favicon_tag = soup.find('link', rel='icon') or soup.find('link', rel='shortcut icon')
#         if favicon_tag:
#             favicon_url = favicon_tag.get('href')
#             if favicon_url and not favicon_url.startswith('http'):
#                 favicon_url = urljoin(url, favicon_url)
#             print(f'Web icon: {favicon_url}')
#             return favicon_url
#     except requests.exceptions.RequestException as e:
#         print(f"Error getting {url}: {e}")
#     return 'https://cdn-icons-png.flaticon.com/512/4778/4778498.png'

# def get_website_text(soup, url):
#     site_content = ''
#     paragraphs = soup.find_all('p')
#     for paragraph in paragraphs:
#         paragraph_text = paragraph.get_text()
#         site_content += paragraph_text
#     print(f'Site text trimmed: {site_content[:500]}')
#     return site_content

# # Function to perform threading
# def scrape_in_parallel(urls):
#     threads = []
#     results = []

#     for url in urls:
#         thread = threading.Thread(target=lambda u: results.append(get_website_info(u)), args=(url,))
#         threads.append(thread)
#         thread.start()

#     for thread in threads:
#         thread.join()

#     return results

# # Calling the function to scrape all URLs concurrently
# # results = scrape_in_parallel(urls)
# # print(results)
