SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set "hp"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
