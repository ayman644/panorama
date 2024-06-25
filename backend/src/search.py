from googleapiclient.discovery import build

# Google API credentials
google_api_key = 'AIzaSyAj_KPDDhfTydUOiZcoZIYlU2X9MuzeuK0'
cse_id = '5565b488c07a94b4b'

summary = "Julian Assange is expected to plead guilty to violating US espionage law in a hearing in Saipan and is set to return to Australia, according to court documents. Assange has been released from a British prison and is likely to be credited for the five years he has already served, facing no new jail time. The plea deal follows Assange's indictment during the Trump administration over WikiLeaks' release of classified US documents. The agreement has sparked relief over Assange's potential release but also raised concerns about its impact on investigative and national security journalism."

#def read_summary():
    #with open("summary_text.txt", 'r') as file:
        #summary = file.read().strip()
    #return summary

def google_search(query, api_key, cse_id):
    service = build("customsearch", "v1", developerKey=api_key)
    res = service.cse().list(q=query, cx=cse_id).execute()
    return res['items']

def start_search(summary):
    #summary = read_summary()
    related_urls = google_search(summary, google_api_key, cse_id)
    related_urls = [item['link'] for item in related_urls[:3]]

    result = {
        'summary': summary,
        'related_urls': related_urls,
    }

    print(result)
    return result

if __name__ == '__main__':
   start_search(summary)
