import requests
import re
from bs4 import BeautifulSoup
from urllib.parse import urlparse


def GetsTitle(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")

    # Get article title name
    articile_title = soup.title.string if soup.title else "No title found"

    print("Article", articile_title)

"""
Input: URl
Output: website name (string)

aims to get website name from HTML tags, if does not work parses domain.
"""

def Extract_Website_Name(url):
    # Parse the URL to get the domain name
    parsed_url = urlparse(url)
    domain = parsed_url.netloc

    # Fetch the website content with error handling
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching URL: {e}")
        # Use regex to find the domain part of the URL
        match = re.search(r'https?://(www\.)?([^/]+)', url)
        if match:
            domain = match.group(2)
            parts = domain.split('.')
            if len(parts) > 2:
                if parts[0] in ['www', 'docs', 'support', 'blog', 'store']:
                    parts.pop(0)
                if len(parts) > 2:
                    return parts[-3]
            return parts[-2]
        return None

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Try to extract the website name from meta tags
    meta_tags = soup.find_all('meta')
    website_name = None

    for meta in meta_tags:
        if 'property' in meta.attrs and meta.attrs['property'].lower() == 'og:site_name':
            website_name = meta.attrs['content']
            break
        elif 'name' in meta.attrs and meta.attrs['name'].lower() == 'application-name':
            website_name = meta.attrs['content']
            break

    # Check if the extracted name contains the page title or use domain simplification
    if not website_name or (soup.title and website_name in soup.title.string):
        # Use regex to find the domain part of the URL
        match = re.search(r'https?://(www\.)?([^/]+)', url)
        if match:
            domain = match.group(2)
            # Split the domain to extract the website name
            parts = domain.split('.')
            # If the domain has more than two parts, handle subdomains and country-specific TLDs
            if len(parts) > 2:
                # Remove common subdomains
                if parts[0] in ['www', 'docs', 'support', 'blog', 'store']:
                    parts.pop(0)
                # Consider only the second-level domain (SLD) if it is a common country TLD or subdomain structure
                if len(parts) > 2:
                    website_name = parts[-3]
            # Otherwise, return the second-to-last part as the main domain
            else:
                website_name = parts[-2]

    return website_name

# Example usage
urls = [
    "https://7news.com.au/news/how-the-missing-campers-case-that-captivated-australia-unfolded-as-greg-lynn-trial-wraps-up-c-15047710",
    "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
    "https://stackoverflow.com/questions/69715704/how-to-extract-a-particular-purpose-and-name-using-beautifulsoup",
    "https://www.geeksforgeeks.org/formatted-string-literals-f-strings-python/",
    "https://news.bbc.co.uk/",
]

for url in urls:
    print(Extract_Website_Name(url))
