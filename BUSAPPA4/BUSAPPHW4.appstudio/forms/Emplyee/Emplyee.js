let query = ""
let req = {}
let results = []
let netID = "dap58338"
let pw = "032900Antonio4581."

customerSelect.onshow = function() {
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

var employees = "`customer`"

Buttonpopulate.onclick=function(){
    Buttonsubmit.clear()
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`)
        if (results.length === 0)
            lblDeleteMessage.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i] + "\n"
                txtaCustomer.value = message
        }
    } else
        lblDeleteMessage.value = "Error code: " + req.status
}

Buttonsubmit.onclick=function(){
  let displayEmployee = inptEmployee.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (displayEmployee == results[i]) {
            found = true
            break
        }
    }
}
  }
Button1.onclick=function(){
  location.reload()
}
