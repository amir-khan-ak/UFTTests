WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Amir Khan"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order Confirmation").Check CheckPoint("Order Confirmation")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
