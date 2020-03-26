WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set Parameter("Passenger")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
wait 2
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order Confirmation").Output CheckPoint("Order Confirmation")
Parameter("OrderNo") = DataTable.Value("Order_No")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
Reporter.ReportEvent micDone, "OrderNo", DataTable("Order_No", dtGlobalSheet)
