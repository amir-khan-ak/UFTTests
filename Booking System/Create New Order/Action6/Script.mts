WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select Parameter("FlyFrom")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select Parameter("FlyTo")
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate Parameter("Date")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select Parameter("Class")
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select Parameter("NumOfTickets")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
