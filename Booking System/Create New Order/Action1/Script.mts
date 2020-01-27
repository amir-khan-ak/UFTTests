SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("Agent")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click

wait 2
Parameter("Logged_In") = True 
If WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Exist(2) then 
	Parameter("Logged_In") = False 'Sets output of logged_in parameter to FALSE
End If
