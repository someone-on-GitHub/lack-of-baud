var ids = []
for(let i = 1; i < 16; i++) {
// post request
var htmlContent = await fetch("https://headwaters.myschoolapp.com/podium/default.aspx?t=244", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "requestverificationtoken": "sTTErqWHn4Gk8HyDOx_vrxcASJR7_HztkDcbg6710IbFMaEKnt8vRrRu6BSxnMQOX3C6bJrJG2xRDyxMWQIXm0BWAedKlkbY6B_yr-VNDck1 2414edcc-b629-4d1d-9221-ec7905edd7dd",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://headwaters.myschoolapp.com/podium/default.aspx?t=244",
  "referrerPolicy": "strict-origin-when-cross-origin",
  //at the end of the body you can change pg number
  "body": "__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=n8XSt%2FaGlgBr%2BzSxWfNo5t2HvL7qoM5w2PxdHKJil6mMH7Brd%2B4PHaCxEfIslhCSaT101j4kuilZwjIyPChh2WD%2F02%2BTOFbPbdcmV5y5RV9wEO2VzzQ4M%2FJ8WA9jiausdtZamm96vr3F73VcN1Xl85YRHiwaV3fgRIaPc6kT0PKdF6YjCThfYxcuFjCV6jRXuT%2BcdArotZsK9tJsA3V358i%2FehkWY9Ox7%2BDN5ArVTxizlm2M4%2F%2FU9hgoe0WEOtZ8y%2Bo6%2FKFlehVpJirBCgInbSItNzcJqpF%2FMbjzzLkwR4MCw0w1k3nrGqnJVBrsfeUkR%2BqNca%2B%2F9jJl48uFseZvUM50XzcTkCfFImudtPvjat3XGIOzvJKm%2BzQfXZA0wt3CBKYFlSe6jlBhRCourMBIfpWg0as%2BdLiFslVLqoojf00Rb2FjgUq4%2FDbeHbt063JHT8WNf%2B%2Bofb9J2K0u3c8qOdA1mKjauVsEwC9InyEs09rDHR5L4Z%2BK6OUlDbfv184%2FXCW8iPiGhevAQhYYnINzSwP%2BtJeO%2BXs%2FWbQt9vmUb01ARIn8YDljdUHE8kdgfuy0&__VIEWSTATEGENERATOR=FC13F448&__VIEWSTATEENCRYPTED=&__TASKID=&__TASKNAME=&__TASKTYPEID=&__TASKARGS=&__APPPATH=&__CLEARHISTORY=&__SUBTASKID=&__SUBTASKNAME=&__PD=&__PDTIMER=20&__PDAJAXREFRESHFUNC=ShowAjaxStatus()%3BWebForm_DoCallback('L%24ctl08'%2C'refresh'%2CGetCallbackData%2Cnull%2Cnull%2Ctrue)&__PDAJAXREFRESHVS=ADyRu9TTl%2BFG9iSBF3spE5xGzejUloYAIayjqL8VQ01CQ2a6dxK71x96u0FfZWrsWkePAHggNgzo1wqtVaW7SM%2BSTyRPZBH6kdfb20lwGG9Yk4xBo7HqbRUg568j5Yo2XkZWgGqTg2RSd%2FqyQH4oN7GRRIISfKLxS2mon6wT5dHd76mEbr5CpML9GAPzk3jrkXfI0zT%2FDpOr3%2FTD4F79RXQsKrF6Ra7qPjxAJNReMJAjqsOIwMz3X%2BmuCdoeNCZT40INIfPVNq%2FnDL2L06LuGcZ5KeHJsT8uE4iq6%2BMpnV%2FA%2FiJ8hxRKlyZhhcnej1mIoLgBNgiUzBqhgysjwkL7Il%2FTzaEkNpqqizhzcb5HLn7jaq%2BcQYmN472dSklgmpUHMVnJ0sjryTIUmwLNPKoGPkW%2BNCQ7BdIMDflv0Vyh9SlrZIlf0q7euGZawMZoiPTgGFRQBjdYcKSvDqUSSF8EavpbfZIhMnMkomGN6C%2FX2FIqoQC7EsjeCHOWahC9VOCBmFcW5VV8pUJl2nR7WTVFmauhkAk2OcBYs09S9kcqQlLHt6WjOE2qYCBHCha0z9IawNQBupQfHr96QnL7b60%2BLXoCdFX00L%2FTfLtLoYClZLHY9rIL%2BQYdiieclTTKx3hmgt1FG5p4AtOnCvd4v4khLX%2Fkqti68qVXhLYYZCukXuc%2FRka4dOB%2F93qbO8o%2Fhvr%2BScbM708t3ixUqXmi%2B731W7O1XM3ls6OQXJs1wo0nLfwjwIufHe%2FhapNqivvYO6os0LEShRzOAwhHjizlP2%2FLM9HNXdWM%2B%2Fxb672H3W2uuJuLljwHafDLj9jgzbThYsd6IfjNA6efpvcEkQL%2B4n63BfTFZgbdW8rV5teBR5kNMqe42I0bLAZCQ2MBg7aosjOqpq1ucBjaqTOl5AFmdbw%2FAyFcfupT%2F6fKGjztiVHjaGJ18qvCvJ8AmwCyt3z5mguIR3jOPvkLuYk%3D&__pdVIEWSTATE=ADyRu9TTl%2BFG9iSBF3spE5xGzejUloYAIayjqL8VQ01CQ2a6dxK71x96u0FfZWrsWkePAHggNgzo1wqtVaW7SM%2BSTyRPZBH6kdfb20lwGG9Yk4xBo7HqbRUg568j5Yo2XkZWgGqTg2RSd%2FqyQH4oN7GRRIISfKLxS2mon6wT5dHd76mEbr5CpML9GAPzk3jrkXfI0zT%2FDpOr3%2FTD4F79RXQsKrF6Ra7qPjxAJNReMJAjqsOIwMz3X%2BmuCdoeNCZT40INIfPVNq%2FnDL2L06LuGcZ5KeHJsT8uE4iq6%2BMpnV%2FA%2FiJ8hxRKlyZhhcnej1mIoLgBNgiUzBqhgysjwkL7Il%2FTzaEkNpqqizhzcb5HLn7jaq%2BcQYmN472dSklgmpUHMVnJ0sjryTIUmwLNPKoGPkW%2BNCQ7BdIMDflv0Vyh9SlrZIlf0q7euGZawMZoiPTgGFRQBjdYcKSvDqUSSF8EavpbfZIhMnMkomGN6C%2FX2FIqoQC7EsjeCHOWahC9VOCBmFcW5VV8pUJl2nR7WTVFmauhkAk2OcBYs09S9kcqQlLHt6WjOE2qYCBHCha0z9IawNQBupQfHr96QnL7b60%2BLXoCdFX00L%2FTfLtLoYClZLHY9rIL%2BQYdiieclTTKx3hmgt1FG5p4AtOnCvd4v4khLX%2Fkqti68qVXhLYYZCukXuc%2FRka4dOB%2F93qbO8o%2Fhvr%2BScbM708t3ixUqXmi%2B731W7O1XM3ls6OQXJs1wo0nLfwjwIufHe%2FhapNqivvYO6os0LEShRzOAwhHjizlP2%2FLM9HNXdWM%2B%2Fxb672H3W2uuJuLljwHafDLj9jgzbThYsd6IfjNA6efpvcEkQL%2B4n63BfTFZgbdW8rV5teBR5kNMqe42I0bLAZCQ2MBg7aosjOqpq1ucBjaqTOl5AFmdbw%2FAyFcfupT%2F6fKGjztiVHjaGJ18qvCvJ8AmwCyt3z5mguIR3jOPvkLuYk%3D&=&=&L_ctl08sydd=2023%20-%202024%2C0&L_ctl08gtdd=1&L_ctl08st=&__RequestVerificationToken=sTTErqWHn4Gk8HyDOx_vrxcASJR7_HztkDcbg6710IbFMaEKnt8vRrRu6BSxnMQOX3C6bJrJG2xRDyxMWQIXm0BWAedKlkbY6B_yr-VNDck1%202414edcc-b629-4d1d-9221-ec7905edd7dd&__CALLBACKID=L%24ctl08&__CALLBACKPARAM=pg_" + i,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
htmlContent = await htmlContent.text()
// make it be able to query
const tempDiv = document.createElement('div');
tempDiv.innerHTML = htmlContent;
// query
const links = tempDiv.querySelectorAll('.link');
// Loop through the selected elements
links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes("~cs=1~glt=0~cuid=0~cid=-1")) {
        const match = href.match(/pk=(\d+)/);
        if (match) {
            const pk = match[1];
            ids.push(pk);
        }
    }
});
}
console.log(ids)
