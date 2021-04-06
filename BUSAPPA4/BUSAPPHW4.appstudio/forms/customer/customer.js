let query = ""
let req = {}
let results = []
let netID = "dap58338"
let pw = "032900Antonio4581."

employeeNameLabel.onshow = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`) 
        if (results.length == 0)
            lblMessage.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomers.value = message
        } 

    } else 
        lblMessage.value = "Error code: " + req.status
}


var employeeName = int(input())
var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", 
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

employeeDropDown.onclick=function(){
  let state = employeeDropDown.selection
        query = `Select name FROM customer WHERE state = '${state}'`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (typeof(s) == "object") {
            return
        } else {
            if (req.status == 200) {
                results2 = JSON.parse(req.responseText)
                if (results2.length == 0)
                    lblCustomers.value = "There are no customers in the database."
                else {
                    let message = ""
                    for (i = 0; i < results2.length; i++)
                        message = message + results2[i][0] + "\n"
                    txtCustomer.value = `The customer(s) in ${state} are: \n` + message
              } }else    
          lblMessage.value = "Error code: " + req.status
}
}
  
  }
  
  