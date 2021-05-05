SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample Ap").WpfEdit("agentName").Set "John"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfEdit("password").Set "HP"
WpfWindow("Micro Focus MyFlight Sample Ap").WpfButton("OK").Click
