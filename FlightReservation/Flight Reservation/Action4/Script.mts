WpfWindow("Micro Focus MyFlight Sample").WpfObject("1").Output CheckPoint("1") @@ hightlight id_;_2077563760_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("pricePerTicket").Output CheckPoint("pricePerTicket") @@ hightlight id_;_2077596080_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("totalPrice").Output CheckPoint("totalPrice") @@ hightlight id_;_2077583960_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Amir Khan"

WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2067477592_;_script infofile_;_ZIP::ssf5.xml_;_
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 326 completed").Output CheckPoint("Order 326 completed") @@ hightlight id_;_2077579920_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1908171136_;_script infofile_;_ZIP::ssf7.xml_;_

Reporter.ReportEvent micInfo, "Calculation processed", "Calculation processes"
pricePerTicket = DataTable("pricePerTicket", dtGlobalSheet)
priceTotal = DataTable("totalPrice", dtGlobalSheet)
numOfTickets = DataTable("numOfTickets", dtGlobalSheet)

rem print pricePerTicket + " - " + priceTotal + " - " + numOfTickets + " - " + pricePerTicket * numOfTickets

ExpectedValue = replace(pricePerTicket, "$", "") * numOfTickets
ActualValue=replace(priceTotal, "$", "") * 1

If ExpectedValue = ActualValue Then
	Reporter.ReportEvent micPass, "Ticket Berechnung OK", "Ticket Berechnung OK, zuerwartender Wert: " & ExpectedValue & ", aktueller Wert: " & ActualValue
	Else
	Reporter.ReportEvent micFail, "Ticket Berechnung nOK", "Ticket Berechnung nOK, zuerwartender Wert: " & ExpectedValue & ", aktueller Wert: " & ActualValue
	
End If

OrderMessage = DataTable("Message", dtGlobalSheet)
checkOrder = Instr(DataTable("Message", dtGlobalSheet), "Order")
checkCompleted = Instr(DataTable("Message", dtGlobalSheet), "completed")

If checkOrder <> 0 Then
	Reporter.ReportEvent micPass, "Order in Text", "Order in Text: " + OrderMessage
	Else
	Reporter.ReportEvent micFail,  "Order not in Text", "Order in Text: " + OrderMessage
	
End If

If checkCompleted <> 0 Then
	Reporter.ReportEvent micPass, "Order in Text", "Order in Text: " + OrderMessage
	Else
	Reporter.ReportEvent micFail,  "Order not in Text", "Order in Text: " + OrderMessage
End If



