  /**
   * Sample JavaScript code for sheets.spreadsheets.values.append
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function authenticate(data) {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": "1CW138qzgsyRyh5t1xhFj-HdsKlqCBRIjMUajgVrVBLg",
      "range": "Sheet1",
      "includeValuesInResponse": false,
      "insertDataOption": "INSERT_ROWS",
      "responseDateTimeRenderOption": "FORMATTED_STRING",
      "responseValueRenderOption": "FORMATTED_VALUE",
      "valueInputOption": "RAW",
      "resource": {
        "majorDimension": "ROWS",
        "values": [data]
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: YOUR_CLIENT_ID});
  });