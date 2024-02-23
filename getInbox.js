var inboxFetch = await fetch("https://headwaters.myschoolapp.com/api/message/inbox/?format=json&pageNumber=1&toDate=02%2F23%2F2024", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "wh-version": "2024.02.19.2",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://headwaters.myschoolapp.com/app/student",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include",
    data: {
                    pageNumber: 1,
                },
})
var inboxJson = await inboxFetch.json()
