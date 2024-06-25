import requests 
from bs4 import BeautifulSoup
url = "https://www.theguardian.com/media/article/2024/jun/25/julian-assange-plea-deal-with-us-free-to-return-australia" 
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')

text = soup.get_text()

print(text)

paragraphs = soup.find_all('p')
for paragraph in paragraphs:
    print(paragraph.get_text())