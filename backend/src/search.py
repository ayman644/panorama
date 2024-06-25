from googleapiclient.discovery import build

# Google API credentials
google_api_key = 'AIzaSyAj_KPDDhfTydUOiZcoZIYlU2X9MuzeuK0'
cse_id = '5565b488c07a94b4b'

def read_summary():
    with open("summary_text.txt", 'r') as file:
        summary = file.read().strip()
    return summary

def google_search(query, api_key, cse_id):
    service = build("customsearch", "v1", developerKey=api_key)
    res = service.cse().list(q=query, cx=cse_id).execute()
    return res['items']

def main():
    summary = read_summary()
    related_urls = google_search(summary, google_api_key, cse_id)
    related_urls = [item['link'] for item in related_urls[:3]]

    result = {
        'summary': summary,
        'related_urls': related_urls,
    }

    print(result)

if __name__ == '__main__':
    main()
