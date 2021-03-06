import requests
import os


url = 'https://translate.google.com/translate_tts?tl=en&q=##text##&client=tw-ob'
texts = [
    'To Be',
    'Was/Were',
    'Been',
    'To Bring',
    'Brought',
    'Brought',
    'To Buy',
    'Bought',
    'Bought',
    'To Come',
    'Came',
    'Come',
    'To Cost',
    'Cost',
    'Cost',
    'To Cut',
    'Cut',
    'Cut',
    'To Do',
    'Did',
    'Done',
    'To Drink',
    'Drank',
    'Drunk',
    'To Drive',
    'Drove',
    'Driven',
    'To Eat',
    'Ate',
    'Eaten',
    'To Find',
    'Found',
    'Found',
    'To Get',
    'Got',
    'Got/Gotten',
    'To Give',
    'Gave',
    'Given',
    'To Go',
    'Went',
    'Gone',
    'To Have',
    'Had',
    'Had',
    'To Keep',
    'kept',
    'Kept',
    'To Know',
    'Knew',
    'Known',
    'To Learn',
    'Learned/Learnt',
    'Learned/Learnt',
    'To Leave',
    'Left',
    'Left',
    'To Lend',
    'Lent',
    'Lent',
    'To Let',
    'Let',
    'Let',
    'To Make',
    'Made',
    'Made',
    'To Meet',
    'Met',
    'Met',
    'To Pay',
    'Paid',
    'Paid',
    'To Put',
    'Put',
    'Put',
    'To Read',
    'Read',
    'Read',
    'To Ride',
    'Rode',
    'Ridden',
    'To Run',
    'Ran',
    'Run',
    'To Say',
    'Said',
    'Said',
    'To See',
    'Saw',
    'Seen',
    'To Sell',
    'Sold',
    'Sold',
    'To Send',
    'Sent',
    'Sent',
    'To Sit',
    'Sat',
    'Sat',
    'To Sleep',
    'Slept',
    'Slept',
    'To Speak',
    'Spoke',
    'Spoken',
    'To Spend',
    'Spent',
    'Spent',
    'To Swin',
    'Swan',
    'Swum',
    'To Take',
    'Took',
    'Taken',
    'To Teach',
    'Taught',
    'Taught',
    'To Tell',
    'Told',
    'Told',
    'To Think',
    'Thought',
    'Thought',
    'To Understand',
    'Understood',
    'Understood',
    'To Withdraw',
    'Withdrew',
    'Withdrawn',
    'To Write',
    'Wrote',
    'Written'
]

for text in texts:
    request = requests.get(url.replace('##text##', text), allow_redirects=True)
    filename = './web/audios/{0}.mp3'.format(text.lower().replace(' ', '').replace('/', ''))

    if not os.path.exists(filename):
        print(f'{text} audio download...')
        with open(filename, 'wb') as audio:
            audio.write(request.content)
    else:
        print(f'{text} audio exist')
