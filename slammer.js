var i = 0;
var req = "q0_XSUOGAed3EUW9UcZMT2iFfXZQaxLONSL3a49HSIe9bGkEuqIfHYcakc8-qx7mGK_klPzD9RPCyJP5TaV-rKK-fPbLIgeL5TOTIpw6lkM1 b380a78b-4599-4628-9d35-aad2661730cb"
var ttsda = setInterval(function() {
i++;
if(i >= 2) {
clearInterval(ttsda)
}
fetch("https://headwaters.myschoolapp.com/api/message/conversation/?format=json", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "requestverificationtoken": req,
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "wh-version": "2024.07.15.7",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://headwaters.myschoolapp.com/app/student",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"Participants\":[{\"AssociationId\":\"12\",\"Pk\":\"6910714\",\"MembersToInclude\":\"0\",\"Name\":\"Jack Schulz '29\"}],\"Messages\":[{\"Body\":\"${Math.random() * 10000000}\",\"Status\":2,\"FromSelf\":false}],\"ReplyToAll\":false,\"Subject\":\"I have sent you ${i} messages\",\"ParticipantList\":\"Jack Schulz '29\"}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
console.log(i)
}, 500)
