var thing = await fetch("https://headwaters.myschoolapp.com/api/assignment2/UserAssignmentDetailsGetAllStudentData?assignmentIndexId=" + window.location.href.replace(/^\D+/g, '') + "&studentUserId=6910714&personaId=2", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://headwaters.myschoolapp.com/lms-assignment/assignment/assignment-student-view/33703632",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
thing = await thing.json()
window.location.href = "https://headwaters.myschoolapp.com/app/student#assignmentdetail/" + thing.AssignmentId + "/" + thing.AssignmentIndexId + "/0/X"
